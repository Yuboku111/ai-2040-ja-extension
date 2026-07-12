(() => {
  "use strict";

  const japaneseScript = globalThis.__AI2040_JA_SCRIPT__;
  if (typeof japaneseScript !== "string") {
    console.error("[AI 2040 JA] 翻訳シナリオを読み込めませんでした。");
    return;
  }

  const originalFetch = globalThis.fetch.bind(globalThis);
  globalThis.fetch = function ai2040JapaneseFetch(input, init) {
    const raw = typeof input === "string" || input instanceof URL ? String(input) : input.url;
    let url;
    try {
      url = new URL(raw, location.href);
    } catch {
      return originalFetch(input, init);
    }
    if (url.origin === location.origin && /(?:^|\/)script\.md$/.test(url.pathname)) {
      return Promise.resolve(new Response(japaneseScript, {
        status: 200,
        headers: { "Content-Type": "text/markdown; charset=utf-8" }
      }));
    }
    return originalFetch(input, init);
  };

  const translations = new Map(Object.entries({
    "You": "あなた",
    "President": "大統領",
    "Senator": "上院議員",
    "Click, tap, or press Space to continue": "クリック、タップ、または Space キーで続ける",
    "Click, tap, or press": "クリック、タップ、または",
    "to continue": "で続ける",
    "AN AI 2040 VISUAL NOVEL": "AI 2040 ビジュアルノベル",
    "Begin": "はじめから",
    "Continue": "続きから",
    "Resume": "再開",
    "Where Things Stand": "現在の状況",
    "Controls": "操作方法",
    "History": "履歴",
    "Chapters": "チャプター",
    "Chapters / Bonus": "チャプター／ボーナス",
    "Settings": "設定",
    "Credits": "クレジット",
    "Title Screen": "タイトル画面",
    "Back": "戻る",
    "Return to Title": "タイトルへ戻る",
    "WHERE THINGS STAND": "現在の状況",
    "CONTROLS": "操作方法",
    "HISTORY": "履歴",
    "CHAPTERS": "チャプター",
    "CHAPTERS / BONUS": "チャプター／ボーナス",
    "SETTINGS": "設定",
    "CREDITS": "クレジット",
    "Reading": "読み進める",
    "Going Back": "読み返す",
    "Making a Choice": "選択肢",
    "Screen & Menus": "画面とメニュー",
    "Advance the story": "物語を進める",
    "Pick an option directly": "選択肢を直接選ぶ",
    "Move the highlight between options": "選択肢間でハイライトを移動",
    "Pick the highlighted option": "ハイライト中の選択肢を決定",
    "Hide the interface to see the art (for screenshots)": "UIを隠してイラストを表示（スクリーンショット向け）",
    "Open the menu · back out of a panel": "メニューを開く／パネルから戻る",
    "Open the menu (top-right)": "メニューを開く（右上）",
    "Toggle music (top-left)": "音楽のオン／オフ（左上）",
    "Click the on-screen chapter label to jump chapters": "画面のチャプター表示からチャプターを移動",
    "Text Speed": "文字速度",
    "Slow": "遅い",
    "Normal": "標準",
    "Fast": "速い",
    "Instant": "一瞬",
    "Autoplay": "オートプレイ",
    "Off": "オフ",
    "On": "オン",
    "Autoplay Delay": "オートプレイ間隔",
    "Short": "短い",
    "Medium": "標準",
    "Long": "長い",
    "Show Chapter": "チャプター表示",
    "Full": "すべて",
    "Number": "番号のみ",
    "Music Volume": "音量",
    "Progress": "進行状況",
    "Delete all progress": "すべての進行状況を削除",
    "Click again to erase everything": "もう一度クリックするとすべて削除",
    "No dialogue yet.": "まだ会話はありません。",
    "0 · Title": "0 · タイトル",
    "BONUS PERSPECTIVES": "ボーナス視点",
    "BONUS · COMPLETE PLAN A TO UNLOCK": "ボーナス · PLAN A クリアで解放",
    "LOCKED": "未解放",
    "✓ VISITED": "✓ 閲覧済み",
    "○ UNVISITED": "○ 未閲覧",
    "Public POV": "一般市民の視点",
    "Insider POV": "内部関係者の視点",
    "Not yet seen": "未到達",
    "✓ seen": "✓ 到達済み",
    "○ unseen": "○ 未到達",
    "The Endings": "エンディング一覧",
    "You have walked every path.": "すべての道を歩みました。",
    "Verified Slowdown": "検証可能な減速",
    "Fight China": "中国との競争",
    "Burn the Lead": "優位を使い切る",
    "Race to ASI": "ASIへの競争",
    "Shut It All Down": "すべて停止",
    "Reached 2040, together.": "共に2040年へ到達。",
    "A fork with no safe road.": "安全な道のない分岐。",
    "A tiny circle decides.": "ごく少数が決定する。",
    "Handed to the fastest builder.": "最速の開発者に委ねた。",
    "A pause, not a destination.": "目的地ではなく一時停止。",
    "2029: Choose a Path": "2029年：道を選ぶ",
    "Slow down at least a bit for safety and governance?": "安全と統治のため、少なくとも少し減速する？",
    "Let’s make a deal with China. But what?": "中国と合意する。だが、どんな合意を？",
    "“Nope.”": "「いいえ」",
    "“Yes.”": "「はい」",
    "“Yes, and slow China down too.”": "「はい。中国も減速させる」",
    "(Two of many possible deals)": "（多数ある合意案のうち二つ）",
    "Status Dossier · Plan A": "状況資料 · Plan A",
    "Run Overview": "進行状況",
    "Your Plan": "選んだプラン",
    "Endings Seen": "到達エンディング",
    "Not yet chosen": "未選択",
    "Plan": "プラン",
    "Endings": "エンディング",
    "Employment": "雇用率",
    "Median Income": "所得中央値",
    "Capability": "能力",
    "AI Safety Researchers": "AI安全研究者",
    "Slowdown": "減速期間",
    "Human Labor": "人間の労働",
    "AI Agents": "AIエージェント",
    "Agent Speed": "エージェント速度",
    "Capability Tier": "能力段階",
    "Trajectory": "軌道",
    "Source scenario": "原作シナリオ",
    "Adaptation & direction": "翻案・演出",
    "Writing, engine & production": "脚本・エンジン・制作",
    "Art": "アート",
    "Music": "音楽",
    "Made with care, and a catgirl, in 2026.": "心を込めて、そして猫耳少女とともに。2026年。"
    ,"An unofficial fan adaptation of": "非公式ファン翻案：",
    "by the": "制作：",
    "A recommendation for how humanity could reach superintelligence safely.": "人類が安全に超知能へ到達するための一つの提案です。",
    "By": "制作：",
    "). Not affiliated with or endorsed by the original authors.": "）。原作者との提携や承認を示すものではありません。",
    "This is an": "本作は",
    "unofficial fan work": "非公式ファン作品です",
    ". Not affiliated with or endorsed by the original authors.": "。原作者との提携や承認を示すものではありません。",
    "All the policy ideas, the numbers, and the five-plan structure are theirs.": "政策案、数値、5つのプラン構成はすべて原作者によるものです。",
    "Built with": "制作に使用：",
    "Engine adapted from the kinetic-novel framework of": "ゲームエンジンは次のキネティックノベル用フレームワークを翻案：",
    "by Eliezer Yudkowsky.": "（Eliezer Yudkowsky作）。",
    "image models (“Nano Banana”), via": "画像モデル（「Nano Banana」）、提供：",
    ". “Dossier Red” style.": "。「Dossier Red」スタイル。",
    ", via": "、提供：",
    "Advance (or pick a choice)": "進む（または選択肢を決定）",
    "Move the highlight on a choice": "選択肢のハイライトを移動",
    "Go back to re-read (→ / ↓ or a click returns)": "戻って読み返す（→／↓またはクリックで復帰）",
    "Skip text you’ve already read; stops at new text and choices": "既読文章をスキップ。未読文章と選択肢で停止",
    "Hide the interface to see the art": "UIを隠してイラストを表示",
    "Your progress is saved automatically — “Continue” on the title screen picks up right where you left off.": "進行状況は自動保存されます。タイトル画面の「続きから」で直前の場所から再開できます。"
  }));

  const attrTranslations = new Map([
    ["Show dialogue history (H)", "会話履歴を表示（H）"],
    ["Menu (Esc)", "メニュー（Esc）"],
    ["Music on — click to mute", "音楽オン — クリックでミュート"],
    ["Music off — click to play", "音楽オフ — クリックで再生"],
    ["Music on (starts on your first click) — click here to keep it off", "音楽オン（最初のクリックで再生）— オフのままにするにはここをクリック"],
    ["Music volume", "音量"]
  ]);

  const fragmentTranslations = new Map([
    ["Not affiliated with or endorsed by the original authors.", "原作者との提携や承認を示すものではありません。"],
    ["All the policy ideas, the numbers, and the five-plan structure are theirs.", "政策案、数値、5つのプラン構成はすべて原作者によるものです。"],
    ["Engine adapted from the kinetic-novel framework of", "ゲームエンジンは次のキネティックノベル用フレームワークを翻案："],
    ["Plan A / AI 2040, by the", "Plan A / AI 2040（制作："],
    ["unofficial fan adaptation", "非公式ファン翻案"]
  ]);

  function replacePreservingWhitespace(node, translated) {
    const value = node.nodeValue;
    const leading = value.match(/^\s*/)[0];
    const trailing = value.match(/\s*$/)[0];
    node.nodeValue = leading + translated + trailing;
  }

  function translateTextNode(node) {
    const key = node.nodeValue.trim();
    let translated = translations.get(key);
    const chapter = key.match(/^Ch\. (\d+)\/(\d+)(.*)$/);
    if (!translated && chapter) translated = `第${chapter[1]}章／${chapter[2]}${chapter[3]}`;
    const paths = key.match(/^Paths seen: (\d+) of (\d+)\. Each plan plays all the way out; return and try another\.$/);
    if (!translated && paths) translated = `到達した道：${paths[1]}／${paths[2]}。各プランの結末を見届け、戻って別の道を試せます。`;
    if (!translated && node.parentElement?.closest("#title-notice")) {
      if (key === "An") translated = "本作は";
      if (key === "of") translated = "—";
    }
    if (!translated) {
      let replaced = key;
      for (const [source, target] of fragmentTranslations) replaced = replaced.replace(source, target);
      if (replaced !== key) translated = replaced;
    }
    if (translated && translated !== key) replacePreservingWhitespace(node, translated);
  }

  function translateElement(element) {
    if (!(element instanceof Element)) return;
    for (const attr of ["title", "aria-label"]) {
      const current = element.getAttribute(attr);
      const translated = attrTranslations.get(current);
      if (translated && translated !== current) element.setAttribute(attr, translated);
    }
    for (const child of element.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) translateTextNode(child);
      else if (child.nodeType === Node.ELEMENT_NODE) translateElement(child);
    }
  }

  function boot() {
    document.documentElement.lang = "ja";
    document.title = "PLAN A · AI 2040 ビジュアルノベル";
    translateElement(document.documentElement);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "characterData") translateTextNode(record.target);
        if (record.type === "attributes") translateElement(record.target);
        for (const node of record.addedNodes) {
          if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
          else translateElement(node);
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["title", "aria-label"]
    });
  }

  if (document.documentElement) boot();
  else document.addEventListener("readystatechange", boot, { once: true });
})();
