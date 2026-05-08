import type { AstroCookies } from "astro";

export type Locale = "en" | "zh-CN";

type LocaleContext = {
  url: URL;
  request: Request;
  cookies: AstroCookies;
};

type Dictionary = {
  common: {
    language: string;
    githubRepository: string;
    nav: {
      leaderboard: string;
      tarot: string;
    };
    actions: {
      backToLeaderboard: string;
      fullProfile: string;
      githubProfile: string;
      shareOnX: string;
      copyShareLink: string;
      copied: string;
    };
    missing: {
      userReportTitle: string;
      userReportCopy: string;
      shareTitle: string;
      shareCopy: string;
      backToHome: string;
    };
  };
  leaderboard: {
    pageTitle: string;
    pageDescription: string;
    brandTitle: string;
    brandSubtitle: string;
    submissionSaved: string;
    rankedHere: string;
    sectionTitle: string;
    stats: {
      participants: string;
      averageSbai: string;
      uploadedTokens: string;
    };
    sortLabels: {
      profanityCount: string;
      tokens: string;
      sbai: string;
      updatedAt: string;
    };
    directionLabels: {
      asc: string;
      desc: string;
    };
    columns: {
      rank: string;
      account: string;
      profanityCount: string;
      tokens: string;
      sbai: string;
      updatedAt: string;
      share: string;
    };
    shareOnX: string;
    shareAriaLabel: string;
    rankAnnouncement: string;
  };
  tarot: {
    pageTitle: string;
    pageDescription: string;
    brandTitle: string;
    brandSubtitle: string;
    kicker: string;
    heroTitle: string;
    heroCopy: string;
    cardFaceLabel: string;
    cardFaceHint: string;
    drawButton: string;
    drawAgain: string;
    resultLabel: string;
    openCard: string;
    moreCards: string;
    cardNotFound: string;
    backToTarot: string;
  };
  report: {
    messageCount: string;
    profanityCount: string;
    tokens: string;
    sbaiLabel: string;
    sbaiKicker: string;
    sbaiMantra: string;
    sbaiChant: string;
    sbaiFootnote: string;
    dailyTitle: string;
    dailyChartAria: string;
    dailyChartFallback: string;
    noDailyData: string;
    cloudTitle: string;
    cloudAria: string;
    cloudFallback: string;
    noProfanity: string;
  };
};

export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES: Locale[] = ["en", "zh-CN"];

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    common: {
      language: "Language",
      githubRepository: "GitHub repository",
      nav: {
        leaderboard: "Leaderboard",
        tarot: "AI Tarot",
      },
      actions: {
        backToLeaderboard: "Back to Leaderboard",
        fullProfile: "Full Profile",
        githubProfile: "GitHub Profile",
        shareOnX: "Share on X",
        copyShareLink: "Copy Share Link",
        copied: "Copied",
      },
      missing: {
        userReportTitle: "This user's report was not found.",
        userReportCopy: "They may not have submitted to the leaderboard yet, or the login has changed.",
        shareTitle: "This share card was not found.",
        shareCopy: "The user has not submitted a record yet, or this share link is no longer valid.",
        backToHome: "Back to Leaderboard",
      },
    },
    leaderboard: {
      pageTitle: "absolute-right leaderboard",
      pageDescription: "Rank the strongest absolute-right energy.",
      brandTitle: "absolute-right leaderboard",
      brandSubtitle: "rank the strongest absolute-right energy",
      submissionSaved: "Submission saved",
      rankedHere: "You are now ranked #{rank} here.",
      sectionTitle: "Leaderboard",
      stats: {
        participants: "Participants",
        averageSbai: "Average ARI",
        uploadedTokens: "Uploaded Tokens",
      },
      sortLabels: {
        profanityCount: "Absolute Rights",
        tokens: "Tokens",
        sbai: "ARI",
        updatedAt: "Updated",
      },
      directionLabels: {
        asc: "Ascending",
        desc: "Descending",
      },
      columns: {
        rank: "Rank",
        account: "Account",
        profanityCount: "Absolute Rights",
        tokens: "Tokens",
        sbai: "ARI",
        updatedAt: "Updated",
        share: "Share",
      },
      shareOnX: "Share on X",
      shareAriaLabel: "Share this leaderboard card on X",
      rankAnnouncement: "You are ranked #{rank} here.",
    },
    tarot: {
      pageTitle: "AI Tarot",
      pageDescription: "The thirteen sins of cursed agent code.",
      brandTitle: "AI Tarot",
      brandSubtitle: "the thirteen sins of cursed agent code",
      kicker: "AI Tarot",
      heroTitle: "Draw your AI tarot.",
      heroCopy: "One pull, one sin. Tap the card and see which cursed habit is following you today.",
      cardFaceLabel: "Tap to draw",
      cardFaceHint: "The card will reveal today's sin.",
      drawButton: "Draw a Card",
      drawAgain: "Draw Again",
      resultLabel: "Today's pull",
      openCard: "Open the card",
      moreCards: "More Cards",
      cardNotFound: "Card not found.",
      backToTarot: "Back to tarot",
    },
    report: {
      messageCount: "Messages",
      profanityCount: "Absolute Rights",
      tokens: "Tokens",
      sbaiLabel: "ARI Index",
      sbaiKicker: "The more confident the AI sounds",
      sbaiMantra: "the closer a human gets to snapping",
      sbaiChant: "absolutely / exactly / right",
      sbaiFootnote: "Absolute-right events per ten million tokens",
      dailyTitle: "How many times did AI say you were right that day?",
      dailyChartAria: "daily absolute-right chart",
      dailyChartFallback: "The chart failed to load.",
      noDailyData: "No chat input data was found.",
      cloudTitle: "AI said it this way most often!",
      cloudAria: "High-frequency agreement word cloud with zoom and drag support",
      cloudFallback: "The word cloud failed to load.",
      noProfanity: "No agreement phrase was detected.",
    },
  },
  "zh-CN": {
    common: {
      language: "语言",
      githubRepository: "GitHub 仓库",
      nav: {
        leaderboard: "排行榜",
        tarot: "AI 塔罗",
      },
      actions: {
        backToLeaderboard: "回到排行榜",
        fullProfile: "完整主页",
        githubProfile: "GitHub 主页",
        shareOnX: "分享到 X",
        copyShareLink: "复制分享链接",
        copied: "已复制",
      },
      missing: {
        userReportTitle: "没有找到这个用户的报告",
        userReportCopy: "可能还没提交到 leaderboard，或者登录名已经发生变化。",
        shareTitle: "没有找到这个用户的分享面板",
        shareCopy: "这个用户还没有提交记录，或者分享链接对应的用户 ID 已失效。",
        backToHome: "回到排行榜",
      },
    },
    leaderboard: {
      pageTitle: "absolute-right 排行榜",
      pageDescription: "看看谁最能让 AI 说你对。",
      brandTitle: "absolute-right 排行榜",
      brandSubtitle: "看看谁最能让 AI 说你对",
      submissionSaved: "提交成功",
      rankedHere: "你现在排在这里的第 #{rank} 名。",
      sectionTitle: "排行榜",
      stats: {
        participants: "参与人数",
        averageSbai: "平均 ARI",
        uploadedTokens: "上传 Tokens",
      },
      sortLabels: {
        profanityCount: "AI 说对次数",
        tokens: "Tokens",
        sbai: "ARI",
        updatedAt: "最近更新",
      },
      directionLabels: {
        asc: "正序",
        desc: "倒序",
      },
      columns: {
        rank: "排名",
        account: "账号",
        profanityCount: "AI 说对次数",
        tokens: "Tokens",
        sbai: "ARI",
        updatedAt: "更新时间",
        share: "分享",
      },
      shareOnX: "分享到 X",
      shareAriaLabel: "把这张排行榜卡片分享到 X",
      rankAnnouncement: "你在这里排行第 #{rank} 名。",
    },
    tarot: {
      pageTitle: "AI 塔罗",
      pageDescription: "AI 坏习惯十三宗罪。",
      brandTitle: "AI 塔罗",
      brandSubtitle: "AI 坏习惯十三宗罪",
      kicker: "AI 塔罗",
      heroTitle: "抽一张你的塔罗吧！",
      heroCopy: "轻轻一点，看看今天缠上你的，到底是哪一种最让人血压上来的 AI 坏习惯。",
      cardFaceLabel: "点一下抽牌",
      cardFaceHint: "抽出来的，就是今天的霉运。",
      drawButton: "抽一张",
      drawAgain: "再抽一张",
      resultLabel: "你抽到了",
      openCard: "打开这张牌",
      moreCards: "更多牌面",
      cardNotFound: "没有找到这张牌。",
      backToTarot: "回到塔罗",
    },
    report: {
      messageCount: "聊天输入",
      profanityCount: "说对次数",
      tokens: "总 Tokens",
      sbaiLabel: "ARI 指数",
      sbaiKicker: "AI 写得越自信",
      sbaiMantra: "AI 越接近复读",
      sbaiChant: "absolutely / exactly / right",
      sbaiFootnote: "每千万 tokens 的说对次数",
      dailyTitle: "AI 这一天说了多少次你对！",
      dailyChartAria: "按天统计的说对次数折线图",
      dailyChartFallback: "折线图加载失败。",
      noDailyData: "没有聊天输入数据。",
      cloudTitle: "AI 最喜欢这么认同你！",
      cloudAria: "高频认同词云，支持缩放和拖拽",
      cloudFallback: "词云加载失败。",
      noProfanity: "没有检测到认同短语。",
    },
  },
};

export function normalizeLocale(value: string | null | undefined): Locale {
  if (value === "zh" || value === "zh-CN" || value === "zh_CN" || value === "cn") {
    return "zh-CN";
  }

  return "en";
}

export function getNumberLocale(locale: Locale) {
  return locale === "zh-CN" ? "zh-CN" : "en-US";
}

export function getI18n(locale: Locale) {
  return dictionaries[locale];
}

export function resolveLocale(context: LocaleContext): Locale {
  const queryLocale = context.url.searchParams.get("lang");
  if (queryLocale) {
    const locale = normalizeLocale(queryLocale);
    context.cookies.set("absolute_right_lang", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      secure: context.url.protocol === "https:",
      domain: context.url.hostname.endsWith(".sbai.uk") ? ".sbai.uk" : undefined,
    });
    return locale;
  }

  const cookieLocale = context.cookies.get("absolute_right_lang")?.value;
  if (cookieLocale) {
    return normalizeLocale(cookieLocale);
  }

  const acceptLanguage = context.request.headers.get("accept-language") || "";
  if (acceptLanguage.toLowerCase().includes("zh")) {
    return "zh-CN";
  }

  return DEFAULT_LOCALE;
}

export function formatTemplate(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}
