const english = {
    skip: "Skip to content",
    navFeatures: "Features",
    navCompatibility: "Compatibility",
    navStart: "Get started",
    navDownload: "Download <span aria-hidden=\"true\">↓</span>",
    heroEyebrow: "A KEY. TWO LANGUAGES.",
    heroTitle: "Two languages.<br><span>One familiar key.</span>",
    heroDescription: "A tap of Right Option. A change of language.<br>KeyFlip is a small Mac app that switches between two input sources with a key that feels right.",
    downloadMac: "Download for Mac",
    seeApp: "Explore the app",
    releaseMeta: "v0.2.5 developer preview · Apple Silicon · macOS 13+",
    previewNote: "Not yet notarized by Apple. <a href=\"#install-note\">First-launch guidance</a>",
    demoTitle: "Switching preview",
    rightKey: "right",
    demoInstruction: "Give the key a click",
    demoDisclaimer: "A web preview. Your Mac’s input language stays unchanged.",
    valueOne: "Choose your switch key",
    valueTwo: "Keep shortcuts in the default mode",
    valueThree: "No typing logs or uploads",
    previewEyebrow: "SMALL APP. EVERYDAY DIFFERENCE.",
    previewTitle: "A few settings.<br>Then back to typing.",
    previewDescription: "Pick your two input languages and a familiar key. Close the settings window, and KeyFlip keeps working from your menu bar.",
    previewFeatureOneTitle: "See the key you just pressed",
    previewFeatureOneBody: "The test field shows your input language, last key, shortcut combination, and mapping result together.",
    previewFeatureTwoTitle: "Ready when you log in",
    previewFeatureTwoBody: "Choose whether KeyFlip starts at login and whether its icon appears in your menu bar.",
    previewFeatureThreeTitle: "Beyond Korean and English",
    previewFeatureThreeBody: "Choose any two input sources added to macOS. KeyFlip itself is available in Korean and English.",
    screenshotCaption: "Settings preview rendered from the actual KeyFlip 0.2.5 UI",
    modesEyebrow: "YOUR KEY. YOUR WAY.",
    modesTitle: "Two ways to switch.<br>One that fits your rhythm.",
    modesDescription: "A key for shortcuts, or a key just for languages?<br>Choose the role that makes sense for your typing.",
    defaultTag: "Default mode",
    dedicatedTag: "Dedicated key mode",
    modeOneTitle: "Switch on a solo press and release",
    modeOneBody: "Tap the key on its own to switch languages. Use it with another key to keep its modifier action. A good fit when you want your familiar shortcuts, too.",
    modeOneCaption: "Solo tap → switch language · Combination → original shortcut",
    modeTwoTitle: "Switch as soon as you press",
    modeTwoBody: "If you start your next character before releasing the switch key, give that key a dedicated role. In this mode, the assigned key no longer acts as a shortcut modifier.",
    modeTwoCaption: "Key press → switch language · Reserved for switching",
    mappingEyebrow: "MAKE ROOM FOR YOUR KEYBOARD",
    mappingTitle: "Different keyboard.<br>Your familiar layout.",
    mappingDescription: "Map left and right Option, Command, Control, and Shift independently. Save settings in a layout profile, then select the profile for the keyboard you use.",
    mappingNote: "Keyboard models are not detected automatically.<br>Caps Lock and Fn/Globe are excluded from custom bindings and mappings.",
    customProfile: "Custom",
    leftOption: "Left Option",
    leftCommand: "Left Command",
    mappingExample: "Example mapping · Profiles are selected manually",
    compatEyebrow: "BEYOND ONE DESKTOP",
    compatTitle: "Choose a route<br>for your setup.",
    compatDescription: "Remote Macs, virtual machines, and simulators receive keys differently. KeyFlip offers environment-specific settings and original-key passthrough options.",
    compatNote: "This is a developer preview. Actual remote connections, virtual machines, device input, and Karabiner rule combinations have not yet been verified.",
    remoteBody: "Run KeyFlip on the Mac being controlled, then register a key that reaches it as an additional switch key. Keys not forwarded by the client cannot be recovered.",
    parallelsBody: "Original keys pass through to the virtual machine by default. Check the Korean IME in Windows and configure Right Option to be forwarded as Right Alt.",
    simulatorBody: "Choose device keyboard switching, Mac input-source switching, or original-key passthrough. Add your languages to the device and enable hardware keyboard input.",
    karabinerBody: "KeyFlip does not claim devices or change Karabiner settings. Keep a given key’s language-switching rule in only one of the two apps.",
    startEyebrow: "READY WHEN YOU ARE",
    startTitle: "A simple setup.<br>Three steps to begin.",
    stepOneTitle: "Move the app into place",
    stepOneBody: "Unzip the downloaded file, move KeyFlip.app to your Applications folder, and open it.",
    stepTwoTitle: "Allow keyboard access",
    stepTwoBody: "Enable KeyFlip under System Settings → Privacy & Security → Accessibility.",
    stepThreeTitle: "Pick two languages and a key",
    stepThreeBody: "Choose two input sources, then press and release Right Option. Use the test field to check the key and language switch.",
    installNoteTitle: "Opening this developer preview for the first time",
    installNoteBody: "This is an ad-hoc signed development build without a Developer ID signature or Apple notarization. If macOS blocks it, verify the download source and use ‘Open Anyway’ if offered in Privacy & Security. Managed Macs may restrict launching the app.",
    appleHelp: "Apple’s launch guidance",
    faqTitle: "A few things<br>you might wonder.",
    faqOneQuestion: "Can I use Caps Lock for capital letters again?",
    faqOneAnswer: "Turn off the Caps Lock language-switching option in macOS Keyboard → Text Input → Edit. KeyFlip does not change that system setting automatically. It also offers an optional Caps Lock recognition-delay reduction setting that restores the previous values when disabled.",
    faqTwoQuestion: "Can I switch languages other than Korean and English?",
    faqTwoAnswer: "Yes. Choose any two input sources that you have added to macOS. If a language is missing from the list, add it in macOS Keyboard settings first.",
    faqThreeQuestion: "Does KeyFlip store what I type or my key history?",
    faqThreeAnswer: "KeyFlip does not save or transmit typed content or key-event history. Preferences and configured key codes stay on your Mac. The test field shows only the last key while focused and clears it when focus is lost.",
    faqFourQuestion: "How do I open settings after hiding the menu bar icon?",
    faqFourAnswer: "Open KeyFlip again from Finder or Spotlight to return to settings. Closing the settings window keeps key handling active. Automatic startup happens after a user logs into the Mac.",
    faqFiveQuestion: "Which Macs can run it?",
    faqFiveAnswer: "The current download is an Apple Silicon (arm64) build for macOS 13 or later. An Intel build is not provided. Secure Input and the login screen limit key handling.",
    closingEyebrow: "ONE LESS THING TO THINK ABOUT",
    closingTitle: "Make the switch feel familiar.",
    closingMeta: "v0.2.5 developer preview · Apple Silicon",
    footerReleases: "Releases",
    footerWebsite: "Website repository",
    footerGuide: "Install guide"
};

const labels = {
    ko: {
        menuLabel: "메뉴 열기",
        menuCloseLabel: "메뉴 닫기",
        navLabel: "주 메뉴",
        demoSwitchLabel: "미리보기의 입력 언어 전환",
        highlightsLabel: "KeyFlip 특징",
        profilesLabel: "지원 키보드 프로필",
        screenshotAlt: "KeyFlip의 한국어 설정 화면. 입력 언어, 전환키, 테스트 입력칸과 실행 옵션이 표시됩니다.",
        brandArtAlt: "KeyFlip. A key. Two languages. 원하는 키로, 한영 전환. 한글, 전환 화살표, 영문 키캡 일러스트."
    },
    en: {
        menuLabel: "Open menu",
        menuCloseLabel: "Close menu",
        navLabel: "Main navigation",
        demoSwitchLabel: "Switch the preview input language",
        highlightsLabel: "KeyFlip highlights",
        profilesLabel: "Supported keyboard profiles",
        screenshotAlt: "KeyFlip settings in Korean, showing input languages, the switch key, the test field, and startup options.",
        brandArtAlt: "KeyFlip. A key. Two languages. An illustration of Korean, switch-arrow, and English keycaps."
    }
};

const translatedElements = [...document.querySelectorAll("[data-i18n]")];
const korean = Object.fromEntries(translatedElements.map((element) => [element.dataset.i18n, element.innerHTML]));
const languageToggle = document.querySelector("#language-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const demoSwitch = document.querySelector("#demo-switch");
const demoWord = document.querySelector("#demo-word");
const demoLanguage = document.querySelector("#demo-language");
let language = "ko";
let demoIsKorean = true;
let pressTimer;

function renderDemo() {
    demoLanguage.textContent = demoIsKorean ? (language === "ko" ? "한국어" : "Korean") : "ABC";
    demoWord.innerHTML = `${demoIsKorean ? "안녕하세요" : "Hello there"}<span class="caret" aria-hidden="true"></span>`;
    demoWord.lang = demoIsKorean ? "ko" : "en";
}

function setMenu(open) {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", labels[language][open ? "menuCloseLabel" : "menuLabel"]);
    navigation.classList.toggle("is-open", open);
}

function setLanguage(nextLanguage) {
    language = nextLanguage === "en" ? "en" : "ko";
    document.documentElement.lang = language;
    const copy = language === "en" ? english : korean;
    translatedElements.forEach((element) => {
        const value = copy[element.dataset.i18n];
        if (value !== undefined) {
            element.innerHTML = value;
        }
    });
    document.querySelectorAll("[data-label]").forEach((element) => {
        element.setAttribute("aria-label", labels[language][element.dataset.label]);
    });
    document.querySelectorAll("[data-alt]").forEach((element) => {
        element.alt = labels[language][element.dataset.alt];
    });
    languageToggle.innerHTML = `${language === "ko" ? "EN" : "한국어"} <span aria-hidden="true">↗</span>`;
    languageToggle.setAttribute("aria-label", language === "ko" ? "Switch to English" : "한국어로 변경");
    document.querySelector("#apple-help").href = `https://support.apple.com/${language === "ko" ? "ko-kr" : "en-us"}/102445`;
    document.title = language === "ko" ? "KeyFlip — 원하는 키로, 한영 전환" : "KeyFlip — A key. Two languages.";
    document.querySelector('meta[name="description"]').content = language === "ko"
        ? "Mac의 한영 전환을 익숙한 키 하나로. 오른쪽 Option부터 나만의 키 매핑까지, KeyFlip으로 두 입력 언어를 전환하세요."
        : "Switch between two input languages on your Mac with a key of your choice. Meet KeyFlip: configurable switching, keyboard profiles, and a small menu bar app.";
    setMenu(false);
    renderDemo();
}

languageToggle.addEventListener("click", () => {
    const returnToMenu = menuToggle.getAttribute("aria-expanded") === "true"
        && window.getComputedStyle(menuToggle).display !== "none";
    setLanguage(language === "ko" ? "en" : "ko");
    if (returnToMenu) {
        menuToggle.focus();
    }
    const url = new URL(window.location.href);
    if (language === "en") {
        url.searchParams.set("lang", "en");
    } else {
        url.searchParams.delete("lang");
    }
    window.history.replaceState(null, "", url);
});

menuToggle.addEventListener("click", () => {
    setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuToggle.focus();
    }
});

demoSwitch.addEventListener("click", () => {
    demoIsKorean = !demoIsKorean;
    renderDemo();
    demoSwitch.classList.add("is-pressed");
    window.clearTimeout(pressTimer);
    pressTimer = window.setTimeout(() => demoSwitch.classList.remove("is-pressed"), 150);
});

setLanguage(new URLSearchParams(window.location.search).get("lang"));
