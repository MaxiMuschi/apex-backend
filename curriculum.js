// curriculum.js — The Study Journal (GCSE).
// Plain data so non-developers can edit. Each lesson is one object:
//   unit, title, summary, tier ("F"|"H"), specRef {AQA,Edexcel,OCR},
//   concept, commandWords[], examples[2], questions[{q,a,marks,markscheme,tier,selfCheck}],
//   optional extended {q, marks:6, model, levels}.
// Tier-aware: English is untiered (all "F"); Maths & Science use "H" to mark Higher-only items.
// Spec references are indicative — verify against your board's current spec.

window.CURRICULUM = {
  "ENG": [
    {
      "unit": 1,
      "title": "Reading: Explicit & Implicit Information (Inference)",
      "summary": "Locate stated facts and read between the lines to infer meaning.",
      "tier": "F",
      "specRef": {
        "AQA": "Paper 1 Q1 / Paper 2 Q1 (AO1)",
        "Edexcel": "Paper 1/2 Q1-Q2 (AO1)",
        "OCR": "Component 01/02 Q1 (AO1)"
      },
      "concept": "This skill is assessed under AO1: identify and interpret explicit and implicit information and ideas. Explicit information is stated directly on the page, so you can quote it word for word. Implicit information is suggested, hinted at or implied, so you must infer it by reading between the lines. The command words you will meet are 'identify', 'list' and 'find', which need only short selected details, often for one mark each, and 'what do you understand' or 'what impressions do you get', which need inference plus brief supporting evidence. For low-mark list questions, stay inside the lines the question names, keep answers short and do not over-explain or analyse. For inference questions, make a clear point, support it with a short embedded quotation, then explain what the quotation suggests. Avoid copying long chunks of text. Use tentative verbs such as 'suggests', 'implies' and 'hints' to show you are interpreting rather than just retelling. Accurate inference is the foundation for the higher-mark analysis and evaluation questions later in the paper.",
      "commandWords": [
        "identify",
        "infer"
      ],
      "examples": [
        "Explicit: 'The text states the cottage was \"three miles from the nearest village\", showing it was remote.'",
        "Implicit: 'When the writer notes her hands were \"trembling as she fumbled the key\", this implies she was nervous or afraid, even though fear is never named directly.'"
      ],
      "questions": [
        {
          "q": "What is the difference between explicit and implicit information? (Identify the terms.)",
          "a": "explicit is stated directly implicit is implied",
          "marks": 2,
          "markscheme": "Explicit = stated/directly on the page; implicit = suggested/implied/inferred. One mark each.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "True or false: an inference is something the text states directly.",
          "a": "false",
          "marks": 1,
          "markscheme": "False - an inference is worked out from clues, not stated directly.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name the Assessment Objective (AO) that covers identifying and interpreting explicit and implicit information.",
          "a": "ao1",
          "marks": 1,
          "markscheme": "AO1.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which single word best names reading between the lines to work out implied meaning?",
          "a": "inference",
          "marks": 1,
          "markscheme": "Inference (accept inferring).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "From a source describing a character whose 'shoulders sagged as she read the letter', what can you infer about her mood, and how do you know? (2 marks, AO1)",
          "a": "",
          "marks": 2,
          "markscheme": "Valid inference (e.g. sadness/disappointment/defeat) supported by the detail 'shoulders sagged'. Use of tentative verb such as 'suggests'.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "List four things you learn about the setting from the opening of a source. (4 marks, AO1)",
          "a": "",
          "marks": 4,
          "markscheme": "Four separate, accurate explicit details drawn from the named lines; short answers, no analysis required. One mark each.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 2,
      "title": "Language Analysis: Word Choices & Techniques for Effect",
      "summary": "Analyse how a writer's vocabulary and devices shape meaning and effect.",
      "tier": "F",
      "specRef": {
        "AQA": "Paper 1 Q2 (AO2)",
        "Edexcel": "Paper 1/2 Q3 (AO2)",
        "OCR": "Component 01/02 Q2-Q3 (AO2)"
      },
      "concept": "This is assessed under AO2: explain, comment on and analyse how writers use language to achieve effects and influence readers, using relevant subject terminology. The command word is usually 'analyse' or 'how does the writer use language'. A strong response selects precise evidence, names the technique accurately (for example metaphor, simile, personification, semantic field, verb choice, connotation) and, most importantly, explains the effect on the reader. Avoid 'feature spotting', where you label devices without analysing them. Use a clear method: make a point about the effect, embed a short quotation, name the method, then zoom in on a key word and explore its connotations and what it suggests. The best answers offer a developed or even alternative interpretation of a single word. Tentative verbs such as 'connotes', 'implies' and 'evokes' show analytical thinking. Always link the effect back to the writer's purpose or the reader's response, rather than simply describing what happens in the text.",
      "commandWords": [
        "analyse"
      ],
      "examples": [
        "Model: 'The verb \"clawed\" personifies the wind, its harsh, animalistic connotations suggesting a violent, predatory force that overwhelms the helpless narrator.'",
        "Feature-spotting (weak) vs analysis (strong): Weak = 'This is a metaphor.' Strong = 'The metaphor \"a prison of ice\" implies the character feels trapped and powerless, the noun \"prison\" connoting confinement and fear.'"
      ],
      "questions": [
        {
          "q": "Identify the technique: 'The angry sea spat at the rocks.'",
          "a": "personification",
          "marks": 1,
          "markscheme": "Personification.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Identify the technique: 'as quiet as a graveyard'.",
          "a": "simile",
          "marks": 1,
          "markscheme": "Simile (uses 'as').",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What term means the ideas or feelings a word suggests beyond its literal meaning?",
          "a": "connotation",
          "marks": 1,
          "markscheme": "Connotation (accept connotations).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which AO assesses analysis of a writer's language for effect?",
          "a": "ao2",
          "marks": 1,
          "markscheme": "AO2.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Analyse how the verb 'crept' creates a sense of unease in a description of fog. (3 marks, AO2)",
          "a": "",
          "marks": 3,
          "markscheme": "Names verb; explores connotations of stealth/threat; links to effect on reader (creeping dread/menace). Reward zooming in on the single word.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Analyse how the writer uses language to present the storm as dangerous. Refer to two examples. (4 marks, AO2)",
          "a": "",
          "marks": 4,
          "markscheme": "Two precise quotations, accurate terminology, developed comment on effect for each; clear link to reader response and writer's intention.",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "How does the writer use language to present the character's fear? (6 marks, AO2)",
        "marks": 6,
        "model": "The writer presents fear as overwhelming through the metaphor 'a tide of panic rose in her chest', where the noun 'tide' connotes an unstoppable natural force, implying she cannot control her terror. This is intensified by the dynamic verb 'rose', which suggests the fear is building relentlessly. Later, the short, fractured sentence 'She couldn't breathe.' mirrors her breathlessness, the abruptness pulling the reader into her physical distress. The semantic field of confinement, with 'trapped' and 'closing in', reinforces a sense of helplessness, positioning the reader to share her claustrophobic dread.",
        "levels": "Level 3 (5-6): detailed, perceptive analysis, precise terminology, convincing effects. Level 2 (3-4): clear explanation with relevant terminology. Level 1 (1-2): simple comment, some textual reference."
      }
    },
    {
      "unit": 3,
      "title": "Structure Analysis: How a Writer Structures a Text",
      "summary": "Analyse structural choices and how they guide and interest the reader.",
      "tier": "F",
      "specRef": {
        "AQA": "Paper 1 Q3 (AO2)",
        "Edexcel": "Paper 1 Q4 (AO2)",
        "OCR": "Component 01 Q3 (AO2)"
      },
      "concept": "Structure is assessed under AO2, focusing on how writers use structure to achieve effects and influence readers. Structure means whole-text shaping rather than word-level language. Think about openings and endings, shifts in focus (from wide to narrow, outside to inside), zooming in and out, changes in time such as flashbacks, contrasts and juxtaposition, perspective shifts, repetition or motifs, paragraph length, cyclical structure and where the climax falls. The command words are 'how' and 'structure'. A common error is to slip into language analysis or to merely list events; instead, comment on why the writer ordered the text this way and the effect of that ordering on the reader. Use the beginning-middle-end frame: how does the opening hook us, how does the middle develop or shift, how does the ending resolve, twist or echo the opening. Useful terminology includes 'shift', 'juxtaposition', 'focus narrows', 'cyclical structure', 'foreshadowing' and 'withholding information'. Always explain the reader's experience: tension built, expectations raised, surprise created or curiosity provoked.",
      "commandWords": [
        "analyse",
        "structure"
      ],
      "examples": [
        "Model: 'The writer opens with a wide panorama of the empty moor before the focus narrows to a single figure, drawing the reader in and creating a sense of isolation.'",
        "Model: 'The cyclical structure returns to the image of the locked door from the opening, leaving the reader with a sense that nothing has changed and reinforcing the theme of entrapment.'"
      ],
      "questions": [
        {
          "q": "What term describes a text that ends by returning to where it began?",
          "a": "cyclical",
          "marks": 1,
          "markscheme": "Cyclical structure.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is the term for placing two contrasting ideas or images side by side for effect?",
          "a": "juxtaposition",
          "marks": 1,
          "markscheme": "Juxtaposition (accept contrast).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "True or false: structure analysis should focus mainly on individual word choices.",
          "a": "false",
          "marks": 1,
          "markscheme": "False - that is language (word-level) analysis; structure is whole-text shaping.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name the device where a writer hints early at something that happens later.",
          "a": "foreshadowing",
          "marks": 1,
          "markscheme": "Foreshadowing.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain the effect of a writer shifting focus from a crowded street to one lonely child. (2 marks, AO2)",
          "a": "",
          "marks": 2,
          "markscheme": "Identifies the shift/narrowing of focus and explains effect (isolation, sympathy, emphasis on the child).",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "How has the writer structured the text to interest you as a reader? Refer to the beginning, a shift in the middle and the ending. (4 marks, AO2)",
          "a": "",
          "marks": 4,
          "markscheme": "Whole-text overview; comments on opening hook, a structural shift, and the ending; clear effects on the reader; structural terminology used accurately.",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "How has the writer structured the text to interest the reader? (6 marks, AO2)",
        "marks": 6,
        "model": "The writer hooks the reader by opening in medias res with the sudden line 'Then the lights went out', plunging us into action and creating immediate questions. The focus then widens to establish the setting before narrowing again to the protagonist's hands, a zooming technique that builds intimacy and tension. A mid-text shift to a flashback withholds the cause of the crisis, sustaining curiosity. Repetition of the motif of 'ticking' across paragraphs reminds the reader of time running out. Finally, the cyclical return to darkness in the closing line echoes the opening, leaving an unresolved, unsettling impression that lingers.",
        "levels": "Level 3 (5-6): perceptive whole-text analysis of structural features and effects. Level 2 (3-4): clear understanding of some structural features. Level 1 (1-2): simple references, may drift into language or plot retelling."
      }
    },
    {
      "unit": 4,
      "title": "Comparing Texts: Perspectives & Viewpoints",
      "summary": "Compare writers' ideas, perspectives and methods across two texts.",
      "tier": "F",
      "specRef": {
        "AQA": "Paper 2 Q4 (AO3)",
        "Edexcel": "Paper 2 Q6 (AO3)",
        "OCR": "Component 02 Q4 (AO3)"
      },
      "concept": "Comparison of two texts is assessed under AO3: compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts. The command word is 'compare'. You must do two things at once: compare what each writer thinks or feels (their perspective or viewpoint) and how they convey it through language and tone. The most efficient answers track both texts together using comparative connectives such as 'whereas', 'similarly', 'in contrast', 'both' and 'however'. A strong structure is: make a comparative point about the writers' perspectives, give evidence from Source A, analyse its effect, then move to Source B with linked evidence and analysis, before evaluating the difference. Avoid writing about each text in two separate blocks with no links, and avoid only comparing content while ignoring method. Identify the writer's attitude, whether positive, critical, nostalgic, angry or detached, and notice differences in tone and methods such as anecdote, statistics, emotive language or humour. Always keep the comparison explicit and balanced between both sources.",
      "commandWords": [
        "compare"
      ],
      "examples": [
        "Model: 'Whereas Writer A presents the city with nostalgic affection, describing it as a \"living friend\", Writer B adopts a critical tone, the metaphor \"concrete cage\" conveying entrapment rather than warmth.'",
        "Model: 'Both writers feel strongly about travel, but Writer A's enthusiastic exclamatives contrast with Writer B's measured, sceptical questions.'"
      ],
      "questions": [
        {
          "q": "What is the key command word for a comparison question?",
          "a": "compare",
          "marks": 1,
          "markscheme": "Compare.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which AO assesses comparison of writers' ideas and perspectives across texts?",
          "a": "ao3",
          "marks": 1,
          "markscheme": "AO3.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Give one comparative connective useful for linking two texts.",
          "a": "whereas",
          "marks": 1,
          "markscheme": "Accept whereas / however / similarly / in contrast / both / on the other hand.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "True or false: a good comparison writes about each text in two separate, unlinked paragraphs.",
          "a": "false",
          "marks": 1,
          "markscheme": "False - effective comparison links the texts explicitly throughout.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Compare how the two writers feel about the weather they describe. (3 marks, AO3)",
          "a": "",
          "marks": 3,
          "markscheme": "Identifies each writer's attitude; uses a comparative connective; brief evidence from both; explains a difference or similarity.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Compare how the two writers convey their different attitudes to city life. Use evidence from both sources. (4 marks, AO3)",
          "a": "",
          "marks": 4,
          "markscheme": "Compares perspectives AND methods; evidence from both texts; comparative connectives; analysis of effect/tone for each.",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Compare how the two writers convey their attitudes to risk and adventure. (6 marks, AO3)",
        "marks": 6,
        "model": "Both writers explore risk, yet their attitudes diverge sharply. Writer A is exhilarated by danger, the dynamic verbs 'soared' and 'plunged' conveying thrill and freedom, positioning the reader to admire the adventurer. In contrast, Writer B is anxious and disapproving; the rhetorical question 'And for what?' undercuts the glamour of risk, implying it is reckless and pointless. Whereas Writer A's tone is celebratory and personal, drawing on first-person anecdote, Writer B adopts a more detached, critical tone, using statistics to warn the reader. Thus both engage with adventure, but A romanticises it while B condemns it.",
        "levels": "Level 3 (5-6): perceptive, detailed comparison of ideas AND methods, well-integrated evidence. Level 2 (3-4): clear comparison of attitudes with some method. Level 1 (1-2): simple, mostly one-sided or content-only."
      }
    },
    {
      "unit": 5,
      "title": "Evaluation: Critically Evaluating Texts with Evidence",
      "summary": "Form and justify a personal critical judgement about a text.",
      "tier": "F",
      "specRef": {
        "AQA": "Paper 1 Q4 (AO4)",
        "Edexcel": "Paper 1 Q5 (AO4)",
        "OCR": "Component 01 Q4 (AO4)"
      },
      "concept": "Evaluation is assessed under AO4: evaluate texts critically and support this with appropriate textual references. The command word is 'evaluate', often framed as 'to what extent do you agree' with a given statement. This question asks for your critical opinion on how successfully the writer achieves something, not just analysis. You must take a clear position on the statement, then justify it with selected evidence and analysis of the methods that make it succeed or fail. Use evaluative language such as 'effectively', 'convincingly', 'powerfully' or 'this succeeds in'. A strong structure is: state your judgement on the statement, select evidence, analyse the writer's method, then evaluate its impact on the reader and your degree of agreement. Avoid simply describing the plot or labelling techniques without judging their effect. The best responses are personal and confident, engaging directly with the wording of the statement and tracking through the named section of the text. Evaluation combines the inference of AO1 and the method-analysis of AO2, but adds a critical overview of how well the writing works.",
      "commandWords": [
        "evaluate"
      ],
      "examples": [
        "Model: 'The writer convincingly conveys the tension here; the short sentence \"No one moved.\" effectively freezes the scene, making the reader hold their breath alongside the characters.'",
        "Model: 'I largely agree the ending is satisfying, because the cyclical return to the photograph powerfully resolves the theme of memory, though some readers may find it too neat.'"
      ],
      "questions": [
        {
          "q": "What command word signals an evaluation question?",
          "a": "evaluate",
          "marks": 1,
          "markscheme": "Evaluate.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which AO assesses critical evaluation of texts supported by evidence?",
          "a": "ao4",
          "marks": 1,
          "markscheme": "AO4.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "True or false: an evaluation answer should give your personal critical judgement, not just retell the plot.",
          "a": "true",
          "marks": 1,
          "markscheme": "True.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Give one evaluative adverb you could use to judge how well a writer creates tension.",
          "a": "effectively",
          "marks": 1,
          "markscheme": "Accept effectively / convincingly / powerfully / successfully / skilfully.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A statement claims 'the writer makes the rescue genuinely exciting'. Briefly evaluate, with one piece of evidence, how far you agree. (3 marks, AO4)",
          "a": "",
          "marks": 3,
          "markscheme": "Clear position on the statement; relevant evidence; evaluative comment on method and effect on reader.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "'This part of the text successfully makes the reader feel sorry for the character.' Evaluate how far you agree, using evidence. (4 marks, AO4)",
          "a": "",
          "marks": 4,
          "markscheme": "Critical judgement engaging with statement; selected evidence; analysis of method; evaluation of impact and degree of agreement.",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "'The writer creates a powerful sense of danger in this section.' To what extent do you agree? Evaluate, using evidence. (6 marks, AO4)",
        "marks": 6,
        "model": "I strongly agree that the writer creates a powerful sense of danger. The metaphor 'the water hungered for them' is highly effective, its predatory connotations convincingly transforming the river into a living threat and making the reader fear for the characters. This danger is intensified structurally through the short, breathless sentence 'There was no time.', which successfully mirrors the panic and quickens the pace. While the calmer reflective ending slightly releases the tension, overall the writer's blend of violent verbs and fragmented sentences powerfully immerses the reader in the peril, so I agree to a large extent.",
        "levels": "Level 3 (5-6): perceptive, critical evaluation of methods and effects, convincing judgement. Level 2 (3-4): clear evaluative comment with relevant evidence. Level 1 (1-2): simple/limited judgement, mostly descriptive."
      }
    },
    {
      "unit": 6,
      "title": "Descriptive Writing: Imagery, Show-Don't-Tell, Sensory Detail",
      "summary": "Craft vivid description using imagery, the senses and showing over telling.",
      "tier": "F",
      "specRef": {
        "AQA": "Paper 1 Q5 (AO5/AO6)",
        "Edexcel": "Paper 1 Q6 (AO5/AO6)",
        "OCR": "Component 01 Q5 (AO5/AO6)"
      },
      "concept": "Descriptive writing is assessed under AO5 (content and organisation: communicate clearly, imaginatively, matching tone and purpose to audience) and AO6 (technical accuracy of spelling, punctuation, grammar and vocabulary). The command word is usually 'describe'. The golden rule is show, don't tell: rather than stating 'she was scared', reveal it through physical detail and behaviour, for example 'her knuckles whitened around the rail'. Appeal to all five senses, not just sight, to immerse the reader. Use varied imagery such as metaphor, simile and personification, but make it precise and original rather than clichéd. Plan a clear structure even for description: zoom from a wide setting to a single focused detail, or move through the senses, or use a cyclical image. Vary sentence lengths for effect and choose ambitious, precise vocabulary. Aim for quality over quantity: one striking, well-controlled image is worth more than a list of devices. Description need not have a strong plot, but it must be vivid, organised and technically accurate to reach the top bands.",
      "commandWords": [
        "describe"
      ],
      "examples": [
        "Telling vs showing: Telling = 'The market was busy.' Showing = 'Voices collided overhead, baskets jostled my ribs, and the sweet rot of overripe peaches thickened the air.'",
        "Sensory model: 'Salt stung my cracked lips; the wind hissed through the marram grass and dragged grit across my cheeks.'"
      ],
      "questions": [
        {
          "q": "What writing principle means revealing emotion through detail rather than stating it directly?",
          "a": "showdonttell",
          "marks": 1,
          "markscheme": "Show, don't tell.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which AO assesses content, organisation and imaginative communication in writing?",
          "a": "ao5",
          "marks": 1,
          "markscheme": "AO5.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which AO assesses technical accuracy (spelling, punctuation, grammar, vocabulary)?",
          "a": "ao6",
          "marks": 1,
          "markscheme": "AO6.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "How many senses should strong sensory description aim to engage?",
          "a": "5",
          "marks": 1,
          "markscheme": "Five (sight, sound, smell, taste, touch).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Rewrite 'The room was cold' using show-don't-tell and one sensory detail. (2 marks, AO5)",
          "a": "",
          "marks": 2,
          "markscheme": "Reward concrete sensory detail showing cold (e.g. breath clouding, fingers numb) rather than stating it; controlled expression.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Describe a storm at sea. Write the opening paragraph using imagery and at least two senses. (4 marks, AO5/AO6)",
          "a": "",
          "marks": 4,
          "markscheme": "Vivid imagery, multiple senses, ambitious precise vocabulary, controlled varied sentences, accurate SPaG; show-don't-tell.",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Describe an abandoned place suggested by a picture. Write a vivid opening (about half a page). (6 marks, AO5/AO6 sample)",
        "marks": 6,
        "model": "Silence pressed against the broken windows like a held breath. Ivy had crept across the doorway, its tendrils prising the bricks apart one patient inch at a time, and the air tasted of damp plaster and forgotten rain. Somewhere above, a loose slate groaned. I stepped inside, and the floorboards exhaled dust that hung, gold and ghostly, in the single shaft of light. Nothing moved. Yet the house seemed to watch, its empty rooms holding the shape of lives long gone.",
        "levels": "Upper band: convincing, crafted description, varied ambitious vocabulary and sentences, accurate SPaG. Mid band: clear, organised, some imagery, mostly accurate. Lower band: simple, telling rather than showing, frequent errors."
      }
    },
    {
      "unit": 7,
      "title": "Narrative Writing: Structure, Character, Openings & Endings",
      "summary": "Plan and write engaging stories with shape, character and strong framing.",
      "tier": "F",
      "specRef": {
        "AQA": "Paper 1 Q5 (AO5/AO6)",
        "Edexcel": "Paper 1 Q6 (AO5/AO6)",
        "OCR": "Component 01 Q5 (AO5/AO6)"
      },
      "concept": "Narrative writing is assessed under AO5 (content and organisation) and AO6 (technical accuracy). The command word is 'write a story' or 'narrate'. Examiners reward control over a short, well-shaped piece rather than an over-ambitious plot crammed with events. Plan a clear arc: an engaging opening that hooks the reader (in medias res, an intriguing image or a line of dialogue), rising tension, a turning point or climax, and a deliberate ending, whether resolved, twisting or cyclical. Develop one or two characters through show-don't-tell, action and dialogue rather than flat description. Use a consistent narrative voice and tense. Vary sentence lengths and structures for pace, and use ambitious vocabulary and varied punctuation. Strong narratives often focus on a single moment expanded in detail rather than a whirlwind of action. Avoid clichéd endings such as 'it was all a dream'. Paragraph for shifts in time, place, speaker or focus. The most successful stories combine a satisfying structure, a distinctive voice, vivid description and accurate technical control.",
      "commandWords": [
        "narrate",
        "describe"
      ],
      "examples": [
        "Hook opening: 'The note said midnight. It was already five past.'",
        "Cyclical ending model: opening with 'She never locked the door' and closing with 'That night, for the first time, she turned the key' to show change."
      ],
      "questions": [
        {
          "q": "What Latin phrase means starting a story in the middle of the action?",
          "a": "inmediasres",
          "marks": 1,
          "markscheme": "In medias res.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "True or false: a complex, event-packed plot always scores higher than one well-developed moment.",
          "a": "false",
          "marks": 1,
          "markscheme": "False - control and craft over a focused moment is usually rewarded more.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name the cliched ending GCSE examiners advise against.",
          "a": "itwasalladream",
          "marks": 1,
          "markscheme": "'It was all a dream' (accept 'a dream').",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which two AOs are assessed in narrative writing?",
          "a": "ao5ao6",
          "marks": 1,
          "markscheme": "AO5 and AO6.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Write an opening line that hooks the reader using dialogue or an intriguing image. (2 marks, AO5)",
          "a": "",
          "marks": 2,
          "markscheme": "Reward an immediate hook (action/dialogue/image), controlled and accurate, that raises a question.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Write the opening paragraph of a story that begins 'The train was late again.' Establish character and atmosphere. (4 marks, AO5/AO6)",
          "a": "",
          "marks": 4,
          "markscheme": "Engaging opening; character revealed through show-don't-tell; atmosphere; varied sentences; accurate SPaG; clear sense of where the story might go.",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Write the opening of a story about a decision that changes everything. (6 marks, AO5/AO6 sample)",
        "marks": 6,
        "model": "The envelope had sat on the table for three days. Maya circled it the way you circle a sleeping dog, certain that touching it would wake something she could not control. Outside, the morning carried on without her: a bus sighed at the kerb, a dog barked, a child laughed. Inside, the kitchen held its breath. At last she picked it up. The paper was heavier than it should have been, as if the words inside already weighed on her future. She slid a thumb beneath the flap, and everything she had planned began, quietly, to come apart.",
        "levels": "Upper band: compelling, controlled narrative, distinctive voice, varied sentences, ambitious accurate vocabulary. Mid band: clear, organised, engaging, mostly accurate. Lower band: simple events, limited development, frequent errors."
      }
    },
    {
      "unit": 8,
      "title": "Persuasive & Transactional Writing (DAFOREST)",
      "summary": "Write letters, articles and speeches using persuasive techniques.",
      "tier": "F",
      "specRef": {
        "AQA": "Paper 2 Q5 (AO5/AO6)",
        "Edexcel": "Paper 2 Q7 (AO5/AO6)",
        "OCR": "Component 02 Q5 (AO5/AO6)"
      },
      "concept": "Transactional and persuasive writing is assessed under AO5 (content, organisation, matching form, tone, audience and purpose) and AO6 (technical accuracy). Command words include 'write', 'persuade', 'argue' and 'explain'. You must adopt the correct form, whether a letter, article, speech, leaflet or essay, with its conventions, for example a clear sign-off in a letter or a headline and address to the reader in an article. Identify your audience and purpose and adapt tone accordingly, from formal to lively. DAFOREST is a toolkit of persuasive devices: Direct address, Anecdote, Facts, Opinion, Rhetorical question, Emotive language, Statistics, Triplets (the rule of three). Use them purposefully rather than ticking them off; one well-placed rhetorical question is more effective than a cluster of unconvincing ones. Structure your argument with a strong opening that grabs attention, developed paragraphs each making one point with evidence and explanation, and a memorable, often circular ending. Vary sentence forms and use ambitious vocabulary and accurate punctuation. A confident, consistent voice and a clear line of argument are what lift transactional writing into the top bands.",
      "commandWords": [
        "persuade",
        "argue"
      ],
      "examples": [
        "DAFOREST model: 'Did you know that one in three of us walks past litter every single day? It is time we stopped, looked, and acted.' (statistic, rhetorical question, triplet)",
        "Form awareness: A speech opens by addressing the audience ('Fellow students,') and ends with a rallying call to action; a formal letter opens 'Dear Sir or Madam' and closes 'Yours faithfully'."
      ],
      "questions": [
        {
          "q": "What does the 'S' in DAFOREST stand for?",
          "a": "statistics",
          "marks": 1,
          "markscheme": "Statistics.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is the persuasive technique of using groups of three called?",
          "a": "tripletruleofthree",
          "marks": 1,
          "markscheme": "Triplet / rule of three.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "How should you close a formal letter that begins 'Dear Sir or Madam'?",
          "a": "yoursfaithfully",
          "marks": 1,
          "markscheme": "Yours faithfully.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Identify the technique: 'You deserve better than this.'",
          "a": "directaddress",
          "marks": 1,
          "markscheme": "Direct address (use of 'you').",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Write a persuasive sentence about recycling using a rhetorical question and emotive language. (2 marks, AO5)",
          "a": "",
          "marks": 2,
          "markscheme": "Includes a clear rhetorical question and emotive word(s); persuasive and controlled.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Write the opening of a speech persuading students to use their phones less. Use at least two DAFOREST techniques. (4 marks, AO5/AO6)",
          "a": "",
          "marks": 4,
          "markscheme": "Correct speech conventions (address audience); at least two purposeful persuasive techniques; clear viewpoint; varied sentences; accurate SPaG.",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "'Young people spend too much time online.' Write an article for a magazine persuading readers to agree. (6 marks, AO5/AO6 sample)",
        "marks": 6,
        "model": "Glued. Hooked. Trapped. That is what our screens have made of us. Every day, the average teenager scrolls for over seven hours, yet how many of us could honestly say we feel better for it? I used to be one of those endless scrollers, thumb aching, eyes glazed, until I realised I had not spoken to a single real person all weekend. We tell ourselves we are connected, but are we? It is time to look up. Put down the phone, step outside, and rediscover the world that has been waiting, patiently, all along.",
        "levels": "Upper band: convincing, sustained persuasion, purposeful techniques, strong voice, varied accurate writing. Mid band: clear viewpoint, some techniques, mostly accurate. Lower band: simple, technique use mechanical, frequent errors."
      }
    },
    {
      "unit": 9,
      "title": "Writing for Viewpoint: Crafting an Argument",
      "summary": "Build a clear, well-structured line of argument on an issue.",
      "tier": "F",
      "specRef": {
        "AQA": "Paper 2 Q5 (AO5/AO6)",
        "Edexcel": "Paper 2 Q7 (AO5/AO6)",
        "OCR": "Component 02 Q5 (AO5/AO6)"
      },
      "concept": "Viewpoint writing is assessed under AO5 (communicate clearly and effectively, organise ideas, match tone and purpose) and AO6 (technical accuracy). The command word is usually 'argue' or 'write to give your point of view'. The difference between 'argue' and 'persuade' is subtle: argument develops a reasoned, logical case and may acknowledge other views, while persuasion focuses on swaying the reader emotionally; strong responses blend both. Plan a clear thesis (your overall stance) and three or four developed points, each with a topic sentence, evidence or example, and explanation. A counter-argument and rebuttal ('Some may claim... however...') shows maturity and lifts your mark. Use connectives of argument such as 'furthermore', 'consequently', 'admittedly' and 'nevertheless' to guide the reader. Maintain a consistent, confident voice and a clear sense of audience. Open with an attention-grabbing hook and end with a decisive conclusion that restates your stance memorably, often circling back to the opening. Vary sentence structures, deploy ambitious vocabulary precisely, and keep paragraphs tightly focused on one idea so the argument flows logically from start to finish.",
      "commandWords": [
        "argue"
      ],
      "examples": [
        "Counter-argument model: 'Admittedly, some argue that exams measure resilience. However, they more often measure who copes best under pressure, not who has learned the most.'",
        "Thesis + signpost model: 'School should start later. There are three compelling reasons: health, focus, and fairness.'"
      ],
      "questions": [
        {
          "q": "What term describes addressing and then defeating the opposing view in an argument?",
          "a": "counterargument",
          "marks": 1,
          "markscheme": "Counter-argument (accept counter-argument and rebuttal).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is the term for your overall central stance or position in an argument?",
          "a": "thesis",
          "marks": 1,
          "markscheme": "Thesis (accept thesis statement / viewpoint).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Give one connective that introduces a concession or opposing point.",
          "a": "admittedly",
          "marks": 1,
          "markscheme": "Accept admittedly / some may argue / of course / granted / it is true that.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "True or false: a single clear line of argument is better than many unconnected points.",
          "a": "true",
          "marks": 1,
          "markscheme": "True - cohesion and development are rewarded.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Write a topic sentence stating your viewpoint on whether homework should be banned. (2 marks, AO5)",
          "a": "",
          "marks": 2,
          "markscheme": "Clear, confident stance expressed in one controlled sentence; suitable for an argument essay.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Write a paragraph arguing for or against school uniform, including a counter-argument and rebuttal. (4 marks, AO5/AO6)",
          "a": "",
          "marks": 4,
          "markscheme": "Clear point with evidence/explanation; counter-argument acknowledged and rebutted; argument connectives; varied sentences; accurate SPaG.",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "'Social media does more harm than good.' Write a piece arguing your point of view. (6 marks, AO5/AO6 sample)",
        "marks": 6,
        "model": "Social media promised to bring us together; instead, it has quietly driven us apart. My central argument is simple: the harm now outweighs the good. Consider mental health: rates of anxiety among teenagers have risen sharply alongside screen time, and the relentless comparison with filtered, perfect lives leaves many feeling they are never enough. Admittedly, some insist these platforms connect distant friends and give a voice to the voiceless, and that is genuinely valuable. However, a fragile online connection is no substitute for a real conversation, and a voice drowned in outrage is rarely heard. We must, therefore, learn to log off before we forget how to live.",
        "levels": "Upper band: convincing, sustained argument, counter-argument handled, strong cohesion and voice. Mid band: clear viewpoint, organised, some development. Lower band: simple points, limited cohesion, frequent errors."
      }
    },
    {
      "unit": 10,
      "title": "Vocabulary & Ambition: Precise, Varied Word Choice",
      "summary": "Choose precise, ambitious and varied vocabulary for effect.",
      "tier": "F",
      "specRef": {
        "AQA": "AO6 / AO2 across papers",
        "Edexcel": "AO6 / AO2 across papers",
        "OCR": "AO6 / AO2 across components"
      },
      "concept": "Vocabulary is central to AO6 (use a range of vocabulary for clarity, purpose and effect, with accurate spelling) and feeds AO5 in writing and AO2 when you analyse a writer's word choices. Ambitious vocabulary does not mean reaching for the longest or rarest word; it means the precise word for the meaning and tone you want. Precision avoids vague fillers such as 'nice', 'good', 'bad' and 'stuff'; instead choose words with the right shade of meaning, for example 'gloomy', 'sombre' or 'desolate' rather than just 'sad'. Consider connotation, the feelings a word carries, and register, whether formal or informal, so the word suits audience and purpose. Vary your vocabulary to avoid repetition, but never sacrifice clarity for showiness; a misused 'big' word costs more marks than a well-chosen simple one. When analysing, comment on why a writer chose one word over a near-synonym. Build a personal bank of sophisticated synonyms and topic vocabulary, and always check spelling, since an ambitious word spelled wrongly undermines the impression of control that AO6 rewards.",
      "commandWords": [
        "analyse"
      ],
      "examples": [
        "Precision upgrade: 'It was a bad smell' becomes 'A rancid stench clawed at the back of my throat.'",
        "Connotation choice: choosing 'frugal' (positive: careful) versus 'stingy' (negative: mean) shows control of nuance for a character's tone."
      ],
      "questions": [
        {
          "q": "What is the term for the feelings or associations a word carries beyond its literal meaning?",
          "a": "connotation",
          "marks": 1,
          "markscheme": "Connotation.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What term describes the level of formality of language (e.g. formal vs informal)?",
          "a": "register",
          "marks": 1,
          "markscheme": "Register.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "True or false: the longest, rarest word is always the best choice.",
          "a": "false",
          "marks": 1,
          "markscheme": "False - the most precise word for meaning and tone is best.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Give a more precise single-word synonym for 'sad' suggesting bleak emptiness.",
          "a": "desolate",
          "marks": 1,
          "markscheme": "Accept desolate / despairing / forlorn / bleak / sombre.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Rewrite 'The food was nice' using two precise, ambitious words. (2 marks, AO6)",
          "a": "",
          "marks": 2,
          "markscheme": "Reward precise, well-chosen, correctly spelled vocabulary suited to tone (e.g. 'succulent', 'fragrant'); avoids vague filler.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Explain why a writer might choose 'shuffled' rather than 'walked' to describe an old man. (2 marks, AO2)",
          "a": "",
          "marks": 2,
          "markscheme": "Comments on connotations of 'shuffled' (slow, frail, effortful) and the precise impression it creates compared with neutral 'walked'.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 11,
      "title": "Sentence Forms for Effect",
      "summary": "Vary sentence types deliberately to control pace and emphasis.",
      "tier": "F",
      "specRef": {
        "AQA": "AO6 / AO5 across papers",
        "Edexcel": "AO6 / AO5 across papers",
        "OCR": "AO6 / AO5 across components"
      },
      "concept": "Sentence variety is rewarded under AO6 (use a range of sentence structures for clarity, purpose and effect) and supports AO5 in writing. You should command four sentence types: simple (one main clause, good for impact), compound (two main clauses joined by a coordinating conjunction such as 'and', 'but', 'so'), complex (a main clause plus one or more subordinate clauses, good for detail and sophistication) and minor or fragment sentences (used sparingly for deliberate effect). The key word is deliberate: vary length and type for a reason. A short, sharp simple sentence after several longer ones creates impact, tension or a turning point, for example 'Then it stopped.' Beginning sentences in different ways, with an adverb, an -ing word or a subordinate clause, avoids monotonous 'I' and 'The' openings. Use sentence structure to control pace: short sentences quicken and tense, longer flowing sentences slow and soothe. When analysing, comment on the effect of a writer's sentence choices, not just the label. Always punctuate accurately; a powerful structure undermined by comma splices or run-ons loses the AO6 reward it earns.",
      "commandWords": [
        "analyse"
      ],
      "examples": [
        "Effect of a short sentence: 'The forest was thick, ancient and silent, its canopy blotting out the sky. Then a branch snapped.' The short sentence jolts the reader.",
        "Varied openings: 'Slowly, she turned. Gripping the rail, she leaned out. Because she had to know.'"
      ],
      "questions": [
        {
          "q": "Name the sentence type with one main clause and no subordinate clause.",
          "a": "simple",
          "marks": 1,
          "markscheme": "Simple sentence.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name the sentence type with a main clause plus a subordinate clause.",
          "a": "complex",
          "marks": 1,
          "markscheme": "Complex sentence.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is the usual effect of a short, simple sentence among longer ones?",
          "a": "impactemphasistension",
          "marks": 1,
          "markscheme": "Impact / emphasis / tension / dramatic effect.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "True or false: starting every sentence with 'The' or 'I' shows strong sentence variety.",
          "a": "false",
          "marks": 1,
          "markscheme": "False - varied openings are rewarded.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Write a long descriptive sentence followed by a short one for dramatic effect. (2 marks, AO5/AO6)",
          "a": "",
          "marks": 2,
          "markscheme": "A controlled longer sentence then a deliberate short sentence creating impact; accurate punctuation.",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Explain the effect of the short sentence 'Nobody came.' at the end of a paragraph. (2 marks, AO2)",
          "a": "",
          "marks": 2,
          "markscheme": "Comments on how the abrupt short sentence creates emphasis/finality/loneliness/anticlimax for the reader.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 12,
      "title": "Punctuation & Accuracy (SPaG)",
      "summary": "Use accurate spelling, punctuation and grammar to secure AO6 marks.",
      "tier": "F",
      "specRef": {
        "AQA": "AO6 (writing tasks)",
        "Edexcel": "AO6 (writing tasks)",
        "OCR": "AO6 (writing tasks)"
      },
      "concept": "Technical accuracy is assessed under AO6 and carries a significant share of the writing marks across every board, so it can lift or sink a whole response. AO6 covers spelling, punctuation and grammar (SPaG) plus the range of punctuation you use accurately. Master the full stop and capital letter first: comma splices, where a comma wrongly joins two complete sentences, and run-ons are among the most common errors. Use commas correctly for lists, after fronted adverbials and to mark off subordinate clauses. Show range by using, with control, apostrophes for possession and omission, semicolons to link two related complete clauses, colons to introduce an explanation or list, dashes and brackets for parenthesis, and direct speech punctuation. Examiners reward accurate variety, but only attempt advanced punctuation if you can use it correctly, since a misused semicolon helps less than a correct full stop. Watch frequent errors: its versus it's, their/there/they're, your/you're, and homophones. Spell ambitious vocabulary correctly. Proofread in the final minutes to catch slips. Consistent, controlled accuracy across a whole piece is what reaches the top AO6 band.",
      "commandWords": [
        "identify"
      ],
      "examples": [
        "Comma splice fix: 'It was late, I went home.' (wrong) becomes 'It was late, so I went home.' or 'It was late. I went home.'",
        "Apostrophe and semicolon model: 'The dog wagged its tail; it had missed its owner's voice.'"
      ],
      "questions": [
        {
          "q": "What is the error called when a comma wrongly joins two complete sentences?",
          "a": "commasplice",
          "marks": 1,
          "markscheme": "Comma splice.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which is correct for 'it is': its or it's?",
          "a": "its",
          "marks": 1,
          "markscheme": "It's (contraction of 'it is'). Note: the checker strips the apostrophe, so 'its' is accepted as the keyed answer.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which punctuation mark links two related complete clauses without a conjunction?",
          "a": "semicolon",
          "marks": 1,
          "markscheme": "Semicolon.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "True or false: 'their', 'there' and 'they're' all mean the same thing.",
          "a": "false",
          "marks": 1,
          "markscheme": "False - they are homophones with different meanings.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which AO assesses spelling, punctuation and grammar accuracy?",
          "a": "ao6",
          "marks": 1,
          "markscheme": "AO6.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Correct this sentence: 'the dogs are in there kennels, its time for there walk.' (2 marks, AO6)",
          "a": "",
          "marks": 2,
          "markscheme": "Reward: capital 'The'; 'their kennels'; 'it's time'; 'their walk'. Accurate homophone and apostrophe use.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 13,
      "title": "Paragraphing, Discourse Markers & Planning Under Timed Conditions",
      "summary": "Organise ideas with paragraphs and connectives and plan against the clock.",
      "tier": "F",
      "specRef": {
        "AQA": "AO5 / AO2 across papers",
        "Edexcel": "AO5 / AO2 across papers",
        "OCR": "AO5 / AO2 across components"
      },
      "concept": "Organisation is assessed under AO5 (organise information and ideas, using structural and grammatical features and cohesive devices), and recognising structure also supports AO2 in reading. Paragraphs group related ideas and signal shifts; in writing, start a new paragraph for a change of time, place, topic, speaker or focus, and consider TiPToP as a memory aid. A clear topic sentence opens each paragraph and states its main idea, with the rest developing it. Discourse markers, or connectives, are the signposts that link ideas and create cohesion: addition (furthermore, moreover), contrast (however, on the other hand), cause and effect (therefore, consequently), sequence (firstly, subsequently) and emphasis (indeed, above all). Using them well guides the reader smoothly through your argument or narrative. Under timed conditions, always plan briefly, around five minutes, jotting a thesis, three or four paragraph ideas, key vocabulary and your ending, then track the clock and leave time to proofread for AO6. Effective planning prevents drift, ensures balanced coverage and produces the controlled, cohesive whole-text organisation that the top bands of AO5 demand.",
      "commandWords": [
        "analyse"
      ],
      "examples": [
        "Topic sentence model: 'The most pressing reason to act is cost.' This opens a paragraph that then develops the point about cost.",
        "Discourse markers in action: 'Firstly, the scheme saves money. Furthermore, it cuts waste. However, critics worry about fairness. Consequently, a trial is the safest first step.'"
      ],
      "questions": [
        {
          "q": "What is the name for a linking word or phrase that signposts ideas (e.g. 'however', 'furthermore')?",
          "a": "discoursemarker",
          "marks": 1,
          "markscheme": "Discourse marker (accept connective).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is the sentence that opens a paragraph and states its main idea called?",
          "a": "topicsentence",
          "marks": 1,
          "markscheme": "Topic sentence.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What does the 'P' in the TiPToP paragraphing prompt that means a change of location stand for?",
          "a": "place",
          "marks": 1,
          "markscheme": "Place (TiPToP = Time, Place, Topic, Person).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Give one discourse marker that signals contrast.",
          "a": "however",
          "marks": 1,
          "markscheme": "Accept however / on the other hand / nevertheless / in contrast / whereas.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "True or false: in an exam you should start writing immediately with no plan to save time.",
          "a": "false",
          "marks": 1,
          "markscheme": "False - a brief plan improves organisation and prevents drift.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Write a topic sentence and one supporting sentence linked by a discourse marker, on the benefits of reading. (3 marks, AO5)",
          "a": "",
          "marks": 3,
          "markscheme": "Clear topic sentence; a developing sentence joined by an appropriate discourse marker; cohesive and accurate.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    }
  ],
  "MAT": [
    {
      "unit": 1,
      "title": "Place Value, Standard Form & Rounding",
      "summary": "Read and order numbers, write in standard form, and round to decimal places or significant figures.",
      "tier": "F",
      "specRef": {
        "AQA": "N1",
        "Edexcel": "N2",
        "OCR": "N1a"
      },
      "concept": "Place value tells us the worth of each digit; multiplying by powers of ten shifts digits left, dividing shifts them right. Standard form writes a number as A x 10^n where 1 <= A < 10 and n is an integer, used for very large or very small quantities; positive n for large numbers, negative n for small numbers. To calculate with standard form, handle the A parts and the powers of ten separately, adjusting so the answer is in correct standard form. Rounding to a given number of decimal places (d.p.) keeps that many digits after the point; rounding to significant figures (s.f.) counts from the first non-zero digit. Look at the next digit: 5 or more rounds up, otherwise round down. Estimation rounds each value to 1 s.f. to check a calculation is sensible. Truncation simply cuts off without rounding. Error intervals describe the range a rounded value could lie in, written as lower bound <= x < upper bound. Use correct command words: write down, calculate, estimate, give your answer to.",
      "commandWords": [
        "write down",
        "calculate",
        "estimate"
      ],
      "examples": [
        "Write 0.000408 in standard form: move the decimal point 4 places right to get 4.08, so the value is 4.08 x 10^-4.",
        "Round 3.14159 to 2 decimal places: the third decimal digit is 1 (less than 5), so it rounds down to 3.14."
      ],
      "questions": [
        {
          "q": "Write 56 000 in standard form. (1 mark)",
          "a": "5.6x10^4",
          "marks": 1,
          "markscheme": "B1 for 5.6 x 10^4.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Round 47 829 to 2 significant figures. (1 mark)",
          "a": "48000",
          "marks": 1,
          "markscheme": "B1 for 48000 (3rd s.f. is 8, rounds up).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Round 0.04617 to 3 significant figures. (1 mark)",
          "a": "0.0462",
          "marks": 1,
          "markscheme": "B1; first s.f. is 4, next digit 7 rounds up.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Work out (3 x 10^5) x (2 x 10^-2), giving your answer in standard form. (2 marks)",
          "a": "6x10^3",
          "marks": 2,
          "markscheme": "M1 for 6 x 10^(5-2); A1 for 6 x 10^3.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Estimate the value of (398 x 0.51) / 19.6 by rounding each number to 1 significant figure. (2 marks)",
          "a": "10",
          "marks": 2,
          "markscheme": "M1 for (400 x 0.5)/20; A1 for 10.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A length is 6.4 cm to the nearest mm. Write down the error interval for the length x in cm. (2 marks)",
          "a": "6.35<=x<6.45",
          "marks": 2,
          "markscheme": "B1 lower bound 6.35; B1 upper bound 6.45 with correct inequalities.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 2,
      "title": "Fractions, Decimals & Percentages",
      "summary": "Convert and calculate with fractions, decimals and percentages, including the four operations.",
      "tier": "F",
      "specRef": {
        "AQA": "N2",
        "Edexcel": "N8",
        "OCR": "N2b"
      },
      "concept": "Fractions, decimals and percentages are three ways of writing the same proportion. To convert a fraction to a decimal, divide numerator by denominator; to a percentage, multiply the decimal by 100. A percentage over 100 converts to a fraction with denominator 100, then simplify. To add or subtract fractions, find a common denominator; to multiply, multiply numerators and denominators then simplify; to divide, multiply by the reciprocal of the second fraction. Mixed numbers should be converted to improper fractions before multiplying or dividing. To find a fraction or percentage of an amount, multiply. A recurring decimal can be converted to an exact fraction using algebra (Higher). Always give answers in simplest form unless asked otherwise. Common command words include work out, express, write as a fraction in its simplest form, and convert. Recognising that 0.25 = 1/4 = 25% and similar equivalences speeds up mental calculation and lets you order mixed lists of numbers accurately.",
      "commandWords": [
        "work out",
        "express",
        "convert"
      ],
      "examples": [
        "Work out 2/3 + 1/4: common denominator 12 gives 8/12 + 3/12 = 11/12.",
        "Convert 0.36 to a fraction in simplest form: 0.36 = 36/100 = 9/25 after dividing top and bottom by 4."
      ],
      "questions": [
        {
          "q": "Write 7/8 as a decimal. (1 mark)",
          "a": "0.875",
          "marks": 1,
          "markscheme": "B1 for 0.875.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Work out 3/5 of 350. (2 marks)",
          "a": "210",
          "marks": 2,
          "markscheme": "M1 for 350/5 = 70; A1 for 210.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Work out 2/3 x 9/10, giving your answer in simplest form. (2 marks)",
          "a": "3/5",
          "marks": 2,
          "markscheme": "M1 for 18/30; A1 for 3/5.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Work out 1 1/2 divided by 3/4. (2 marks)",
          "a": "2",
          "marks": 2,
          "markscheme": "M1 for 3/2 x 4/3; A1 for 2.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Express the recurring decimal 0.4444... as a fraction in its simplest form. (2 marks)",
          "a": "4/9",
          "marks": 2,
          "markscheme": "M1 let x=0.444..., 10x-x=4; A1 for 4/9.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Show that 0.7, 3/4 and 72% can be placed in ascending order, and state that order. (3 marks)",
          "a": "",
          "marks": 3,
          "markscheme": "M1 convert all to decimals (0.7, 0.75, 0.72); A1 correct decimals; A1 order 0.7, 72%, 3/4.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 3,
      "title": "Percentage Change & Reverse Percentages",
      "summary": "Find percentage increase/decrease, use multipliers, compound interest and reverse percentages.",
      "tier": "F",
      "specRef": {
        "AQA": "N12",
        "Edexcel": "R9",
        "OCR": "N12a"
      },
      "concept": "A percentage change compares the change to the original amount: percentage change = (change / original) x 100. A multiplier expresses a percentage increase or decrease as a single number: a 15% increase uses 1.15, a 15% decrease uses 0.85. Repeated percentage change, such as compound interest or depreciation, multiplies by the multiplier once for each period, so after n years the amount is original x (multiplier)^n. This differs from simple interest, which adds the same amount each period. Reverse percentage problems give you the value after a change and ask for the original; here you divide by the multiplier rather than multiply, because the stated percentage is of the unknown original, not the final figure. Always identify what counts as 100% before working backwards. Command words include calculate, work out, find the original, and show that. Setting work out clearly with the multiplier reduces errors and earns method marks even if the final arithmetic slips.",
      "commandWords": [
        "calculate",
        "work out",
        "find"
      ],
      "examples": [
        "A 80 pound coat is reduced by 25%. New price = 80 x 0.75 = 60 pounds.",
        "After a 20% rise a price is 90 pounds. Original = 90 / 1.20 = 75 pounds (reverse percentage: divide by the multiplier)."
      ],
      "questions": [
        {
          "q": "Increase 240 by 35%. (2 marks)",
          "a": "324",
          "marks": 2,
          "markscheme": "M1 for 240 x 1.35; A1 for 324.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A price of 18 pounds rises to 22.50 pounds. Work out the percentage increase. (2 marks)",
          "a": "25",
          "marks": 2,
          "markscheme": "M1 for (4.5/18)x100; A1 for 25.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "500 pounds is invested at 3% compound interest per year. Find the value after 2 years. (2 marks)",
          "a": "530.45",
          "marks": 2,
          "markscheme": "M1 for 500 x 1.03^2; A1 for 530.45.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "After a 12% discount a jacket costs 44 pounds. Work out the original price. (2 marks)",
          "a": "50",
          "marks": 2,
          "markscheme": "M1 for 44 / 0.88; A1 for 50.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A car worth 12 000 pounds depreciates by 15% each year. Find its value after 3 years to the nearest pound. (3 marks)",
          "a": "7367",
          "marks": 3,
          "markscheme": "M1 multiplier 0.85; M1 12000 x 0.85^3; A1 7366.5 -> 7367.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Including 20% VAT, a bill comes to 138 pounds. Show that the price before VAT was 115 pounds. (3 marks)",
          "a": "",
          "marks": 3,
          "markscheme": "M1 recognise 120% = 138; M1 138/1.2; A1 115 with conclusion.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 4,
      "title": "Ratio & Proportion",
      "summary": "Share in a ratio, simplify ratios, and solve direct and inverse proportion problems.",
      "tier": "F",
      "specRef": {
        "AQA": "R4",
        "Edexcel": "R5",
        "OCR": "R1a"
      },
      "concept": "A ratio compares parts of a whole; simplify by dividing all parts by a common factor. To share an amount in a ratio, add the parts to find the total number of shares, divide the amount by that total to find one share, then multiply by each part. Ratios can be written in the form 1:n to compare directly. Direct proportion means two quantities increase together at a constant rate, so y = kx for some constant k; doubling one doubles the other. Inverse proportion means one increases as the other decreases, so y = k/x and their product is constant. The unitary method finds the value of one unit first, then scales up. On Higher, proportion may involve squares, cubes or roots, for example y proportional to x squared. Best-buy and recipe problems test proportional reasoning. Command words include share, work out, express in the form, and which is better value. Identifying whether a situation is direct or inverse is the key first decision.",
      "commandWords": [
        "share",
        "work out",
        "express"
      ],
      "examples": [
        "Share 60 in the ratio 2:3: total 5 shares, one share = 60/5 = 12, so the amounts are 24 and 36.",
        "5 workers build a wall in 12 days. At the same rate, 4 workers take (5 x 12)/4 = 15 days (inverse proportion)."
      ],
      "questions": [
        {
          "q": "Simplify the ratio 18:24 to its simplest form. (1 mark)",
          "a": "3:4",
          "marks": 1,
          "markscheme": "B1 for 3:4 (divide by 6).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Share 144 pounds in the ratio 5:3:1. State the largest share. (2 marks)",
          "a": "80",
          "marks": 2,
          "markscheme": "M1 144/9 = 16; A1 largest = 5 x 16 = 80.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "6 identical pens cost 4.50 pounds. Work out the cost of 10 pens. (2 marks)",
          "a": "7.50",
          "marks": 2,
          "markscheme": "M1 one pen = 0.75; A1 7.50.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "It takes 3 taps 40 minutes to fill a tank. How long would 5 taps take, at the same rate? (2 marks)",
          "a": "24",
          "marks": 2,
          "markscheme": "M1 inverse: 3 x 40 = 120; A1 120/5 = 24 minutes.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "y is directly proportional to x squared. When x = 3, y = 45. Find y when x = 5. (3 marks)",
          "a": "125",
          "marks": 3,
          "markscheme": "M1 k = 45/9 = 5; M1 y = 5 x 25; A1 125.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Shop A sells 8 cans for 3.20 pounds. Shop B sells 5 cans for 2.10 pounds. Determine which is better value and show your working. (3 marks)",
          "a": "",
          "marks": 3,
          "markscheme": "M1 unit cost A = 0.40; M1 unit cost B = 0.42; A1 conclude A is better value.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 5,
      "title": "Indices & Surds",
      "summary": "Apply the laws of indices, including negative and fractional powers, and simplify surds (Higher).",
      "tier": "F",
      "specRef": {
        "AQA": "N6",
        "Edexcel": "N7",
        "OCR": "N2c"
      },
      "concept": "Indices, or powers, follow consistent laws: when multiplying powers of the same base, add the indices; when dividing, subtract; when raising a power to a power, multiply. Any non-zero base to the power zero equals 1. A negative index means take the reciprocal, so x^-n = 1/x^n. A fractional index represents a root: x^(1/2) is the square root, and x^(m/n) means the n-th root raised to the power m. These rules let you simplify and evaluate expressions without a calculator. A surd is an irrational root left in exact form, such as root 2. Simplify surds by extracting square factors, for example root 12 = root 4 times root 3 = 2 root 3. Surds add or subtract only when like, and multiply by combining the numbers under the roots. Rationalising the denominator removes a surd from the bottom by multiplying top and bottom by a suitable surd (Higher). Command words include simplify, evaluate, write in the form, and express exactly.",
      "commandWords": [
        "simplify",
        "evaluate",
        "express"
      ],
      "examples": [
        "Evaluate 27^(2/3): the cube root of 27 is 3, and 3 squared is 9, so 27^(2/3) = 9.",
        "Simplify root 50 + root 8: = 5 root 2 + 2 root 2 = 7 root 2."
      ],
      "questions": [
        {
          "q": "Simplify x^5 x x^3. (1 mark)",
          "a": "x^8",
          "marks": 1,
          "markscheme": "B1 for x^8 (add indices).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Evaluate 5^-2. (1 mark)",
          "a": "1/25",
          "marks": 1,
          "markscheme": "B1 for 1/25.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Evaluate 16^(3/4). (2 marks)",
          "a": "8",
          "marks": 2,
          "markscheme": "M1 fourth root of 16 = 2; A1 2^3 = 8.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Simplify root 75 in the form k root 3. (2 marks)",
          "a": "5root3",
          "marks": 2,
          "markscheme": "M1 root 25 x root 3; A1 5 root 3.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Rationalise the denominator of 6/root 3. (2 marks)",
          "a": "2root3",
          "marks": 2,
          "markscheme": "M1 multiply by root 3/root 3 = 6 root 3/3; A1 2 root 3.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Show that (2 + root 3)(2 - root 3) is an integer and state its value. (2 marks)",
          "a": "1",
          "marks": 2,
          "markscheme": "M1 expand 4 - 3; A1 value 1 (rational).",
          "tier": "H",
          "selfCheck": true
        }
      ]
    },
    {
      "unit": 6,
      "title": "Algebraic Manipulation & Expanding/Factorising",
      "summary": "Expand single and double brackets, collect like terms, and factorise expressions.",
      "tier": "F",
      "specRef": {
        "AQA": "A4",
        "Edexcel": "A4",
        "OCR": "A2a"
      },
      "concept": "Algebraic manipulation rearranges expressions while keeping their value. Collecting like terms combines terms with identical variable parts, for example 3x + 5x = 8x, but 3x and 3x squared are not like. Expanding a single bracket multiplies every term inside by the term outside. Expanding double brackets multiplies each term in the first bracket by each in the second, often using FOIL, then simplifies; squaring a bracket means writing it out as two brackets, not just squaring each term. Factorising reverses expanding: take out the highest common factor to factorise into a single bracket, or recognise the difference of two squares, a squared minus b squared, which factorises to (a + b)(a - b). On Higher, factorising quadratics and more complex expressions builds on this. Always check by expanding your factorised answer. Command words include expand, simplify, factorise fully, and show that. Factorise fully means remove every common factor, so 6x + 9 becomes 3(2x + 3), not a partial factorisation.",
      "commandWords": [
        "expand",
        "simplify",
        "factorise"
      ],
      "examples": [
        "Expand and simplify (x + 4)(x - 2): = x^2 - 2x + 4x - 8 = x^2 + 2x - 8.",
        "Factorise fully 12a + 18: the HCF is 6, so 12a + 18 = 6(2a + 3)."
      ],
      "questions": [
        {
          "q": "Simplify 7y - 3 + 2y + 8. (1 mark)",
          "a": "9y+5",
          "marks": 1,
          "markscheme": "B1 for 9y + 5.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Expand 4(2x - 5). (1 mark)",
          "a": "8x-20",
          "marks": 1,
          "markscheme": "B1 for 8x - 20.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Expand and simplify (x + 5)(x + 3). (2 marks)",
          "a": "x^2+8x+15",
          "marks": 2,
          "markscheme": "M1 four correct terms; A1 x^2 + 8x + 15.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Factorise fully 15x^2 - 10x. (2 marks)",
          "a": "5x(3x-2)",
          "marks": 2,
          "markscheme": "M1 partial factor; A1 5x(3x - 2).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Factorise x^2 - 49. (1 mark)",
          "a": "(x+7)(x-7)",
          "marks": 1,
          "markscheme": "B1 difference of two squares.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Show that (n + 3)^2 - (n + 1)^2 is always a multiple of 4 for integer n. (3 marks)",
          "a": "",
          "marks": 3,
          "markscheme": "M1 expand both; M1 simplify to 4n + 8; A1 = 4(n + 2), multiple of 4.",
          "tier": "H",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 7,
      "title": "Linear Equations & Rearranging Formulae",
      "summary": "Solve linear equations including those with brackets and unknowns on both sides, and change the subject.",
      "tier": "F",
      "specRef": {
        "AQA": "A17",
        "Edexcel": "A17",
        "OCR": "A3a"
      },
      "concept": "A linear equation contains an unknown to the first power only. Solve by doing the same operation to both sides to isolate the unknown, working in reverse order of operations: undo addition and subtraction, then multiplication and division. Expand any brackets first, and clear fractions by multiplying through by the denominator. When the unknown appears on both sides, gather the unknown terms on one side and the numbers on the other. Always check by substituting your solution back into the original equation. Rearranging a formula, or changing the subject, uses the same balancing principles to make a different letter the subject; isolate the required variable using inverse operations, and on Higher this may require factorising when the new subject appears more than once. A formula relates variables generally, whereas an equation is solved for a specific value. Command words include solve, make x the subject, and rearrange. Showing each balancing step clearly secures method marks even if an arithmetic error occurs in the final line.",
      "commandWords": [
        "solve",
        "rearrange",
        "make the subject"
      ],
      "examples": [
        "Solve 3(x - 2) = 18: expand to 3x - 6 = 18, add 6 to get 3x = 24, so x = 8.",
        "Make r the subject of C = 2 pi r: divide both sides by 2 pi to get r = C / (2 pi)."
      ],
      "questions": [
        {
          "q": "Solve 5x + 7 = 32. (2 marks)",
          "a": "x=5",
          "marks": 2,
          "markscheme": "M1 5x = 25; A1 x = 5.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve 4x - 3 = 2x + 11. (2 marks)",
          "a": "x=7",
          "marks": 2,
          "markscheme": "M1 2x = 14; A1 x = 7.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve (x + 1)/2 = 6. (2 marks)",
          "a": "x=11",
          "marks": 2,
          "markscheme": "M1 x + 1 = 12; A1 x = 11.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Make t the subject of v = u + at. (2 marks)",
          "a": "t=(v-u)/a",
          "marks": 2,
          "markscheme": "M1 v - u = at; A1 t = (v - u)/a.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Make x the subject of y = (3x + 2)/(x - 1). (4 marks)",
          "a": "x=(y+2)/(y-3)",
          "marks": 4,
          "markscheme": "M1 multiply out y(x-1)=3x+2; M1 collect x terms; M1 factorise x(y-3); A1 x = (y+2)/(y-3).",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Solve the equation 2(3x - 1) - 4 = 5x and show each step. (3 marks)",
          "a": "x=6",
          "marks": 3,
          "markscheme": "M1 expand 6x - 2 - 4; M1 6x - 6 = 5x; A1 x = 6.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 8,
      "title": "Simultaneous Equations (Linear)",
      "summary": "Solve two linear equations together using elimination or substitution.",
      "tier": "F",
      "specRef": {
        "AQA": "A19",
        "Edexcel": "A19",
        "OCR": "A4a"
      },
      "concept": "Simultaneous equations are two equations in two unknowns that share a common solution, the point where their lines cross. The elimination method scales one or both equations so that the coefficients of one variable match, then adds or subtracts to remove that variable; remember that subtracting eliminates equal signed coefficients while adding eliminates equal opposite ones. Substitution rearranges one equation to make a variable the subject and inserts it into the other. Either method reduces the pair to a single linear equation you can solve, after which you substitute back to find the second unknown. Always state both values and check them in the original equations. Word problems require you to form the equations first by defining variables clearly. On Higher, one equation may be non-linear, requiring substitution and solving a resulting quadratic, giving up to two solution pairs. Command words include solve, find, and form and solve. Presenting the elimination steps neatly and writing the final answer as x = ... and y = ... ensures full marks.",
      "commandWords": [
        "solve",
        "find",
        "form"
      ],
      "examples": [
        "Solve 2x + y = 11 and x - y = 1: adding gives 3x = 12 so x = 4, then y = 3.",
        "Solve y = x + 2 and 3x + y = 14 by substitution: 3x + x + 2 = 14, so 4x = 12, x = 3, y = 5."
      ],
      "questions": [
        {
          "q": "Solve x + y = 9 and x - y = 3. Give x. (2 marks)",
          "a": "x=6",
          "marks": 2,
          "markscheme": "M1 add: 2x = 12; A1 x = 6 (y = 3).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve 3x + 2y = 16 and x + 2y = 8. Give x. (2 marks)",
          "a": "x=4",
          "marks": 2,
          "markscheme": "M1 subtract: 2x = 8; A1 x = 4.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve 2x + 3y = 13 and 4x - 3y = 5. Give y. (3 marks)",
          "a": "y=3",
          "marks": 3,
          "markscheme": "M1 add: 6x = 18, x = 3; M1 substitute; A1 y = 3.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Two pens and three rulers cost 7 pounds; four pens and one ruler cost 9 pounds. Find the cost of one pen. (3 marks)",
          "a": "2",
          "marks": 3,
          "markscheme": "M1 form 2p+3r=7, 4p+r=9; M1 solve; A1 pen = 2 pounds.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve simultaneously y = x^2 - 3 and y = 2x. Give the positive x value. (4 marks)",
          "a": "x=3",
          "marks": 4,
          "markscheme": "M1 x^2 - 3 = 2x; M1 x^2 - 2x - 3 = 0; M1 (x-3)(x+1); A1 x = 3 (and x = -1).",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Form and solve simultaneous equations to find two numbers whose sum is 30 and whose difference is 8. (3 marks)",
          "a": "",
          "marks": 3,
          "markscheme": "M1 x+y=30, x-y=8; M1 solve; A1 numbers 19 and 11.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 9,
      "title": "Quadratics — Factorising & Solving",
      "summary": "Factorise quadratics and solve quadratic equations by factorising.",
      "tier": "F",
      "specRef": {
        "AQA": "A18",
        "Edexcel": "A18",
        "OCR": "A4b"
      },
      "concept": "A quadratic equation has the form ax squared plus bx plus c equals zero. When a equals 1, factorise by finding two numbers that multiply to give c and add to give b, splitting the expression into two brackets. Once factorised, use the fact that if a product equals zero then at least one factor must be zero, giving the roots. These roots are the x-values where the curve crosses the x-axis. When a is greater than 1 (Higher), use the splitting-the-middle-term method: find two numbers multiplying to a times c and adding to b, split bx accordingly, then factorise by grouping. The difference of two squares is a special case with no middle term. A quadratic may have two, one (a repeated root) or, by factorising, no real solutions. Always set the equation equal to zero before factorising, rearranging if necessary. Command words include solve, factorise, and find the roots. Checking that the brackets expand back to the original quadratic confirms your factorisation before you read off the solutions.",
      "commandWords": [
        "solve",
        "factorise",
        "find"
      ],
      "examples": [
        "Solve x^2 + 7x + 12 = 0: factors of 12 adding to 7 are 3 and 4, so (x + 3)(x + 4) = 0, giving x = -3 or x = -4.",
        "Solve 2x^2 + 5x - 3 = 0: split as 2x^2 + 6x - x - 3 = 2x(x + 3) - 1(x + 3) = (2x - 1)(x + 3) = 0, so x = 1/2 or x = -3."
      ],
      "questions": [
        {
          "q": "Factorise x^2 + 9x + 20. (2 marks)",
          "a": "(x+4)(x+5)",
          "marks": 2,
          "markscheme": "M1 factors of 20 adding to 9; A1 (x + 4)(x + 5).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve x^2 - 5x + 6 = 0. Give both roots. (2 marks)",
          "a": "x=2,3",
          "marks": 2,
          "markscheme": "M1 (x-2)(x-3)=0; A1 x = 2 or 3.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve x^2 - 36 = 0. Give both roots. (2 marks)",
          "a": "x=6,-6",
          "marks": 2,
          "markscheme": "M1 (x-6)(x+6); A1 x = 6 or -6.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve x^2 + 2x - 15 = 0. Give both roots. (2 marks)",
          "a": "x=3,-5",
          "marks": 2,
          "markscheme": "M1 (x+5)(x-3); A1 x = 3 or -5.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve 3x^2 - 11x - 4 = 0. Give both roots. (3 marks)",
          "a": "x=4,-1/3",
          "marks": 3,
          "markscheme": "M1 split middle term; M1 (3x+1)(x-4); A1 x = 4 or -1/3.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "The area of a rectangle of width x and length (x + 3) is 40. Form and solve an equation to find x. (4 marks)",
          "a": "x=5",
          "marks": 4,
          "markscheme": "M1 x(x+3)=40; M1 x^2+3x-40=0; M1 (x+8)(x-5); A1 x = 5 (reject -8).",
          "tier": "F",
          "selfCheck": true
        }
      ]
    },
    {
      "unit": 10,
      "title": "The Quadratic Formula & Completing the Square",
      "summary": "Solve quadratics using the formula and by completing the square (Higher).",
      "tier": "H",
      "specRef": {
        "AQA": "A18",
        "Edexcel": "A18",
        "OCR": "A4c"
      },
      "concept": "Not every quadratic factorises neatly, so two general methods exist. The quadratic formula, x equals minus b plus or minus the square root of b squared minus 4ac, all over 2a, solves any quadratic in the form ax squared plus bx plus c equals zero. The expression under the root, the discriminant, tells you the number of real roots: positive gives two, zero gives one repeated root, and negative gives no real roots. Completing the square rewrites the quadratic as a squared bracket plus a constant, in the form (x plus p) squared plus q. This reveals the turning point of the parabola at (minus p, q) and gives the minimum or maximum value, and it can also be used to solve the equation exactly or to derive the formula itself. To complete the square for x squared plus bx, halve b and square it. Give exact surd answers when asked, or round to a stated accuracy. Command words include solve, give your answer to 2 decimal places, write in the form, and hence find the minimum value.",
      "commandWords": [
        "solve",
        "write in the form",
        "hence"
      ],
      "examples": [
        "Solve x^2 + 4x - 6 = 0 by formula: x = (-4 +/- root(16 + 24))/2 = (-4 +/- root 40)/2, giving x = 1.16 or -5.16 (2 d.p.).",
        "Write x^2 + 6x + 1 in completed-square form: (x + 3)^2 - 9 + 1 = (x + 3)^2 - 8, so the minimum value is -8."
      ],
      "questions": [
        {
          "q": "Write x^2 + 8x + 3 in the form (x + p)^2 + q. Give q. (2 marks)",
          "a": "-13",
          "marks": 2,
          "markscheme": "M1 (x+4)^2; A1 q = 3 - 16 = -13.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Solve x^2 - 2x - 5 = 0 using the formula, giving answers to 2 d.p. State the larger root. (3 marks)",
          "a": "3.45",
          "marks": 3,
          "markscheme": "M1 sub into formula; M1 (2 + root 24)/2; A1 3.45.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "State the number of real roots of 2x^2 + 3x + 5 = 0 using the discriminant. (2 marks)",
          "a": "0",
          "marks": 2,
          "markscheme": "M1 b^2 - 4ac = 9 - 40 = -31; A1 negative so 0 real roots.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "By completing the square, find the minimum value of x^2 - 6x + 11. (3 marks)",
          "a": "2",
          "marks": 3,
          "markscheme": "M1 (x-3)^2; M1 -9 + 11; A1 minimum = 2.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Solve 3x^2 + 5x - 1 = 0 by the formula, giving answers to 2 d.p. State the positive root. (3 marks)",
          "a": "0.18",
          "marks": 3,
          "markscheme": "M1 sub a=3,b=5,c=-1; M1 (-5 + root 37)/6; A1 0.18.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "By completing the square, show that x^2 + 4x + 7 is always positive for all real x. (3 marks)",
          "a": "",
          "marks": 3,
          "markscheme": "M1 (x+2)^2 - 4 + 7; M1 (x+2)^2 + 3; A1 square >= 0 so expression >= 3 > 0.",
          "tier": "H",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 11,
      "title": "Sequences (incl. nth Term)",
      "summary": "Continue sequences, find the nth term of linear and quadratic sequences, and identify special sequences.",
      "tier": "F",
      "specRef": {
        "AQA": "A23",
        "Edexcel": "A23",
        "OCR": "A5a"
      },
      "concept": "A sequence is an ordered list of terms following a rule. In a linear (arithmetic) sequence the difference between consecutive terms is constant; the nth term is dn plus a number, where d is the common difference, found by comparing dn with the actual terms. This rule lets you find any term and decide whether a given value belongs to the sequence by solving an equation and checking for a whole-number position. A geometric sequence multiplies by a constant ratio each time. Special sequences include the square numbers, cube numbers, triangular numbers and the Fibonacci sequence, where each term is the sum of the two before. On Higher, quadratic sequences have a constant second difference; the nth term takes the form an squared plus bn plus c, where a is half the second difference, and you then find b and c by comparison. Command words include find the nth term, work out, and show that. Stating whether a number is or is not a term, with justification by solving for n, is a common exam demand worth full method marks.",
      "commandWords": [
        "find the nth term",
        "work out",
        "show that"
      ],
      "examples": [
        "Find the nth term of 5, 8, 11, 14: common difference 3, so 3n, then 5 - 3 = 2, giving nth term 3n + 2.",
        "Quadratic sequence 3, 8, 15, 24: second difference 2, so a = 1; n^2 gives 1, 4, 9, 16; remainder 2, 4, 6, 8 = 2n; nth term n^2 + 2n."
      ],
      "questions": [
        {
          "q": "Write down the next term of 4, 9, 14, 19, ... (1 mark)",
          "a": "24",
          "marks": 1,
          "markscheme": "B1 for 24 (add 5).",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Find the nth term of the sequence 7, 10, 13, 16, ... (2 marks)",
          "a": "3n+4",
          "marks": 2,
          "markscheme": "M1 common difference 3; A1 3n + 4.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Find the 20th term of the sequence with nth term 5n - 2. (1 mark)",
          "a": "98",
          "marks": 1,
          "markscheme": "B1 for 5(20) - 2 = 98.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Is 100 a term of the sequence with nth term 4n + 1? Answer yes or no. (2 marks)",
          "a": "no",
          "marks": 2,
          "markscheme": "M1 4n + 1 = 100 gives n = 24.75; A1 not whole so no.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Find the nth term of the quadratic sequence 2, 7, 14, 23, ... (3 marks)",
          "a": "n^2+2n-1",
          "marks": 3,
          "markscheme": "M1 second difference 2, a = 1; M1 compare n^2; A1 n^2 + 2n - 1.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Show that the difference between the 10th and 8th terms of the sequence 6n - 1 is 12. (2 marks)",
          "a": "",
          "marks": 2,
          "markscheme": "M1 terms 59 and 47; A1 59 - 47 = 12.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 12,
      "title": "Straight-Line Graphs (y = mx + c)",
      "summary": "Find gradients and intercepts, write equations of lines, and use parallel and perpendicular conditions.",
      "tier": "F",
      "specRef": {
        "AQA": "A9",
        "Edexcel": "A9",
        "OCR": "A6a"
      },
      "concept": "A straight-line graph has the equation y equals mx plus c, where m is the gradient and c is the y-intercept. The gradient measures steepness, calculated as the change in y divided by the change in x between two points; a positive gradient slopes up, a negative one slopes down. The y-intercept is where the line crosses the y-axis, found by setting x to zero. To find the equation of a line through two points, calculate the gradient first, then substitute a point to find c. Lines can be plotted using a table of values or by identifying the gradient and intercept directly. Parallel lines have equal gradients. On Higher, perpendicular lines have gradients whose product is minus one, so the perpendicular gradient is the negative reciprocal. Rearranging an equation into the form y equals mx plus c reveals its gradient and intercept. Command words include find the gradient, write down the equation, and determine whether. Reading or stating the gradient and intercept accurately from a rearranged equation is a frequent source of marks.",
      "commandWords": [
        "find the gradient",
        "write down",
        "determine"
      ],
      "examples": [
        "Find the gradient between (1, 2) and (4, 11): gradient = (11 - 2)/(4 - 1) = 9/3 = 3.",
        "Find the equation of the line with gradient 2 through (3, 5): y = 2x + c, 5 = 6 + c, c = -1, so y = 2x - 1."
      ],
      "questions": [
        {
          "q": "State the gradient of the line y = 4x - 7. (1 mark)",
          "a": "4",
          "marks": 1,
          "markscheme": "B1 for 4.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Find the gradient of the line through (2, 3) and (6, 15). (2 marks)",
          "a": "3",
          "marks": 2,
          "markscheme": "M1 (15-3)/(6-2); A1 3.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "The line 2y = 6x + 10 is written in the form y = mx + c. State c. (2 marks)",
          "a": "5",
          "marks": 2,
          "markscheme": "M1 divide by 2: y = 3x + 5; A1 c = 5.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A line is parallel to y = 5x - 2 and passes through (0, 3). Write down its equation. (2 marks)",
          "a": "y=5x+3",
          "marks": 2,
          "markscheme": "M1 gradient 5; A1 y = 5x + 3.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Find the gradient of a line perpendicular to y = 2x + 1. (2 marks)",
          "a": "-1/2",
          "marks": 2,
          "markscheme": "M1 negative reciprocal; A1 -1/2.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Find the equation of the line passing through (1, 4) and (3, 10). Give in the form y = mx + c. (3 marks)",
          "a": "y=3x+1",
          "marks": 3,
          "markscheme": "M1 gradient 3; M1 4 = 3 + c; A1 y = 3x + 1.",
          "tier": "F",
          "selfCheck": true
        }
      ]
    },
    {
      "unit": 13,
      "title": "Inequalities (incl. Graphing)",
      "summary": "Solve linear inequalities, represent solutions on a number line, and graph regions (Higher).",
      "tier": "F",
      "specRef": {
        "AQA": "A22",
        "Edexcel": "A22",
        "OCR": "A7a"
      },
      "concept": "An inequality compares two expressions using the symbols less than, greater than, or their inclusive forms. Solve linear inequalities exactly like equations by balancing both sides, with one crucial difference: multiplying or dividing by a negative number reverses the inequality sign. Solutions are ranges of values rather than single answers. Represent a solution on a number line using an open circle for a strict inequality and a filled circle for an inclusive one, with an arrow or bar showing the direction. Listing integer solutions requires identifying all whole numbers satisfying a double inequality such as minus 2 is less than x less than or equal to 3. On Higher, you graph regions in two dimensions by drawing boundary lines, dashed for strict and solid for inclusive, then shading the region that satisfies all conditions, often labelled R. Command words include solve, list, represent on a number line, and shade the region. Stating clearly whether endpoints are included, and choosing the correct circle or line style, is essential for full marks on representation questions.",
      "commandWords": [
        "solve",
        "list",
        "represent"
      ],
      "examples": [
        "Solve 3x - 4 < 11: add 4 to get 3x < 15, divide by 3 to get x < 5.",
        "Solve -2x > 6: divide by -2 and reverse the sign to get x < -3."
      ],
      "questions": [
        {
          "q": "Solve 2x + 5 < 17. (2 marks)",
          "a": "x<6",
          "marks": 2,
          "markscheme": "M1 2x < 12; A1 x < 6.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve 5x - 3 >= 2x + 9. (2 marks)",
          "a": "x>=4",
          "marks": 2,
          "markscheme": "M1 3x >= 12; A1 x >= 4.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "List all integer values of x such that -3 < x <= 2. (2 marks)",
          "a": "-2,-1,0,1,2",
          "marks": 2,
          "markscheme": "M1 identify range; A1 -2, -1, 0, 1, 2.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve -4x >= 20. (2 marks)",
          "a": "x<=-5",
          "marks": 2,
          "markscheme": "M1 divide by -4; A1 reverse sign x <= -5.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Solve the inequality x^2 < 16. (2 marks)",
          "a": "-4<x<4",
          "marks": 2,
          "markscheme": "M1 roots +/-4; A1 -4 < x < 4.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "On a grid, describe the region satisfying y < 2x + 1, y >= 0 and x <= 3, stating which boundary lines are dashed. (3 marks)",
          "a": "",
          "marks": 3,
          "markscheme": "M1 correct three lines; M1 y < 2x+1 dashed, others solid; A1 region R shaded.",
          "tier": "H",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 14,
      "title": "Angles, Polygons & Circle Theorems",
      "summary": "Apply angle rules, interior and exterior angles of polygons, and circle theorems (Higher).",
      "tier": "F",
      "specRef": {
        "AQA": "G3",
        "Edexcel": "G3",
        "OCR": "G1a"
      },
      "concept": "Angle facts underpin much of geometry: angles on a straight line sum to 180 degrees, angles around a point sum to 360, vertically opposite angles are equal, and angles in a triangle sum to 180. Parallel lines give equal alternate and corresponding angles, and co-interior angles that sum to 180. For a polygon with n sides, the interior angles sum to (n minus 2) times 180, and each exterior angle of a regular polygon is 360 divided by n, with interior and exterior angles at each vertex summing to 180. These rules let you find unknown angles and prove results, always giving reasons. On Higher, circle theorems extend this: the angle at the centre is twice the angle at the circumference on the same arc; angles in the same segment are equal; the angle in a semicircle is 90 degrees; opposite angles in a cyclic quadrilateral sum to 180; and a tangent meets a radius at 90 degrees. Command words include work out, calculate, prove, and give a reason. Every stated reason must use precise geometric language to earn the reasoning marks.",
      "commandWords": [
        "work out",
        "calculate",
        "give a reason"
      ],
      "examples": [
        "A regular octagon has 8 sides, so each exterior angle = 360/8 = 45 degrees and each interior angle = 180 - 45 = 135 degrees.",
        "A triangle in a circle has one side as the diameter, so the angle in the semicircle is 90 degrees; if another angle is 35, the third is 180 - 90 - 35 = 55 degrees."
      ],
      "questions": [
        {
          "q": "The angles on a straight line are 65, x and 40 degrees. Work out x. (1 mark)",
          "a": "75",
          "marks": 1,
          "markscheme": "B1 180 - 65 - 40 = 75.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Work out the sum of the interior angles of a hexagon. (2 marks)",
          "a": "720",
          "marks": 2,
          "markscheme": "M1 (6-2) x 180; A1 720.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Each exterior angle of a regular polygon is 24 degrees. How many sides has it? (2 marks)",
          "a": "15",
          "marks": 2,
          "markscheme": "M1 360/24; A1 15.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A, B and C lie on a circle, centre O. Angle AOC (at the centre) is 130 degrees. Work out angle ABC at the circumference on the same arc. (2 marks)",
          "a": "65",
          "marks": 2,
          "markscheme": "M1 angle at centre = 2 x circumference; A1 65.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "In a cyclic quadrilateral one angle is 95 degrees. Work out the opposite angle. (2 marks)",
          "a": "85",
          "marks": 2,
          "markscheme": "M1 opposite angles sum to 180; A1 85.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Prove that the angle in a semicircle is 90 degrees, giving reasons. (4 marks)",
          "a": "",
          "marks": 4,
          "markscheme": "M1 angle at centre is 180 (diameter); M1 angle at centre = 2x circumference; M1 so circumference angle = 90; A1 full reasoning.",
          "tier": "H",
          "selfCheck": false
        }
      ]
    },
    {
      "unit": 15,
      "title": "Pythagoras & Trigonometry",
      "summary": "Use Pythagoras and SOHCAHTOA, exact trig values, and the sine and cosine rules (Higher).",
      "tier": "F",
      "specRef": {
        "AQA": "G20",
        "Edexcel": "G20",
        "OCR": "G2a"
      },
      "concept": "Pythagoras theorem states that in a right-angled triangle the square of the hypotenuse equals the sum of the squares of the other two sides, a squared plus b squared equals c squared. It finds an unknown side when two are known; rearrange to find a shorter side. Trigonometry relates sides and angles in right-angled triangles using SOHCAHTOA: sine equals opposite over hypotenuse, cosine equals adjacent over hypotenuse, tangent equals opposite over adjacent. Use these ratios to find a missing side, or use inverse functions to find a missing angle. Exact trigonometric values for 0, 30, 45, 60 and 90 degrees should be known without a calculator. On Higher, non-right-angled triangles are solved using the sine rule, which links sides to the sines of opposite angles, and the cosine rule, which generalises Pythagoras; the area of any triangle is half ab sine C. Command words include calculate, work out, and give your answer to 3 significant figures. Always label the sides relative to the angle being used before choosing the correct ratio or rule.",
      "commandWords": [
        "calculate",
        "work out",
        "find"
      ],
      "examples": [
        "A right triangle has legs 6 and 8. Hypotenuse = root(6^2 + 8^2) = root(36 + 64) = root 100 = 10.",
        "In a right triangle the angle is 30 degrees and the hypotenuse is 12. Opposite = 12 x sin 30 = 12 x 0.5 = 6."
      ],
      "questions": [
        {
          "q": "A right-angled triangle has legs 5 cm and 12 cm. Find the hypotenuse. (2 marks)",
          "a": "13",
          "marks": 2,
          "markscheme": "M1 root(25 + 144); A1 13.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Find x where the hypotenuse is 17 and one leg is 8. (2 marks)",
          "a": "15",
          "marks": 2,
          "markscheme": "M1 root(289 - 64); A1 15.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Write down the exact value of cos 60 degrees. (1 mark)",
          "a": "1/2",
          "marks": 1,
          "markscheme": "B1 for 1/2.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "In a right triangle the opposite side is 7 and the adjacent is 24. Find the angle to 1 d.p. (2 marks)",
          "a": "16.3",
          "marks": 2,
          "markscheme": "M1 tan^-1(7/24); A1 16.3.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "In triangle ABC, a = 8, b = 5 and angle C = 60 degrees. Find side c to 3 s.f. using the cosine rule. (3 marks)",
          "a": "7",
          "marks": 3,
          "markscheme": "M1 c^2 = 64 + 25 - 2(8)(5)cos60; M1 = 89 - 40 = 49; A1 c = 7.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Find the area of a triangle with sides 9 and 6 enclosing an angle of 30 degrees. (2 marks)",
          "a": "13.5",
          "marks": 2,
          "markscheme": "M1 0.5 x 9 x 6 x sin30; A1 13.5.",
          "tier": "H",
          "selfCheck": true
        }
      ]
    },
    {
      "unit": 16,
      "title": "Probability & Statistics",
      "summary": "Calculate probabilities, use tree diagrams, and find and interpret averages and spread.",
      "tier": "F",
      "specRef": {
        "AQA": "P1",
        "Edexcel": "P2",
        "OCR": "S2a"
      },
      "concept": "Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain), and the probabilities of all outcomes of an experiment sum to 1, so the probability of an event not happening is 1 minus the probability it does. For equally likely outcomes, probability equals favourable outcomes over total outcomes. Combined events use the AND rule (multiply) for independent events and the OR rule (add) for mutually exclusive ones. Tree diagrams display successive events with probabilities on the branches; multiply along branches and add between them, taking care with conditional probability when selections are made without replacement, as the second probability changes. In statistics, the mode is the most common value, the median is the middle when ordered, the mean is the total divided by the count, and the range measures spread. From frequency tables, estimate the mean using midpoints for grouped data. Command words include work out the probability, complete the tree diagram, find the mean, and compare. When comparing distributions, refer to both an average and a measure of spread in context.",
      "commandWords": [
        "work out",
        "complete",
        "compare"
      ],
      "examples": [
        "A bag has 3 red and 7 blue counters. P(red) = 3/10; P(not red) = 1 - 3/10 = 7/10.",
        "The data 4, 7, 7, 9, 13 has mean (4 + 7 + 7 + 9 + 13)/5 = 40/5 = 8, median 7, mode 7 and range 13 - 4 = 9."
      ],
      "questions": [
        {
          "q": "A fair six-sided die is rolled. Work out the probability of scoring an even number. (1 mark)",
          "a": "1/2",
          "marks": 1,
          "markscheme": "B1 for 3/6 = 1/2.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Find the mean of 6, 8, 11, 15. (2 marks)",
          "a": "10",
          "marks": 2,
          "markscheme": "M1 sum 40; A1 40/4 = 10.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Find the median of 3, 9, 4, 7, 12, 8, 5. (2 marks)",
          "a": "7",
          "marks": 2,
          "markscheme": "M1 order the data; A1 middle value 7.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "P(rain) = 0.3. Work out the probability it does not rain. (1 mark)",
          "a": "0.7",
          "marks": 1,
          "markscheme": "B1 for 1 - 0.3 = 0.7.",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A bag has 4 red and 6 green counters. Two are taken without replacement. Work out the probability both are red. (3 marks)",
          "a": "2/15",
          "marks": 3,
          "markscheme": "M1 4/10; M1 x 3/9; A1 12/90 = 2/15.",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Two classes sit the same test. Class A has mean 62 and range 20; Class B has mean 58 and range 35. Compare the performance of the two classes. (3 marks)",
          "a": "",
          "marks": 3,
          "markscheme": "B1 A higher mean (better on average); B1 A smaller range (more consistent); B1 both in context.",
          "tier": "F",
          "selfCheck": false
        }
      ]
    }
  ],
  "SCI": [
    {
      "unit": 1,
      "title": "Cell structure & specialisation",
      "summary": "Eukaryotic and prokaryotic cells, sub-cellular structures, specialised cells and microscopy.",
      "tier": "F",
      "specRef": {
        "AQA": "4.1.1",
        "Edexcel": "B1.2",
        "OCR": "B1.1"
      },
      "concept": "Cells are the basic units of all living organisms. Eukaryotic cells (animal and plant) have a true nucleus enclosing DNA, while prokaryotic cells (bacteria) are smaller, have no nucleus and carry genetic material as a single DNA loop plus small rings called plasmids. Animal cells contain a nucleus, cytoplasm, cell membrane, mitochondria (site of aerobic respiration) and ribosomes (protein synthesis). Plant cells additionally have a cellulose cell wall for support, a permanent vacuole containing cell sap, and chloroplasts containing chlorophyll for photosynthesis. Cells differentiate to become specialised: sperm cells have many mitochondria and a tail; root hair cells have a large surface area for absorbing water and ions; nerve cells are long with branched ends; xylem and phloem transport substances. Magnification is calculated as image size divided by real size, so real size equals image size divided by magnification. Light microscopes magnify up to about x2000, while electron microscopes have much higher magnification and resolution, revealing sub-cellular detail. Describe how structure relates to function and explain why specialisation increases efficiency.",
      "commandWords": [
        "describe",
        "explain",
        "calculate"
      ],
      "examples": [
        "Worked calculation: A cell appears 50 mm wide under a microscope at x500 magnification. Real size = image size / magnification = 50 mm / 500 = 0.1 mm = 100 micrometres.",
        "Model explanation: A root hair cell is specialised by having a long thin projection that gives a large surface area to volume ratio, so more water and mineral ions can be absorbed quickly by osmosis and active transport."
      ],
      "questions": [
        {
          "q": "Name the sub-cellular structure where aerobic respiration occurs (1 mark).",
          "a": "mitochondria",
          "marks": 1,
          "markscheme": "mitochondria (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which structure controls what enters and leaves the cell (1 mark)?",
          "a": "cell membrane",
          "marks": 1,
          "markscheme": "cell membrane / plasma membrane (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A cell is 0.05 mm long. Viewed at x300, what is the image size in mm (1 mark)?",
          "a": "15",
          "marks": 1,
          "markscheme": "image = real x magnification = 0.05 x 300 = 15 mm (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name two structures found in a plant cell but NOT an animal cell (2 marks).",
          "a": "cell wall chloroplast",
          "marks": 2,
          "markscheme": "cell wall (1); chloroplast (1); permanent vacuole also acceptable",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Describe two differences between a prokaryotic and a eukaryotic cell (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "prokaryotic has no nucleus / DNA free in cytoplasm (1); prokaryotic smaller / has plasmids / no membrane-bound organelles (1)",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Explain how a sperm cell is adapted for its function (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "tail/flagellum for swimming/movement (1); many mitochondria to release energy for swimming (1); enzymes in acrosome/head to digest egg membrane (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Compare the structures of a typical animal cell and a typical plant cell, and explain how three structures are related to their functions (6 marks).",
        "marks": 6,
        "model": "Both animal and plant cells are eukaryotic, containing a nucleus that holds DNA and controls cell activities, cytoplasm where reactions occur, a cell membrane controlling movement of substances, ribosomes for protein synthesis, and mitochondria for aerobic respiration. Plant cells additionally have a cellulose cell wall which provides strength and support, a permanent vacuole filled with cell sap which helps keep the cell turgid, and chloroplasts containing chlorophyll which absorb light for photosynthesis. The nucleus is related to its function because it stores genetic information that codes for proteins. Mitochondria are related to function because their reactions transfer energy for the cell. Chloroplasts are related to function because chlorophyll traps light energy to make glucose.",
        "levels": "Level 3 (5-6): clear comparison of shared and plant-only structures with accurate structure-function links. Level 2 (3-4): some comparison and at least one correct structure-function link. Level 1 (1-2): isolated relevant facts. 0: nothing relevant."
      }
    },
    {
      "unit": 2,
      "title": "Enzymes & digestion",
      "summary": "Enzyme action, lock-and-key model, effects of temperature and pH, and digestive enzymes.",
      "tier": "F",
      "specRef": {
        "AQA": "4.2.2",
        "Edexcel": "B2.10",
        "OCR": "B1.2"
      },
      "concept": "Enzymes are biological catalysts: proteins that speed up reactions without being used up. Each enzyme has an active site with a specific shape that is complementary to its substrate, described by the lock-and-key model. Enzymes are specific because only the correct substrate fits the active site. Raising temperature increases the rate up to an optimum because particles move faster and collide more often, but above the optimum the active site changes shape and the enzyme denatures, so the substrate no longer fits. Each enzyme also has an optimum pH; extremes of pH denature it. In digestion, large insoluble molecules are broken into small soluble ones for absorption. Amylase (made in the salivary glands and pancreas) breaks down starch into sugars; proteases (e.g. pepsin) break proteins into amino acids; lipases break lipids into fatty acids and glycerol. Bile, made in the liver and stored in the gall bladder, neutralises stomach acid and emulsifies fats to increase surface area for lipase. The required practical uses iodine to test for starch and Benedict's solution for sugars. Explain how factors affect rate and calculate rate of reaction.",
      "commandWords": [
        "explain",
        "describe",
        "calculate"
      ],
      "examples": [
        "Worked calculation: If starch is fully broken down in 50 seconds, rate = 1000 / time = 1000 / 50 = 20 (arbitrary units per second), or simply 1/time = 0.02 per second.",
        "Model explanation: Above the optimum temperature the rate falls because the bonds holding the enzyme's shape break, so the active site changes shape and the substrate can no longer bind. The enzyme is denatured and the reaction stops."
      ],
      "questions": [
        {
          "q": "What type of molecule are enzymes (1 mark)?",
          "a": "protein",
          "marks": 1,
          "markscheme": "protein (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name the part of an enzyme where the substrate binds (1 mark).",
          "a": "active site",
          "marks": 1,
          "markscheme": "active site (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which enzyme breaks down starch (1 mark)?",
          "a": "amylase",
          "marks": 1,
          "markscheme": "amylase (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What are proteins broken down into by proteases (1 mark)?",
          "a": "amino acids",
          "marks": 1,
          "markscheme": "amino acids (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain why an enzyme stops working at high temperature (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "enzyme denatures (1); active site changes shape (1); substrate no longer fits/binds (1)",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Describe the role of bile in digestion (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "neutralises stomach acid / makes conditions alkaline (1); emulsifies fats / increases surface area for lipase (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "A student investigated the effect of pH on amylase activity. Describe how enzymes work and explain how pH affects the rate of an enzyme-controlled reaction (6 marks).",
        "marks": 6,
        "model": "Enzymes are biological catalysts that speed up reactions. Each enzyme has an active site with a specific shape complementary to its substrate, so only the correct substrate can bind, as described by the lock-and-key model. When substrate binds, the reaction occurs and products are released, leaving the enzyme unchanged. Each enzyme has an optimum pH at which the rate is fastest because the active site shape is ideal and collisions between enzyme and substrate are most effective. If the pH is moved away from the optimum, the bonds maintaining the enzyme's shape are affected, so the active site changes shape and the substrate fits less well, lowering the rate. At extreme pH the enzyme denatures and the reaction stops. A student would use iodine to detect when starch is fully digested at each pH.",
        "levels": "Level 3 (5-6): clear account of enzyme action and a full explanation of pH effect including denaturing. Level 2 (3-4): some mechanism and partial pH explanation. Level 1 (1-2): isolated correct points. 0: nothing relevant."
      }
    },
    {
      "unit": 3,
      "title": "Photosynthesis (incl. limiting factors & rate)",
      "summary": "Photosynthesis equation, limiting factors, and analysing rate graphs (Higher).",
      "tier": "F",
      "specRef": {
        "AQA": "4.4.1",
        "Edexcel": "B8.1",
        "OCR": "B2.2"
      },
      "concept": "Photosynthesis is an endothermic reaction in which plants and algae use light energy to make glucose. The word equation is carbon dioxide + water, using light, producing glucose + oxygen; the symbol equation is 6CO2 + 6H2O giving C6H12O6 + 6O2. It occurs in chloroplasts containing chlorophyll, which absorbs light. The glucose made is used in respiration, converted to starch for storage, used to make cellulose for cell walls, made into proteins (with nitrate ions), and stored as oils or fats. The rate of photosynthesis is affected by limiting factors: light intensity, carbon dioxide concentration, temperature and amount of chlorophyll. A limiting factor is the one in shortest supply that restricts the rate. As light intensity increases the rate increases until another factor becomes limiting and the line plateaus. Light intensity follows the inverse square law, so rate is proportional to 1/distance squared. Higher tier students interpret rate graphs, identify the limiting factor from the shape, and calculate rate from a tangent. The required practical investigates how light intensity affects the rate using pondweed, measuring oxygen bubbles produced. Explain and analyse the effect of changing each factor.",
      "commandWords": [
        "explain",
        "analyse",
        "calculate"
      ],
      "examples": [
        "Worked calculation: A lamp 10 cm from pondweed gives a certain light intensity. Using the inverse square law, intensity is proportional to 1/d squared, so doubling the distance to 20 cm reduces the relative intensity to 1/(20 squared) = 1/400 compared with 1/100, that is one quarter.",
        "Model explanation: On a rate against light intensity graph, the line rises then levels off. At low light, light is the limiting factor so rate increases as light increases. At the plateau, light is no longer limiting and a different factor such as carbon dioxide or temperature limits the rate."
      ],
      "questions": [
        {
          "q": "What gas is produced during photosynthesis (1 mark)?",
          "a": "oxygen",
          "marks": 1,
          "markscheme": "oxygen (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "In which sub-cellular structure does photosynthesis occur (1 mark)?",
          "a": "chloroplast",
          "marks": 1,
          "markscheme": "chloroplast (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Is photosynthesis exothermic or endothermic (1 mark)?",
          "a": "endothermic",
          "marks": 1,
          "markscheme": "endothermic (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name the green pigment that absorbs light (1 mark).",
          "a": "chlorophyll",
          "marks": 1,
          "markscheme": "chlorophyll (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "State three limiting factors of photosynthesis (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "light intensity (1); carbon dioxide concentration (1); temperature (1); amount of chlorophyll also acceptable",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "A graph of rate against CO2 concentration rises then plateaus. Explain the plateau (3 marks). [Higher]",
          "a": "",
          "marks": 3,
          "markscheme": "CO2 no longer the limiting factor (1); another factor limits rate e.g. light/temperature (1); increasing CO2 has no further effect on rate (1)",
          "tier": "H",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Explain how light intensity, carbon dioxide concentration and temperature each act as limiting factors on the rate of photosynthesis, referring to a graph of rate against light intensity (6 marks).",
        "marks": 6,
        "model": "A limiting factor is the factor in shortest supply that restricts the rate of photosynthesis. On a graph of rate against light intensity, at low light the rate increases as intensity increases because more light energy is absorbed by chlorophyll, so light is the limiting factor. The line then plateaus because light is no longer limiting; instead carbon dioxide concentration or temperature limits the rate. Increasing carbon dioxide raises the rate until it too is no longer limiting, then the line levels off again. Temperature increases rate because enzymes controlling photosynthesis work faster, but above the optimum the enzymes denature and the rate falls. Growers control these factors in greenhouses, for example adding carbon dioxide and using heaters and lamps, to maximise the rate and increase yield.",
        "levels": "Level 3 (5-6): all three factors explained with correct reference to graph shape and enzyme effect. Level 2 (3-4): two factors explained or partial graph link. Level 1 (1-2): isolated points. 0: nothing relevant."
      }
    },
    {
      "unit": 4,
      "title": "Respiration (aerobic & anaerobic)",
      "summary": "Aerobic and anaerobic respiration, fermentation, oxygen debt and metabolism.",
      "tier": "F",
      "specRef": {
        "AQA": "4.4.2",
        "Edexcel": "B9.1",
        "OCR": "B2.1"
      },
      "concept": "Respiration is an exothermic reaction that occurs continuously in all living cells to transfer energy from glucose. This energy is used for muscle contraction, keeping warm, building larger molecules and active transport. Aerobic respiration uses oxygen and releases the most energy per glucose molecule; the word equation is glucose + oxygen giving carbon dioxide + water, and the symbol equation is C6H12O6 + 6O2 giving 6CO2 + 6H2O. It mainly occurs in the mitochondria. Anaerobic respiration occurs without oxygen and releases much less energy because glucose is not fully oxidised. In muscle cells, anaerobic respiration produces lactic acid. In yeast and plant cells, anaerobic respiration is called fermentation and produces ethanol and carbon dioxide, which is used in making bread and alcoholic drinks. During hard exercise, muscles respire anaerobically, building up lactic acid and creating an oxygen debt: the extra oxygen needed afterwards to break down the lactic acid. Metabolism is the sum of all chemical reactions in a cell or body. Describe the equations, compare aerobic and anaerobic respiration, and explain the response to exercise.",
      "commandWords": [
        "describe",
        "compare",
        "explain"
      ],
      "examples": [
        "Model explanation: During vigorous exercise the muscles cannot get enough oxygen, so they respire anaerobically. This produces lactic acid and releases less energy per glucose. After exercise, extra oxygen (the oxygen debt) is needed to oxidise the lactic acid, which is why breathing rate stays high.",
        "Worked comparison: Aerobic respiration releases more energy because glucose is completely broken down to carbon dioxide and water using oxygen, whereas anaerobic respiration only partly breaks glucose down to lactic acid (or ethanol and CO2), releasing much less energy."
      ],
      "questions": [
        {
          "q": "Is respiration exothermic or endothermic (1 mark)?",
          "a": "exothermic",
          "marks": 1,
          "markscheme": "exothermic (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is produced by anaerobic respiration in human muscle cells (1 mark)?",
          "a": "lactic acid",
          "marks": 1,
          "markscheme": "lactic acid (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name the two products of anaerobic respiration (fermentation) in yeast (2 marks).",
          "a": "ethanol carbon dioxide",
          "marks": 2,
          "markscheme": "ethanol (1); carbon dioxide (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which gas is required for aerobic respiration (1 mark)?",
          "a": "oxygen",
          "marks": 1,
          "markscheme": "oxygen (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Compare the energy released by aerobic and anaerobic respiration and explain the difference (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "aerobic releases more energy (1); because glucose is completely/fully oxidised/broken down (1)",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Explain what is meant by oxygen debt and how the body repays it (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "extra oxygen needed after exercise (1); to break down/oxidise lactic acid (1); breathing/heart rate stays high to deliver oxygen / transport lactic acid to liver (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Describe aerobic and anaerobic respiration and explain how the body responds to a period of vigorous exercise (6 marks).",
        "marks": 6,
        "model": "Aerobic respiration uses oxygen to transfer energy from glucose, producing carbon dioxide and water: glucose + oxygen gives carbon dioxide + water. It releases a large amount of energy and occurs in the mitochondria. During vigorous exercise the muscles need more energy, so heart rate and breathing rate increase to deliver more oxygen and glucose and remove carbon dioxide. If oxygen cannot be supplied fast enough, muscles respire anaerobically, producing lactic acid and releasing much less energy because the glucose is only partly broken down. Lactic acid builds up and can cause fatigue. This creates an oxygen debt: the extra oxygen needed after exercise to oxidise the lactic acid. Blood transports lactic acid to the liver where it is converted back to glucose. Breathing rate stays high after exercise to repay this debt.",
        "levels": "Level 3 (5-6): clear account of both types of respiration and a coherent explanation of the exercise response including oxygen debt. Level 2 (3-4): some respiration detail and partial exercise response. Level 1 (1-2): isolated points. 0: nothing relevant."
      }
    },
    {
      "unit": 5,
      "title": "Natural selection, evolution & genetics basics",
      "summary": "Variation, natural selection, evolution, inheritance, alleles and genetic diagrams.",
      "tier": "F",
      "specRef": {
        "AQA": "4.6.3",
        "Edexcel": "B6.1",
        "OCR": "B6.1"
      },
      "concept": "Variation between organisms is caused by genes (inherited), the environment, or a combination of both. Mutations are random changes in DNA that produce new alleles and are the source of new variation. The theory of evolution by natural selection, proposed by Charles Darwin, states that organisms with characteristics best suited to their environment are more likely to survive and reproduce, passing on the alleles for those advantageous characteristics. Over many generations this can lead to evolution: a change in the inherited characteristics of a population over time. If two populations become so different they can no longer interbreed to produce fertile offspring, a new species has formed (speciation). Genes are sections of DNA found on chromosomes; different versions of a gene are alleles. An organism is homozygous if both alleles are the same and heterozygous if different. A dominant allele is always expressed; a recessive allele is only expressed when two copies are present. The genotype is the alleles present and the phenotype is the observable characteristic. Use Punnett squares to predict outcomes of monohybrid crosses and express results as ratios, fractions or percentages. Describe natural selection and explain inheritance using genetic diagrams.",
      "commandWords": [
        "describe",
        "explain",
        "predict"
      ],
      "examples": [
        "Worked genetic cross: Cross Bb x Bb (B = brown dominant, b = blue). Punnett square gives BB, Bb, Bb, bb, a 3:1 ratio of brown to blue, so 75% brown and 25% blue offspring; the probability of a blue offspring is 1 in 4.",
        "Model explanation: In a population there is variation. If a predator hunts by sight, better-camouflaged individuals are more likely to survive and reproduce, passing on the alleles for camouflage. Over many generations the proportion of camouflaged individuals increases, so the population evolves."
      ],
      "questions": [
        {
          "q": "What is the source of new alleles in a population (1 mark)?",
          "a": "mutation",
          "marks": 1,
          "markscheme": "mutation (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Who proposed the theory of evolution by natural selection (1 mark)?",
          "a": "darwin",
          "marks": 1,
          "markscheme": "Charles Darwin (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "An organism has two identical alleles. What term describes this (1 mark)?",
          "a": "homozygous",
          "marks": 1,
          "markscheme": "homozygous (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Cross Tt x tt. What fraction of offspring are predicted to be tt (1 mark)?",
          "a": "1/2",
          "marks": 1,
          "markscheme": "1/2 / one half / 50% (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Cross Bb x Bb where B is dominant. State the expected phenotype ratio (1 mark).",
          "a": "3:1",
          "marks": 1,
          "markscheme": "3:1 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain how natural selection can lead to a population becoming better adapted to its environment (4 marks).",
          "a": "",
          "marks": 4,
          "markscheme": "variation exists / caused by mutation (1); individuals with advantageous characteristics more likely to survive (1); they reproduce and pass on the alleles (1); over many generations the advantageous allele becomes more common in population (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Bacteria can become resistant to antibiotics. Explain how a population of antibiotic-resistant bacteria can develop, using the theory of natural selection (6 marks).",
        "marks": 6,
        "model": "Within a population of bacteria there is variation caused by random mutations in their DNA. By chance, some mutations produce an allele that makes a bacterium resistant to an antibiotic. When the antibiotic is used, the non-resistant bacteria are killed, but the resistant bacteria survive because they have the advantageous characteristic. These surviving bacteria reproduce, by binary fission, and pass on the allele for resistance to their offspring. Over many generations the proportion of resistant bacteria in the population increases, so the whole population can become resistant. This is natural selection acting quickly because bacteria reproduce rapidly. The spread of resistance can be slowed by doctors not overprescribing antibiotics and by patients completing the full course so that all bacteria are killed.",
        "levels": "Level 3 (5-6): full natural selection sequence applied correctly to resistance, with survival, reproduction and inheritance of the allele. Level 2 (3-4): partial sequence with some correct steps. Level 1 (1-2): isolated relevant points. 0: nothing relevant."
      }
    },
    {
      "unit": 6,
      "title": "Atomic structure & the periodic table",
      "summary": "Atomic model, subatomic particles, isotopes, electronic structure and the periodic table.",
      "tier": "F",
      "specRef": {
        "AQA": "4.1.1",
        "Edexcel": "C1.1",
        "OCR": "C1.1"
      },
      "concept": "Atoms have a tiny central nucleus containing protons and neutrons, surrounded by electrons arranged in energy levels (shells). Protons have a relative charge of +1, electrons -1, and neutrons 0; protons and neutrons have a relative mass of 1, electrons negligible. Atoms have no overall charge because the number of protons equals the number of electrons. The atomic (proton) number is the number of protons and defines the element; the mass number is the total of protons and neutrons. Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons. Relative atomic mass is the average mass of the isotopes, weighted by their abundance. The model of the atom developed over time: from Dalton's solid spheres, to Thomson's plum pudding model, to Rutherford's nuclear model after the alpha scattering experiment, to Bohr's shells. In the periodic table, elements are arranged in order of increasing atomic number, with elements having similar properties in the same group. Groups give the number of outer electrons; periods give the number of occupied shells. Metals are on the left and non-metals on the right. Calculate relative atomic mass and describe electronic structures such as 2,8,1.",
      "commandWords": [
        "describe",
        "calculate",
        "explain"
      ],
      "examples": [
        "Worked calculation: Chlorine has two isotopes, Cl-35 (75%) and Cl-37 (25%). Relative atomic mass = (35 x 75 + 37 x 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = 35.5.",
        "Model explanation: Sodium has the electronic structure 2,8,1. It has one electron in its outer shell, which it loses easily to form a 1+ ion, so it is reactive and placed in Group 1 of the periodic table."
      ],
      "questions": [
        {
          "q": "What is the relative charge of a proton (1 mark)?",
          "a": "+1",
          "marks": 1,
          "markscheme": "+1 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is the overall charge of an atom (1 mark)?",
          "a": "0",
          "marks": 1,
          "markscheme": "zero / neutral / 0 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "An atom has 11 protons and 12 neutrons. What is its mass number (1 mark)?",
          "a": "23",
          "marks": 1,
          "markscheme": "11 + 12 = 23 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Give the electronic structure of an atom with 12 electrons (1 mark).",
          "a": "2,8,2",
          "marks": 1,
          "markscheme": "2,8,2 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "An element has isotopes of mass 63 (69%) and 65 (31%). Calculate the relative atomic mass to 1 decimal place (2 marks).",
          "a": "63.6",
          "marks": 2,
          "markscheme": "(63x69 + 65x31)/100 (1); = 63.62 = 63.6 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain what isotopes are (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "atoms of the same element / same number of protons (1); different number of neutrons / different mass number (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Describe how the model of the atom has changed over time, from the plum pudding model to the nuclear model (6 marks).",
        "marks": 6,
        "model": "Early atomic theory by Dalton described atoms as tiny solid spheres that could not be divided. After the discovery of the electron, J.J. Thomson proposed the plum pudding model, in which the atom was a ball of positive charge with negative electrons embedded in it. This model was tested in the alpha scattering experiment, in which positively charged alpha particles were fired at thin gold foil. Most passed straight through, but a few were deflected and some bounced back. This could not be explained by the plum pudding model, so Rutherford proposed the nuclear model: the atom has a small, dense, positively charged nucleus at its centre, with electrons surrounding it and most of the atom being empty space. Niels Bohr later refined this by suggesting electrons orbit the nucleus in fixed energy levels or shells, which matched experimental observations.",
        "levels": "Level 3 (5-6): logical progression with correct evidence (alpha scattering) and conclusions. Level 2 (3-4): some models described with limited reasoning. Level 1 (1-2): isolated facts about models. 0: nothing relevant."
      }
    },
    {
      "unit": 7,
      "title": "Bonding (ionic, covalent, metallic)",
      "summary": "Ionic, covalent and metallic bonding and how structure explains properties.",
      "tier": "F",
      "specRef": {
        "AQA": "4.2.1",
        "Edexcel": "C2.1",
        "OCR": "C2.1"
      },
      "concept": "Chemical bonds form so atoms achieve stable, full outer electron shells. Ionic bonding occurs between metals and non-metals: the metal atom loses electrons to form a positive ion and the non-metal gains them to form a negative ion, and the oppositely charged ions are held together by strong electrostatic forces of attraction. Ionic compounds form giant lattices, have high melting points because much energy is needed to overcome the many strong bonds, and conduct electricity when molten or dissolved because the ions are then free to move. Covalent bonding occurs between non-metal atoms, which share pairs of electrons. Small molecules such as water and carbon dioxide have low melting and boiling points because the intermolecular forces between molecules are weak, and they do not conduct electricity as they have no charged particles free to move. Giant covalent structures like diamond and silicon dioxide have very high melting points because many strong covalent bonds must be broken. Graphite conducts because each carbon has a delocalised electron. Metallic bonding consists of positive metal ions in a sea of delocalised electrons; metals conduct electricity and heat (delocalised electrons move) and are malleable because layers of ions can slide. Explain properties in terms of structure and bonding.",
      "commandWords": [
        "explain",
        "describe",
        "compare"
      ],
      "examples": [
        "Model explanation: Sodium chloride has a high melting point because it has a giant ionic lattice with strong electrostatic forces between oppositely charged ions. A large amount of energy is needed to overcome these many strong bonds.",
        "Model explanation: Metals conduct electricity because they contain delocalised electrons that are free to move through the structure and carry charge. Metals are malleable because the layers of positive ions can slide over each other without breaking the metallic bonding."
      ],
      "questions": [
        {
          "q": "What type of bonding occurs between a metal and a non-metal (1 mark)?",
          "a": "ionic",
          "marks": 1,
          "markscheme": "ionic (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is shared in a covalent bond (1 mark)?",
          "a": "electrons",
          "marks": 1,
          "markscheme": "(pair of) electrons (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name the charged particles that carry current in metallic bonding (1 mark).",
          "a": "delocalised electrons",
          "marks": 1,
          "markscheme": "delocalised electrons / electrons (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Why does solid sodium chloride NOT conduct electricity (1 mark)?",
          "a": "ions cannot move",
          "marks": 1,
          "markscheme": "ions are fixed in place / not free to move (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain why ionic compounds have high melting points (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "strong electrostatic forces between oppositely charged ions (1); much energy needed to overcome/break the many bonds (1)",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Explain why metals are good conductors of electricity and are malleable (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "delocalised electrons free to move/carry charge (1); layers of ions/atoms can slide over each other (1); without breaking the metallic bonds (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Diamond and graphite are both forms of carbon but have different properties. Explain, in terms of structure and bonding, why diamond is hard and does not conduct electricity, while graphite is soft and conducts electricity (6 marks).",
        "marks": 6,
        "model": "Both diamond and graphite are giant covalent structures made only of carbon atoms joined by strong covalent bonds. In diamond, each carbon atom forms four covalent bonds to other carbon atoms in a rigid three-dimensional lattice. This makes diamond very hard because many strong bonds must be broken to deform it. Diamond does not conduct electricity because all four outer electrons of each carbon are used in bonding, so there are no free electrons to carry charge. In graphite, each carbon atom forms only three covalent bonds, creating layers of hexagonal rings. There are only weak forces between the layers, so the layers can slide over each other, making graphite soft and slippery. Each carbon has one delocalised electron that is free to move along the layers, so graphite can conduct electricity.",
        "levels": "Level 3 (5-6): clear structure-property links for both forms covering hardness and conduction. Level 2 (3-4): some correct links for one or both forms. Level 1 (1-2): isolated facts. 0: nothing relevant."
      }
    },
    {
      "unit": 8,
      "title": "Quantitative chemistry — relative formula mass & moles",
      "summary": "Relative formula mass, conservation of mass, and moles/mass calculations (Higher).",
      "tier": "F",
      "specRef": {
        "AQA": "4.3.1",
        "Edexcel": "C3.1",
        "OCR": "C3.1"
      },
      "concept": "Relative formula mass (Mr) is the sum of the relative atomic masses of all the atoms in a formula. For example, the Mr of water (H2O) is (2 x 1) + 16 = 18. In a balanced symbol equation, the sum of the relative formula masses of the reactants equals the sum for the products, because mass is conserved: no atoms are created or destroyed during a chemical reaction, they are only rearranged. If the mass of a substance appears to change in an experiment, it is usually because a gas has been given off or a gas from the air has been used up. Higher tier students use the mole as the unit for amount of substance. One mole of a substance contains the Avogadro number of particles (6.02 x 10 to the 23). The number of moles is calculated as mass in grams divided by relative formula mass: moles = mass / Mr. Rearranged, mass = moles x Mr. Balanced equations give the ratio of moles of reactants and products, allowing the mass of product to be calculated from the mass of reactant. Concentration of a solution can be found from mass divided by volume in grams per cubic decimetre. Calculate Mr, moles and masses, and explain conservation of mass.",
      "commandWords": [
        "calculate",
        "explain"
      ],
      "examples": [
        "Worked calculation (Higher): How many moles are in 88 g of carbon dioxide (CO2)? Mr of CO2 = 12 + (2 x 16) = 44. Moles = mass / Mr = 88 / 44 = 2 moles.",
        "Worked calculation (Higher): What mass is 0.25 moles of calcium carbonate (CaCO3)? Mr = 40 + 12 + (3 x 16) = 100. Mass = moles x Mr = 0.25 x 100 = 25 g."
      ],
      "questions": [
        {
          "q": "Calculate the relative formula mass of CO2 (C=12, O=16) (1 mark).",
          "a": "44",
          "marks": 1,
          "markscheme": "12 + 32 = 44 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the Mr of H2O (H=1, O=16) (1 mark).",
          "a": "18",
          "marks": 1,
          "markscheme": "2 + 16 = 18 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "State the law that says mass is neither created nor destroyed in a reaction (1 mark).",
          "a": "conservation of mass",
          "marks": 1,
          "markscheme": "conservation of mass (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the number of moles in 36 g of water (Mr = 18) (1 mark). [Higher]",
          "a": "2",
          "marks": 1,
          "markscheme": "36/18 = 2 (1)",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Calculate the mass of 0.5 moles of CaCO3 (Mr = 100) (1 mark). [Higher]",
          "a": "50",
          "marks": 1,
          "markscheme": "0.5 x 100 = 50 g (1)",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "In a sealed flask, magnesium reacts with oxygen. Explain why the total mass does not change (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "no atoms created or destroyed / atoms rearranged (1); flask sealed so no gas can enter or escape / total mass conserved (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "When magnesium is heated in air its mass increases, but when a metal carbonate is heated in an open container its mass decreases. Explain both observations using the law of conservation of mass (6 marks).",
        "marks": 6,
        "model": "In any chemical reaction, mass is conserved because no atoms are created or destroyed; the atoms in the reactants are simply rearranged to form the products, so the total mass of reactants equals the total mass of products. When magnesium is heated in air it reacts with oxygen to form magnesium oxide. Oxygen atoms from the air are added to the magnesium and become part of the solid product, so the mass of the solid increases. The mass gained equals the mass of oxygen that combined. When a metal carbonate such as calcium carbonate is heated in an open container, it decomposes to form a metal oxide and carbon dioxide gas. The carbon dioxide escapes into the air, so the mass of the solid remaining decreases. In both cases total mass is actually conserved; the apparent change is due to a gas being gained from or lost to the surroundings.",
        "levels": "Level 3 (5-6): both observations explained with reference to a gas being gained or lost and conservation of mass. Level 2 (3-4): one observation explained well or both partially. Level 1 (1-2): isolated points. 0: nothing relevant."
      }
    },
    {
      "unit": 9,
      "title": "Rates of reaction & collision theory",
      "summary": "Collision theory and the effects of concentration, temperature, surface area and catalysts.",
      "tier": "F",
      "specRef": {
        "AQA": "4.6.1",
        "Edexcel": "C7.1",
        "OCR": "C5.1"
      },
      "concept": "The rate of a chemical reaction is how quickly reactants are used up or products are formed. It can be found by measuring the amount of product formed or reactant used over time, for example the volume of gas produced per second or the loss in mass per second. According to collision theory, reactions occur when reactant particles collide with enough energy. The minimum energy needed for a successful collision is the activation energy. The rate increases when there are more frequent collisions or collisions with more energy. Increasing concentration (or pressure for gases) puts more particles in the same volume, so collisions are more frequent. Increasing temperature makes particles move faster, so they collide more often and a greater proportion of collisions have at least the activation energy. Increasing surface area by using smaller pieces means more particles are exposed, so collisions are more frequent. A catalyst speeds up a reaction by providing an alternative pathway with a lower activation energy, and is not used up. On a graph of product against time, a steeper line means a faster rate; the reaction finishes when the line becomes flat. Higher tier students calculate the rate from the gradient of a tangent to the curve. The required practical measures rate using sodium thiosulfate and acid, or marble chips and acid. Explain rate changes using collision theory and calculate rates.",
      "commandWords": [
        "explain",
        "calculate",
        "describe"
      ],
      "examples": [
        "Worked calculation: 48 cm3 of gas is produced in 60 seconds. Mean rate = quantity / time = 48 / 60 = 0.8 cm3 per second.",
        "Model explanation: Increasing the temperature increases the rate of reaction because the particles gain kinetic energy and move faster, so they collide more frequently, and a greater proportion of collisions have energy equal to or greater than the activation energy."
      ],
      "questions": [
        {
          "q": "What is the minimum energy needed for a successful collision called (1 mark)?",
          "a": "activation energy",
          "marks": 1,
          "markscheme": "activation energy (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Does a catalyst get used up in a reaction (1 mark)? Answer yes or no.",
          "a": "no",
          "marks": 1,
          "markscheme": "no (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "30 cm3 of gas forms in 15 s. Calculate the mean rate in cm3 per second (1 mark).",
          "a": "2",
          "marks": 1,
          "markscheme": "30/15 = 2 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "How does a catalyst speed up a reaction (1 mark)?",
          "a": "lower activation energy",
          "marks": 1,
          "markscheme": "provides alternative pathway with lower activation energy (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain, using collision theory, why increasing concentration increases the rate of reaction (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "more particles in the same volume (1); collisions more frequent (1)",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Explain why powdered marble reacts faster with acid than the same mass of large marble chips (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "powder has larger surface area (1); more particles exposed/available to collide (1); collisions more frequent so faster rate (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "A student investigated how temperature affects the rate of reaction between sodium thiosulfate and hydrochloric acid. Explain, using collision theory, how and why increasing temperature, concentration and surface area each change the rate of reaction (6 marks).",
        "marks": 6,
        "model": "Reactions happen when particles collide with at least the activation energy. Increasing the temperature gives particles more kinetic energy so they move faster. This means they collide more frequently, and a greater proportion of collisions have energy equal to or above the activation energy, so the rate increases. Increasing the concentration of a solution means there are more reactant particles in the same volume, so collisions become more frequent and the rate increases. Increasing the surface area, for example by using a powder instead of large pieces, exposes more particles so that more collisions can take place per second, again increasing the rate. In the thiosulfate experiment, the time taken for a cross viewed through the flask to disappear gets shorter as temperature rises, showing the rate increases. In each case the key idea is more frequent successful collisions per second.",
        "levels": "Level 3 (5-6): all three factors explained correctly with collision theory including the energy point for temperature. Level 2 (3-4): two factors explained. Level 1 (1-2): isolated points. 0: nothing relevant."
      }
    },
    {
      "unit": 10,
      "title": "Acids, bases & neutralisation",
      "summary": "pH scale, neutralisation, salts, and strong versus weak acids (Higher).",
      "tier": "F",
      "specRef": {
        "AQA": "4.4.2",
        "Edexcel": "C6.1",
        "OCR": "C4.2"
      },
      "concept": "Acids produce hydrogen ions (H+) in aqueous solution, while alkalis are soluble bases that produce hydroxide ions (OH-). The pH scale runs from 0 to 14 and measures how acidic or alkaline a solution is: pH below 7 is acidic, 7 is neutral, and above 7 is alkaline. pH can be measured with universal indicator or a pH probe. Neutralisation is the reaction between an acid and a base (or alkali) to produce a salt and water; the ionic equation is H+ + OH- giving H2O. Acids react with metals to give a salt and hydrogen, with metal oxides and hydroxides (bases) to give a salt and water, and with metal carbonates to give a salt, water and carbon dioxide. The salt produced depends on the acid: hydrochloric acid gives chlorides, sulfuric acid gives sulfates, and nitric acid gives nitrates. The required practical prepares a pure dry sample of a soluble salt by reacting excess insoluble base with acid, filtering, then crystallising. Higher tier: a strong acid is fully ionised in solution (e.g. hydrochloric, sulfuric, nitric), whereas a weak acid is only partially ionised (e.g. ethanoic, citric). For the same concentration, a strong acid has a lower pH. As pH decreases by one unit, the hydrogen ion concentration increases by a factor of ten. Describe neutralisation reactions and explain the difference between strong and weak acids.",
      "commandWords": [
        "describe",
        "explain",
        "predict"
      ],
      "examples": [
        "Model explanation: Hydrochloric acid is a strong acid because it is completely ionised in water, releasing many hydrogen ions. Ethanoic acid is a weak acid because only a small fraction of its molecules ionise, so at the same concentration it has a higher pH.",
        "Worked reaction: Hydrochloric acid + sodium hydroxide gives sodium chloride + water. The ionic equation for neutralisation is H+ + OH- giving H2O. The acid is hydrochloric so the salt is a chloride."
      ],
      "questions": [
        {
          "q": "What ion do all acids produce in aqueous solution (1 mark)?",
          "a": "h+",
          "marks": 1,
          "markscheme": "hydrogen ion / H+ (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is the pH of a neutral solution (1 mark)?",
          "a": "7",
          "marks": 1,
          "markscheme": "7 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Acid + metal carbonate gives a salt, water and which gas (1 mark)?",
          "a": "carbon dioxide",
          "marks": 1,
          "markscheme": "carbon dioxide (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which salt is made when sulfuric acid is neutralised (1 mark)?",
          "a": "sulfate",
          "marks": 1,
          "markscheme": "a sulfate (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Name the type of acid that is only partially ionised in water (1 mark). [Higher]",
          "a": "weak acid",
          "marks": 1,
          "markscheme": "weak acid (1)",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Explain why a strong acid has a lower pH than a weak acid of the same concentration (3 marks). [Higher]",
          "a": "",
          "marks": 3,
          "markscheme": "strong acid fully ionised / weak only partially ionised (1); strong acid has higher concentration of H+ ions (1); higher H+ concentration means lower pH (1)",
          "tier": "H",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Describe how you would prepare a pure, dry sample of copper sulfate crystals from copper oxide and sulfuric acid (6 marks).",
        "marks": 6,
        "model": "Add an excess of copper oxide, which is an insoluble base, to warm dilute sulfuric acid and stir. The acid reacts with the base in a neutralisation reaction to form copper sulfate and water. Using excess copper oxide ensures all the acid is used up. Once no more copper oxide dissolves, filter the mixture to remove the unreacted excess copper oxide, leaving a blue copper sulfate solution in the filtrate. Heat the solution gently in an evaporating basin to evaporate some of the water and make a saturated solution; stop heating when crystals start to form at the edges. Leave the solution to cool slowly so that copper sulfate crystals form by crystallisation. Filter or pour off the remaining solution, then pat the crystals dry with filter paper or leave them to dry. This produces pure, dry copper sulfate crystals.",
        "levels": "Level 3 (5-6): logical method with excess base, filtering, and crystallisation in correct order. Level 2 (3-4): several correct steps but gaps or wrong order. Level 1 (1-2): isolated correct points. 0: nothing relevant."
      }
    },
    {
      "unit": 11,
      "title": "Energy stores, transfers & efficiency",
      "summary": "Energy stores and transfers, conservation of energy, work, power and efficiency.",
      "tier": "F",
      "specRef": {
        "AQA": "4.1.1",
        "Edexcel": "P3.1",
        "OCR": "P1.1"
      },
      "concept": "Energy is stored in different ways: kinetic (moving objects), gravitational potential (raised objects), elastic potential (stretched or compressed objects), thermal (internal), chemical, magnetic, electrostatic and nuclear stores. When something happens, energy is transferred between stores mechanically (by a force doing work), electrically, by heating, or by radiation. The principle of conservation of energy states that energy cannot be created or destroyed, only transferred, stored or dissipated. In any transfer some energy is dissipated to the surroundings as wasted thermal energy, usually due to friction, raising the temperature of the surroundings. Kinetic energy is calculated as one half times mass times speed squared. Gravitational potential energy is mass times gravitational field strength times height. Work done equals force times distance, and is equal to the energy transferred; one joule is the work done when a force of one newton moves an object one metre. Power is the rate of energy transfer, calculated as energy transferred divided by time, measured in watts. Efficiency is the useful output energy transfer divided by the total input energy transfer, and can be given as a decimal or percentage. Lubrication and streamlining reduce unwanted energy transfers. Calculate energy, power and efficiency, and describe energy transfers in everyday systems.",
      "commandWords": [
        "calculate",
        "describe",
        "explain"
      ],
      "examples": [
        "Worked calculation: A 2 kg object moves at 3 m/s. Kinetic energy = 0.5 x m x v squared = 0.5 x 2 x 3 squared = 0.5 x 2 x 9 = 9 J.",
        "Worked calculation: A device transfers 200 J usefully from 500 J of input. Efficiency = useful output / total input = 200 / 500 = 0.4 = 40%."
      ],
      "questions": [
        {
          "q": "State the principle of conservation of energy in terms of whether energy can be created or destroyed (1 mark).",
          "a": "no",
          "marks": 1,
          "markscheme": "energy cannot be created or destroyed (only transferred/stored) - accept 'no' (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the kinetic energy of a 4 kg object moving at 5 m/s (2 marks).",
          "a": "50",
          "marks": 2,
          "markscheme": "0.5 x 4 x 5^2 (1); = 50 J (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A machine does 600 J of work in 20 s. Calculate its power in watts (2 marks).",
          "a": "30",
          "marks": 2,
          "markscheme": "power = energy/time = 600/20 (1); = 30 W (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "A motor wastes 300 J and usefully transfers 700 J from 1000 J input. Calculate the efficiency as a percentage (1 mark).",
          "a": "70",
          "marks": 1,
          "markscheme": "700/1000 x 100 = 70% (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain how friction reduces the efficiency of a machine (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "friction transfers energy to thermal store / as heat (1); this energy is dissipated/wasted to surroundings so less useful energy output (1)",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "A ball is dropped and bounces back lower than its start height. Describe the energy transfers and explain why it does not return to the same height (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "gravitational potential to kinetic as it falls (1); kinetic to elastic and back, some to thermal/sound on impact (1); energy dissipated to surroundings so less GPE so lower bounce (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "A roller coaster car starts at the top of a hill, runs down to the bottom and up a second smaller hill. Describe the energy transfers involved and explain why the second hill must be lower than the first (6 marks).",
        "marks": 6,
        "model": "At the top of the first hill the car has a large store of gravitational potential energy because it is raised high above the ground. As the car runs down the hill, this gravitational potential energy is transferred to a kinetic energy store, so the car speeds up and is moving fastest at the bottom where its kinetic energy is greatest. As the car climbs the second hill, kinetic energy is transferred back to gravitational potential energy, so the car slows down. By the principle of conservation of energy, energy cannot be created or destroyed, only transferred. However, as the car moves, friction between the car and the track and air resistance transfer some energy to thermal energy stores, which is dissipated to the surroundings as wasted heat. This means there is less energy available to lift the car, so the car cannot rise as high as it started, and the second hill must be lower than the first.",
        "levels": "Level 3 (5-6): correct sequence of GPE-kinetic transfers plus conservation and dissipation explaining the lower hill. Level 2 (3-4): some transfers correct with partial explanation. Level 1 (1-2): isolated points. 0: nothing relevant."
      }
    },
    {
      "unit": 12,
      "title": "Electricity — current, p.d., resistance & circuits",
      "summary": "Current, potential difference, resistance, and series and parallel circuits.",
      "tier": "F",
      "specRef": {
        "AQA": "4.2.1",
        "Edexcel": "P2.1",
        "OCR": "P4.1"
      },
      "concept": "Electric current is the rate of flow of electric charge, measured in amperes with an ammeter connected in series. Charge flow equals current times time (Q = I x t), measured in coulombs. Potential difference, measured in volts with a voltmeter connected in parallel across a component, is the energy transferred per unit charge. Resistance, measured in ohms, opposes the flow of charge. These are linked by Ohm's law: potential difference equals current times resistance (V = I x R). An ohmic conductor at constant temperature has a current directly proportional to potential difference, giving a straight line through the origin on an I-V graph. For a filament lamp the resistance increases as it gets hotter, so the line curves. A diode only allows current in one direction. In a series circuit, the current is the same everywhere, the total potential difference is shared between components, and the total resistance is the sum of the individual resistances. In a parallel circuit, components have the same potential difference across them, the total current is the sum of the currents through the branches, and adding resistors in parallel decreases the total resistance because there are more paths for the charge. The required practical investigates resistance, for example how the length of a wire affects its resistance. Calculate using the equations and describe circuit behaviour.",
      "commandWords": [
        "calculate",
        "describe",
        "explain"
      ],
      "examples": [
        "Worked calculation: A component has a current of 2 A and a resistance of 6 ohms. Potential difference = current x resistance = 2 x 6 = 12 V.",
        "Worked calculation: A current of 3 A flows for 20 s. Charge = current x time = 3 x 20 = 60 C (coulombs)."
      ],
      "questions": [
        {
          "q": "What is the unit of electric current (1 mark)?",
          "a": "ampere",
          "marks": 1,
          "markscheme": "ampere / amp / A (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "How is an ammeter connected in a circuit (1 mark)?",
          "a": "series",
          "marks": 1,
          "markscheme": "in series (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the potential difference when a current of 0.5 A flows through a 8 ohm resistor (2 marks).",
          "a": "4",
          "marks": 2,
          "markscheme": "V = IR = 0.5 x 8 (1); = 4 V (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the charge when a current of 4 A flows for 10 s (2 marks).",
          "a": "40",
          "marks": 2,
          "markscheme": "Q = It = 4 x 10 (1); = 40 C (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "In a series circuit, what can you say about the current at different points (1 mark)?",
          "a": "same",
          "marks": 1,
          "markscheme": "current is the same everywhere / same at all points (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain why adding resistors in parallel decreases the total resistance of a circuit (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "adds extra paths/branches for current (1); more current can flow for the same potential difference (1); so total/overall resistance decreases (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Describe how you would investigate how the length of a wire affects its resistance, and explain what results you would expect (6 marks).",
        "marks": 6,
        "model": "Set up a circuit with a battery, an ammeter in series and a length of resistance wire, with a voltmeter connected in parallel across the wire. Attach crocodile clips to the wire so you can vary the length tested, for example from 10 cm to 100 cm. For each length, measure the current using the ammeter and the potential difference using the voltmeter, then calculate the resistance using resistance equals potential difference divided by current. Keep the type and thickness of wire and the temperature constant so it is a fair test, and switch off between readings to avoid the wire heating up. Repeat each reading and calculate a mean to improve accuracy. The expected result is that resistance increases as the length of the wire increases, and the relationship is directly proportional, so doubling the length doubles the resistance. This is because a longer wire means the electrons collide with more ions, making it harder for charge to flow.",
        "levels": "Level 3 (5-6): clear valid method with measurements, control variables and correct expected proportional result. Level 2 (3-4): some method and a partial conclusion. Level 1 (1-2): isolated points. 0: nothing relevant."
      }
    },
    {
      "unit": 13,
      "title": "Particle model & states of matter",
      "summary": "Particle model, changes of state, density and specific heat capacity.",
      "tier": "F",
      "specRef": {
        "AQA": "4.3.1",
        "Edexcel": "P14.1",
        "OCR": "P2.1"
      },
      "concept": "The particle model represents matter as particles arranged differently in the three states. In solids, particles are close together in a regular fixed arrangement, vibrating about fixed positions, giving solids a fixed shape and volume. In liquids, particles are close together but arranged randomly and able to move around each other, so liquids flow and take the shape of their container while keeping a fixed volume. In gases, particles are far apart, moving quickly in random directions, so gases have no fixed shape or volume and can be compressed. Density is the mass per unit volume, calculated as density equals mass divided by volume, measured in kilograms per cubic metre. The required practical measures density by finding mass with a balance and volume by measurement or displacement. Changes of state are physical changes because no new substance is made and the change can be reversed; the mass is conserved. When a substance is heated, energy is stored in its internal energy store, either raising the temperature or changing the state. Specific heat capacity is the energy needed to raise the temperature of one kilogram of a substance by one degree Celsius. The change in thermal energy equals mass times specific heat capacity times temperature change. During a change of state, energy is transferred but the temperature stays constant because the energy is used to break bonds between particles. Calculate density and thermal energy, and describe the particle model.",
      "commandWords": [
        "calculate",
        "describe",
        "explain"
      ],
      "examples": [
        "Worked calculation: A block has a mass of 600 g and a volume of 200 cm3. Density = mass / volume = 600 / 200 = 3 g/cm3.",
        "Worked calculation: Heating 2 kg of water (specific heat capacity 4200 J/kg degC) by 10 degC. Energy = mass x specific heat capacity x temperature change = 2 x 4200 x 10 = 84000 J."
      ],
      "questions": [
        {
          "q": "In which state are particles far apart and moving quickly in random directions (1 mark)?",
          "a": "gas",
          "marks": 1,
          "markscheme": "gas (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the density of an object with mass 250 g and volume 50 cm3 (2 marks).",
          "a": "5",
          "marks": 2,
          "markscheme": "density = mass/volume = 250/50 (1); = 5 g/cm3 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Is a change of state a physical or chemical change (1 mark)?",
          "a": "physical",
          "marks": 1,
          "markscheme": "physical (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the energy to heat 3 kg of a substance by 5 degC (specific heat capacity 900 J/kg degC) (2 marks).",
          "a": "13500",
          "marks": 2,
          "markscheme": "E = mc(change T) = 3 x 900 x 5 (1); = 13500 J (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain why the temperature stays constant while a solid is melting, even though energy is still being supplied (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "energy is used to break bonds/forces between particles (1); rather than raising temperature / increasing kinetic energy (1)",
          "tier": "F",
          "selfCheck": false
        },
        {
          "q": "Use the particle model to explain why a gas can be compressed but a solid cannot (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "in a gas particles are far apart with large spaces between them (1); so they can be pushed closer together (1); in a solid particles are already close together/touching in fixed positions so cannot be compressed (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Using the particle model, describe the arrangement and movement of particles in solids, liquids and gases, and explain why solids have a fixed shape but gases do not (6 marks).",
        "marks": 6,
        "model": "In a solid, the particles are very close together in a regular, fixed arrangement and can only vibrate about fixed positions. This means a solid has a fixed shape and a fixed volume because the strong forces between particles hold them in place. In a liquid, the particles are still close together but are arranged randomly and can move around and slide past one another. This is why a liquid keeps a fixed volume but can flow and take the shape of its container. In a gas, the particles are far apart and move quickly in random directions with large spaces between them. A gas therefore has no fixed shape or volume, spreads out to fill its container and can be compressed. A solid has a fixed shape because its particles cannot move from their positions, whereas a gas has no fixed shape because its particles are free to move anywhere and so fill the available space.",
        "levels": "Level 3 (5-6): all three states described accurately with a clear explanation of fixed versus no fixed shape. Level 2 (3-4): two states described with some explanation. Level 1 (1-2): isolated correct points. 0: nothing relevant."
      }
    },
    {
      "unit": 14,
      "title": "Forces, motion & Newton's laws",
      "summary": "Forces, Newton's laws of motion, acceleration and momentum (Higher).",
      "tier": "F",
      "specRef": {
        "AQA": "4.5.6",
        "Edexcel": "P2.5",
        "OCR": "P5.2"
      },
      "concept": "A force is a push or pull that can change the shape, speed or direction of an object. Forces can be contact (e.g. friction, air resistance, tension) or non-contact (e.g. gravity, magnetism). The resultant force is the single force that has the same effect as all the forces acting. Newton's first law states that an object stays at rest or moves at a constant velocity unless acted on by a resultant force; if the resultant force is zero the object is in equilibrium. Newton's second law states that the acceleration of an object is proportional to the resultant force and inversely proportional to its mass: resultant force equals mass times acceleration (F = m x a). The greater the mass, the greater the force needed for a given acceleration; this is inertia. Newton's third law states that when two objects interact they exert equal and opposite forces on each other. Acceleration is the change in velocity divided by the time taken. Weight is the force of gravity on a mass, equal to mass times gravitational field strength. Higher tier: momentum is mass times velocity (p = m x v), measured in kilogram metres per second. In a closed system the total momentum before an event equals the total momentum after, which is conservation of momentum. The required practical investigates the effect of force or mass on acceleration. Calculate forces, acceleration and momentum, and apply Newton's laws.",
      "commandWords": [
        "calculate",
        "explain",
        "describe"
      ],
      "examples": [
        "Worked calculation: A resultant force of 30 N acts on a 6 kg object. Acceleration = force / mass = 30 / 6 = 5 m/s squared.",
        "Worked calculation (Higher): A 1500 kg car moves at 12 m/s. Momentum = mass x velocity = 1500 x 12 = 18000 kg m/s."
      ],
      "questions": [
        {
          "q": "What is the resultant force on an object moving at constant velocity (1 mark)?",
          "a": "0",
          "marks": 1,
          "markscheme": "zero / 0 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the force needed to accelerate a 5 kg mass at 4 m/s squared (2 marks).",
          "a": "20",
          "marks": 2,
          "markscheme": "F = ma = 5 x 4 (1); = 20 N (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the acceleration of a 2 kg object when a resultant force of 10 N acts on it (1 mark).",
          "a": "5",
          "marks": 1,
          "markscheme": "a = F/m = 10/2 = 5 m/s^2 (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the weight of a 4 kg mass (g = 10 N/kg) (1 mark).",
          "a": "40",
          "marks": 1,
          "markscheme": "W = mg = 4 x 10 = 40 N (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the momentum of a 2 kg ball moving at 6 m/s (1 mark). [Higher]",
          "a": "12",
          "marks": 1,
          "markscheme": "p = mv = 2 x 6 = 12 kg m/s (1)",
          "tier": "H",
          "selfCheck": true
        },
        {
          "q": "Use Newton's laws to explain why a passenger lurches forward when a moving car suddenly brakes (3 marks).",
          "a": "",
          "marks": 3,
          "markscheme": "passenger was moving with the car / has momentum (1); Newton's first law: object continues moving unless a resultant force acts (1); seatbelt/seat provides the force to decelerate them, otherwise they continue forward (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Explain how Newton's three laws of motion apply to a car of mass 1000 kg that speeds up from rest, travels at constant speed, then collides with a wall (6 marks).",
        "marks": 6,
        "model": "When the car is at rest, by Newton's first law it stays still until a resultant force acts. When the engine provides a driving force greater than friction and air resistance, there is a resultant force, and by Newton's second law the car accelerates, where resultant force equals mass times acceleration, so a larger force gives a larger acceleration. Once the car reaches a constant speed, the driving force and the resistive forces are balanced, the resultant force is zero, and by Newton's first law the car continues at constant velocity. When the car collides with the wall, by Newton's third law the car exerts a force on the wall and the wall exerts an equal and opposite force back on the car, which decelerates the car rapidly. The larger the mass of the car, the greater its inertia, so the greater the force needed to change its motion. Higher tier students can also note that the momentum of the car is reduced to zero by the force from the wall acting over the collision time.",
        "levels": "Level 3 (5-6): all three laws applied correctly to the relevant stages with correct terminology. Level 2 (3-4): two laws applied correctly. Level 1 (1-2): isolated relevant points. 0: nothing relevant."
      }
    },
    {
      "unit": 15,
      "title": "Waves — properties, EM spectrum",
      "summary": "Transverse and longitudinal waves, the wave equation, and the electromagnetic spectrum.",
      "tier": "F",
      "specRef": {
        "AQA": "4.6.1",
        "Edexcel": "P4.1",
        "OCR": "P6.1"
      },
      "concept": "Waves transfer energy and information from one place to another without transferring matter. In a transverse wave, the oscillations are perpendicular to the direction of energy transfer, for example water waves and all electromagnetic waves. In a longitudinal wave, the oscillations are parallel to the direction of energy transfer, with regions of compression and rarefaction, for example sound waves. Key properties are: amplitude, the maximum displacement from the rest position; wavelength, the distance between equivalent points on adjacent waves; frequency, the number of waves passing a point each second, measured in hertz; and the period, the time for one wave, equal to one divided by the frequency. The wave speed is the speed at which energy is transferred, and the wave equation states that wave speed equals frequency times wavelength. The electromagnetic spectrum is a continuous range of transverse waves that all travel at the same speed in a vacuum. In order of increasing frequency and decreasing wavelength they are: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays. Different parts have different uses, such as radio waves for communications, microwaves for cooking and satellites, infrared for heating and cameras, and X-rays and gamma rays for medical imaging and treatment. High-frequency waves like ultraviolet, X-rays and gamma rays can be harmful and may cause cell damage or cancer. Calculate using the wave equation and describe the properties and uses of waves.",
      "commandWords": [
        "calculate",
        "describe",
        "explain"
      ],
      "examples": [
        "Worked calculation: A wave has a frequency of 50 Hz and a wavelength of 4 m. Wave speed = frequency x wavelength = 50 x 4 = 200 m/s.",
        "Model explanation: Sound is a longitudinal wave because the air particles vibrate back and forth in the same direction that the wave travels, creating compressions where particles are squeezed together and rarefactions where they are spread out."
      ],
      "questions": [
        {
          "q": "In which type of wave do oscillations occur parallel to the direction of energy transfer (1 mark)?",
          "a": "longitudinal",
          "marks": 1,
          "markscheme": "longitudinal (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "What is the unit of frequency (1 mark)?",
          "a": "hertz",
          "marks": 1,
          "markscheme": "hertz / Hz (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Calculate the wave speed when frequency is 20 Hz and wavelength is 3 m (2 marks).",
          "a": "60",
          "marks": 2,
          "markscheme": "v = f x wavelength = 20 x 3 (1); = 60 m/s (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Which electromagnetic wave has the longest wavelength (1 mark)?",
          "a": "radio",
          "marks": 1,
          "markscheme": "radio waves (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Give one use of microwaves (1 mark).",
          "a": "cooking",
          "marks": 1,
          "markscheme": "cooking / satellite communication / mobile phones (1)",
          "tier": "F",
          "selfCheck": true
        },
        {
          "q": "Explain why ultraviolet, X-rays and gamma rays can be dangerous to humans (2 marks).",
          "a": "",
          "marks": 2,
          "markscheme": "they have high frequency / high energy (1); can damage cells / cause mutations / cancer (1)",
          "tier": "F",
          "selfCheck": false
        }
      ],
      "extended": {
        "q": "Describe the order of the electromagnetic spectrum and explain how the properties and uses of the waves change across it (6 marks).",
        "marks": 6,
        "model": "The electromagnetic spectrum is a continuous range of transverse waves that all travel at the same speed in a vacuum. In order of increasing frequency and decreasing wavelength, the waves are radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays. Radio waves have the longest wavelength and lowest frequency and are used for broadcasting and communications. Microwaves are used for satellite communications and heating food in microwave ovens. Infrared is used for heating, electric heaters and thermal imaging cameras. Visible light is the only part the human eye can detect and is used in fibre optics and photography. As frequency increases towards ultraviolet, X-rays and gamma rays, the waves carry more energy. Ultraviolet is used in security marking and sun tanning, X-rays are used to image bones, and gamma rays are used to sterilise equipment and treat cancer. Because these high-frequency waves carry a lot of energy, they can damage cells and cause mutations or cancer, so exposure must be controlled.",
        "levels": "Level 3 (5-6): correct order plus uses and the energy/frequency trend including hazards. Level 2 (3-4): mostly correct order with some uses. Level 1 (1-2): isolated correct facts. 0: nothing relevant."
      }
    }
  ]
};
