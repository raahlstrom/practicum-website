/* content/state-map-data.js — U.S. state opt-in status for the SGO program
   Data as of March 2026.
   To update: change the status field for any state.
   Status values: "opted-in" | "opted-out" | "undecided"
   Update the dataDate string below when refreshing the data.
*/

export const dataDate = "April 2026";

export const stateData = [
  // OPTED OUT (4 confirmed) — governors blocked opt-in or stated non-participation
  { code: "HI", name: "Hawaii",       status: "opted-out"  },
  { code: "NM", name: "New Mexico",   status: "opted-out"  },
  { code: "OR", name: "Oregon",       status: "opted-out"  },
  { code: "WI", name: "Wisconsin",    status: "opted-out"  },

  // OFFICIALLY OPTED IN (29 as of April 2026) — submitted IRS Form 15714 + SGO list
  // Source: Ballotpedia, State participation in the federal K-12 education tax credit program
  { code: "AL", name: "Alabama",        status: "opted-in"   },
  { code: "AK", name: "Alaska",         status: "opted-in"   },
  { code: "AR", name: "Arkansas",       status: "opted-in"   },
  { code: "CO", name: "Colorado",       status: "opted-in"   },
  { code: "FL", name: "Florida",        status: "opted-in"   },
  { code: "GA", name: "Georgia",        status: "opted-in"   },
  { code: "ID", name: "Idaho",          status: "opted-in"   },
  { code: "IN", name: "Indiana",        status: "opted-in"   },
  { code: "IA", name: "Iowa",           status: "opted-in"   },
  { code: "KS", name: "Kansas",         status: "opted-in"   },
  { code: "KY", name: "Kentucky",       status: "opted-in"   },
  { code: "LA", name: "Louisiana",      status: "opted-in"   },
  { code: "MS", name: "Mississippi",    status: "opted-in"   },
  { code: "MO", name: "Missouri",       status: "opted-in"   },
  { code: "MT", name: "Montana",        status: "opted-in"   },
  { code: "NE", name: "Nebraska",       status: "opted-in"   },
  { code: "NV", name: "Nevada",         status: "opted-in"   },
  { code: "NH", name: "New Hampshire",  status: "opted-in"   },
  { code: "ND", name: "North Dakota",   status: "opted-in"   },
  { code: "OH", name: "Ohio",           status: "opted-in"   },
  { code: "OK", name: "Oklahoma",       status: "opted-in"   },
  { code: "SC", name: "South Carolina", status: "opted-in"   },
  { code: "SD", name: "South Dakota",   status: "opted-in"   },
  { code: "TN", name: "Tennessee",      status: "opted-in"   },
  { code: "TX", name: "Texas",          status: "opted-in"   },
  { code: "UT", name: "Utah",           status: "opted-in"   },
  { code: "VA", name: "Virginia",       status: "opted-in"   },
  { code: "WV", name: "West Virginia",  status: "opted-in"   },
  { code: "WY", name: "Wyoming",        status: "opted-in"   },

  // UNDECIDED (~17) — no official action or opt-in bill vetoed without override
  { code: "AZ", name: "Arizona",        status: "undecided"  }, // SB 1106 vetoed Jan 2026
  { code: "CA", name: "California",     status: "undecided"  },
  { code: "CT", name: "Connecticut",    status: "undecided"  },
  { code: "DE", name: "Delaware",       status: "undecided"  },
  { code: "IL", name: "Illinois",       status: "undecided"  },
  { code: "ME", name: "Maine",          status: "undecided"  },
  { code: "MD", name: "Maryland",       status: "undecided"  },
  { code: "MA", name: "Massachusetts",  status: "undecided"  },
  { code: "MI", name: "Michigan",       status: "undecided"  },
  { code: "MN", name: "Minnesota",      status: "undecided"  },
  { code: "NJ", name: "New Jersey",     status: "undecided"  },
  { code: "NY", name: "New York",       status: "undecided"  },
  { code: "NC", name: "North Carolina", status: "undecided"  }, // HB 87 vetoed Aug 2025
  { code: "PA", name: "Pennsylvania",   status: "undecided"  },
  { code: "RI", name: "Rhode Island",   status: "undecided"  },
  { code: "VT", name: "Vermont",        status: "undecided"  },
  { code: "WA", name: "Washington",     status: "undecided"  },
];
