/* plans.js — Single source of truth for Apex pricing plans & entitlements.
   UMD: exposes window.APEX_PLANS in the browser and module.exports in Node,
   so the marketing pricing cards, the app's access gating, and the backend
   all agree on what each plan unlocks.

   Prices are per month, in USD, billed via PayPal. Gold's extras beyond
   Silver were filled in to differentiate the tiers (Bronze/Silver were as
   supplied; Silver = Bronze + marked papers + parent dashboard; Gold adds
   personal tutoring, priority marking and downloadable packs). */
(function (root, factory) {
  var plans = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = plans;
  if (typeof window !== "undefined") window.APEX_PLANS = plans;
})(this, function () {
  var CURRENCY = "USD";
  var SYMBOL = "$";
  var CADENCE = "month";

  // Free taster — keeps the "explore before you pay" promise.
  var FREE = {
    id: "free",
    name: "Taster",
    price: 0,
    tagline: "Try before you buy",
    features: [
      "Today's lesson, free every day",
      "Unit 1 of English, Maths & Science",
      "Self-checked practice questions"
    ],
    entitlements: {
      allContent: false,
      freeUnitsPerSubject: 1, // Unit 1 of each subject, plus today's lesson
      progressiveUnlock: false,
      assessments: false,
      forum: false,
      markedPapers: 0,
      parentMonitoring: false,
      tutorCheckIn: false,
      priorityMarking: false,
      revisionPacks: false,
      prioritySupport: false
    }
  };

  var TIERS = [
    {
      id: "bronze",
      name: "Bronze",
      price: 8,
      tagline: "Full course access",
      features: [
        "Full access to all course content",
        "Course sections unlock progressively",
        "End-of-topic assessments",
        "Student forum for peer learning"
      ],
      entitlements: {
        allContent: true,
        progressiveUnlock: true,
        assessments: true,
        forum: true,
        markedPapers: 0,
        parentMonitoring: false,
        tutorCheckIn: false,
        priorityMarking: false,
        revisionPacks: false,
        prioritySupport: false
      }
    },
    {
      id: "silver",
      name: "Silver",
      price: 12,
      popular: true,
      tagline: "Course + examiner marking",
      features: [
        "Everything in Bronze",
        "Two exam papers marked by official examiners",
        "Parent progress dashboard"
      ],
      entitlements: {
        allContent: true,
        progressiveUnlock: true,
        assessments: true,
        forum: true,
        markedPapers: 2,
        parentMonitoring: true,
        tutorCheckIn: false,
        priorityMarking: false,
        revisionPacks: false,
        prioritySupport: false
      }
    },
    {
      id: "gold",
      name: "Gold",
      price: 16,
      tagline: "Everything, with personal support",
      features: [
        "Everything in Silver",
        "Two exam papers marked by official examiners",
        "Priority examiner feedback (within 48 hours)",
        "Monthly 1:1 tutor check-in",
        "Downloadable revision packs",
        "Priority support"
      ],
      entitlements: {
        allContent: true,
        progressiveUnlock: true,
        assessments: true,
        forum: true,
        markedPapers: 2,
        parentMonitoring: true,
        tutorCheckIn: true,
        priorityMarking: true,
        revisionPacks: true,
        prioritySupport: true
      }
    }
  ];

  function byId(id) {
    if (id === "free") return FREE;
    for (var i = 0; i < TIERS.length; i++) if (TIERS[i].id === id) return TIERS[i];
    return null;
  }

  return {
    currency: CURRENCY,
    symbol: SYMBOL,
    cadence: CADENCE,
    free: FREE,
    tiers: TIERS,
    all: [FREE].concat(TIERS),
    byId: byId
  };
});
