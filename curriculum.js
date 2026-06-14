// curriculum.js — The Study Journal seed content (KS3).
// Plain data so non-developers can edit. Each lesson is one object with six fields:
//   week, title, summary, concept, examples[], questions[{q,a}]
// GCSE-ready: add board, tier, specRef per lesson and a markscheme per question as you author.
// The whole programme is just these three arrays.

window.CURRICULUM = {
  "ENG": [
    {
      "week": 1,
      "title": "Word classes: the building blocks",
      "summary": "Nouns, verbs, adjectives, adverbs — the four classes that build every sentence.",
      "concept": "Every word in English does a job. Nouns name things (cat, freedom, London). Verbs show action or state (run, is, believe). Adjectives describe nouns (red, ancient, brave). Adverbs describe verbs and often end in -ly (quickly, well, never). Knowing which is which lets you understand any sentence — and write better ones. The same word can change class depending on use: 'run' is a verb in 'I run home' but a noun in 'a long run'.",
      "examples": [
        "In 'The clever fox quickly escaped': fox=noun, escaped=verb, clever=adjective, quickly=adverb.",
        "In 'Beauty fades fast': beauty=noun, fades=verb, fast=adverb."
      ],
      "questions": [
        {
          "q": "Name the word class of 'silently' in 'She walked silently'.",
          "a": "adverb"
        },
        {
          "q": "Name the word class of 'happiness'.",
          "a": "noun"
        },
        {
          "q": "Name the word class of 'enormous'.",
          "a": "adjective"
        },
        {
          "q": "In 'Birds sing sweetly', what is 'sing'?",
          "a": "verb"
        },
        {
          "q": "Name the word class of 'never'.",
          "a": "adverb"
        }
      ]
    },
    {
      "week": 2,
      "title": "Sentence types: simple, compound, complex",
      "summary": "Three sentence shapes that control rhythm, clarity, and emphasis.",
      "concept": "A simple sentence has one main clause: 'The dog barked.' A compound sentence joins two main clauses with 'and', 'but', 'or', or 'so': 'The dog barked and the cat hid.' A complex sentence joins a main clause to a subordinate clause using words like 'because', 'although', 'when': 'The dog barked because someone knocked.' Good writing mixes all three. Too many simple sentences feel choppy; too many complex ones feel tangled.",
      "examples": [
        "Simple: 'Rain fell.' Compound: 'Rain fell and the streets shone.' Complex: 'Rain fell because the clouds had thickened.'",
        "Identify: 'Although it was late, she finished her homework.' → complex (main clause + subordinate clause beginning with 'although')."
      ],
      "questions": [
        {
          "q": "What type is 'She ran fast'?",
          "a": "simple"
        },
        {
          "q": "What type is 'He laughed but she cried'?",
          "a": "compound"
        },
        {
          "q": "What type is 'When the bell rang, we left'?",
          "a": "complex"
        },
        {
          "q": "What type is 'The sky darkened and thunder rolled'?",
          "a": "compound"
        },
        {
          "q": "What type is 'Birds sang'?",
          "a": "simple"
        }
      ]
    },
    {
      "week": 3,
      "title": "Punctuation: commas that save lives",
      "summary": "Five real comma rules — not vibes.",
      "concept": "Commas have specific jobs. 1) Lists: 'apples, pears, and figs'. 2) Before a coordinating conjunction joining two main clauses: 'I tried, but I failed.' 3) After an introductory phrase: 'After lunch, we walked.' 4) Around a non-essential clause: 'My brother, who lives in York, called.' 5) To separate adjectives of the same type: 'a cold, grey morning.' Compare: 'Let's eat, Grandma' (inviting Grandma to eat) vs 'Let's eat Grandma' (cannibalism). One comma matters.",
      "examples": [
        "Wrong: 'I bought eggs bread and milk.' Right: 'I bought eggs, bread, and milk.'",
        "Wrong: 'My friend who is a doctor lives nearby.' Right (non-essential info): 'My friend, who is a doctor, lives nearby.'"
      ],
      "questions": [
        {
          "q": "How many commas should be in: 'Before bed I read a book'? (number)",
          "a": "1"
        },
        {
          "q": "True or false: A comma always goes before 'and'.",
          "a": "false"
        },
        {
          "q": "How many commas in: 'I packed shirts trousers and socks'?",
          "a": "2"
        },
        {
          "q": "Does this need a comma? 'After dinner we played cards' (yes/no)",
          "a": "yes"
        },
        {
          "q": "True or false: Commas can change a sentence's meaning.",
          "a": "true"
        }
      ]
    },
    {
      "week": 4,
      "title": "The apostrophe: possession vs contraction",
      "summary": "Two jobs only. Stop using apostrophes for plurals.",
      "concept": "Apostrophes do exactly two things. Contraction: they replace missing letters. 'do not' → 'don't', 'it is' → 'it's'. Possession: they show something belongs to someone. 'the dog's bone' (one dog), 'the dogs' bones' (many dogs). The trap: its (belonging to it) has no apostrophe — 'the cat licked its paw'. it's always means 'it is' or 'it has'. Never write 'banana's' on a market stall sign unless the banana owns something.",
      "examples": [
        "'The children's books' (the books belonging to the children — children is already plural so apostrophe before s).",
        "'It's raining' = 'It is raining'. 'The tree shed its leaves' = the leaves of the tree."
      ],
      "questions": [
        {
          "q": "Add the apostrophe: 'the boys ball' (one boy)",
          "a": "boy's"
        },
        {
          "q": "Add the apostrophe: 'cant'",
          "a": "can't"
        },
        {
          "q": "Which is correct: 'it's' or 'its' for 'belonging to it'?",
          "a": "its"
        },
        {
          "q": "Add the apostrophe: 'the womens room' (plural)",
          "a": "women's"
        },
        {
          "q": "Which is correct: 'shouldnt' or 'shouldn't'?",
          "a": "shouldn't"
        }
      ]
    },
    {
      "week": 5,
      "title": "Reading fiction: inference",
      "summary": "Reading between the lines — what the writer shows but doesn't say.",
      "concept": "Inference means working out what's true without being told directly. A writer might write: 'Sarah folded the letter slowly, her hands trembling.' You can infer she's upset, nervous, or shocked — even though the writer never used those words. Good readers ask: what does this detail suggest? Why this word and not another? Inference is tested in every English exam. Look for: body language, weather, objects, what characters don't say. Always back your inference with the word or phrase that suggested it.",
      "examples": [
        "'He glanced at the door for the third time.' → Inference: he's nervous / waiting for someone / wants to leave. Evidence: 'third time' suggests repetition.",
        "'The garden was a graveyard of brown stalks.' → Inference: it's been neglected. Evidence: 'graveyard' suggests death; 'brown stalks' suggests dead plants."
      ],
      "questions": [
        {
          "q": "'She forced a smile.' What can you infer? (one word)",
          "a": "unhappy"
        },
        {
          "q": "'He counted his coins twice.' Inference: he is... (one word)",
          "a": "worried"
        },
        {
          "q": "True/false: An inference must be supported by evidence in the text.",
          "a": "true"
        },
        {
          "q": "'The room smelled of old smoke.' Inference about someone who lived there?",
          "a": "smoker"
        },
        {
          "q": "Is inference about what is stated directly? (yes/no)",
          "a": "no"
        }
      ]
    },
    {
      "week": 6,
      "title": "Reading non-fiction: fact vs opinion",
      "summary": "Separating what's true from what someone thinks is true.",
      "concept": "A fact can be checked and proved. 'Water boils at 100°C at sea level.' An opinion is what someone believes or feels. 'Maths is the most useful subject.' Non-fiction writers mix both — and skilled readers spot which is which. Watch for opinion-flag words: 'best', 'worst', 'beautiful', 'should', 'must', 'I believe'. Watch for fact-flag features: numbers, dates, named sources, measurable claims. A piece can be persuasive precisely because it disguises opinion as fact.",
      "examples": [
        "'The Eiffel Tower is 330 metres tall.' = fact (measurable). 'The Eiffel Tower is the most beautiful building in Paris.' = opinion ('most beautiful' is subjective).",
        "'Smoking causes cancer' = fact (scientifically proven). 'Smoking should be banned everywhere' = opinion."
      ],
      "questions": [
        {
          "q": "Fact or opinion: 'London is the capital of England.'",
          "a": "fact"
        },
        {
          "q": "Fact or opinion: 'Pizza is better than pasta.'",
          "a": "opinion"
        },
        {
          "q": "Fact or opinion: 'The Earth orbits the Sun.'",
          "a": "fact"
        },
        {
          "q": "Fact or opinion: 'Everyone should learn to code.'",
          "a": "opinion"
        },
        {
          "q": "Fact or opinion: 'Mount Everest is 8,849 metres high.'",
          "a": "fact"
        }
      ]
    },
    {
      "week": 7,
      "title": "Vocabulary: tier 2 words",
      "summary": "The grown-up words that lift your writing instantly.",
      "concept": "Tier 1 words are everyday (run, big, said). Tier 2 words appear across many subjects and signal mature writing (analyse, demonstrate, significant, contrast, evidence). Tier 3 words are subject-specific (photosynthesis, isotope). Aim to use tier 2 words in your writing. Replace 'big' with 'substantial', 'said' with 'stated' or 'argued', 'show' with 'demonstrate', 'use' with 'employ'. Don't force them — but a few well-placed tier 2 words transform a paragraph.",
      "examples": [
        "Weak: 'The story shows that war is bad.' Strong: 'The story demonstrates that war has devastating consequences.'",
        "Tier 2 verbs for 'said': argued, claimed, suggested, observed, asserted, conceded."
      ],
      "questions": [
        {
          "q": "Tier 2 word for 'big' starting with 's':",
          "a": "substantial"
        },
        {
          "q": "Tier 2 word for 'show' starting with 'd':",
          "a": "demonstrate"
        },
        {
          "q": "Tier 2 word for 'important' starting with 's':",
          "a": "significant"
        },
        {
          "q": "Tier 2 word for 'use' (verb) starting with 'e':",
          "a": "employ"
        },
        {
          "q": "Tier 2 word for 'look at carefully' starting with 'a':",
          "a": "analyse"
        }
      ]
    },
    {
      "week": 8,
      "title": "Descriptive writing: show don't tell",
      "summary": "The single rule that levels up descriptive writing.",
      "concept": "Telling: 'She was angry.' Showing: 'She slammed the door so hard the picture frame jumped.' Showing puts the reader inside the moment. Use the five senses (what does it look, sound, smell, feel, taste like?), specific details (not 'a bird' but 'a magpie with a chipped beak'), and actions instead of labels. Cut adverbs like 'angrily' and let the action carry the meaning. A skilled descriptive writer never tells you a character is sad — they show you the half-drunk tea going cold.",
      "examples": [
        "Telling: 'It was cold.' Showing: 'My breath hung white in the air; the railings stung my palms.'",
        "Telling: 'He was tired.' Showing: 'His eyelids felt weighted; the screen blurred into a smear of light.'"
      ],
      "questions": [
        {
          "q": "True/false: 'Showing' uses the five senses.",
          "a": "true"
        },
        {
          "q": "Is 'She smiled' showing or telling for 'she was happy'?",
          "a": "showing"
        },
        {
          "q": "True/false: Strong description avoids generic nouns like 'thing'.",
          "a": "true"
        },
        {
          "q": "Telling: 'It was scary.' Showing uses sound, sight, or what?",
          "a": "feel"
        },
        {
          "q": "True/false: 'Angrily' is usually better than showing the anger.",
          "a": "false"
        }
      ]
    },
    {
      "week": 9,
      "title": "Narrative structure: the five-part arc",
      "summary": "Exposition, rising action, climax, falling action, resolution.",
      "concept": "Most stories follow a five-part shape. Exposition: setting, characters, normal world. Rising action: a problem appears and grows. Climax: the highest-tension moment — the decisive event. Falling action: the consequences play out. Resolution: a new normal. Short stories often compress this into a few paragraphs. The trick is making the climax actually feel like the most important moment — by making everything before it build pressure, and everything after it feel changed.",
      "examples": [
        "'Little Red Riding Hood': Exposition (girl visits gran) → Rising (meets wolf, wolf reaches gran's first) → Climax (woodsman intervenes) → Falling (wolf dead) → Resolution (girl safe).",
        "In your own writing, name the climax before you start. If you don't know it, the story will sag in the middle."
      ],
      "questions": [
        {
          "q": "Which part introduces the characters? (one word)",
          "a": "exposition"
        },
        {
          "q": "Which part is the highest tension?",
          "a": "climax"
        },
        {
          "q": "How many parts in the classic arc?",
          "a": "5"
        },
        {
          "q": "What follows the climax? (two words)",
          "a": "falling action"
        },
        {
          "q": "True/false: Resolution shows the new normal.",
          "a": "true"
        }
      ]
    },
    {
      "week": 10,
      "title": "Analytical writing: the PEEL paragraph",
      "summary": "Point, Evidence, Explain, Link — the essay's basic unit.",
      "concept": "Every analytical paragraph should follow PEEL. Point: state what you're arguing in one sentence. Evidence: a short quote or specific reference. Explain: unpack what the evidence shows and why it matters — this is the longest part. Link: connect back to the question or forward to your next point. PEEL stops you from just summarising the plot. The 'Explain' step is where real marks live — never leave a quote alone without analysis.",
      "examples": [
        "Point: Dickens presents Scrooge as cold and isolated. Evidence: 'solitary as an oyster'. Explain: the simile suggests Scrooge is closed off, hard to reach, and hiding something valuable within. Link: this isolation makes his later transformation more dramatic.",
        "A paragraph without 'Explain' is a summary, not analysis."
      ],
      "questions": [
        {
          "q": "What does the P in PEEL stand for?",
          "a": "point"
        },
        {
          "q": "Which step is usually the longest?",
          "a": "explain"
        },
        {
          "q": "True/false: A quote alone is enough analysis.",
          "a": "false"
        },
        {
          "q": "What does the L in PEEL stand for?",
          "a": "link"
        },
        {
          "q": "What does the second E stand for?",
          "a": "explain"
        }
      ]
    },
    {
      "week": 11,
      "title": "Poetry: form, rhyme, and rhythm",
      "summary": "How a poem's shape carries its meaning.",
      "concept": "Poets choose form deliberately. A sonnet has 14 lines and often argues a case. Free verse has no fixed pattern — useful for raw, modern voices. Rhyme schemes (labeled ABAB, AABB, etc.) create music and link ideas. Rhythm is the beat of stressed and unstressed syllables; iambic pentameter (10 syllables, ti-TUM ti-TUM) is Shakespeare's heartbeat. When analysing poetry, ask: why this form? A regular rhythm might suggest order or control; a broken one might suggest chaos or grief.",
      "examples": [
        "ABAB rhyme: 'I wandered lonely as a cloud (A) / That floats on high o'er vales and hills (B) / When all at once I saw a crowd (A) / A host, of golden daffodils (B).'",
        "Free verse: no rhyme or fixed meter — used by poets like Walt Whitman to mirror natural speech."
      ],
      "questions": [
        {
          "q": "How many lines in a sonnet?",
          "a": "14"
        },
        {
          "q": "Name the rhyme scheme 'cat/dog/bat/log':",
          "a": "abab"
        },
        {
          "q": "Free verse has no rhyme and no fixed... (one word)",
          "a": "rhythm"
        },
        {
          "q": "Iambic pentameter has how many syllables per line?",
          "a": "10"
        },
        {
          "q": "Name the rhyme scheme 'sun/fun/moon/spoon':",
          "a": "aabb"
        }
      ]
    },
    {
      "week": 12,
      "title": "Shakespeare: language without fear",
      "summary": "Three rules for cracking Shakespeare's English.",
      "concept": "Shakespeare's language scares people, but three patterns unlock most of it. 1) Word order is flipped: 'Came I to speak with thee' = 'I came to speak with you.' Rearrange before translating. 2) -eth and -est endings just mark verb tense: 'speaketh' = 'speaks', 'didst' = 'did'. 3) Thou/thee/thy = you/you/your (intimate forms). 'Wherefore' means 'why', not 'where'. Read aloud. Punctuation marks the natural breath. Most of Shakespeare's vocabulary is still English — it's the syntax that feels strange.",
      "examples": [
        "'Wherefore art thou Romeo?' = 'Why are you Romeo?' (Juliet is asking why he has to be a Montague, not where he is.)",
        "'Speak thou thy mind' = 'Speak your mind.'"
      ],
      "questions": [
        {
          "q": "What does 'wherefore' mean?",
          "a": "why"
        },
        {
          "q": "What does 'thou' mean?",
          "a": "you"
        },
        {
          "q": "What does 'thy' mean?",
          "a": "your"
        },
        {
          "q": "What does '-eth' on a verb mean? (one word)",
          "a": "tense"
        },
        {
          "q": "True/false: Shakespeare's word order is often inverted.",
          "a": "true"
        }
      ]
    },
    {
      "week": 13,
      "title": "Spelling: the four trickiest patterns",
      "summary": "i before e, double consonants, silent letters, plurals.",
      "concept": "i before e, except after c — when the sound is 'ee'. 'believe', 'piece', 'receive', 'ceiling'. Exceptions: 'weird', 'seize'. Double the consonant when adding -ed/-ing to a short-vowel word: run → running, hop → hopped. Silent letters: knee (silent k), wrist (silent w), lamb (silent b), island (silent s). Plurals: most words +s, words ending in -y change to -ies (baby → babies), words ending in -f often change to -ves (leaf → leaves).",
      "examples": [
        "'receive' (after c, so ei). 'believe' (no c, so ie).",
        "'stop' + ing = 'stopping' (double the p because short vowel)."
      ],
      "questions": [
        {
          "q": "Spell: 'recieve' or 'receive'?",
          "a": "receive"
        },
        {
          "q": "Plural of 'baby':",
          "a": "babies"
        },
        {
          "q": "'run' + 'ing' =",
          "a": "running"
        },
        {
          "q": "Plural of 'leaf':",
          "a": "leaves"
        },
        {
          "q": "Spell: 'beleive' or 'believe'?",
          "a": "believe"
        }
      ]
    },
    {
      "week": 14,
      "title": "Speech punctuation",
      "summary": "Quoting characters without falling into common traps.",
      "concept": "Direct speech needs four things right. 1) Open and close with speech marks (\"...\"). 2) Punctuation goes inside the speech marks: \"Stop!\" he shouted. 3) A new speaker = a new line. 4) Use a comma before the speech if the sentence introduces it: He said, \"Goodnight.\" Capitalise the first word of the speech. When the speech is broken: \"I think,\" she said, \"we should leave.\" — note the comma after 'said'.",
      "examples": [
        "Correct: \"Where are you going?\" asked Sam.",
        "Correct: She whispered, \"It's a secret.\" (comma before, full stop inside)"
      ],
      "questions": [
        {
          "q": "Does punctuation go inside or outside speech marks?",
          "a": "inside"
        },
        {
          "q": "True/false: A new speaker means a new line.",
          "a": "true"
        },
        {
          "q": "Should the first word of speech be capitalised?",
          "a": "yes"
        },
        {
          "q": "What punctuation often comes before 'he said' if speech ends mid-sentence?",
          "a": "comma"
        },
        {
          "q": "True/false: Speech marks can be single or double.",
          "a": "true"
        }
      ]
    },
    {
      "week": 15,
      "title": "Editing your own work",
      "summary": "A four-pass system that catches what your first read misses.",
      "concept": "First drafts are never finished. Use four separate passes. Pass 1 — meaning: does it actually say what I meant? Cut sentences that don't earn their place. Pass 2 — structure: are paragraphs in the right order? Does each one have one main idea? Pass 3 — sentences: mix lengths. Vary openers. Cut weak words ('very', 'really', 'a lot'). Pass 4 — surface: read aloud to catch typos, punctuation, missing words. Read the last sentence first, then the second-to-last, working backwards — it forces you to see each sentence on its own.",
      "examples": [
        "Weak: 'It was a very nice day and we had a really good time.' Edited: 'A bright morning; we laughed for hours.'",
        "Cut filler: 'I think that maybe we should perhaps go.' → 'We should go.'"
      ],
      "questions": [
        {
          "q": "How many editing passes does this lesson suggest?",
          "a": "4"
        },
        {
          "q": "Reading backwards helps you catch what? (one word)",
          "a": "typos"
        },
        {
          "q": "True/false: 'Very' and 'really' usually weaken writing.",
          "a": "true"
        },
        {
          "q": "Should each paragraph have one main idea?",
          "a": "yes"
        },
        {
          "q": "True/false: First drafts are rarely finished.",
          "a": "true"
        }
      ]
    }
  ],
  "MAT": [
    {
      "week": 1,
      "title": "Place value & decimals",
      "summary": "What each digit is actually worth — and why decimals work the same way.",
      "concept": "Every digit's value depends on its position. In 3,482: the 3 is worth 3,000; the 4 is 400; the 8 is 80; the 2 is 2. Moving right, each place is ten times smaller. Past the decimal point, this continues: tenths (0.1), hundredths (0.01), thousandths (0.001). So 6.27 = 6 ones + 2 tenths + 7 hundredths. To multiply by 10, every digit shifts one place to the left. To divide by 10, every digit shifts right. The decimal point stays still — the digits move.",
      "examples": [
        "In 25.36, the 3 is worth 3 tenths (0.3) and the 6 is worth 6 hundredths (0.06).",
        "4.7 × 10 = 47. The 4 moves from ones to tens; the 7 moves from tenths to ones."
      ],
      "questions": [
        {
          "q": "In 583, what is the value of the 8?",
          "a": "80"
        },
        {
          "q": "In 2.46, what is the value of the 6?",
          "a": "0.06"
        },
        {
          "q": "What is 0.5 × 10?",
          "a": "5"
        },
        {
          "q": "What is 32 ÷ 10?",
          "a": "3.2"
        },
        {
          "q": "In 7,294, what digit is in the hundreds place?",
          "a": "2"
        }
      ]
    },
    {
      "week": 2,
      "title": "Fractions: adding and subtracting",
      "summary": "Same denominator? Easy. Different? Find a common one.",
      "concept": "To add or subtract fractions, the denominators (bottom numbers) must match. If they do, just add or subtract the numerators: 2/7 + 3/7 = 5/7. If they don't, find a common denominator — usually by multiplying the two denominators or finding their lowest common multiple. Example: 1/3 + 1/4. Common denominator is 12. Convert: 1/3 = 4/12, 1/4 = 3/12. Add: 4/12 + 3/12 = 7/12. Always simplify the final answer if possible.",
      "examples": [
        "1/2 + 1/4: common denominator 4. 1/2 = 2/4. So 2/4 + 1/4 = 3/4.",
        "5/6 − 1/3: common denominator 6. 1/3 = 2/6. So 5/6 − 2/6 = 3/6 = 1/2."
      ],
      "questions": [
        {
          "q": "1/5 + 2/5 = ? (give as fraction)",
          "a": "3/5"
        },
        {
          "q": "1/2 + 1/3 = ? (give as fraction)",
          "a": "5/6"
        },
        {
          "q": "3/4 − 1/4 = ? (simplify)",
          "a": "1/2"
        },
        {
          "q": "2/3 + 1/6 = ? (give as fraction)",
          "a": "5/6"
        },
        {
          "q": "7/10 − 1/5 = ? (give as fraction)",
          "a": "1/2"
        }
      ]
    },
    {
      "week": 3,
      "title": "Fractions: multiplying and dividing",
      "summary": "Multiplying is straight across. Dividing needs a flip.",
      "concept": "Multiplying: just multiply numerators together and denominators together. 2/3 × 4/5 = 8/15. Simplify after if possible. Dividing: flip the second fraction (find its reciprocal), then multiply. 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6. The trick to remember: 'keep, change, flip' — keep the first, change ÷ to ×, flip the second. Multiplying fractions less than 1 actually makes the answer smaller, not bigger — that surprises people.",
      "examples": [
        "1/2 × 3/4 = 3/8 (multiply across).",
        "3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2 = 1½ (flip and multiply)."
      ],
      "questions": [
        {
          "q": "2/5 × 3/4 = ? (give as fraction)",
          "a": "6/20"
        },
        {
          "q": "1/3 × 1/2 = ? (give as fraction)",
          "a": "1/6"
        },
        {
          "q": "1/2 ÷ 1/4 = ? (whole number)",
          "a": "2"
        },
        {
          "q": "2/3 ÷ 1/3 = ? (whole number)",
          "a": "2"
        },
        {
          "q": "3/5 × 1/2 = ? (give as fraction)",
          "a": "3/10"
        }
      ]
    },
    {
      "week": 4,
      "title": "Percentages",
      "summary": "Per cent means 'per hundred'. That's the whole game.",
      "concept": "Percent means 'out of 100'. So 25% = 25/100 = 0.25 = 1/4. To find a percentage of a number, convert to a decimal and multiply: 20% of 80 = 0.20 × 80 = 16. Quick mental tricks: 10% = divide by 10; 50% = divide by 2; 25% = divide by 4; 1% = divide by 100. To find what percent one number is of another, divide and multiply by 100: 15 out of 60 = 15 ÷ 60 × 100 = 25%.",
      "examples": [
        "30% of 200 = 0.30 × 200 = 60.",
        "What percent is 12 of 48? 12 ÷ 48 = 0.25 = 25%."
      ],
      "questions": [
        {
          "q": "What is 10% of 90?",
          "a": "9"
        },
        {
          "q": "What is 25% of 80?",
          "a": "20"
        },
        {
          "q": "What is 50% of 36?",
          "a": "18"
        },
        {
          "q": "What percent is 5 out of 20?",
          "a": "25"
        },
        {
          "q": "What is 20% of 50?",
          "a": "10"
        }
      ]
    },
    {
      "week": 5,
      "title": "Ratio & proportion",
      "summary": "Splitting things fairly — and scaling them up or down.",
      "concept": "A ratio compares quantities: 2:3 means for every 2 of one thing there are 3 of another. To share £20 in the ratio 2:3, add the parts (2+3=5), divide the total by parts (£20 ÷ 5 = £4 per part), multiply: 2 parts = £8, 3 parts = £12. Proportion uses ratio to scale: if 3 apples cost £1.50, what do 8 apples cost? £1.50 ÷ 3 = £0.50 each, × 8 = £4. Ratios can also simplify, like fractions: 6:9 = 2:3.",
      "examples": [
        "Share £30 in ratio 1:4. Total parts = 5. Each part = £6. So £6 and £24.",
        "Simplify 4:8. Divide both by 4. = 1:2."
      ],
      "questions": [
        {
          "q": "Simplify the ratio 6:8 (give as a:b)",
          "a": "3:4"
        },
        {
          "q": "Share £40 in ratio 1:3. Smaller share = ?",
          "a": "10"
        },
        {
          "q": "If 2 apples cost 60p, how much do 5 cost? (pence)",
          "a": "150"
        },
        {
          "q": "Simplify 10:15 (give as a:b)",
          "a": "2:3"
        },
        {
          "q": "Share 20 sweets in ratio 2:3. Bigger share = ?",
          "a": "12"
        }
      ]
    },
    {
      "week": 6,
      "title": "Negative numbers",
      "summary": "Going below zero — and the rules for adding, subtracting, multiplying.",
      "concept": "Numbers can be less than zero. On a number line, negatives are to the left of 0. Adding a negative = subtracting: 5 + (−3) = 5 − 3 = 2. Subtracting a negative = adding: 5 − (−3) = 5 + 3 = 8. (Two negatives make a positive.) Multiplying or dividing: same signs give positive, different signs give negative. So −3 × −4 = 12, but −3 × 4 = −12. Use a number line for visualising small problems until the rules feel automatic.",
      "examples": [
        "−7 + 4 = −3 (count 4 to the right from −7).",
        "−5 × −2 = 10 (negative × negative = positive)."
      ],
      "questions": [
        {
          "q": "−3 + 7 = ?",
          "a": "4"
        },
        {
          "q": "5 − (−2) = ?",
          "a": "7"
        },
        {
          "q": "−4 × 3 = ?",
          "a": "-12"
        },
        {
          "q": "−6 ÷ −2 = ?",
          "a": "3"
        },
        {
          "q": "−8 + −5 = ?",
          "a": "-13"
        }
      ]
    },
    {
      "week": 7,
      "title": "Algebra: expressions and substitution",
      "summary": "Letters stand for numbers. Substitute and evaluate.",
      "concept": "In algebra, letters represent numbers we don't know yet. '3x' means '3 times x'. 'x + 4' means 'whatever x is, add 4'. When you're told what x equals, you substitute — replace the letter with the number. If x = 5, then 3x = 15 and x + 4 = 9. Like terms can be combined: 2x + 3x = 5x, but 2x + 3y can't be simplified further. Be careful with signs and brackets when substituting negatives: if x = −2, then x² = (−2)² = 4 (not −4).",
      "examples": [
        "If a = 3 and b = 4: 2a + b = 6 + 4 = 10.",
        "Simplify 4x + 2x − x = 5x."
      ],
      "questions": [
        {
          "q": "If x = 4, what is 3x?",
          "a": "12"
        },
        {
          "q": "If y = 5, what is y + 7?",
          "a": "12"
        },
        {
          "q": "Simplify 2x + 5x",
          "a": "7x"
        },
        {
          "q": "If a = 2, what is a² (a squared)?",
          "a": "4"
        },
        {
          "q": "If x = 3, what is 2x + 1?",
          "a": "7"
        }
      ]
    },
    {
      "week": 8,
      "title": "Algebra: solving equations",
      "summary": "Find the unknown by doing the same thing to both sides.",
      "concept": "An equation says two things are equal. To find the unknown letter, keep the equation balanced — whatever you do to one side, do to the other. To solve x + 5 = 12: subtract 5 from both sides → x = 7. To solve 3x = 21: divide both sides by 3 → x = 7. For two-step equations like 2x + 3 = 11: undo the addition first (subtract 3 → 2x = 8), then undo the multiplication (divide by 2 → x = 4). Always check by substituting your answer back in.",
      "examples": [
        "Solve x − 4 = 9. Add 4 to both sides: x = 13.",
        "Solve 5x = 35. Divide by 5: x = 7."
      ],
      "questions": [
        {
          "q": "Solve x + 6 = 10. x = ?",
          "a": "4"
        },
        {
          "q": "Solve 4x = 24. x = ?",
          "a": "6"
        },
        {
          "q": "Solve 2x + 1 = 9. x = ?",
          "a": "4"
        },
        {
          "q": "Solve x − 3 = 5. x = ?",
          "a": "8"
        },
        {
          "q": "Solve 3x − 2 = 13. x = ?",
          "a": "5"
        }
      ]
    },
    {
      "week": 9,
      "title": "Coordinates and graphs",
      "summary": "Plotting points and reading straight-line graphs.",
      "concept": "A coordinate like (3, 2) tells you a point's position: 3 along the x-axis (horizontal), 2 up the y-axis (vertical). The order matters — always x first. The origin is (0, 0). Coordinates can be negative: (−2, −3) is bottom-left. A straight-line graph follows the form y = mx + c, where m is the gradient (steepness) and c is where it crosses the y-axis. y = 2x + 1 means: pick any x, multiply by 2, add 1, that's y. Plot a few points and join them.",
      "examples": [
        "On y = x + 3: when x = 0, y = 3. When x = 2, y = 5. Line crosses y-axis at 3.",
        "The point (−1, 4) is 1 left of origin and 4 up."
      ],
      "questions": [
        {
          "q": "What is the x-coordinate of (5, 2)?",
          "a": "5"
        },
        {
          "q": "Where does y = x + 4 cross the y-axis? (number)",
          "a": "4"
        },
        {
          "q": "In y = 3x, what is y when x = 2?",
          "a": "6"
        },
        {
          "q": "In y = 2x − 1, what is y when x = 4?",
          "a": "7"
        },
        {
          "q": "What are the coordinates of the origin? (form: x,y)",
          "a": "0,0"
        }
      ]
    },
    {
      "week": 10,
      "title": "Angles in shapes",
      "summary": "The rules that always work.",
      "concept": "Angles in a triangle add to 180°. So if two angles are 60° and 70°, the third is 50°. Angles in a quadrilateral (4-sided shape) add to 360°. Angles on a straight line add to 180°. Angles at a point add to 360°. Vertically opposite angles (where two lines cross) are equal. An equilateral triangle has all angles 60°. An isosceles triangle has two equal angles (the ones opposite the equal sides). These rules combine to solve missing-angle problems.",
      "examples": [
        "Triangle with angles 90° and 45°: third angle = 180 − 90 − 45 = 45°.",
        "Quadrilateral with three angles 100°, 80°, 90°: fourth = 360 − 270 = 90°."
      ],
      "questions": [
        {
          "q": "Angles in a triangle add to ___?",
          "a": "180"
        },
        {
          "q": "Angles in a quadrilateral add to ___?",
          "a": "360"
        },
        {
          "q": "Triangle: 50° and 60°. Third angle?",
          "a": "70"
        },
        {
          "q": "Each angle in an equilateral triangle?",
          "a": "60"
        },
        {
          "q": "Angles on a straight line add to ___?",
          "a": "180"
        }
      ]
    },
    {
      "week": 11,
      "title": "Area and perimeter",
      "summary": "The space inside vs the distance around.",
      "concept": "Perimeter = total distance round the edge. Just add all the sides. Area = space inside. Rectangle area = length × width. Triangle area = (base × height) ÷ 2. Circle area = π × r² (r is the radius). Circle circumference (perimeter) = π × diameter = 2πr. Use π ≈ 3.14 unless told to leave the answer in terms of π. Units matter: area is always in square units (cm², m²); perimeter in single units (cm, m).",
      "examples": [
        "Rectangle 8 cm by 5 cm: perimeter = 8+5+8+5 = 26 cm. Area = 8×5 = 40 cm².",
        "Triangle, base 6, height 4: area = (6×4) ÷ 2 = 12."
      ],
      "questions": [
        {
          "q": "Area of rectangle 7 by 3? (cm²)",
          "a": "21"
        },
        {
          "q": "Perimeter of square with side 5? (cm)",
          "a": "20"
        },
        {
          "q": "Area of triangle, base 10, height 4? (cm²)",
          "a": "20"
        },
        {
          "q": "Perimeter of rectangle 6 by 4? (cm)",
          "a": "20"
        },
        {
          "q": "Area of square with side 6? (cm²)",
          "a": "36"
        }
      ]
    },
    {
      "week": 12,
      "title": "Volume of 3D shapes",
      "summary": "The space taken up by something solid.",
      "concept": "Volume measures the 3D space inside a shape. Always in cubic units (cm³, m³). Cuboid (box) volume = length × width × height. A cube is a special cuboid where all sides are equal, so volume = side³. Prism volume = area of cross-section × length. A triangular prism's volume = (triangle area) × length. Cylinder volume = π × r² × height (the circle area × how tall it is). Visualising: how many 1cm cubes would fit inside?",
      "examples": [
        "Box 5×3×2 cm: volume = 5 × 3 × 2 = 30 cm³.",
        "Cube with 4cm sides: 4 × 4 × 4 = 64 cm³."
      ],
      "questions": [
        {
          "q": "Volume of cuboid 2×3×4? (cm³)",
          "a": "24"
        },
        {
          "q": "Volume of cube with side 3? (cm³)",
          "a": "27"
        },
        {
          "q": "Volume of cuboid 5×2×6? (cm³)",
          "a": "60"
        },
        {
          "q": "Volume of cube with side 2? (cm³)",
          "a": "8"
        },
        {
          "q": "What units measure volume? (e.g. cm__)",
          "a": "cm³"
        }
      ]
    },
    {
      "week": 13,
      "title": "Probability",
      "summary": "How likely something is, between 0 (impossible) and 1 (certain).",
      "concept": "Probability = (number of ways the event can happen) ÷ (total possible outcomes). All probabilities are between 0 and 1, written as fractions, decimals, or percentages. Rolling a 6 on a fair die: 1 favourable outcome out of 6 = 1/6 ≈ 0.167 ≈ 16.7%. Coin flip heads = 1/2. Probability of NOT happening = 1 − probability of happening. So P(not 6) = 1 − 1/6 = 5/6. All possible outcomes always add to 1.",
      "examples": [
        "Bag with 3 red, 2 blue: P(red) = 3/5. P(blue) = 2/5. They add to 1.",
        "Spinner with 4 equal sections: P(any one) = 1/4."
      ],
      "questions": [
        {
          "q": "P(heads) on a fair coin? (fraction)",
          "a": "1/2"
        },
        {
          "q": "P(rolling 6) on a die? (fraction)",
          "a": "1/6"
        },
        {
          "q": "P(not 6) on a die? (fraction)",
          "a": "5/6"
        },
        {
          "q": "Bag has 4 red, 6 blue. P(red)? (fraction)",
          "a": "4/10"
        },
        {
          "q": "Probability of impossible event?",
          "a": "0"
        }
      ]
    },
    {
      "week": 14,
      "title": "Statistics: mean, median, mode, range",
      "summary": "Four ways to summarise a set of numbers.",
      "concept": "Mean (average): add all values, divide by how many. Median: middle value when the list is sorted. If two middle values, take their mean. Mode: the most common value (can be none, one, or several). Range: highest minus lowest. For 3, 5, 5, 7, 10: mean = 30 ÷ 5 = 6; median = 5 (middle); mode = 5 (appears twice); range = 10 − 3 = 7. Mean is affected by extreme values; median isn't — which is why salaries are often reported as median, not mean.",
      "examples": [
        "Numbers: 2, 4, 6, 8, 10. Mean = 30÷5 = 6. Median = 6. Mode = none. Range = 8.",
        "Numbers: 7, 3, 7, 9, 4. Sorted: 3, 4, 7, 7, 9. Median = 7. Mode = 7. Range = 6."
      ],
      "questions": [
        {
          "q": "Mean of 4, 6, 8?",
          "a": "6"
        },
        {
          "q": "Median of 1, 3, 5, 7, 9?",
          "a": "5"
        },
        {
          "q": "Mode of 2, 3, 3, 4, 5?",
          "a": "3"
        },
        {
          "q": "Range of 10, 5, 8, 12, 3?",
          "a": "9"
        },
        {
          "q": "Mean of 2, 4, 6, 8?",
          "a": "5"
        }
      ]
    },
    {
      "week": 15,
      "title": "Order of operations: BIDMAS",
      "summary": "Brackets, Indices, Division, Multiplication, Addition, Subtraction.",
      "concept": "When a calculation mixes operations, do them in BIDMAS order: Brackets first, then Indices (powers), then Division and Multiplication left to right, then Addition and Subtraction left to right. So 3 + 4 × 2 = 3 + 8 = 11 (not 14 — multiplication first). But (3 + 4) × 2 = 7 × 2 = 14. Brackets change everything. This rule is universal — calculators use it, exam markers expect it, and skipping it is the most common silly-mistake error in maths.",
      "examples": [
        "2 + 3 × 4 = 2 + 12 = 14 (multiply first).",
        "(2 + 3) × 4 = 5 × 4 = 20 (brackets first)."
      ],
      "questions": [
        {
          "q": "What is 2 + 3 × 4?",
          "a": "14"
        },
        {
          "q": "What is (2 + 3) × 4?",
          "a": "20"
        },
        {
          "q": "What is 10 − 2 × 3?",
          "a": "4"
        },
        {
          "q": "What is 6 + 4 ÷ 2?",
          "a": "8"
        },
        {
          "q": "What is (6 + 4) ÷ 2?",
          "a": "5"
        }
      ]
    }
  ],
  "SCI": [
    {
      "week": 1,
      "title": "Cells: the units of life",
      "summary": "Animal cells, plant cells, and the parts that make life work.",
      "concept": "All living things are made of cells. Most cells share a few key parts: a cell membrane (controls what enters and leaves), cytoplasm (jelly-like fluid where reactions happen), a nucleus (contains DNA and controls the cell), and mitochondria (release energy from food). Plant cells have three extra parts animals lack: a cell wall (rigid, made of cellulose, gives shape), chloroplasts (contain chlorophyll, do photosynthesis), and a large permanent vacuole (filled with cell sap, keeps cell firm).",
      "examples": [
        "An animal cell (e.g. cheek cell): membrane, cytoplasm, nucleus, mitochondria — flexible, no fixed shape.",
        "A plant cell (e.g. leaf cell): all of the above PLUS cell wall (rigid box), chloroplasts (green), vacuole (large central sac)."
      ],
      "questions": [
        {
          "q": "What part of the cell contains DNA?",
          "a": "nucleus"
        },
        {
          "q": "Which structure does photosynthesis?",
          "a": "chloroplast"
        },
        {
          "q": "Do animal cells have a cell wall? (yes/no)",
          "a": "no"
        },
        {
          "q": "Which part releases energy from food?",
          "a": "mitochondria"
        },
        {
          "q": "What's the jelly-like fluid inside a cell?",
          "a": "cytoplasm"
        }
      ]
    },
    {
      "week": 2,
      "title": "Body systems",
      "summary": "How organs group into systems that keep you alive.",
      "concept": "Your body has several organ systems, each with a job. Digestive: breaks food into nutrients (mouth, stomach, intestines). Circulatory: moves blood (heart, blood vessels). Respiratory: gets oxygen in, CO₂ out (lungs, windpipe). Nervous: sends signals (brain, spinal cord, nerves). Skeletal: supports the body (bones). Muscular: moves the body (muscles). Systems work together: respiratory delivers oxygen to blood; circulatory carries it to muscles; muscular uses it to move.",
      "examples": [
        "When you run: respiratory works harder (deeper breaths), circulatory pumps faster (heart rate up), muscular contracts to move legs.",
        "Eating a sandwich uses digestive (breakdown) → circulatory (nutrients to cells) → all systems benefit from energy released."
      ],
      "questions": [
        {
          "q": "Which system pumps blood?",
          "a": "circulatory"
        },
        {
          "q": "Which organ controls the nervous system?",
          "a": "brain"
        },
        {
          "q": "Where does oxygen enter the body? (organ)",
          "a": "lungs"
        },
        {
          "q": "Which system breaks down food?",
          "a": "digestive"
        },
        {
          "q": "Which system supports the body's structure?",
          "a": "skeletal"
        }
      ]
    },
    {
      "week": 3,
      "title": "Photosynthesis",
      "summary": "How plants make their own food from sunlight.",
      "concept": "Plants make their own glucose (food) using photosynthesis. The word equation: carbon dioxide + water → glucose + oxygen, in the presence of light and chlorophyll. It happens in chloroplasts (mostly in leaves). Plants take in CO₂ through tiny holes called stomata, draw up water through their roots, and absorb light energy. The glucose feeds the plant. Oxygen is released as a by-product — which is why plants are essential to all animal life on Earth.",
      "examples": [
        "On a sunny day, a leaf is actively photosynthesising: pulling in CO₂, releasing O₂ bubbles you can see if the plant is underwater (like pondweed).",
        "Without light, photosynthesis stops. That's why plants kept in darkness eventually die."
      ],
      "questions": [
        {
          "q": "What gas do plants take in for photosynthesis?",
          "a": "carbon dioxide"
        },
        {
          "q": "What gas do plants release?",
          "a": "oxygen"
        },
        {
          "q": "What food do plants make? (sugar)",
          "a": "glucose"
        },
        {
          "q": "What green substance absorbs light?",
          "a": "chlorophyll"
        },
        {
          "q": "Where in the plant does most photosynthesis happen?",
          "a": "leaves"
        }
      ]
    },
    {
      "week": 4,
      "title": "Ecosystems and food chains",
      "summary": "Producers, consumers, and the flow of energy.",
      "concept": "An ecosystem is a community of living things and their environment. Energy flows through it via food chains. Producers (plants) make their own food. Primary consumers eat producers (herbivores). Secondary consumers eat primary consumers (carnivores). Tertiary consumers eat secondary consumers (top predators). Arrows in a food chain point in the direction of energy flow. Energy is lost at each step (as heat, movement), which is why there are usually fewer top predators than plants.",
      "examples": [
        "Grass → grasshopper → frog → snake → hawk. Five levels; energy decreases up the chain.",
        "If grasshoppers vanish, frogs starve and grass overgrows — every level is connected."
      ],
      "questions": [
        {
          "q": "What is a plant's role in a food chain?",
          "a": "producer"
        },
        {
          "q": "Which way do arrows point in a food chain?",
          "a": "energy flow"
        },
        {
          "q": "An animal that eats only plants is a... (one word)",
          "a": "herbivore"
        },
        {
          "q": "An animal that eats only meat is a...",
          "a": "carnivore"
        },
        {
          "q": "Energy is lost at each step as ___ (one word)",
          "a": "heat"
        }
      ]
    },
    {
      "week": 5,
      "title": "Reproduction",
      "summary": "How life makes more life.",
      "concept": "Sexual reproduction needs two parents and combines genes from each, creating variation. In humans, a sperm cell (from father) joins an egg cell (from mother) — this is fertilisation. The fertilised egg develops in the uterus for about 9 months. Asexual reproduction needs only one parent; offspring are identical (clones). Many bacteria, plants (like strawberry runners), and simple animals reproduce asexually. Sexual reproduction has the advantage of variation (helpful for evolution); asexual has the advantage of speed.",
      "examples": [
        "Humans, dogs, oak trees: sexual reproduction — offspring resemble both parents but aren't identical.",
        "Bacteria splitting in two, a strawberry plant sending out runners: asexual — offspring are genetic copies."
      ],
      "questions": [
        {
          "q": "Sexual reproduction needs how many parents?",
          "a": "2"
        },
        {
          "q": "What is the joining of sperm and egg called?",
          "a": "fertilisation"
        },
        {
          "q": "Where does a baby develop in humans?",
          "a": "uterus"
        },
        {
          "q": "How long is human pregnancy? (months)",
          "a": "9"
        },
        {
          "q": "Identical offspring from one parent = ___ reproduction",
          "a": "asexual"
        }
      ]
    },
    {
      "week": 6,
      "title": "States of matter",
      "summary": "Solid, liquid, gas — and what makes them different.",
      "concept": "Matter exists in three main states. Solids: particles packed tightly in a fixed pattern, vibrating slightly. Fixed shape and volume. Liquids: particles close but free to move past each other. Fixed volume, but take the shape of the container. Gases: particles far apart, moving freely and fast. No fixed shape or volume — they fill any container. Heating gives particles energy: solid → liquid (melting), liquid → gas (evaporation/boiling). Cooling reverses: gas → liquid (condensation), liquid → solid (freezing).",
      "examples": [
        "Ice (solid) → water (liquid) at 0°C → steam (gas) at 100°C. Same substance, different particle arrangements.",
        "A balloon's gas particles bounce off the walls — that's air pressure."
      ],
      "questions": [
        {
          "q": "Solid to liquid is called ___",
          "a": "melting"
        },
        {
          "q": "Liquid to gas is called ___",
          "a": "evaporation"
        },
        {
          "q": "Gas to liquid is called ___",
          "a": "condensation"
        },
        {
          "q": "Which state has particles packed in fixed positions?",
          "a": "solid"
        },
        {
          "q": "Which state has the most particle movement?",
          "a": "gas"
        }
      ]
    },
    {
      "week": 7,
      "title": "Atoms and elements",
      "summary": "The smallest building blocks — and the 118 types of them.",
      "concept": "An atom is the smallest unit of matter that keeps its identity. Each atom has a nucleus (containing protons and neutrons) surrounded by electrons. An element is a substance made of only one type of atom — gold (Au), oxygen (O), iron (Fe). There are 118 known elements, each with a unique chemical symbol (one or two letters; first capital, second lowercase). The number of protons defines the element — change them and you change the element. Compounds (like water, H₂O) are made when atoms of different elements bond.",
      "examples": [
        "Hydrogen (H): smallest atom, 1 proton, 1 electron.",
        "Water (H₂O) is a compound — 2 hydrogen atoms bonded to 1 oxygen atom."
      ],
      "questions": [
        {
          "q": "What is the chemical symbol for oxygen?",
          "a": "O"
        },
        {
          "q": "What's at the centre of an atom?",
          "a": "nucleus"
        },
        {
          "q": "What particles orbit the nucleus?",
          "a": "electrons"
        },
        {
          "q": "How many elements are known? (approx)",
          "a": "118"
        },
        {
          "q": "Symbol for gold?",
          "a": "Au"
        }
      ]
    },
    {
      "week": 8,
      "title": "The periodic table",
      "summary": "How the elements are organised — and what the pattern tells you.",
      "concept": "The periodic table arranges all elements by their atomic number (number of protons). Elements in the same column (group) have similar properties because they have the same number of outer electrons. Group 1 (alkali metals): very reactive metals like sodium and potassium. Group 7 (halogens): reactive non-metals like chlorine and fluorine. Group 0 (noble gases): unreactive gases like helium and neon. Rows are called periods. Metals are on the left, non-metals on the right.",
      "examples": [
        "Sodium and potassium (both Group 1) both react with water — same group, similar behaviour.",
        "Helium (Group 0) doesn't react with anything — that's why it's safe in balloons."
      ],
      "questions": [
        {
          "q": "What is a column on the periodic table called?",
          "a": "group"
        },
        {
          "q": "What is a row called?",
          "a": "period"
        },
        {
          "q": "Group 1 elements are called ___ metals",
          "a": "alkali"
        },
        {
          "q": "Which group is unreactive (the noble gases)?",
          "a": "0"
        },
        {
          "q": "Metals are mostly on which side? (left/right)",
          "a": "left"
        }
      ]
    },
    {
      "week": 9,
      "title": "Chemical reactions",
      "summary": "When substances change into new ones — and how to spot it.",
      "concept": "A chemical reaction rearranges atoms to make new substances. The starting substances are reactants; what they turn into are products. Signs a reaction has happened: colour change, gas bubbles, temperature change, light or sound. Mass is conserved — the atoms aren't created or destroyed, just rearranged. Common reactions: combustion (burning), oxidation (rusting), neutralisation (acid + alkali → salt + water). Reactions are written as word equations: methane + oxygen → carbon dioxide + water.",
      "examples": [
        "Burning wood: wood + oxygen → ash + carbon dioxide + water (heat and light released).",
        "Iron rusting: iron + oxygen + water → iron oxide (rust). Slow oxidation."
      ],
      "questions": [
        {
          "q": "Starting substances in a reaction are called ___",
          "a": "reactants"
        },
        {
          "q": "What is mass conservation in reactions? (yes/no - is mass conserved)",
          "a": "yes"
        },
        {
          "q": "What kind of reaction is burning?",
          "a": "combustion"
        },
        {
          "q": "Acid + alkali = salt + ___",
          "a": "water"
        },
        {
          "q": "Rust forms when iron reacts with oxygen and ___",
          "a": "water"
        }
      ]
    },
    {
      "week": 10,
      "title": "Acids and bases",
      "summary": "The pH scale — and what makes something sour or slippery.",
      "concept": "Acids taste sour (think lemon, vinegar), have pH below 7. Bases (alkalis when dissolved) feel slippery (think soap, bleach), have pH above 7. Neutral substances are pH 7 (pure water). The pH scale runs from 0 (strongest acid) to 14 (strongest alkali). Indicators like litmus or universal indicator change colour to show pH. When acid meets base, they cancel out in a neutralisation reaction — useful for treating heartburn (acid in stomach) with antacid tablets (alkali).",
      "examples": [
        "Lemon juice: pH about 2 (acidic). Bleach: pH about 13 (strongly alkaline). Pure water: pH 7.",
        "Toothpaste is mildly alkaline to neutralise acid from food on your teeth."
      ],
      "questions": [
        {
          "q": "What is the pH of a neutral substance?",
          "a": "7"
        },
        {
          "q": "Acids have a pH below ___",
          "a": "7"
        },
        {
          "q": "Bases have a pH above ___",
          "a": "7"
        },
        {
          "q": "What is the reaction between acid and alkali called?",
          "a": "neutralisation"
        },
        {
          "q": "What is the pH range of the scale? (form: 0-__)",
          "a": "0-14"
        }
      ]
    },
    {
      "week": 11,
      "title": "Forces",
      "summary": "Pushes, pulls, and what makes things move (or stop).",
      "concept": "A force is a push or pull. Measured in newtons (N). Forces can change an object's speed, direction, or shape. Gravity pulls everything toward Earth's centre — your weight in newtons = mass (kg) × 10. Friction resists motion between surfaces. Air resistance is friction with air. If forces on an object are balanced, it stays still or keeps moving steadily. If unbalanced, it speeds up, slows down, or changes direction. Heavier objects don't fall faster — air resistance is what makes a feather seem slow.",
      "examples": [
        "A book on a table: gravity pulls down, table pushes up — balanced, so it stays still.",
        "Mass 6 kg on Earth: weight = 6 × 10 = 60 N."
      ],
      "questions": [
        {
          "q": "What unit measures force?",
          "a": "newtons"
        },
        {
          "q": "What force pulls things to Earth?",
          "a": "gravity"
        },
        {
          "q": "Mass 5 kg — weight on Earth in N?",
          "a": "50"
        },
        {
          "q": "Friction acts against ___",
          "a": "motion"
        },
        {
          "q": "Balanced forces mean an object stays ___ or moves steadily",
          "a": "still"
        }
      ]
    },
    {
      "week": 12,
      "title": "Energy",
      "summary": "Energy can't be made or destroyed — only changed.",
      "concept": "Energy is what makes things happen — measured in joules (J). It comes in stores: kinetic (movement), gravitational potential (height), chemical (food, fuel), thermal (heat), elastic (stretched/squashed), electrical, light, sound. The key law: energy is conserved — never created or destroyed, only transferred between stores. A light bulb transfers electrical energy → light + heat. Not all transfers are useful — wasted energy usually ends up as heat dissipated to surroundings.",
      "examples": [
        "A football kicked: chemical energy (your muscles, from food) → kinetic energy (ball moves) → sound + heat when it stops.",
        "Battery torch: chemical (battery) → electrical → light (useful) + heat (wasted)."
      ],
      "questions": [
        {
          "q": "What unit measures energy?",
          "a": "joules"
        },
        {
          "q": "Energy of movement is called ___",
          "a": "kinetic"
        },
        {
          "q": "Energy stored in food or fuel is ___",
          "a": "chemical"
        },
        {
          "q": "Can energy be destroyed? (yes/no)",
          "a": "no"
        },
        {
          "q": "Wasted energy is usually transferred as ___",
          "a": "heat"
        }
      ]
    },
    {
      "week": 13,
      "title": "Electricity",
      "summary": "Current, voltage, and circuits.",
      "concept": "Electric current is the flow of electric charge (electrons) through a conductor. Measured in amps (A). Voltage (measured in volts, V) is the 'push' that drives current — like pressure in a water pipe. A circuit needs a complete loop with a power source (battery), wires, and components (bulbs, motors). Series circuits: components in one loop — if one breaks, all stop. Parallel circuits: branches — each component on its own loop, so others keep working. Switches break or complete the circuit.",
      "examples": [
        "A torch: battery (voltage) → wire → bulb → wire → battery. Complete loop = light.",
        "Christmas tree lights wired in parallel — one fails, the rest stay on."
      ],
      "questions": [
        {
          "q": "What unit measures current?",
          "a": "amps"
        },
        {
          "q": "What unit measures voltage?",
          "a": "volts"
        },
        {
          "q": "What type of circuit fails completely if one bulb breaks?",
          "a": "series"
        },
        {
          "q": "What completes a circuit (closes it)?",
          "a": "switch"
        },
        {
          "q": "What flows through the wire as current? (particle)",
          "a": "electrons"
        }
      ]
    },
    {
      "week": 14,
      "title": "Waves and sound",
      "summary": "How vibrations travel — and what makes a sound loud or high.",
      "concept": "A wave transfers energy without moving matter. Two key features: amplitude (height of the wave) — bigger amplitude = louder sound, brighter light. Frequency (waves per second, measured in hertz, Hz) — higher frequency = higher pitch in sound. Sound waves need a medium (air, water, solids) to travel — they can't travel in a vacuum. Light waves can travel through a vacuum, which is why we see the Sun. Speed of sound in air ≈ 340 m/s; speed of light ≈ 300,000,000 m/s.",
      "examples": [
        "A loud drum: large amplitude. A high-pitched whistle: high frequency.",
        "Thunder and lightning happen together, but light reaches you almost instantly while sound takes seconds."
      ],
      "questions": [
        {
          "q": "What unit measures frequency?",
          "a": "hertz"
        },
        {
          "q": "Higher frequency = higher ___ (in sound)",
          "a": "pitch"
        },
        {
          "q": "Bigger amplitude = louder or quieter?",
          "a": "louder"
        },
        {
          "q": "Can sound travel in a vacuum? (yes/no)",
          "a": "no"
        },
        {
          "q": "Speed of light is faster than the speed of ___",
          "a": "sound"
        }
      ]
    },
    {
      "week": 15,
      "title": "Earth and space",
      "summary": "Our planet, our Sun, and our place in the system.",
      "concept": "Earth orbits the Sun once every 365.25 days — our year. Earth spins on its axis once every 24 hours — our day. The axis is tilted, which causes seasons: when the northern hemisphere tilts toward the Sun, it gets summer (more direct light); the south gets winter. The Moon orbits Earth roughly every 28 days; we see different amounts of its sunlit side (phases). Our Solar System has 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. The Sun is a star — one of billions in the Milky Way galaxy.",
      "examples": [
        "Summer in the UK = northern hemisphere tilted toward Sun. At the same moment, Australia has winter.",
        "A full moon means the Sun, Earth, and Moon are roughly aligned with Earth in the middle."
      ],
      "questions": [
        {
          "q": "How long does Earth take to orbit the Sun? (days)",
          "a": "365"
        },
        {
          "q": "How long is one day? (hours)",
          "a": "24"
        },
        {
          "q": "How many planets in our Solar System?",
          "a": "8"
        },
        {
          "q": "What causes the seasons? (Earth's ___)",
          "a": "tilt"
        },
        {
          "q": "What kind of object is the Sun?",
          "a": "star"
        }
      ]
    }
  ]
};
