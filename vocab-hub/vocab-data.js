// ============================================================
// MartinEdu Vocabulary Data
// Structure: VOCAB[subject][board][topic] = [{term, definition, hint}]
//
// board keys:
//   'aqa-gcse'        AQA GCSE
//   'edexcel-gcse'    Edexcel GCSE
//   'ocr-gcse'        OCR GCSE
//   'aqa-alevel'      AQA A-Level
//   'edexcel-alevel'  Edexcel A-Level
//   'ocr-alevel'      OCR A-Level
//   'ib-dp'           IB Diploma Programme
//   'cambridge-igcse' Cambridge IGCSE
//   'edexcel-igcse'   Edexcel IGCSE
//   'ccea-gcse'       CCEA GCSE
//   'ks3'             KS3 (generic, no board)
//
// hint: a short clue used in Hangman/Wordle (first letter + length, or a category hint)
// ============================================================

const VOCAB = {};

// ────────────────────────────────────────────────────────────
// BIOLOGY — AQA GCSE (8461)
// Source: AQA GCSE Biology specification 8461
// Topics match spec sections 4.1–4.7
// ────────────────────────────────────────────────────────────
VOCAB['biology'] = VOCAB['biology'] || {};
VOCAB['biology']['aqa-gcse'] = {

  'Cell Biology': [
    { term:'Cell membrane',      definition:'A partially permeable barrier that surrounds and controls what enters and leaves the cell.',                       hint:'Controls entry/exit of substances' },
    { term:'Cell wall',          definition:'An outer layer made of cellulose that strengthens plant cells.',                                                   hint:'Cellulose — plant cells only' },
    { term:'Chloroplast',        definition:'An organelle that is the site of photosynthesis.',                                                                 hint:'Contains chlorophyll' },
    { term:'Mitochondria',       definition:'An organelle that is the site of aerobic respiration, releasing energy for the cell.',                             hint:'Powerhouse of the cell' },
    { term:'Nucleus',            definition:'An organelle found in eukaryotic cells that contains the genetic material and controls cell activity.',             hint:'Contains DNA' },
    { term:'Ribosome',           definition:'A sub-cellular structure where protein synthesis takes place.',                                                    hint:'Makes proteins' },
    { term:'Vacuole',            definition:'An organelle that stores cell sap and helps maintain the shape of plant cells.',                                   hint:'Stores cell sap' },
    { term:'Plasmid',            definition:'A small loop of DNA found in the cytoplasm of prokaryotic cells.',                                                 hint:'Extra DNA in bacteria' },
    { term:'Organelle',          definition:'A specialised structure found inside a cell.',                                                                     hint:'Part of a cell' },
    { term:'Eukaryotic cell',    definition:'A type of cell found in plants and animals that contains a membrane-bound nucleus.',                               hint:'Has a nucleus' },
    { term:'Prokaryotic cell',   definition:'A type of cell, such as a bacterium, that does not contain a membrane-bound nucleus.',                             hint:'No nucleus — e.g. bacteria' },
    { term:'Diffusion',          definition:'The net movement of particles from an area of high concentration to low concentration.',                           hint:'Passive movement down gradient' },
    { term:'Osmosis',            definition:'The diffusion of water from a dilute solution to a concentrated solution through a partially permeable membrane.', hint:'Water movement through membrane' },
    { term:'Active transport',   definition:'The movement of substances against a concentration gradient using energy from respiration.',                       hint:'Against the gradient — needs energy' },
    { term:'Mitosis',            definition:'A type of cell division producing two genetically identical daughter cells from one parent cell.',                 hint:'Produces identical cells' },
    { term:'Cell differentiation', definition:'The process where a cell becomes specialised to carry out a particular function.',                               hint:'Cell becomes specialised' },
    { term:'Stem cell',          definition:'An undifferentiated cell that can divide and differentiate into many specialised cell types.',                     hint:'Undifferentiated — can become anything' },
    { term:'Embryonic stem cell',definition:'A stem cell from an early embryo that can differentiate into most types of human cell.',                          hint:'From embryo — most versatile' },
    { term:'Adult stem cell',    definition:'A stem cell found in developed organisms that can form a limited range of cell types.',                            hint:'Limited differentiation ability' },
    { term:'Meristematic cell',  definition:'A type of plant stem cell found in meristems that can differentiate into any plant cell type.',                    hint:'Plant stem cell' },
    { term:'Concentration gradient', definition:'The difference in concentration of a substance between two regions.',                                         hint:'Drives diffusion' },
    { term:'Surface area to volume ratio', definition:'A measure comparing the surface area of an object to its volume; larger in smaller cells.',             hint:'Important for exchange of substances' },
    { term:'Therapeutic cloning',definition:'Producing an embryo that is genetically identical to a patient to obtain stem cells for treatment.',              hint:'Embryo made for treatment' },
    { term:'The cell cycle',     definition:'A series of stages in which a cell grows, replicates its DNA, and divides by mitosis.',                           hint:'Growth and division cycle' },
    { term:'Chromosome',         definition:'A DNA structure found in the nucleus of a cell, made up of many genes.',                                          hint:'Found in nucleus — made of DNA' },
    { term:'Magnification',      definition:'How many times larger an image appears compared to the actual object.',                                           hint:'Image size ÷ actual size' },
    { term:'Resolution',         definition:'The ability to distinguish two separate points in a specimen when using a microscope.',                           hint:'Clarity of detail under microscope' },
    { term:'Specialised cell',   definition:'A cell that is adapted in structure to carry out a specific function.',                                           hint:'Adapted for one job' },
  ],

  'Organisation': [
    { term:'Tissue',             definition:'A group of cells with similar structure and function working together.',                                           hint:'Group of similar cells' },
    { term:'Organ',              definition:'An aggregation of tissues performing specific functions.',                                                         hint:'Made of tissues' },
    { term:'Organ system',       definition:'A group of organs working together to perform a major function in the body.',                                     hint:'Group of organs' },
    { term:'Enzyme',             definition:'A biological catalyst that speeds up chemical reactions in living organisms.',                                    hint:'Biological catalyst — protein' },
    { term:'Active site',        definition:'The region of an enzyme where the substrate binds.',                                                              hint:'Where substrate fits' },
    { term:'Lock and key hypothesis', definition:'A model describing how a substrate must be the correct complementary shape to fit the active site of an enzyme.', hint:'Shape must match enzyme' },
    { term:'Amylase',            definition:'An enzyme produced in the salivary glands and pancreas that breaks carbohydrates into simple sugars.',            hint:'Breaks down starch' },
    { term:'Protease',           definition:'An enzyme produced in the stomach and pancreas that breaks proteins into amino acids.',                           hint:'Breaks down proteins' },
    { term:'Lipase',             definition:'An enzyme produced in the pancreas that breaks lipids into fatty acids and glycerol.',                            hint:'Breaks down fats' },
    { term:'Bile',               definition:'A substance made in the liver, stored in the gallbladder, which neutralises stomach acid and emulsifies fats.',   hint:'Made in liver — emulsifies fat' },
    { term:'Metabolism',         definition:'All of the chemical reactions occurring in a cell or organism.',                                                  hint:'Sum of all reactions' },
    { term:'Artery',             definition:'A blood vessel that carries blood at high pressure away from the heart.',                                         hint:'Away from heart — thick walls' },
    { term:'Vein',               definition:'A blood vessel that carries blood at low pressure back to the heart, with valves.',                               hint:'Back to heart — has valves' },
    { term:'Capillary',          definition:'A very thin blood vessel that allows exchange of substances between blood and tissues.',                          hint:'Tiny — one cell thick' },
    { term:'Aorta',              definition:'The main artery that carries oxygenated blood away from the heart to the body.',                                  hint:'Largest artery from heart' },
    { term:'Vena cava',          definition:'The main vein that carries deoxygenated blood back to the heart from the body.',                                  hint:'Largest vein to heart' },
    { term:'Pulmonary artery',   definition:'The artery that carries deoxygenated blood from the heart to the lungs.',                                        hint:'Heart to lungs' },
    { term:'Pulmonary vein',     definition:'The vein that carries oxygenated blood from the lungs back to the heart.',                                       hint:'Lungs to heart' },
    { term:'Coronary heart disease', definition:'A disease caused by the build-up of fatty deposits inside the coronary arteries, restricting blood flow to the heart.', hint:'Fatty deposits in heart arteries' },
    { term:'Stent',              definition:'A tube surgically inserted into a blood vessel to keep it open.',                                                 hint:'Keeps blood vessels open' },
    { term:'Statins',            definition:'Drugs used to reduce blood cholesterol levels, slowing the rate of fatty material deposition.',                   hint:'Lower cholesterol' },
    { term:'Benign tumour',      definition:'An abnormal mass of cells that does not invade other tissues and is not cancerous.',                              hint:'Does not spread' },
    { term:'Malignant tumour',   definition:'A cancerous mass of cells that can invade neighbouring tissues and spread via the blood.',                        hint:'Spreads — cancerous' },
    { term:'Risk factor',        definition:'Something that increases a person\'s chance of developing a disease.',                                            hint:'Increases chance of disease' },
    { term:'Transpiration',      definition:'The process by which water evaporates from a plant\'s leaves, drawing water up from the roots.',                 hint:'Water loss from leaves' },
    { term:'Translocation',      definition:'The movement of dissolved food (sugars) through phloem tissue from source to sink.',                             hint:'Sugar movement in phloem' },
    { term:'Xylem',              definition:'A plant transport tissue that carries water and dissolved minerals from roots to leaves.',                        hint:'Carries water upwards' },
    { term:'Phloem',             definition:'A plant transport tissue that carries dissolved sugars from leaves to other parts of the plant.',                 hint:'Carries sugar — bidirectional' },
    { term:'Palisade mesophyll', definition:'A plant tissue in leaves containing many chloroplasts, specialised for photosynthesis.',                          hint:'Top layer of leaf — photosynthesis' },
    { term:'Spongy mesophyll',   definition:'A plant tissue in leaves with air spaces between cells, specialised for gas exchange.',                           hint:'Air spaces — gas exchange' },
  ],

  'Infection and Response': [
    { term:'Pathogen',           definition:'A microorganism that causes infectious disease.',                                                                  hint:'Disease-causing organism' },
    { term:'Communicable disease', definition:'A disease that can be spread between individuals directly or indirectly.',                                      hint:'Contagious — can be passed on' },
    { term:'Non-communicable disease', definition:'A disease that cannot be spread between individuals.',                                                     hint:'Cannot be passed on' },
    { term:'Vaccination',        definition:'Introducing dead or inactive pathogens into the body to stimulate the immune system to produce antibodies.',      hint:'Trains immune system' },
    { term:'Antibiotics',        definition:'Medicines that kill bacteria inside the body but have no effect on viruses.',                                     hint:'Kills bacteria — not viruses' },
    { term:'Antibody',           definition:'A protein produced by white blood cells that binds to a specific antigen on a pathogen.',                        hint:'Produced by white blood cells' },
    { term:'Antigen',            definition:'A molecule on the surface of a pathogen that triggers an immune response.',                                      hint:'Triggers immune response' },
    { term:'White blood cell',   definition:'An immune system cell that produces antibodies and antitoxins or engulfs pathogens.',                            hint:'Part of immune system' },
    { term:'Placebo',            definition:'A substance given in drug trials that has no active ingredient, used as a comparison.',                           hint:'Fake treatment — control' },
    { term:'Double blind trial', definition:'A drug trial where neither the patient nor researcher knows who receives the drug or placebo.',                   hint:'Neither side knows who gets drug' },
    { term:'Monoclonal antibody',definition:'An antibody produced from a single clone of cells, specific to one antigen.',                                    hint:'One type — one antigen' },
    { term:'Malaria',            definition:'A disease caused by a protist, spread by mosquitoes, causing fever and potentially fatal.',                       hint:'Caused by protist — spread by mosquitoes' },
    { term:'HIV',                definition:'A virus that attacks the immune system and can lead to AIDS if untreated.',                                       hint:'Attacks immune system' },
    { term:'Measles',            definition:'A viral disease causing fever and a red skin rash, spread by droplets.',                                         hint:'Viral — red rash' },
    { term:'Salmonella',         definition:'A bacterial disease spread through contaminated food, causing fever, vomiting and diarrhoea.',                    hint:'Bacterial — from contaminated food' },
    { term:'Tobacco Mosaic Virus', definition:'A plant virus that causes a mosaic discolouration of leaves and stunts plant growth.',                         hint:'Plant virus — mosaic leaf pattern' },
    { term:'Rose black spot',    definition:'A fungal disease causing black/purple spots on leaves, which turn yellow and fall early.',                       hint:'Fungal — affects rose leaves' },
    { term:'Preclinical testing',definition:'Drug testing performed in a laboratory using cells, tissues and live animals before human trials.',               hint:'Before human trials' },
    { term:'Clinical testing',   definition:'Drug testing performed on healthy volunteers and patients to assess safety and effectiveness.',                   hint:'Testing on humans' },
    { term:'Side effect',        definition:'An unintended effect of a drug other than its expected therapeutic effect.',                                     hint:'Unintended drug effect' },
  ],

  'Bioenergetics': [
    { term:'Photosynthesis',     definition:'An endothermic reaction in chloroplasts where light energy is used to convert carbon dioxide and water into glucose and oxygen.', hint:'Makes glucose using light' },
    { term:'Aerobic respiration',definition:'Respiration using oxygen to release energy from glucose, producing carbon dioxide and water.',                     hint:'Uses oxygen — more energy' },
    { term:'Anaerobic respiration', definition:'Respiration without oxygen, releasing less energy and producing lactic acid (animals) or ethanol and CO₂ (plants/yeast).', hint:'No oxygen — less energy' },
    { term:'Cellular respiration', definition:'An exothermic reaction in living cells that continuously releases energy from glucose.',                        hint:'Releases energy in cells' },
    { term:'Limiting factor',    definition:'A factor that limits the rate of a reaction when it is in short supply.',                                        hint:'Slows rate if too low' },
    { term:'Metabolism',         definition:'The sum of all the chemical reactions taking place in a cell or the body.',                                      hint:'All reactions in a cell' },
    { term:'Lactic acid',        definition:'The product of anaerobic respiration in animal cells, which causes muscle fatigue.',                             hint:'Anaerobic product in muscles' },
    { term:'Oxygen debt',        definition:'The amount of extra oxygen needed after exercise to break down accumulated lactic acid.',                        hint:'Extra oxygen after exercise' },
    { term:'Chlorophyll',        definition:'The green pigment in chloroplasts that absorbs light energy for photosynthesis.',                                hint:'Green pigment — absorbs light' },
    { term:'Glucose',            definition:'A simple sugar produced by photosynthesis that is the primary fuel for cellular respiration.',                   hint:'Sugar used in respiration' },
  ],

  'Homeostasis and Response': [
    { term:'Homeostasis',        definition:'The regulation of internal conditions to maintain optimal conditions for the functioning of cells.',              hint:'Maintaining internal balance' },
    { term:'Nervous system',     definition:'The system of nerves and the brain that coordinates rapid responses to stimuli.',                                 hint:'Brain and nerves' },
    { term:'Central nervous system', definition:'The brain and spinal cord, which process information and coordinate responses.',                             hint:'Brain + spinal cord' },
    { term:'Receptor',           definition:'A cell or organ that detects a stimulus.',                                                                       hint:'Detects stimuli' },
    { term:'Effector',           definition:'A muscle or gland that brings about a response to a stimulus.',                                                  hint:'Carries out response' },
    { term:'Reflex action',      definition:'A rapid automatic response to a stimulus that does not involve conscious thought.',                              hint:'Fast — no conscious thought' },
    { term:'Synapse',            definition:'A junction between two neurones where nerve impulses are transmitted via chemicals.',                             hint:'Gap between neurones' },
    { term:'Hormone',            definition:'A chemical messenger produced by a gland and transported in the blood to a target organ.',                       hint:'Chemical messenger in blood' },
    { term:'Insulin',            definition:'A hormone produced by the pancreas that causes cells to absorb glucose, lowering blood glucose levels.',         hint:'Lowers blood glucose' },
    { term:'Glucagon',           definition:'A hormone produced by the pancreas that causes glycogen to be converted to glucose, raising blood glucose.',     hint:'Raises blood glucose' },
    { term:'Adrenaline',         definition:'A hormone produced by the adrenal glands in response to stress, increasing heart rate and preparing for fight or flight.', hint:'Fight or flight hormone' },
    { term:'Thyroxine',          definition:'A hormone produced by the thyroid gland that regulates metabolic rate.',                                         hint:'Controls metabolic rate' },
    { term:'Oestrogen',          definition:'The main female reproductive hormone that causes the uterus lining to grow and repair.',                         hint:'Female hormone — uterus lining' },
    { term:'Testosterone',       definition:'The main male reproductive hormone produced by the testes, stimulating sperm production.',                       hint:'Male hormone — sperm production' },
    { term:'FSH',                definition:'Follicle stimulating hormone — causes an egg to mature in the ovary.',                                           hint:'Matures egg in ovary' },
    { term:'LH',                 definition:'Luteinising hormone — stimulates the release of a mature egg from the ovary (ovulation).',                       hint:'Triggers ovulation' },
    { term:'ADH',                definition:'Antidiuretic hormone — increases water reabsorption in the kidney tubules.',                                     hint:'Kidney water reabsorption' },
    { term:'Negative feedback',  definition:'A regulatory mechanism that reverses a change to restore optimal conditions.',                                   hint:'Reverses a change' },
    { term:'Target organ',       definition:'The organ on which a specific hormone acts to produce an effect.',                                              hint:'Where hormone acts' },
    { term:'Type 1 diabetes',    definition:'A condition in which the pancreas fails to produce enough insulin, requiring insulin injections.',               hint:'Pancreas makes no insulin' },
    { term:'Type 2 diabetes',    definition:'A condition in which body cells no longer respond to insulin produced by the pancreas.',                         hint:'Cells ignore insulin' },
    { term:'IVF',                definition:'In vitro fertilisation — fertilising an egg with sperm outside the body before implanting the embryo.',         hint:'Fertilisation outside the body' },
    { term:'Phototropism',       definition:'A plant\'s directional growth response to light.',                                                               hint:'Plant grows towards light' },
    { term:'Gravitropism',       definition:'A plant\'s directional growth response to gravity.',                                                             hint:'Plant responds to gravity' },
    { term:'Gibberellin',        definition:'A plant hormone that initiates seed germination and promotes stem elongation.',                                  hint:'Plant hormone — germination' },
    { term:'Auxin',              definition:'A plant hormone that promotes cell elongation, controlling phototropism and gravitropism.',                      hint:'Controls plant bending' },
  ],

  'Inheritance, Variation and Evolution': [
    { term:'DNA',                definition:'A double-stranded polymer in the form of a double helix that carries the genetic code for an organism.',         hint:'Genetic material — double helix' },
    { term:'Gene',               definition:'A section of DNA that codes for a specific sequence of amino acids to form a protein.',                          hint:'Section of DNA — codes for protein' },
    { term:'Allele',             definition:'A version of a gene.',                                                                                           hint:'Variant of a gene' },
    { term:'Chromosome',         definition:'A coiled DNA molecule carrying genetic information in the form of genes, found in the nucleus.',                 hint:'Made of DNA — in nucleus' },
    { term:'Genome',             definition:'The complete set of genetic material of an organism.',                                                           hint:'All DNA of an organism' },
    { term:'Genotype',           definition:'The genetic composition of an organism, describing all the alleles it carries.',                                 hint:'Alleles an organism has' },
    { term:'Phenotype',          definition:'The observable characteristics of an organism, determined by genotype and environment.',                         hint:'What you can see/observe' },
    { term:'Dominant',           definition:'An allele that is always expressed in the phenotype, even if only one copy is present.',                         hint:'Always expressed — capital letter' },
    { term:'Recessive',          definition:'An allele that is only expressed in the phenotype when two copies are present (homozygous).',                    hint:'Only expressed when two copies' },
    { term:'Homozygous',         definition:'Having two identical alleles for a particular gene.',                                                            hint:'Two same alleles — e.g. AA or aa' },
    { term:'Heterozygous',       definition:'Having two different alleles for a particular gene.',                                                            hint:'Two different alleles — e.g. Aa' },
    { term:'Punnett square',     definition:'A grid used to predict the possible genotypes and phenotypes of offspring from a genetic cross.',               hint:'Grid for genetic crosses' },
    { term:'Meiosis',            definition:'Cell division that produces four genetically different gametes, each with half the usual number of chromosomes.', hint:'Produces gametes — halves chromosomes' },
    { term:'Gamete',             definition:'A sex cell (sperm or egg) with half the usual number of chromosomes.',                                           hint:'Sex cell — half chromosomes' },
    { term:'Fertilisation',      definition:'The fusion of the nuclei of male and female gametes, restoring the full chromosome number.',                     hint:'Egg and sperm fuse' },
    { term:'Mutation',           definition:'A random change in DNA that may result in a new genetic variant.',                                              hint:'Change in DNA' },
    { term:'Natural selection',  definition:'The process by which organisms with advantageous traits are more likely to survive and reproduce.',              hint:'Survival of the fittest' },
    { term:'Evolution',          definition:'The gradual change in inherited traits in a population over time through natural selection.',                    hint:'Change in population over time' },
    { term:'Extinction',         definition:'The death of all members of a species.',                                                                        hint:'Species no longer exists' },
    { term:'Selective breeding', definition:'Humans artificially selecting organisms with desirable characteristics and breeding them together.',             hint:'Humans choose best traits' },
    { term:'Genetic engineering',definition:'The modification of an organism\'s genome by inserting a gene from another organism.',                          hint:'Inserting genes from other organisms' },
    { term:'Variation',          definition:'Differences between individuals caused by genes, the environment, or both.',                                    hint:'Differences between individuals' },
    { term:'Classification',     definition:'The organisation of organisms into groups based on their shared characteristics.',                              hint:'Grouping organisms by features' },
    { term:'Speciation',         definition:'The formation of new species when populations become reproductively isolated and evolve separately.',            hint:'New species forming' },
    { term:'Fossil',             definition:'The preserved remains or traces of organisms from millions of years ago, found in rock.',                       hint:'Remains in rock — very old' },
    { term:'Binomial system',    definition:'The universal system of naming organisms using two Latin names: genus and species.',                            hint:'Two-part Latin name' },
    { term:'Cystic fibrosis',    definition:'A genetic disorder caused by a recessive allele affecting cell membranes, causing thick mucus in the lungs.',   hint:'Recessive — thick mucus' },
    { term:'Polydactyly',        definition:'A genetic condition causing extra fingers or toes, caused by a dominant allele.',                               hint:'Dominant — extra fingers/toes' },
    { term:'Nucleotide',         definition:'The monomer of DNA, consisting of a sugar, phosphate group, and one of four bases (A, T, C, G).',               hint:'Building block of DNA' },
    { term:'Protein synthesis',  definition:'The process by which DNA is used to produce a specific protein via transcription and translation.',             hint:'DNA → protein' },
  ],

  'Ecology': [
    { term:'Ecosystem',          definition:'All the organisms living in an area and the non-living factors with which they interact.',                       hint:'Living + non-living environment' },
    { term:'Community',          definition:'All the populations of different species living in the same habitat at the same time.',                         hint:'All species in a habitat' },
    { term:'Population',         definition:'All the organisms of the same species living in the same area at the same time.',                               hint:'Same species — same area' },
    { term:'Habitat',            definition:'The place where an organism lives.',                                                                            hint:'Where an organism lives' },
    { term:'Abiotic factor',     definition:'A non-living factor in an ecosystem such as temperature, light intensity, or pH.',                              hint:'Non-living — e.g. temperature' },
    { term:'Biotic factor',      definition:'A living factor in an ecosystem such as predation, competition, or disease.',                                   hint:'Living — e.g. predators' },
    { term:'Producer',           definition:'An organism that makes its own food through photosynthesis — forms the base of a food chain.',                  hint:'Makes own food — plants' },
    { term:'Consumer',           definition:'An organism that obtains energy by eating other organisms.',                                                    hint:'Eats other organisms' },
    { term:'Decomposer',         definition:'An organism such as a bacterium or fungus that breaks down dead organic matter.',                               hint:'Breaks down dead matter' },
    { term:'Food chain',         definition:'A sequence showing the transfer of energy from one organism to the next.',                                      hint:'Energy transfer sequence' },
    { term:'Food web',           definition:'A network of interconnected food chains in an ecosystem.',                                                      hint:'Network of food chains' },
    { term:'Biodiversity',       definition:'The variety of different species of organisms on Earth or in a particular habitat.',                            hint:'Variety of species' },
    { term:'Carbon cycle',       definition:'The cycling of carbon through living organisms and the non-living environment.',                                hint:'Carbon moving through ecosystem' },
    { term:'Nitrogen cycle',     definition:'The cycling of nitrogen compounds through living organisms and the environment, including by bacteria.',         hint:'Nitrogen recycled through ecosystem' },
    { term:'Water cycle',        definition:'The continuous movement of water between the atmosphere, land, and living organisms.',                          hint:'Water moving through environment' },
    { term:'Interdependence',    definition:'The way in which organisms in a community depend on each other for survival.',                                  hint:'Species rely on each other' },
    { term:'Competition',        definition:'The struggle between organisms for the same limited resources such as food, space or mates.',                   hint:'Struggle for same resources' },
    { term:'Predation',          definition:'The relationship where one organism (predator) hunts and eats another (prey).',                                 hint:'Predator eats prey' },
    { term:'Parasitism',         definition:'A relationship where one organism (parasite) benefits at the expense of another (host).',                      hint:'One benefits, one harmed' },
    { term:'Mutualism',          definition:'A relationship where both organisms benefit from the interaction.',                                             hint:'Both organisms benefit' },
    { term:'Biomass',            definition:'The total mass of living material in a specific area or trophic level.',                                       hint:'Total mass of living things' },
    { term:'Trophic level',      definition:'A feeding level in a food chain or food web.',                                                                 hint:'Feeding position in food chain' },
    { term:'Deforestation',      definition:'The large-scale removal of forests, leading to habitat loss and increased CO₂ in the atmosphere.',              hint:'Forest removal' },
    { term:'Global warming',     definition:'The increase in the average global temperature caused by rising levels of greenhouse gases.',                   hint:'Rising global temperature' },
    { term:'Greenhouse gas',     definition:'A gas such as CO₂, methane, or water vapour that traps heat in the Earth\'s atmosphere.',                      hint:'Traps heat — e.g. CO₂' },
    { term:'Indicator species',  definition:'An organism whose presence or absence indicates something about the quality of the environment.',               hint:'Shows environmental quality' },
    { term:'Sampling',           definition:'A method of estimating the size or distribution of a population by studying a representative portion of it.',   hint:'Counting part of a population' },
    { term:'Quadrat',            definition:'A square frame used to sample organisms in a given area, particularly plants.',                                 hint:'Square frame for counting plants' },
    { term:'Transect',           definition:'A line along which organisms are sampled, used to study the distribution of species.',                         hint:'Line for sampling distribution' },
    { term:'Eutrophication',     definition:'The over-enrichment of water with nutrients (often from fertilisers), causing algal blooms that deplete oxygen.', hint:'Fertiliser runoff — algal bloom' },
  ],

};

// ────────────────────────────────────────────────────────────
// SUBJECT / BOARD METADATA
// Used by the hub to populate dropdown menus
// ────────────────────────────────────────────────────────────
const SUBJECTS = [
  'Biology', 'Chemistry', 'Physics', 'Maths',
  'English', 'History', 'Geography', 'French',
  'German', 'Spanish', 'Art', 'Music',
  'Drama', 'PE', 'Computing', 'Astronomy',
];

const BOARDS = {
  'aqa-gcse':        { label: 'AQA GCSE',            level: 'GCSE'    },
  'edexcel-gcse':    { label: 'Edexcel GCSE',         level: 'GCSE'    },
  'ocr-gcse':        { label: 'OCR GCSE',             level: 'GCSE'    },
  'ccea-gcse':       { label: 'CCEA GCSE',            level: 'GCSE'    },
  'cambridge-igcse': { label: 'Cambridge IGCSE',      level: 'IGCSE'   },
  'edexcel-igcse':   { label: 'Edexcel IGCSE',        level: 'IGCSE'   },
  'ks3':             { label: 'KS3 (generic)',         level: 'KS3'     },
  'aqa-alevel':      { label: 'AQA A-Level',          level: 'A-Level' },
  'edexcel-alevel':  { label: 'Edexcel A-Level',      level: 'A-Level' },
  'ocr-alevel':      { label: 'OCR A-Level',          level: 'A-Level' },
  'ib-dp':           { label: 'IB Diploma (DP)',       level: 'IB DP'   },
};

// Helper: get all available boards for a given subject
function getBoardsForSubject(subject) {
  const subjectKey = subject.toLowerCase();
  if (!VOCAB[subjectKey]) return [];
  return Object.keys(VOCAB[subjectKey]).filter(b => {
    const topics = VOCAB[subjectKey][b];
    return topics && Object.keys(topics).length > 0;
  });
}

// Helper: get all topics for subject + board
function getTopics(subject, board) {
  const subjectKey = subject.toLowerCase();
  if (!VOCAB[subjectKey] || !VOCAB[subjectKey][board]) return [];
  return Object.keys(VOCAB[subjectKey][board]);
}

// Helper: get vocab array for subject + board + topic
function getVocab(subject, board, topic) {
  const subjectKey = subject.toLowerCase();
  if (!VOCAB[subjectKey] || !VOCAB[subjectKey][board]) return [];
  return VOCAB[subjectKey][board][topic] || [];
}

// ────────────────────────────────────────────────────────────
// CHEMISTRY — AQA GCSE (8462)
// Source: AQA GCSE Chemistry specification 8462
// Topics match spec sections 4.1–4.10
// ────────────────────────────────────────────────────────────
VOCAB['chemistry'] = VOCAB['chemistry'] || {};
VOCAB['chemistry']['aqa-gcse'] = {

  'Atomic Structure and the Periodic Table': [
    { term:'Atom',               definition:'The smallest part of an element that can exist.',                                                              hint:'Smallest part of an element' },
    { term:'Element',            definition:'A substance made up of only one type of atom.',                                                               hint:'One type of atom only' },
    { term:'Compound',           definition:'A substance made of two or more types of atoms chemically combined together.',                                hint:'Atoms chemically joined' },
    { term:'Mixture',            definition:'Two or more elements or compounds not chemically combined together.',                                         hint:'Not chemically combined' },
    { term:'Proton',             definition:'A positively charged subatomic particle found in the nucleus, with relative mass 1.',                         hint:'Positive — in nucleus' },
    { term:'Neutron',            definition:'A neutral subatomic particle found in the nucleus, with relative mass 1.',                                   hint:'Neutral — in nucleus' },
    { term:'Electron',           definition:'A negatively charged subatomic particle that orbits the nucleus at various energy levels.',                  hint:'Negative — orbits nucleus' },
    { term:'Atomic number',      definition:'The number of protons in the nucleus of an atom.',                                                           hint:'Number of protons' },
    { term:'Mass number',        definition:'The total number of protons and neutrons in the nucleus of an atom.',                                        hint:'Protons + neutrons' },
    { term:'Isotope',            definition:'Atoms of the same element with the same number of protons but a different number of neutrons.',              hint:'Same element — different neutrons' },
    { term:'Relative atomic mass', definition:'An average value that accounts for the abundance of the isotopes of the element.',                        hint:'Average mass of isotopes' },
    { term:'Ion',                definition:'An atom or molecule with an electric charge due to the loss or gain of electrons.',                          hint:'Charged atom' },
    { term:'Electron shell',     definition:'Different energy levels in atoms occupied by electrons.',                                                    hint:'Energy levels around nucleus' },
    { term:'Periodic table',     definition:'A table of elements arranged in order of atomic number, with elements of similar properties in the same column.', hint:'Elements in order of atomic number' },
    { term:'Group',              definition:'A vertical column in the periodic table — elements in the same group have similar properties.',              hint:'Column in periodic table' },
    { term:'Alkali metals',      definition:'The elements in Group 1 of the periodic table.',                                                            hint:'Group 1 elements' },
    { term:'Halogens',           definition:'The elements in Group 7 of the periodic table.',                                                            hint:'Group 7 elements' },
    { term:'Noble gases',        definition:'The elements in Group 0 of the periodic table — unreactive due to full outer shells.',                      hint:'Group 0 — unreactive' },
    { term:'Transition metals',  definition:'Metallic elements in the middle block of the periodic table.',                                              hint:'Middle of periodic table' },
    { term:'Filtration',         definition:'A separation technique used to separate solids from liquids.',                                              hint:'Separates solid from liquid' },
    { term:'Crystallisation',    definition:'A separation technique producing solid crystals from a solution by evaporating the solvent.',               hint:'Evaporate solvent → crystals' },
    { term:'Fractional distillation', definition:'A method of separating a mixture of substances according to their different boiling points.',         hint:'Different boiling points' },
    { term:'Chromatography',     definition:'A technique used to separate a mixture of chemicals by distributing components between two phases.',        hint:'Separates mixtures by movement' },
  ],

  'Bonding, Structure and Properties': [
    { term:'Ionic bond',         definition:'A bond formed between a metal and non-metal when electrons are transferred, creating oppositely charged ions attracted to each other.', hint:'Metal + non-metal — electron transfer' },
    { term:'Covalent bond',      definition:'A shared pair of electrons between two non-metal atoms.',                                                   hint:'Shared electrons — non-metals' },
    { term:'Metallic bond',      definition:'The electrostatic attraction between positive metal ions and a sea of delocalised electrons.',              hint:'Positive ions + delocalised electrons' },
    { term:'Ionic compound',     definition:'A compound formed of ions held together by strong electrostatic forces in a lattice structure.',            hint:'Ions in a lattice' },
    { term:'Molecular formula',  definition:'The actual ratio of atoms of each element present in a compound.',                                         hint:'Exact number of each atom' },
    { term:'Empirical formula',  definition:'The smallest whole number ratio of atoms of each element in a compound.',                                   hint:'Simplest ratio of atoms' },
    { term:'Lattice',            definition:'A regular repeating arrangement of atoms, ions or molecules found in crystal structures.',                  hint:'Regular repeating structure' },
    { term:'Polymer',            definition:'A large long-chain molecule made up of many small monomer units joined by covalent bonds.',                 hint:'Long chain of monomers' },
    { term:'Diamond',            definition:'A giant covalent structure of carbon where each atom forms four covalent bonds — very hard.',               hint:'Giant covalent carbon — very hard' },
    { term:'Graphite',           definition:'A giant covalent structure of carbon where atoms form layers with delocalised electrons — conducts electricity.', hint:'Carbon layers — conducts electricity' },
    { term:'Graphene',           definition:'A single layer of graphite — very strong and conducts electricity.',                                        hint:'Single layer of graphite' },
    { term:'Fullerene',          definition:'A molecule of carbon atoms with a hollow shape, based on hexagonal rings.',                                 hint:'Hollow carbon molecule' },
    { term:'Nanoparticle',       definition:'A particle with a diameter between 1 nm and 100 nm — can have different properties to bulk material.',     hint:'1–100 nm — tiny particle' },
    { term:'Intermolecular forces', definition:'The forces of attraction between molecules — affects physical properties like boiling point.',           hint:'Forces between molecules' },
    { term:'State symbols',      definition:'Symbols in equations showing state: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution.',              hint:'(s)(l)(g)(aq) in equations' },
  ],

  'Quantitative Chemistry': [
    { term:'Conservation of mass', definition:'No atoms are lost or made in a chemical reaction — mass of products equals mass of reactants.',          hint:'Mass never lost or gained' },
    { term:'Relative formula mass', definition:'The sum of the relative atomic masses of all atoms in the formula.',                                    hint:'Sum of all atomic masses' },
    { term:'Limiting reactant',  definition:'The reactant that is completely used up and limits the amount of product formed.',                          hint:'Runs out first — limits product' },
    { term:'Mole',               definition:'The unit for amount of substance — one mole contains 6.02 × 10²³ particles.',                              hint:'Unit of amount of substance' },
    { term:'Concentration',      definition:'The amount of solute dissolved in a given volume of solution.',                                            hint:'Amount per unit volume' },
    { term:'Percentage yield',   definition:'The percentage ratio of the actual yield to the theoretical yield of a reaction.',                        hint:'Actual ÷ theoretical × 100' },
    { term:'Atom economy',       definition:'A measure of the proportion of starting materials converted into useful products.',                        hint:'Proportion of useful products' },
    { term:'Theoretical yield',  definition:'The maximum amount of product that could be produced assuming a complete reaction.',                       hint:'Maximum possible product' },
    { term:'Actual yield',       definition:'The amount of product actually produced by a reaction.',                                                   hint:'Product actually made' },
  ],

  'Chemical Changes': [
    { term:'Acid',               definition:'A substance that produces hydrogen ions (H⁺) in aqueous solution — pH less than 7.',                       hint:'pH less than 7 — H⁺ ions' },
    { term:'Alkali',             definition:'A soluble base that produces hydroxide ions (OH⁻) in aqueous solution — pH greater than 7.',              hint:'pH more than 7 — OH⁻ ions' },
    { term:'Neutralisation',     definition:'The reaction between an acid and a base to form a salt and water.',                                        hint:'Acid + base → salt + water' },
    { term:'pH scale',           definition:'A scale from 0 to 14 measuring the acidity or alkalinity of a solution.',                                 hint:'0–14 acidity scale' },
    { term:'Oxidation',          definition:'A reaction involving the gain of oxygen or the loss of electrons.',                                        hint:'Gain oxygen / lose electrons' },
    { term:'Reduction',          definition:'A reaction involving the loss of oxygen or the gain of electrons.',                                        hint:'Lose oxygen / gain electrons' },
    { term:'Electrolysis',       definition:'The splitting of an ionic compound using an electric current.',                                            hint:'Splitting compounds with electricity' },
    { term:'Electrolyte',        definition:'A solution or molten ionic compound that conducts electricity because it contains free-moving ions.',      hint:'Conducts electricity — free ions' },
    { term:'Displacement',       definition:'A reaction where a more reactive element displaces a less reactive element from its compound.',            hint:'More reactive pushes out less reactive' },
    { term:'Reactivity series',  definition:'Metals arranged in order of their reactivity, used to predict the products of reactions.',                hint:'Metals in order of reactivity' },
    { term:'Redox reaction',     definition:'A reaction in which both oxidation and reduction occur simultaneously.',                                   hint:'Oxidation and reduction together' },
    { term:'Titration',          definition:'A technique where a solution of known concentration is used to find the concentration of an unknown solution.', hint:'Known concentration → find unknown' },
    { term:'Strong acid',        definition:'An acid that is completely ionised in aqueous solution — e.g. hydrochloric, nitric, sulfuric.',            hint:'Completely ionised in water' },
    { term:'Weak acid',          definition:'An acid only partially ionised in aqueous solution — e.g. ethanoic, citric, carbonic.',                   hint:'Partially ionised in water' },
  ],

  'Energy Changes': [
    { term:'Exothermic reaction', definition:'A reaction that transfers energy to the surroundings, causing the temperature to increase.',              hint:'Releases heat — temperature rises' },
    { term:'Endothermic reaction', definition:'A reaction that takes in energy from the surroundings, causing the temperature to decrease.',           hint:'Absorbs heat — temperature drops' },
    { term:'Activation energy',  definition:'The minimum energy that particles must have when they collide for a reaction to occur.',                   hint:'Minimum energy to react' },
    { term:'Reaction profile',   definition:'A diagram showing the relative energies of reactants, products, activation energy and overall energy change.', hint:'Energy diagram for a reaction' },
    { term:'Bond energy',        definition:'The energy required to break one mole of a particular covalent bond.',                                    hint:'Energy to break a bond' },
    { term:'Fuel cell',          definition:'An electrochemical cell that generates electricity directly from a fuel such as hydrogen.',               hint:'Generates electricity from fuel' },
  ],

  'Rate and Extent of Chemical Change': [
    { term:'Rate of reaction',   definition:'The measure of the amount of product formed or reactant used per unit time.',                             hint:'Speed of reaction' },
    { term:'Catalyst',           definition:'A substance that increases the rate of reaction by providing a lower-energy alternative pathway, without being used up.', hint:'Speeds up reaction — not used up' },
    { term:'Collision theory',   definition:'Chemical reactions occur when reacting particles collide with sufficient energy.',                         hint:'Particles must collide with energy' },
    { term:'Reversible reaction', definition:'A reaction where products can react to reform the original reactants.',                                  hint:'Can go forwards and backwards' },
    { term:'Equilibrium',        definition:'The state reached in a closed system when the forward and reverse reactions occur at the same rate.',     hint:'Forward = reverse rate' },
    { term:'Le Chatelier\'s Principle', definition:'If a system at equilibrium is disturbed, it shifts to counteract the change.',                   hint:'System opposes changes to equilibrium' },
  ],

  'Organic Chemistry': [
    { term:'Hydrocarbon',        definition:'A molecule made up of hydrogen and carbon atoms only.',                                                    hint:'Only H and C atoms' },
    { term:'Crude oil',          definition:'A finite resource found in rocks — the remains of ancient marine organisms, mainly hydrocarbons.',        hint:'Fossil fuel — ancient marine life' },
    { term:'Alkane',             definition:'A saturated hydrocarbon with the general formula CₙH₂ₙ₊₂.',                                              hint:'Saturated — CₙH₂ₙ₊₂' },
    { term:'Alkene',             definition:'An unsaturated hydrocarbon with a carbon-carbon double bond and general formula CₙH₂ₙ.',                 hint:'Double bond — CₙH₂ₙ' },
    { term:'Cracking',           definition:'Breaking down large hydrocarbon molecules into smaller, more useful ones by heating.',                    hint:'Breaks large hydrocarbons into smaller' },
    { term:'Polymer',            definition:'A large molecule made from many small monomer units joined by covalent bonds.',                           hint:'Many monomers joined together' },
    { term:'Fermentation',       definition:'A process where glucose is broken down by yeast to produce ethanol and carbon dioxide without oxygen.',   hint:'Yeast breaks down glucose → ethanol' },
    { term:'Homologous series',  definition:'A series of compounds with the same functional group and similar chemical properties.',                   hint:'Same functional group — similar properties' },
    { term:'Alcohol',            definition:'A compound containing the –OH functional group — the first four are methanol, ethanol, propanol, butanol.', hint:'Contains –OH group' },
    { term:'Carboxylic acid',    definition:'A compound containing the –COOH functional group.',                                                       hint:'Contains –COOH group' },
  ],

  'Chemical Analysis': [
    { term:'Pure substance',     definition:'In chemistry, a single element or compound not mixed with any other substance.',                          hint:'Single element or compound' },
    { term:'Formulation',        definition:'A mixture designed as a useful product, with components in carefully measured quantities.',              hint:'Designed mixture — useful product' },
    { term:'Chromatography',     definition:'A technique to separate mixtures based on how components distribute between a stationary and mobile phase.', hint:'Separates by movement through phases' },
    { term:'Rf value',           definition:'The ratio of the distance moved by a compound to the distance moved by the solvent in chromatography.',  hint:'Distance of spot ÷ distance of solvent' },
    { term:'Flame test',         definition:'A qualitative test used to identify metal ions by the colour of the flame they produce.',                 hint:'Colour of flame identifies metal ion' },
    { term:'Precipitation',      definition:'The formation of an insoluble solid from a solution during a chemical reaction.',                        hint:'Insoluble solid forms from solution' },
  ],

  'Chemistry of the Atmosphere': [
    { term:'Greenhouse effect',  definition:'The trapping of infrared radiation by greenhouse gases in the atmosphere, warming the Earth.',           hint:'Gases trap heat in atmosphere' },
    { term:'Greenhouse gas',     definition:'A gas such as CO₂, methane or water vapour that absorbs and re-emits infrared radiation.',              hint:'Absorbs infrared — CO₂, methane' },
    { term:'Global climate change', definition:'A long-term shift in global climate patterns, largely caused by increasing greenhouse gases.',        hint:'Long-term temperature shift' },
    { term:'Carbon footprint',   definition:'The total amount of CO₂ and other greenhouse gases emitted over the full life cycle of a product.',     hint:'Total greenhouse gases from a product' },
    { term:'Acid rain',          definition:'Rain made acidic by dissolved sulfur dioxide and nitrogen oxides from burning fossil fuels.',            hint:'SO₂ + NOₓ in rain' },
    { term:'Fossil fuel',        definition:'A natural fuel such as coal, oil or gas formed from the remains of ancient living organisms.',          hint:'Coal, oil, gas — ancient organisms' },
    { term:'Particulate',        definition:'Tiny solid or liquid particles in the atmosphere that can cause health problems and global dimming.',    hint:'Tiny particles — health + dimming' },
    { term:'Photosynthesis',     definition:'The process by which plants use light energy to convert CO₂ and water into glucose and oxygen.',        hint:'Plants make glucose from CO₂ + light' },
  ],

  'Using Resources': [
    { term:'Alloy',              definition:'A mixture of a metal with one or more other elements to improve its properties.',                        hint:'Metal mixture — improved properties' },
    { term:'Finite resource',    definition:'A resource that cannot be replaced once used up.',                                                      hint:'Cannot be replaced' },
    { term:'Renewable resource', definition:'A resource that can be replenished as it is used.',                                                    hint:'Can be replenished' },
    { term:'Potable water',      definition:'Water that is safe to drink — treated to remove contaminants.',                                         hint:'Safe to drink' },
    { term:'Life cycle assessment', definition:'An analysis of the environmental impact of a product at every stage of its life.',                 hint:'Environmental impact — whole life' },
    { term:'Recycling',          definition:'Reprocessing materials that would otherwise be waste so they can be used again.',                       hint:'Reprocess waste materials' },
    { term:'Corrosion',          definition:'The gradual destruction of materials by chemical reactions with their environment.',                    hint:'Gradual chemical destruction' },
    { term:'Electrolysis',       definition:'Using electrical energy to decompose an electrolyte — used in purification and electroplating.',       hint:'Electricity decomposes electrolyte' },
  ],

};

// ────────────────────────────────────────────────────────────
// PHYSICS — AQA GCSE (8463)
// Source: AQA GCSE Physics specification 8463
// Topics match spec sections 4.1–4.8
// ────────────────────────────────────────────────────────────
VOCAB['physics'] = VOCAB['physics'] || {};
VOCAB['physics']['aqa-gcse'] = {

  'Energy': [
    { term:'Conservation of energy', definition:'Energy can be transferred, stored or dissipated but never created or destroyed.',                   hint:'Energy cannot be created or destroyed' },
    { term:'Kinetic energy',     definition:'The energy store of all moving objects — proportional to mass and the square of velocity.',             hint:'Energy of moving objects' },
    { term:'Gravitational potential energy', definition:'The energy store of raised objects — proportional to mass, height and gravitational field strength.', hint:'Energy of raised objects' },
    { term:'Elastic potential energy', definition:'The energy stored in a stretched or compressed object.',                                         hint:'Stored in stretched/compressed objects' },
    { term:'Specific heat capacity', definition:'The energy required to raise the temperature of 1 kg of a substance by 1°C.',                      hint:'Energy per kg per °C' },
    { term:'Power',              definition:'The rate at which energy is transferred or work is done.',                                              hint:'Energy transferred per second' },
    { term:'Efficiency',         definition:'The ratio of useful output energy to total input energy.',                                              hint:'Useful energy ÷ total energy' },
    { term:'Work done',          definition:'The energy transferred when a force causes an object to move through a distance.',                      hint:'Force × distance' },
    { term:'Watt',               definition:'The unit of power — equal to one joule per second.',                                                    hint:'Unit of power — J/s' },
    { term:'Renewable energy',   definition:'An energy resource that can be replenished as it is used.',                                            hint:'Can be replenished' },
    { term:'Thermal conductivity', definition:'A measure of how well a material conducts thermal energy.',                                          hint:'How well material conducts heat' },
  ],

  'Electricity': [
    { term:'Current',            definition:'The rate of flow of electrical charge — measured in amperes.',                                          hint:'Flow of charge — amperes' },
    { term:'Potential difference', definition:'The work done per unit charge moved between two points in a circuit.',                               hint:'Work done per coulomb — volts' },
    { term:'Resistance',         definition:'A measure of the opposition to current flow in a circuit — measured in ohms.',                         hint:'Opposition to current — ohms' },
    { term:'Ohmic conductor',    definition:'A conductor where current is directly proportional to potential difference at constant temperature.',  hint:'Current ∝ voltage at constant temp' },
    { term:'Series circuit',     definition:'A circuit where components are connected in a single loop — same current through all components.',     hint:'Single loop — same current' },
    { term:'Parallel circuit',   definition:'A circuit where components are connected in separate branches — same voltage across each component.',  hint:'Separate branches — same voltage' },
    { term:'Direct current',     definition:'Current that flows in only one direction.',                                                            hint:'One direction only' },
    { term:'Alternating current', definition:'Current that repeatedly reverses direction — UK mains is 50 Hz at 230 V.',                            hint:'Reverses direction — 50 Hz 230 V' },
    { term:'National Grid',      definition:'The network of power stations, transformers and cables connecting producers to consumers.',           hint:'Power station to consumer network' },
    { term:'Transformer',        definition:'A device that changes the voltage of an alternating current using electromagnetic induction.',         hint:'Changes AC voltage' },
    { term:'Static charge',      definition:'A charge caused by an imbalance of positive and negative charges on a surface.',                      hint:'Imbalance of charge on surface' },
    { term:'Diode',              definition:'A component that allows current to flow in one direction only.',                                       hint:'One direction only — current' },
    { term:'Thermistor',         definition:'A component whose resistance decreases as its temperature increases.',                                 hint:'Resistance decreases as temperature rises' },
    { term:'LDR',                definition:'Light-dependent resistor — resistance decreases as light intensity increases.',                        hint:'Resistance decreases in bright light' },
  ],

  'Particle Model of Matter': [
    { term:'Density',            definition:'Mass per unit volume of a substance.',                                                                  hint:'Mass ÷ volume' },
    { term:'Internal energy',    definition:'The total kinetic and potential energy of all particles in a system.',                                  hint:'Total energy of all particles' },
    { term:'Specific heat capacity', definition:'The energy needed to raise the temperature of 1 kg of a substance by 1°C.',                       hint:'Energy per kg per °C' },
    { term:'Latent heat',        definition:'The energy required for a substance to change state without changing temperature.',                     hint:'Energy for state change — no temperature change' },
    { term:'Specific latent heat', definition:'The energy needed to change the state of 1 kg of a substance at constant temperature.',             hint:'Energy per kg to change state' },
    { term:'Sublimation',        definition:'The direct change of a substance from solid to vapour without passing through the liquid phase.',      hint:'Solid → vapour directly' },
    { term:'Pressure',           definition:'The force acting perpendicular to a surface per unit area.',                                           hint:'Force per unit area' },
  ],

  'Atomic Structure': [
    { term:'Radioactive decay',  definition:'The random process by which unstable nuclei emit radiation to become more stable.',                    hint:'Unstable nucleus emits radiation' },
    { term:'Alpha particle',     definition:'A positively charged particle consisting of two protons and two neutrons — low penetration.',          hint:'2 protons + 2 neutrons — low penetration' },
    { term:'Beta particle',      definition:'A high-speed electron emitted from a nucleus when a neutron becomes a proton.',                        hint:'Fast electron from nucleus' },
    { term:'Gamma ray',          definition:'High-frequency electromagnetic radiation emitted from a nucleus — high penetration.',                  hint:'EM radiation from nucleus — high penetration' },
    { term:'Half-life',          definition:'The time taken for half the unstable nuclei in a sample to decay.',                                    hint:'Time for half to decay' },
    { term:'Nuclear fission',    definition:'The splitting of a large unstable nucleus into two smaller nuclei, releasing energy and neutrons.',    hint:'Large nucleus splits — releases energy' },
    { term:'Nuclear fusion',     definition:'The joining of two small light nuclei to form a larger nucleus, releasing large amounts of energy.',   hint:'Small nuclei join — releases energy' },
    { term:'Isotope',            definition:'Atoms of the same element with the same number of protons but different numbers of neutrons.',        hint:'Same element — different neutrons' },
    { term:'Background radiation', definition:'Low-level radiation present all around us from natural and man-made sources.',                      hint:'Always-present radiation — natural sources' },
    { term:'Irradiation',        definition:'The process of exposing an object to nuclear radiation — the object does not become radioactive.',    hint:'Exposed to radiation — not radioactive itself' },
    { term:'Radioactive contamination', definition:'The unwanted presence of radioactive atoms on or in materials.',                               hint:'Unwanted radioactive atoms on material' },
    { term:'Chain reaction',     definition:'A self-sustaining sequence of fission reactions where neutrons from each fission trigger further fissions.', hint:'Self-sustaining fission sequence' },
  ],

  'Forces': [
    { term:'Vector',             definition:'A quantity with both magnitude and direction — e.g. velocity, force.',                                 hint:'Has magnitude AND direction' },
    { term:'Scalar',             definition:'A quantity with magnitude only, no direction — e.g. speed, mass.',                                    hint:'Magnitude only — no direction' },
    { term:'Velocity',           definition:'Speed in a given direction — a vector quantity.',                                                     hint:'Speed + direction' },
    { term:'Acceleration',       definition:'The rate of change of velocity.',                                                                     hint:'Change in velocity per second' },
    { term:'Newton\'s first law', definition:'An object remains at rest or in uniform motion unless acted on by a resultant force.',               hint:'No resultant force → no change in motion' },
    { term:'Newton\'s second law', definition:'The acceleration of an object is directly proportional to the resultant force and inversely proportional to its mass.', hint:'F = ma' },
    { term:'Newton\'s third law', definition:'When two objects interact, the forces they exert on each other are equal and opposite.',             hint:'Equal and opposite forces' },
    { term:'Momentum',           definition:'The product of an object\'s mass and velocity — measured in kg m/s.',                                hint:'Mass × velocity' },
    { term:'Resultant force',    definition:'The single force that has the same effect as all the forces acting on an object combined.',           hint:'Net force on an object' },
    { term:'Stopping distance',  definition:'The total distance a vehicle travels from when the driver decides to stop to when the vehicle stops — thinking + braking distance.', hint:'Thinking distance + braking distance' },
    { term:'Elastic deformation', definition:'Deformation where an object returns to its original shape when the force is removed.',              hint:'Returns to original shape' },
    { term:'Plastic deformation', definition:'Permanent deformation — the object does not return to its original shape when the force is removed.', hint:'Permanently changes shape' },
    { term:'Hooke\'s law',       definition:'The extension of a spring is directly proportional to the applied force, up to the limit of proportionality.', hint:'Extension ∝ force (up to a limit)' },
    { term:'Weight',             definition:'The force acting on an object due to gravity — equal to mass × gravitational field strength.',        hint:'Gravitational force on object' },
    { term:'Inertia',            definition:'The tendency of an object to remain in its current state of rest or uniform motion.',                 hint:'Resistance to change in motion' },
  ],

  'Waves': [
    { term:'Amplitude',          definition:'The maximum displacement of a wave from its equilibrium (undisturbed) position.',                     hint:'Maximum displacement from rest' },
    { term:'Wavelength',         definition:'The distance from one point on a wave to the same point on the next wave.',                           hint:'Peak to peak distance' },
    { term:'Frequency',          definition:'The number of complete waves passing a given point per second — measured in hertz.',                  hint:'Waves per second — hertz' },
    { term:'Wave speed',         definition:'The speed at which energy is transferred by a wave — equal to frequency × wavelength.',              hint:'Frequency × wavelength' },
    { term:'Transverse wave',    definition:'A wave where oscillations are perpendicular to the direction of energy transfer.',                    hint:'Oscillations perpendicular to travel' },
    { term:'Longitudinal wave',  definition:'A wave where oscillations are parallel to the direction of energy transfer.',                        hint:'Oscillations parallel to travel' },
    { term:'Electromagnetic spectrum', definition:'The family of transverse waves that travel at the same speed in a vacuum, from radio waves to gamma rays.', hint:'All EM waves — radio to gamma' },
    { term:'Refraction',         definition:'The change in direction of a wave when it passes from one medium to another due to a change in speed.', hint:'Direction change at boundary' },
    { term:'Reflection',         definition:'When a wave bounces off a boundary — angle of incidence equals angle of reflection.',               hint:'Bounces off surface' },
    { term:'Infrared radiation', definition:'Electromagnetic radiation emitted by all objects — used in heating and thermal imaging.',            hint:'EM radiation — heat — all objects emit' },
    { term:'Ultraviolet',        definition:'Electromagnetic radiation beyond visible light — can cause skin damage and cancer.',                 hint:'Beyond violet — causes skin damage' },
    { term:'X-ray',              definition:'High-frequency electromagnetic radiation that can penetrate soft tissue but is absorbed by bone.',   hint:'Penetrates soft tissue — not bone' },
  ],

  'Magnetism and Electromagnetism': [
    { term:'Magnetic field',     definition:'A region in which a magnetic force is experienced by magnetic materials or current-carrying conductors.', hint:'Region of magnetic force' },
    { term:'Electromagnet',      definition:'A solenoid with an iron core that produces a strong, controllable magnetic field when current flows.', hint:'Solenoid + iron core' },
    { term:'Motor effect',       definition:'The force experienced by a current-carrying conductor in a magnetic field.',                          hint:'Current in field → force' },
    { term:'Generator effect',   definition:'The production of a potential difference across a conductor when it moves relative to a magnetic field.', hint:'Movement in field → voltage' },
    { term:'Alternator',         definition:'A device that uses the generator effect to produce alternating current.',                             hint:'Generator — produces AC' },
    { term:'Transformer',        definition:'A device using electromagnetic induction to change the voltage of an alternating current.',          hint:'Changes AC voltage using induction' },
    { term:'Induced magnet',     definition:'A material that becomes magnetic when placed in a magnetic field but loses its magnetism when removed.', hint:'Temporary magnet' },
  ],

  'Space': [
    { term:'Galaxy',             definition:'A large collection of stars, gas and dust held together by gravity.',                                  hint:'Billions of stars held by gravity' },
    { term:'Universe',           definition:'All of space and everything in it — including all galaxies, stars and planets.',                      hint:'Everything that exists' },
    { term:'Gravitational field strength', definition:'The force per unit mass experienced by an object in a gravitational field.',               hint:'Force per kg due to gravity' },
    { term:'Orbit',              definition:'The curved path of a planet or satellite around a larger body due to gravity.',                       hint:'Curved path due to gravity' },
    { term:'Light year',         definition:'The distance light travels in one year — approximately 9.5 × 10¹⁵ metres.',                          hint:'Distance light travels in one year' },
    { term:'Red-shift',          definition:'The increase in wavelength of light from distant galaxies — evidence the universe is expanding.',    hint:'Wavelength increases — universe expanding' },
    { term:'Big Bang',           definition:'The theory that the universe began from a very hot, dense point and has been expanding ever since.',  hint:'Universe began from single hot dense point' },
    { term:'Main sequence star', definition:'A star fusing hydrogen into helium in its core — the Sun is a main sequence star.',                  hint:'Fusing hydrogen — e.g. the Sun' },
    { term:'Neutron star',       definition:'The remnant of a large star after a supernova — extremely dense, made of neutrons.',                 hint:'Supernova remnant — very dense' },
    { term:'Black hole',         definition:'A region of space with gravity so strong that nothing, not even light, can escape.',                 hint:'So dense light cannot escape' },
  ],

};

// ────────────────────────────────────────────────────────────
// GEOGRAPHY — AQA GCSE (8035)
// Source: AQA official subject-specific vocabulary list
// ────────────────────────────────────────────────────────────
VOCAB['geography'] = VOCAB['geography'] || {};
VOCAB['geography']['aqa-gcse'] = {

  'Natural Hazards': [
    { term:'Natural hazard',        definition:'A natural event that threatens people or has the potential to cause damage, destruction and death.',         hint:'Natural event threatening people' },
    { term:'Hazard risk',           definition:'The probability or chance that a natural hazard may take place.',                                           hint:'Probability of a hazard occurring' },
    { term:'Tectonic hazard',       definition:'A natural hazard caused by movement of tectonic plates, including volcanoes and earthquakes.',              hint:'Caused by plate movement' },
    { term:'Tectonic plate',        definition:'A rigid segment of the Earth\'s crust that moves across the heavier semi-molten rock below.',              hint:'Rigid segment of Earth\'s crust' },
    { term:'Earthquake',            definition:'A sudden or violent movement within the Earth\'s crust followed by a series of shocks.',                   hint:'Sudden movement in Earth\'s crust' },
    { term:'Volcano',               definition:'An opening in the Earth\'s crust from which lava, ash and gases erupt.',                                  hint:'Opening in crust — lava erupts' },
    { term:'Constructive plate margin', definition:'A plate boundary where rising magma adds new material to plates that are moving apart.',              hint:'Plates moving apart — new crust forms' },
    { term:'Destructive plate margin',  definition:'A plate boundary where two plates converge and oceanic plate is subducted.',                         hint:'Plates converge — oceanic plate sinks' },
    { term:'Conservative plate margin', definition:'A plate boundary where two tectonic plates slide past each other.',                                  hint:'Plates slide past each other' },
    { term:'Primary effects',       definition:'The initial direct impacts of a natural event on people and property.',                                   hint:'Direct, immediate impacts' },
    { term:'Secondary effects',     definition:'Indirect impacts that occur as a consequence of a natural event, sometimes on a longer timescale.',      hint:'Indirect — longer-term impacts' },
    { term:'Immediate responses',   definition:'The reaction of people as the disaster happens and in the immediate aftermath.',                          hint:'During and just after the event' },
    { term:'Long-term responses',   definition:'Later reactions that occur in the weeks, months and years after a natural event.',                        hint:'Weeks, months, years after event' },
    { term:'Tropical storm',        definition:'An area of low pressure with powerful spiralling winds and heavy rainfall around a calm central eye.',    hint:'Low pressure — spiralling winds — eye' },
    { term:'Climate change',        definition:'A long-term change in the Earth\'s average temperature and weather patterns.',                           hint:'Long-term change in temperature' },
    { term:'Mitigation',            definition:'Action taken to reduce or eliminate the long-term risk to human life and property from natural hazards.', hint:'Reducing risk from hazards' },
    { term:'Adaptation',            definition:'Actions taken to adjust to climate change to reduce damage or cope with consequences.',                  hint:'Adjusting to climate change' },
  ],

  'The Living World': [
    { term:'Ecosystem',             definition:'A community of plants and animals that interact with each other and their physical environment.',          hint:'Community + physical environment' },
    { term:'Biodiversity',          definition:'The variety of different species of life in the world or in a particular habitat.',                       hint:'Variety of species' },
    { term:'Food chain',            definition:'A sequence showing how energy passes from one organism to another as each eats the next.',              hint:'Energy transfer through eating' },
    { term:'Food web',              definition:'A complex interconnection of all the food chains in an ecosystem.',                                       hint:'Network of food chains' },
    { term:'Producer',              definition:'An organism able to absorb energy from the sun through photosynthesis — forms the base of food chains.', hint:'Makes own food via photosynthesis' },
    { term:'Consumer',              definition:'An animal that eats animals and/or plant matter.',                                                        hint:'Eats other organisms' },
    { term:'Decomposer',            definition:'An organism such as a bacterium or fungus that breaks down dead tissue, recycling it to the environment.', hint:'Breaks down dead matter' },
    { term:'Nutrient cycling',      definition:'Processes whereby organisms extract minerals from soil or water and pass them through the food chain and back to the soil.', hint:'Minerals recycled through ecosystem' },
    { term:'Deforestation',         definition:'The chopping down and removal of trees to clear an area of forest.',                                     hint:'Clearing trees from forest' },
    { term:'Sustainability',        definition:'Meeting the needs of the present without reducing the ability of future generations to meet their needs.', hint:'Meeting needs without harming future' },
    { term:'Desertification',       definition:'The process by which land becomes drier and degraded due to climate change or human activity.',          hint:'Land becomes dry and degraded' },
    { term:'Permafrost',            definition:'Permanently frozen ground found in polar and tundra regions.',                                           hint:'Permanently frozen ground' },
    { term:'Ecotourism',            definition:'Responsible travel to natural areas that helps conserve the environment and sustain local people\'s wellbeing.', hint:'Tourism that protects environment' },
    { term:'Selective logging',     definition:'Cutting only mature or inferior trees to encourage growth of remaining trees in a forest.',             hint:'Cut only some trees — others grow' },
  ],

  'Physical Landscapes': [
    { term:'Erosion',               definition:'The wearing away and removal of material by a moving force such as a wave or river.',                    hint:'Wearing away of material' },
    { term:'Deposition',            definition:'When material being transported is dropped as the transporting force loses energy.',                     hint:'Material dropped when energy lost' },
    { term:'Transportation',        definition:'The movement of eroded material by water, wind or ice.',                                               hint:'Movement of eroded material' },
    { term:'Abrasion',              definition:'The wearing away of rock by material carried by waves, rivers or ice scraping against it.',            hint:'Carried material wears down rock' },
    { term:'Attrition',             definition:'Erosion caused when rocks carried by waves or rivers bump into each other and break into smaller pieces.', hint:'Rocks break against each other' },
    { term:'Hydraulic power',       definition:'The force of water being forced into cracks in a cliff, widening them over time.',                     hint:'Water pressure in cliff cracks' },
    { term:'Longshore drift',       definition:'The zigzag movement of sediment along a coast caused by waves approaching at an angle.',              hint:'Sediment moves along coast in zigzag' },
    { term:'Spit',                  definition:'A depositional landform extending from shore out to sea, often with a curved end.',                    hint:'Finger of sand extending from shore' },
    { term:'Hard engineering',      definition:'Using concrete and large artificial structures to defend land against natural erosion processes.',      hint:'Artificial structures — e.g. sea wall' },
    { term:'Soft engineering',      definition:'Managing erosion by working with natural processes to restore beaches and ecosystems.',                hint:'Works with nature — e.g. beach nourishment' },
    { term:'Mass movement',         definition:'The downhill movement of weathered material under the force of gravity.',                             hint:'Material moves downhill by gravity' },
    { term:'Flood plain',           definition:'The relatively flat valley floor on either side of a river channel, sometimes flooded.',             hint:'Flat land beside a river' },
    { term:'Meander',               definition:'A bend in a river formed by lateral erosion on the outside and deposition on the inside.',           hint:'Bend in a river' },
    { term:'Discharge',             definition:'The quantity of water passing a given point on a river within a given period of time.',              hint:'Volume of water in river per time' },
  ],

  'Urban Issues and Challenges': [
    { term:'Urbanisation',          definition:'The process by which an increasing proportion of a country\'s population comes to live in towns and cities.', hint:'More people living in cities' },
    { term:'Megacity',              definition:'A city with a population of over 10 million people.',                                                 hint:'City with 10+ million people' },
    { term:'Urban sprawl',          definition:'The unplanned growth of urban areas into the surrounding countryside.',                              hint:'Cities spreading into countryside' },
    { term:'Brownfield site',       definition:'Land that has been previously used, often for industry, and is now available for redevelopment.',   hint:'Previously used land — redevelopable' },
    { term:'Greenfield site',       definition:'Land that has not been previously built on, often on the edge of settlements.',                    hint:'Never built on — edge of city' },
    { term:'Deprivation',           definition:'A lack of resources, opportunities or services that most people consider to be the norm.',          hint:'Lacking resources or opportunities' },
    { term:'Regeneration',          definition:'The investment of money and ideas to improve an area that has fallen into decline.',               hint:'Improving a declined area' },
    { term:'Sustainable city',      definition:'A city that meets the needs of its current population without compromising the ability of future populations to meet their own needs.', hint:'City that doesn\'t harm the future' },
  ],

  'Development and the Wider World': [
    { term:'Development',           definition:'The progress a country makes in terms of economic growth, the use of technology and human welfare.',  hint:'Progress in economy, tech, welfare' },
    { term:'GNI per capita',        definition:'Gross National Income per capita — the total value of goods and services produced by a country divided by its population.', hint:'National income per person' },
    { term:'HDI',                   definition:'Human Development Index — a measure of development using life expectancy, education and income.',    hint:'Life expectancy + education + income' },
    { term:'LIC',                   definition:'Lower income country — a country with a GNI per capita of $1,085 or below.',                        hint:'Poorest countries by income' },
    { term:'HIC',                   definition:'Higher income country — a country with a GNI per capita of $13,205 or above.',                     hint:'Richest countries by income' },
    { term:'NEE',                   definition:'Newly emerging economy — a country experiencing rapid industrialisation and economic growth.',      hint:'Rapidly developing country' },
    { term:'Globalisation',         definition:'The process by which the world is becoming increasingly interconnected through trade, culture and communication.', hint:'World becoming more connected' },
    { term:'Aid',                   definition:'Money, goods or services given to a country in need by another country or international organisation.', hint:'Help given to countries in need' },
    { term:'Fair trade',            definition:'A trading partnership that ensures better trading conditions for producers in developing countries.', hint:'Better prices for developing world producers' },
  ],

};

// ────────────────────────────────────────────────────────────
// ENGLISH — AQA GCSE (8700 Language / 8702 Literature)
// Both covered under one subject key — topics distinguish
// ────────────────────────────────────────────────────────────
VOCAB['english'] = VOCAB['english'] || {};
VOCAB['english']['aqa-gcse'] = {

  'Language Techniques': [
    { term:'Simile',               definition:'A comparison of two unlike things using "like" or "as" to create a vivid image.',                         hint:'Comparison using like or as' },
    { term:'Metaphor',             definition:'A direct comparison stating one thing is another, not meant literally.',                                  hint:'Direct comparison — not using like/as' },
    { term:'Personification',      definition:'Giving human qualities, feelings or actions to non-human objects or abstract ideas.',                    hint:'Giving human qualities to non-human things' },
    { term:'Alliteration',         definition:'The repetition of the same consonant sound at the beginning of closely connected words.',                hint:'Same starting sound repeated' },
    { term:'Assonance',            definition:'The repetition of vowel sounds in closely connected words to create a particular mood.',                 hint:'Vowel sound repetition' },
    { term:'Onomatopoeia',         definition:'Words that imitate the sounds they describe.',                                                          hint:'Word sounds like what it means — e.g. buzz' },
    { term:'Hyperbole',            definition:'Deliberate exaggeration used for emphasis or dramatic effect.',                                         hint:'Deliberate exaggeration' },
    { term:'Imagery',              definition:'Vivid descriptive language that appeals to the senses to create a mental picture.',                    hint:'Vivid sensory description' },
    { term:'Symbolism',            definition:'The use of an object, colour or event to represent a deeper idea or meaning.',                         hint:'Object represents deeper meaning' },
    { term:'Irony',                definition:'When the literal meaning is the opposite of what is actually meant, or when events turn out contrary to expectations.', hint:'Opposite of what is expected or meant' },
    { term:'Juxtaposition',        definition:'Placing contrasting ideas, images or characters side by side to highlight the differences between them.', hint:'Contrasting ideas placed side by side' },
    { term:'Rhetorical question',  definition:'A question asked for effect, not requiring an answer, used to engage or persuade the reader.',          hint:'Question asked for effect — no answer needed' },
    { term:'Repetition',           definition:'The deliberate use of the same word or phrase more than once for emphasis or effect.',                 hint:'Same word used again for effect' },
    { term:'Emotive language',     definition:'Language chosen to provoke an emotional response from the reader.',                                    hint:'Language that creates emotion' },
    { term:'Semantic field',       definition:'A group of words related to the same topic or idea, creating a connected theme.',                     hint:'Group of related words — same topic' },
    { term:'Tone',                 definition:'The writer\'s attitude towards the subject, conveyed through language choices.',                      hint:'Writer\'s attitude or mood' },
    { term:'Allusion',             definition:'An indirect reference to another text, person, event or work of art.',                               hint:'Indirect reference to something external' },
    { term:'Allegory',             definition:'A narrative in which characters and events represent deeper meanings or a parallel story.',           hint:'Story with deeper symbolic meaning' },
  ],

  'Structure and Form': [
    { term:'Narrative',            definition:'A spoken or written account of events — a story.',                                                    hint:'A told story' },
    { term:'Structure',            definition:'The way a text is organised and put together, including its sequence and form.',                      hint:'How a text is organised' },
    { term:'Foreshadowing',        definition:'Hints or clues earlier in a text about what will happen later.',                                     hint:'Hints about later events' },
    { term:'Flashback',            definition:'A return to an earlier point in time within a narrative.',                                           hint:'Going back in time within story' },
    { term:'First person narrator', definition:'A narrator who tells the story using "I" — a character within the story.',                         hint:'Narrator uses "I" — character in story' },
    { term:'Third person narrator', definition:'A narrator outside the story who uses "he", "she" or "they".',                                    hint:'Outside narrator — he/she/they' },
    { term:'Omniscient narrator',  definition:'A third-person narrator who knows the thoughts and feelings of all characters.',                    hint:'Knows everything — all characters\' thoughts' },
    { term:'Stanza',               definition:'A grouped set of lines in a poem, equivalent to a paragraph in prose.',                            hint:'Grouped lines in a poem' },
    { term:'Volta',                definition:'A turn or shift in tone, mood or argument within a poem.',                                          hint:'Shift in tone/argument in a poem' },
    { term:'Couplet',              definition:'A pair of consecutive rhyming lines in a poem.',                                                    hint:'Two consecutive rhyming lines' },
    { term:'Sonnet',               definition:'A 14-line poem typically written in iambic pentameter.',                                            hint:'14-line poem — iambic pentameter' },
    { term:'Free verse',           definition:'Poetry that does not follow a regular rhyme scheme or meter.',                                     hint:'Poetry without rhyme or meter' },
    { term:'Enjambment',           definition:'When a sentence or phrase runs from one line of poetry to the next without a pause.',              hint:'Sentence continues over line break' },
    { term:'Caesura',              definition:'A pause or break in a line of poetry, often marked by punctuation.',                              hint:'Pause in the middle of a line' },
  ],

  'Literature: Key Concepts': [
    { term:'Theme',                definition:'The underlying main idea or message that runs throughout a literary work.',                          hint:'Central idea or message of a text' },
    { term:'Protagonist',          definition:'The main character or hero of a literary work.',                                                    hint:'Main character of the story' },
    { term:'Antagonist',           definition:'A character who works against the protagonist, creating conflict.',                                 hint:'Character opposing the protagonist' },
    { term:'Conflict',             definition:'A struggle between opposing forces in a narrative — can be internal or external.',                 hint:'Struggle between opposing forces' },
    { term:'Context',              definition:'The social, historical or biographical circumstances in which a text was written.',               hint:'Circumstances when text was written' },
    { term:'Connotation',          definition:'The implied or suggested meaning of a word, beyond its literal definition.',                       hint:'Implied meaning beyond the literal' },
    { term:'Denotation',           definition:'The literal dictionary definition of a word.',                                                     hint:'Literal dictionary meaning' },
    { term:'Motif',                definition:'A recurring element — object, image or idea — that develops or supports a theme.',                hint:'Recurring image or idea in a text' },
    { term:'Pathos',               definition:'Language or a moment designed to evoke feelings of pity or sadness in the audience.',            hint:'Creates pity or sadness' },
    { term:'Catharsis',            definition:'The release of emotions, especially pity and fear, experienced by an audience at the end of a tragedy.', hint:'Emotional release at end of tragedy' },
    { term:'Dramatic irony',       definition:'When the audience knows something a character does not, creating tension.',                       hint:'Audience knows more than character' },
    { term:'Soliloquy',            definition:'A speech in which a character speaks their thoughts aloud while alone on stage.',                hint:'Character speaks thoughts alone on stage' },
    { term:'Genre',                definition:'A category of literary work defined by its style, form or content.',                             hint:'Category of literature — e.g. tragedy' },
    { term:'Setting',              definition:'The time and place in which a story takes place.',                                               hint:'Time and place of the story' },
    { term:'Unreliable narrator',  definition:'A narrator whose account of events is not entirely trustworthy or accurate.',                   hint:'Narrator whose version can\'t be trusted' },
  ],

  'Reading and Writing Skills': [
    { term:'Inference',            definition:'A conclusion drawn from evidence rather than being stated directly in the text.',                hint:'Conclusion drawn from clues' },
    { term:'Explicit information', definition:'Information that is clearly stated in the text.',                                               hint:'Clearly stated in the text' },
    { term:'Implicit information', definition:'Information that is implied or suggested rather than directly stated.',                        hint:'Suggested — not directly stated' },
    { term:'Audience',             definition:'The intended readers or viewers of a text.',                                                    hint:'Who the text is written for' },
    { term:'Purpose',              definition:'The reason a text has been written — to inform, persuade, entertain, argue, etc.',            hint:'Why the text was written' },
    { term:'Register',             definition:'The style and level of formality of language used, adjusted to suit the audience and purpose.', hint:'Level of formality in language' },
    { term:'Persuasive writing',   definition:'Writing that aims to convince the reader to agree with a viewpoint or take an action.',       hint:'Writing to change someone\'s opinion' },
    { term:'Descriptive writing',  definition:'Writing that creates a vivid picture using sensory details and figurative language.',         hint:'Vivid sensory picture in words' },
  ],

};

// ────────────────────────────────────────────────────────────
// HISTORY — AQA GCSE (8145)
// Key historical concepts and period-specific vocabulary
// ────────────────────────────────────────────────────────────
VOCAB['history'] = VOCAB['history'] || {};
VOCAB['history']['aqa-gcse'] = {

  'Historical Concepts': [
    { term:'Causation',            definition:'The relationship between causes and their effects — why events happened.',                        hint:'Why things happened — cause and effect' },
    { term:'Consequence',          definition:'The results or effects of an historical event or action.',                                       hint:'Results or effects of an event' },
    { term:'Continuity',           definition:'Things that stayed the same over a period of time.',                                            hint:'Things that stayed the same' },
    { term:'Change',               definition:'Things that were different from one period to another.',                                        hint:'Things that were different over time' },
    { term:'Significance',         definition:'The importance of a person, event or development in history.',                                  hint:'Historical importance' },
    { term:'Perspective',          definition:'A particular point of view or interpretation of events from a specific standpoint.',            hint:'A particular point of view' },
    { term:'Evidence',             definition:'Sources of information used by historians to build an understanding of the past.',             hint:'Information used to understand the past' },
    { term:'Primary source',       definition:'A source created at the time of the events being studied — e.g. a diary, speech or photograph.', hint:'Created at the time — original source' },
    { term:'Secondary source',     definition:'A source created after the events, interpreting or analysing what happened.',                  hint:'Created after the event — interpretation' },
    { term:'Bias',                 definition:'A tendency in a source to present a one-sided or partial view of events.',                    hint:'One-sided or partial view' },
    { term:'Propaganda',           definition:'Information — often biased — used by a government or group to promote a particular viewpoint.', hint:'Biased information to influence opinion' },
    { term:'Interpretation',       definition:'A historian\'s view or analysis of historical events, which may differ from others.',         hint:'Historian\'s view of events' },
    { term:'Chronology',           definition:'The arrangement of events in the order in which they occurred.',                              hint:'Events in time order' },
    { term:'Era',                  definition:'A long and distinct period of history.',                                                      hint:'A long period of history' },
  ],

  'Germany 1890–1945': [
    { term:'Weimar Republic',      definition:'The democratic government of Germany established after World War One, from 1919 to 1933.',      hint:'German democracy 1919–1933' },
    { term:'Hyperinflation',       definition:'An extremely rapid and out-of-control price increase, making currency almost worthless.',      hint:'Prices rising extremely fast' },
    { term:'Reichstag',            definition:'The German parliament building and the name for the German parliament itself.',               hint:'German parliament' },
    { term:'Nazi Party',           definition:'The National Socialist German Workers\' Party, led by Hitler, which ruled Germany 1933–1945.', hint:'Hitler\'s party — ruled Germany' },
    { term:'Totalitarianism',      definition:'A system of government where the state holds total authority over society and seeks to control all aspects of life.', hint:'Total state control over all life' },
    { term:'Propaganda',           definition:'Information — often biased — spread by the state to promote a particular viewpoint or ideology.', hint:'State-controlled biased information' },
    { term:'Appeasement',          definition:'The policy of making concessions to an aggressive power to avoid conflict.',                  hint:'Giving in to avoid war' },
    { term:'Holocaust',            definition:'The systematic, state-sponsored murder of six million Jews and millions of others by the Nazi regime.', hint:'Nazi genocide — six million Jews' },
    { term:'Gestapo',              definition:'The secret state police of Nazi Germany.',                                                   hint:'Nazi secret police' },
    { term:'Concentration camp',   definition:'A camp where large numbers of people were held prisoner under harsh conditions by the Nazi regime.', hint:'Nazi prison camp' },
  ],

  'Cold War': [
    { term:'Cold War',             definition:'A period of political and military tension between the USA and USSR from 1945 to 1991, stopping short of direct war.', hint:'USA vs USSR — no direct fighting' },
    { term:'Capitalism',           definition:'An economic system in which trade, industry and the means of production are privately owned.',  hint:'Private ownership of industry' },
    { term:'Communism',            definition:'A political and economic system in which property is owned by the state and wealth is distributed equally.', hint:'State ownership — equal distribution' },
    { term:'Superpower',           definition:'A country with dominant influence over others — during the Cold War, the USA and USSR.',       hint:'Most powerful country — USA or USSR' },
    { term:'NATO',                 definition:'North Atlantic Treaty Organisation — a military alliance between Western nations formed in 1949.', hint:'Western military alliance — 1949' },
    { term:'Iron Curtain',         definition:'The term used to describe the ideological and physical boundary dividing communist Eastern and democratic Western Europe.', hint:'Divide between East and West Europe' },
    { term:'Arms race',            definition:'A competition between the USA and USSR to develop more powerful weapons, especially nuclear weapons.', hint:'USA and USSR racing to build weapons' },
    { term:'Détente',              definition:'A period of relaxed tensions and improved relations between the USA and USSR during the 1970s.', hint:'Relaxed tensions — 1970s' },
    { term:'Proxy war',            definition:'A conflict where two opposing powers support different sides in a war rather than fighting each other directly.', hint:'Two powers fight through others' },
  ],

  'Medicine Through Time': [
    { term:'Epidemic',             definition:'A widespread outbreak of a disease affecting many people at the same time in a region.',       hint:'Widespread disease outbreak' },
    { term:'Pandemic',             definition:'An epidemic that has spread across a large region, multiple countries or worldwide.',          hint:'Worldwide disease outbreak' },
    { term:'Germ theory',          definition:'The theory developed by Louis Pasteur that disease is caused by microorganisms.',              hint:'Pasteur — disease caused by microorganisms' },
    { term:'Miasma theory',        definition:'The incorrect belief that disease was caused by "bad air" from rotting matter.',              hint:'Old belief — disease from bad air' },
    { term:'Vaccination',          definition:'The administration of a vaccine to stimulate immunity against a disease.',                   hint:'Stimulates immunity against disease' },
    { term:'Surgery',              definition:'Medical treatment involving incisions into the body — developed from crude to sophisticated over centuries.', hint:'Treatment by cutting into body' },
    { term:'Anaesthetic',          definition:'A substance used to induce loss of sensation or consciousness during medical procedures.',   hint:'Removes pain/feeling during surgery' },
    { term:'Antiseptic',           definition:'A substance that kills or prevents the growth of bacteria — used in surgery to prevent infection.', hint:'Kills bacteria — prevents infection' },
    { term:'Public health',        definition:'Government measures taken to prevent disease and improve the health of the whole population.', hint:'Government measures to prevent disease' },
  ],

};

// ────────────────────────────────────────────────────────────
// MATHS — AQA GCSE (8300)
// Key mathematical vocabulary across topics
// ────────────────────────────────────────────────────────────
VOCAB['maths'] = VOCAB['maths'] || {};
VOCAB['maths']['aqa-gcse'] = {

  'Number': [
    { term:'Integer',              definition:'A whole number — positive, negative or zero.',                                                   hint:'Whole number — no decimal or fraction' },
    { term:'Factor',               definition:'A number that divides exactly into another number without a remainder.',                        hint:'Divides exactly into another number' },
    { term:'Multiple',             definition:'A number that can be divided by another number without a remainder — found in the times table.', hint:'In the times table of a number' },
    { term:'Prime number',         definition:'A number greater than 1 that has only two factors: 1 and itself.',                             hint:'Only divisible by 1 and itself' },
    { term:'Square number',        definition:'The result of multiplying an integer by itself.',                                               hint:'Number multiplied by itself' },
    { term:'Cube number',          definition:'The result of multiplying an integer by itself three times.',                                  hint:'Number multiplied by itself three times' },
    { term:'HCF',                  definition:'Highest Common Factor — the largest number that divides exactly into two or more given numbers.', hint:'Largest shared factor' },
    { term:'LCM',                  definition:'Lowest Common Multiple — the smallest number that is a multiple of two or more given numbers.',  hint:'Smallest shared multiple' },
    { term:'Reciprocal',           definition:'The reciprocal of a number is 1 divided by that number — multiplying a number by its reciprocal gives 1.', hint:'1 divided by the number' },
    { term:'Irrational number',    definition:'A number that cannot be expressed as a fraction — its decimal expansion is non-terminating and non-repeating.', hint:'Cannot be written as a fraction — e.g. π' },
    { term:'Surd',                 definition:'An irrational number expressed as a root, such as √2.',                                       hint:'Irrational root — e.g. √2' },
    { term:'Standard form',        definition:'A way of writing very large or small numbers as a × 10ⁿ where 1 ≤ a < 10.',                   hint:'a × 10ⁿ — large/small numbers' },
  ],

  'Algebra': [
    { term:'Expression',           definition:'A mathematical phrase containing numbers, variables and operations but no equals sign.',       hint:'Numbers and letters — no equals sign' },
    { term:'Equation',             definition:'A mathematical statement showing that two expressions are equal.',                             hint:'Two expressions equal each other' },
    { term:'Formula',              definition:'A rule written using symbols that describes a mathematical relationship.',                    hint:'Rule using symbols — e.g. A = lw' },
    { term:'Identity',             definition:'An equation that is true for all values of the variables.',                                  hint:'True for all values — ≡ symbol' },
    { term:'Inequality',           definition:'A relationship showing that one expression is greater or lesser than another.',              hint:'Shows greater/less than — <, >, ≤, ≥' },
    { term:'Expand',               definition:'To multiply out brackets to remove them from an expression.',                               hint:'Multiply out the brackets' },
    { term:'Factorise',            definition:'To write an expression as a product of its factors by taking out common factors or grouping.', hint:'Put brackets back in — reverse of expanding' },
    { term:'Simultaneous equations', definition:'Two or more equations with the same unknowns that are solved together to find common solutions.', hint:'Two equations — same unknowns — solved together' },
    { term:'Gradient',             definition:'The steepness of a line — the rate of change of y with respect to x.',                     hint:'Steepness of a line — rise ÷ run' },
    { term:'Quadratic',            definition:'An expression or equation involving a variable squared — of the form ax² + bx + c.',        hint:'Contains x² — ax² + bx + c' },
  ],

  'Geometry and Measures': [
    { term:'Perimeter',            definition:'The total distance around the outside of a shape.',                                          hint:'Distance around outside of shape' },
    { term:'Area',                 definition:'The amount of space inside a 2D shape.',                                                    hint:'Space inside a 2D shape' },
    { term:'Volume',               definition:'The amount of three-dimensional space occupied by a solid shape.',                          hint:'Space inside a 3D shape' },
    { term:'Circumference',        definition:'The perimeter of a circle.',                                                               hint:'Perimeter of a circle' },
    { term:'Radius',               definition:'The distance from the centre of a circle to any point on its circumference.',              hint:'Centre to edge of circle' },
    { term:'Diameter',             definition:'The distance across a circle through its centre — twice the radius.',                     hint:'Across circle through centre' },
    { term:'Congruent',            definition:'Two shapes are congruent if they are identical in shape and size.',                       hint:'Identical shape and size' },
    { term:'Similar',              definition:'Two shapes are similar if they have the same angles and corresponding sides in the same ratio.', hint:'Same shape — different size' },
    { term:'Pythagoras\' theorem', definition:'In a right-angled triangle, a² + b² = c², where c is the hypotenuse.',                  hint:'a² + b² = c² in right-angled triangle' },
    { term:'Hypotenuse',           definition:'The longest side of a right-angled triangle, opposite the right angle.',                hint:'Longest side — opposite right angle' },
    { term:'Locus',                definition:'A set of points satisfying a given condition — the path traced by a moving point.',      hint:'Path traced by a point following a rule' },
    { term:'Vector',               definition:'A quantity with both magnitude and direction, represented as a directed line segment.',  hint:'Has magnitude AND direction' },
  ],

  'Statistics and Probability': [
    { term:'Mean',                 definition:'The average of a set of values — calculated by dividing the sum of all values by the number of values.', hint:'Sum of all values ÷ number of values' },
    { term:'Median',               definition:'The middle value when data is arranged in order.',                                          hint:'Middle value when ordered' },
    { term:'Mode',                 definition:'The most frequently occurring value in a data set.',                                       hint:'Most common value' },
    { term:'Range',                definition:'The difference between the largest and smallest values in a data set.',                   hint:'Largest minus smallest value' },
    { term:'Frequency',            definition:'The number of times a particular value or outcome occurs.',                              hint:'How many times something occurs' },
    { term:'Probability',          definition:'A measure of how likely an event is to occur — expressed as a value between 0 and 1.',  hint:'Likelihood of event — 0 to 1' },
    { term:'Mutually exclusive',   definition:'Events that cannot both occur at the same time.',                                       hint:'Cannot both happen at once' },
    { term:'Cumulative frequency', definition:'A running total of frequencies, used to find the median and quartiles.',               hint:'Running total of frequencies' },
    { term:'Quartile',             definition:'Values that divide a data set into four equal parts — lower (Q1), median (Q2), upper (Q3).', hint:'Divides data into four equal parts' },
    { term:'Correlation',          definition:'A statistical relationship between two variables shown on a scatter graph.',            hint:'Relationship between two variables' },
    { term:'Outlier',              definition:'A data value that is significantly different from other values in a data set.',        hint:'Value far from the others' },
  ],

  'Ratio, Proportion and Rates of Change': [
    { term:'Ratio',                definition:'A comparison of two or more quantities showing their relative sizes.',                   hint:'Comparison of quantities — e.g. 3:2' },
    { term:'Proportion',           definition:'A statement that two ratios are equal — or the relationship between a part and a whole.', hint:'Equal ratios — or part to whole' },
    { term:'Percentage',           definition:'A number or ratio expressed as a fraction of 100.',                                    hint:'Out of 100' },
    { term:'Rate of change',       definition:'How quickly one quantity changes compared to another — often represented by the gradient.', hint:'How fast something changes' },
    { term:'Direct proportion',    definition:'Two quantities are in direct proportion if they increase or decrease at the same rate — y = kx.', hint:'Both increase/decrease together — y = kx' },
    { term:'Inverse proportion',   definition:'Two quantities are in inverse proportion if one increases as the other decreases — y = k/x.', hint:'One increases as other decreases — y = k/x' },
  ],

};

// ────────────────────────────────────────────────────────────
// COMPUTING — AQA GCSE (8525)
// ────────────────────────────────────────────────────────────
VOCAB['computing'] = VOCAB['computing'] || {};
VOCAB['computing']['aqa-gcse'] = {

  'Fundamentals of Algorithms': [
    { term:'Algorithm',            definition:'A set of precise, step-by-step instructions for solving a problem or completing a task.',        hint:'Step-by-step problem-solving instructions' },
    { term:'Decomposition',        definition:'Breaking a complex problem down into smaller, more manageable sub-problems.',                   hint:'Breaking problem into smaller parts' },
    { term:'Abstraction',          definition:'The process of removing unnecessary detail to focus on the essential features of a problem.',   hint:'Removing unnecessary detail' },
    { term:'Pseudocode',           definition:'A notation that resembles programming code but is written in plain language to describe an algorithm.', hint:'Plain language that resembles code' },
    { term:'Flowchart',            definition:'A diagram using standard symbols to represent the steps and decisions in an algorithm.',        hint:'Diagram showing algorithm steps' },
    { term:'Iteration',            definition:'The repetition of a section of code — a loop.',                                               hint:'Repeating a section of code' },
    { term:'Selection',            definition:'A decision structure in code — an IF statement — that executes different code depending on a condition.', hint:'IF statement — decision in code' },
    { term:'Sequence',             definition:'Instructions executed one after another in order.',                                           hint:'Instructions in order' },
    { term:'Linear search',        definition:'A search algorithm that checks each item in a list one by one until the target is found.',    hint:'Checks each item one by one' },
    { term:'Binary search',        definition:'A more efficient search algorithm that repeatedly halves a sorted list to find a target.',   hint:'Halves sorted list each time' },
    { term:'Bubble sort',          definition:'A sorting algorithm that repeatedly compares and swaps adjacent items until the list is sorted.', hint:'Compares and swaps adjacent items' },
    { term:'Merge sort',           definition:'A sorting algorithm that divides a list into halves, sorts each half recursively and merges them.', hint:'Divide, sort, merge' },
  ],

  'Programming': [
    { term:'Variable',             definition:'A named storage location in memory that holds a value which can change.',                    hint:'Named storage that can change' },
    { term:'Constant',             definition:'A named storage location whose value cannot change during the execution of a program.',     hint:'Named storage that cannot change' },
    { term:'Data type',            definition:'The type of data stored in a variable — e.g. integer, string, Boolean, real.',             hint:'Type of data — int, string, bool' },
    { term:'String',               definition:'A data type representing a sequence of characters.',                                       hint:'Sequence of characters — text' },
    { term:'Boolean',              definition:'A data type that can only hold one of two values: True or False.',                        hint:'True or False only' },
    { term:'Array',                definition:'A data structure that stores multiple values of the same type under a single variable name.', hint:'Multiple values — single variable name' },
    { term:'Function',             definition:'A named block of reusable code that returns a value.',                                    hint:'Named reusable code — returns value' },
    { term:'Procedure',            definition:'A named block of reusable code that does not return a value.',                           hint:'Named reusable code — no return value' },
    { term:'Parameter',            definition:'A variable passed into a function or procedure when it is called.',                      hint:'Input passed into a function' },
    { term:'Local variable',       definition:'A variable declared inside a function or procedure — only accessible within it.',       hint:'Only accessible inside its function' },
    { term:'Global variable',      definition:'A variable declared outside any function — accessible throughout the whole program.',   hint:'Accessible throughout whole program' },
  ],

  'Data Representation': [
    { term:'Binary',               definition:'The base-2 number system used by computers, using only the digits 0 and 1.',             hint:'Base-2 — only 0 and 1' },
    { term:'Bit',                  definition:'The smallest unit of data in computing — a single binary digit: 0 or 1.',              hint:'Smallest unit — single 0 or 1' },
    { term:'Byte',                 definition:'A group of 8 bits.',                                                                    hint:'8 bits' },
    { term:'Denary',               definition:'The base-10 number system — the standard decimal system we use in everyday life.',     hint:'Base-10 — our normal number system' },
    { term:'Hexadecimal',          definition:'The base-16 number system using digits 0–9 and letters A–F.',                         hint:'Base-16 — 0-9 and A-F' },
    { term:'ASCII',                definition:'A character encoding standard that assigns a number to each character — letters, digits and symbols.', hint:'Character encoding — letters and symbols' },
    { term:'Unicode',              definition:'A character encoding standard that covers a much wider range of characters than ASCII, including international characters.', hint:'Expanded character encoding — includes all languages' },
    { term:'Pixel',                definition:'The smallest unit of a digital image — a single point of colour.',                    hint:'Smallest unit of a digital image' },
    { term:'Compression',          definition:'Reducing the size of a file to save storage space or reduce transmission time.',      hint:'Reducing file size' },
    { term:'Lossless compression', definition:'Compression that reduces file size without losing any data — the original can be perfectly restored.', hint:'No data lost — original can be restored' },
    { term:'Lossy compression',    definition:'Compression that reduces file size by permanently removing some data, reducing quality.', hint:'Data permanently lost — smaller file' },
  ],

  'Computer Systems': [
    { term:'CPU',                  definition:'Central Processing Unit — the main processor of a computer that executes instructions.',   hint:'Main processor — executes instructions' },
    { term:'RAM',                  definition:'Random Access Memory — volatile memory used to store data and programs currently in use.', hint:'Temporary volatile memory — currently in use' },
    { term:'ROM',                  definition:'Read Only Memory — non-volatile memory that stores permanent instructions such as the boot sequence.', hint:'Permanent read-only memory — e.g. boot sequence' },
    { term:'Cache',                definition:'A small, fast memory store between the CPU and RAM used to hold frequently accessed data.', hint:'Fast memory near CPU — frequently used data' },
    { term:'Clock speed',          definition:'The number of instruction cycles per second a CPU can perform — measured in gigahertz (GHz).', hint:'Instructions per second — GHz' },
    { term:'Fetch-decode-execute', definition:'The cycle by which a CPU retrieves an instruction from memory, decodes it and carries it out.', hint:'How CPU processes instructions' },
    { term:'Operating system',     definition:'System software that manages computer hardware and software resources and provides services for programs.', hint:'Manages hardware and software' },
    { term:'Embedded system',      definition:'A computer system built into a larger device to perform a dedicated function.',         hint:'Computer built into a device for one purpose' },
    { term:'Virtual memory',       definition:'A section of secondary storage used as an extension of RAM when RAM is full.',          hint:'Secondary storage used as extra RAM' },
  ],

  'Networks': [
    { term:'Network',              definition:'A group of connected devices that can communicate and share data.',                     hint:'Connected devices sharing data' },
    { term:'LAN',                  definition:'Local Area Network — a network covering a small geographical area such as a school or office.', hint:'Small area network — e.g. school' },
    { term:'WAN',                  definition:'Wide Area Network — a network covering a large geographical area, e.g. the internet.',  hint:'Large area network — e.g. internet' },
    { term:'Internet',             definition:'A global wide area network connecting millions of private, public, academic and business networks.', hint:'Global network of networks' },
    { term:'Protocol',             definition:'A set of rules that govern how data is transmitted over a network.',                  hint:'Rules for data transmission' },
    { term:'IP address',           definition:'A unique numerical address assigned to each device on a network.',                   hint:'Unique address for each device' },
    { term:'Packet',               definition:'A small unit of data transmitted over a network — large data is broken into packets.', hint:'Small unit of data sent over network' },
    { term:'Bandwidth',            definition:'The maximum amount of data that can be transmitted over a network connection per second.', hint:'Maximum data transfer rate' },
    { term:'Encryption',           definition:'The process of converting data into a coded form to prevent unauthorised access.',   hint:'Converting data into code for security' },
    { term:'Firewall',             definition:'Hardware or software that monitors and controls incoming and outgoing network traffic to protect against threats.', hint:'Monitors network traffic for threats' },
    { term:'Malware',              definition:'Malicious software designed to disrupt, damage or gain unauthorised access to a computer system.', hint:'Malicious software — disrupts computers' },
    { term:'Phishing',             definition:'A cyber attack using deceptive emails or websites to trick users into revealing personal information.', hint:'Fake emails/sites steal personal info' },
  ],

};

// ────────────────────────────────────────────────────────────
// FRENCH — AQA GCSE (8658)
// term = French word/phrase, definition = English translation
// Source: AQA GCSE French 8658 official vocabulary list
// ────────────────────────────────────────────────────────────
VOCAB['french'] = VOCAB['french'] || {};
VOCAB['french']['aqa-gcse'] = {

  'Identity and Culture': [
    { term:'s\'appeler',           definition:'to be called',                            hint:'Saying your name' },
    { term:'avoir...ans',          definition:'to be...years old',                       hint:'Stating age' },
    { term:'la famille',           definition:'the family',                              hint:'Group of relatives' },
    { term:'les parents',          definition:'the parents',                             hint:'Mother and father' },
    { term:'le frère',             definition:'the brother',                             hint:'Male sibling' },
    { term:'la sœur',              definition:'the sister',                              hint:'Female sibling' },
    { term:'le père',              definition:'the father',                              hint:'Male parent' },
    { term:'la mère',              definition:'the mother',                              hint:'Female parent' },
    { term:'le grand-père',        definition:'the grandfather',                        hint:'Father\'s/mother\'s father' },
    { term:'la grand-mère',        definition:'the grandmother',                        hint:'Father\'s/mother\'s mother' },
    { term:'le mari',              definition:'the husband',                             hint:'Married male partner' },
    { term:'la femme',             definition:'the wife / woman',                       hint:'Married female partner' },
    { term:'le fils',              definition:'the son',                                 hint:'Male child' },
    { term:'la fille',             definition:'the daughter / girl',                    hint:'Female child' },
    { term:'l\'ami / l\'amie',     definition:'the friend (male/female)',               hint:'A close friend' },
    { term:'sympa',                definition:'kind, nice',                             hint:'Friendly personality' },
    { term:'gentil / gentille',    definition:'kind, nice',                             hint:'Well-mannered' },
    { term:'timide',               definition:'shy',                                    hint:'Nervous around others' },
    { term:'bavard / bavarde',     definition:'chatty, talkative',                      hint:'Talks a lot' },
    { term:'paresseux / paresseuse', definition:'lazy',                                hint:'Doesn\'t like working' },
    { term:'travailleur / travailleuse', definition:'hard-working',                    hint:'Works hard' },
    { term:'s\'entendre avec',     definition:'to get on with',                        hint:'Having a good relationship' },
    { term:'se disputer',          definition:'to argue',                               hint:'Having a disagreement' },
    { term:'se marier',            definition:'to get married',                         hint:'Wedding' },
    { term:'les cheveux',          definition:'the hair',                               hint:'Grows on your head' },
    { term:'les yeux',             definition:'the eyes',                               hint:'Used for seeing' },
    { term:'grand / grande',       definition:'tall, big',                              hint:'Above average height' },
    { term:'petit / petite',       definition:'small, short',                           hint:'Below average height' },
    { term:'les loisirs',          definition:'leisure activities',                     hint:'Free-time activities' },
    { term:'les passe-temps',      definition:'hobbies',                               hint:'Things you enjoy doing' },
  ],

  'Technology': [
    { term:'le portable',          definition:'the mobile phone',                      hint:'Handheld communication device' },
    { term:'l\'ordinateur',        definition:'the computer',                          hint:'Electronic device for work' },
    { term:'le clavier',           definition:'the keyboard',                          hint:'Used to type' },
    { term:'internet',             definition:'the internet',                          hint:'Global network' },
    { term:'un site web',          definition:'a website',                             hint:'Online page' },
    { term:'envoyer',              definition:'to send',                               hint:'Dispatching a message' },
    { term:'télécharger',          definition:'to download',                           hint:'Getting files from internet' },
    { term:'les réseaux sociaux',  definition:'social networks',                      hint:'Facebook, Instagram, etc.' },
    { term:'communiquer',          definition:'to communicate',                        hint:'Sharing information' },
    { term:'l\'avantage',          definition:'the advantage',                         hint:'A positive aspect' },
    { term:'l\'inconvénient',      definition:'the disadvantage',                     hint:'A negative aspect' },
    { term:'utile',                definition:'useful',                                hint:'Has practical value' },
    { term:'inutile',              definition:'useless',                               hint:'No practical value' },
    { term:'pratique',             definition:'practical',                             hint:'Easy to use' },
  ],

  'Free Time': [
    { term:'regarder la télé',     definition:'to watch TV',                          hint:'Television viewing' },
    { term:'écouter de la musique', definition:'to listen to music',                  hint:'Enjoying songs' },
    { term:'jouer au foot',        definition:'to play football',                     hint:'Kicking a ball' },
    { term:'lire',                 definition:'to read',                              hint:'Books and magazines' },
    { term:'sortir',               definition:'to go out',                            hint:'Leaving the house' },
    { term:'le cinéma',            definition:'the cinema',                           hint:'Watching films' },
    { term:'le sport',             definition:'sport',                                hint:'Physical activity' },
    { term:'la musique',           definition:'music',                                hint:'Songs and instruments' },
    { term:'nager',                definition:'to swim',                              hint:'Moving through water' },
    { term:'faire du vélo',        definition:'to cycle',                             hint:'Riding a bike' },
    { term:'faire de la natation', definition:'to go swimming',                      hint:'Swimming as sport' },
    { term:'un concert',           definition:'a concert',                            hint:'Live music performance' },
    { term:'un match',             definition:'a match / game',                       hint:'Competitive sporting event' },
    { term:'gratuit',              definition:'free (no charge)',                     hint:'No cost required' },
    { term:'cher / chère',         definition:'expensive',                            hint:'Costs a lot' },
  ],

  'Home and Town': [
    { term:'la maison',            definition:'the house',                            hint:'A home building' },
    { term:'l\'appartement',       definition:'the flat / apartment',                hint:'Home in a block' },
    { term:'la chambre',           definition:'the bedroom',                          hint:'Room for sleeping' },
    { term:'la cuisine',           definition:'the kitchen',                          hint:'Room for cooking' },
    { term:'la salle de bains',    definition:'the bathroom',                         hint:'Room for washing' },
    { term:'le salon',             definition:'the living room',                      hint:'Room for relaxing' },
    { term:'le jardin',            definition:'the garden',                           hint:'Outdoor growing space' },
    { term:'en ville',             definition:'in town',                              hint:'Urban location' },
    { term:'à la campagne',        definition:'in the countryside',                  hint:'Rural location' },
    { term:'au bord de la mer',    definition:'at the seaside',                      hint:'By the sea' },
    { term:'l\'épicerie',          definition:'the grocery shop',                    hint:'Sells food items' },
    { term:'la boulangerie',       definition:'the bakery',                           hint:'Sells bread' },
    { term:'la pharmacie',         definition:'the pharmacy',                        hint:'Sells medicine' },
    { term:'la gare',              definition:'the train station',                   hint:'Where trains stop' },
    { term:'la banque',            definition:'the bank',                             hint:'Financial institution' },
  ],

  'School and Work': [
    { term:'le collège',           definition:'the secondary school (11–15)',        hint:'School for younger teenagers' },
    { term:'le lycée',             definition:'the sixth form / high school (15–18)', hint:'School for older teenagers' },
    { term:'la matière',           definition:'the (school) subject',               hint:'What you study at school' },
    { term:'les maths',            definition:'maths',                               hint:'Numbers and equations' },
    { term:'le français',          definition:'French',                              hint:'The language of France' },
    { term:'les sciences',         definition:'science(s)',                          hint:'Biology, chemistry, physics' },
    { term:'l\'histoire',          definition:'history',                             hint:'Study of the past' },
    { term:'la géographie',        definition:'geography',                           hint:'Study of the world' },
    { term:'le cours',             definition:'the lesson',                          hint:'A class at school' },
    { term:'les devoirs',          definition:'homework',                            hint:'Work done at home' },
    { term:'le prof / le professeur', definition:'the teacher',                     hint:'Person who teaches' },
    { term:'le travail',           definition:'work',                                hint:'Employment' },
    { term:'le métier',            definition:'the job / profession',               hint:'Type of work you do' },
    { term:'le salaire',           definition:'the salary',                          hint:'Monthly pay' },
    { term:'travailler',           definition:'to work',                             hint:'Being employed' },
  ],

  'Health and Environment': [
    { term:'la santé',             definition:'health',                              hint:'State of being well' },
    { term:'malade',               definition:'ill, sick',                           hint:'Not feeling well' },
    { term:'le médecin',           definition:'the doctor',                          hint:'Medical professional' },
    { term:'l\'hôpital',           definition:'the hospital',                        hint:'Medical treatment building' },
    { term:'se sentir bien',       definition:'to feel well',                        hint:'Feeling healthy' },
    { term:'manger sainement',     definition:'to eat healthily',                   hint:'Good food choices' },
    { term:'faire du sport',       definition:'to do sport',                         hint:'Physical exercise' },
    { term:'l\'environnement',     definition:'the environment',                    hint:'The natural world around us' },
    { term:'le recyclage',         definition:'recycling',                           hint:'Reusing materials' },
    { term:'la pollution',         definition:'pollution',                           hint:'Contamination of environment' },
    { term:'le réchauffement climatique', definition:'global warming',              hint:'Earth\'s temperature rising' },
    { term:'économiser',           definition:'to save / economise',               hint:'Using less — being careful' },
    { term:'protéger',             definition:'to protect',                          hint:'Keeping something safe' },
  ],

};

// ────────────────────────────────────────────────────────────
// GERMAN — AQA GCSE (8668)
// term = German word/phrase, definition = English translation
// ────────────────────────────────────────────────────────────
VOCAB['german'] = VOCAB['german'] || {};
VOCAB['german']['aqa-gcse'] = {

  'Identity and Culture': [
    { term:'heißen',               definition:'to be called',                        hint:'Stating your name' },
    { term:'die Familie',          definition:'the family',                          hint:'Group of relatives' },
    { term:'die Eltern',           definition:'the parents',                         hint:'Mother and father' },
    { term:'der Vater',            definition:'the father',                          hint:'Male parent' },
    { term:'die Mutter',           definition:'the mother',                          hint:'Female parent' },
    { term:'der Bruder',           definition:'the brother',                         hint:'Male sibling' },
    { term:'die Schwester',        definition:'the sister',                          hint:'Female sibling' },
    { term:'der Großvater',        definition:'the grandfather',                    hint:'Father\'s/mother\'s father' },
    { term:'die Großmutter',       definition:'the grandmother',                   hint:'Father\'s/mother\'s mother' },
    { term:'der Mann',             definition:'the husband / man',                  hint:'Male adult' },
    { term:'die Frau',             definition:'the wife / woman',                   hint:'Female adult' },
    { term:'der Sohn',             definition:'the son',                             hint:'Male child' },
    { term:'die Tochter',          definition:'the daughter',                       hint:'Female child' },
    { term:'der Freund / die Freundin', definition:'the friend (male/female)',     hint:'A close friend' },
    { term:'nett',                 definition:'nice, kind',                         hint:'Pleasant personality' },
    { term:'freundlich',           definition:'friendly',                           hint:'Warm and welcoming' },
    { term:'schüchtern',           definition:'shy',                                hint:'Nervous around others' },
    { term:'lustig',               definition:'funny',                              hint:'Makes people laugh' },
    { term:'fleißig',              definition:'hard-working',                       hint:'Works hard' },
    { term:'faul',                 definition:'lazy',                               hint:'Dislikes effort' },
    { term:'groß',                 definition:'tall, big',                          hint:'Above average height/size' },
    { term:'klein',                definition:'small, short',                       hint:'Below average height/size' },
    { term:'die Augen',            definition:'the eyes',                           hint:'Used for seeing' },
    { term:'die Haare',            definition:'the hair',                           hint:'Grows on your head' },
    { term:'sich verstehen',       definition:'to get on (with each other)',       hint:'Having a good relationship' },
  ],

  'Technology': [
    { term:'das Handy',            definition:'the mobile phone',                  hint:'Portable phone' },
    { term:'der Computer',         definition:'the computer',                      hint:'Electronic work device' },
    { term:'die Tastatur',         definition:'the keyboard',                      hint:'Used to type' },
    { term:'das Internet',         definition:'the internet',                      hint:'Global network' },
    { term:'die Webseite',         definition:'the website',                       hint:'Online page' },
    { term:'schicken',             definition:'to send',                           hint:'Dispatching a message' },
    { term:'herunterladen',        definition:'to download',                       hint:'Getting files from internet' },
    { term:'soziale Netzwerke',    definition:'social networks',                  hint:'Facebook, Instagram etc.' },
    { term:'kommunizieren',        definition:'to communicate',                    hint:'Sharing information' },
    { term:'nützlich',             definition:'useful',                            hint:'Has practical value' },
    { term:'praktisch',            definition:'practical',                         hint:'Easy to use' },
  ],

  'Free Time': [
    { term:'fernsehen',            definition:'to watch TV',                       hint:'Television viewing' },
    { term:'Musik hören',          definition:'to listen to music',               hint:'Enjoying songs' },
    { term:'Fußball spielen',      definition:'to play football',                 hint:'Kicking a ball' },
    { term:'lesen',                definition:'to read',                          hint:'Books and magazines' },
    { term:'ausgehen',             definition:'to go out',                        hint:'Leaving the house' },
    { term:'das Kino',             definition:'the cinema',                       hint:'Watching films' },
    { term:'der Sport',            definition:'sport',                            hint:'Physical activity' },
    { term:'die Musik',            definition:'music',                            hint:'Songs and instruments' },
    { term:'schwimmen',            definition:'to swim',                          hint:'Moving through water' },
    { term:'Rad fahren',           definition:'to cycle',                         hint:'Riding a bike' },
    { term:'das Konzert',          definition:'the concert',                      hint:'Live music performance' },
    { term:'das Spiel',            definition:'the game / match',                 hint:'Competitive activity' },
    { term:'kostenlos',            definition:'free (no charge)',                 hint:'No cost required' },
    { term:'teuer',                definition:'expensive',                        hint:'Costs a lot' },
  ],

  'Home and Town': [
    { term:'das Haus',             definition:'the house',                        hint:'A home building' },
    { term:'die Wohnung',          definition:'the flat / apartment',            hint:'Home in a block' },
    { term:'das Schlafzimmer',     definition:'the bedroom',                     hint:'Room for sleeping' },
    { term:'die Küche',            definition:'the kitchen',                     hint:'Room for cooking' },
    { term:'das Badezimmer',       definition:'the bathroom',                    hint:'Room for washing' },
    { term:'das Wohnzimmer',       definition:'the living room',                 hint:'Room for relaxing' },
    { term:'der Garten',           definition:'the garden',                      hint:'Outdoor growing space' },
    { term:'in der Stadt',         definition:'in town',                         hint:'Urban location' },
    { term:'auf dem Land',         definition:'in the countryside',             hint:'Rural location' },
    { term:'am Meer',              definition:'at the sea / seaside',           hint:'Coastal location' },
    { term:'die Bäckerei',         definition:'the bakery',                     hint:'Sells bread' },
    { term:'die Apotheke',         definition:'the pharmacy',                   hint:'Sells medicine' },
    { term:'der Bahnhof',          definition:'the train station',              hint:'Where trains stop' },
    { term:'die Bank',             definition:'the bank',                       hint:'Financial institution' },
  ],

  'School and Work': [
    { term:'die Schule',           definition:'the school',                     hint:'Place of learning' },
    { term:'das Fach',             definition:'the (school) subject',          hint:'What you study' },
    { term:'die Mathematik',       definition:'maths',                          hint:'Numbers and equations' },
    { term:'Deutsch',              definition:'German',                         hint:'The language of Germany' },
    { term:'die Naturwissenschaften', definition:'sciences',                   hint:'Biology, chemistry, physics' },
    { term:'die Geschichte',       definition:'history',                       hint:'Study of the past' },
    { term:'die Erdkunde',         definition:'geography',                     hint:'Study of the world' },
    { term:'die Stunde',           definition:'the lesson',                    hint:'A class at school' },
    { term:'die Hausaufgaben',     definition:'homework',                      hint:'Work done at home' },
    { term:'der Lehrer / die Lehrerin', definition:'the teacher (m/f)',       hint:'Person who teaches' },
    { term:'die Arbeit',           definition:'work',                          hint:'Employment' },
    { term:'der Beruf',            definition:'the job / profession',         hint:'Type of work' },
    { term:'das Gehalt',           definition:'the salary',                   hint:'Monthly pay' },
    { term:'arbeiten',             definition:'to work',                       hint:'Being employed' },
  ],

  'Health and Environment': [
    { term:'die Gesundheit',       definition:'health',                        hint:'State of being well' },
    { term:'krank',                definition:'ill, sick',                     hint:'Not feeling well' },
    { term:'der Arzt / die Ärztin', definition:'the doctor (m/f)',            hint:'Medical professional' },
    { term:'das Krankenhaus',      definition:'the hospital',                 hint:'Medical treatment building' },
    { term:'sich wohlfühlen',      definition:'to feel well',                hint:'Feeling healthy' },
    { term:'gesund essen',         definition:'to eat healthily',            hint:'Good food choices' },
    { term:'Sport treiben',        definition:'to do sport',                 hint:'Physical exercise' },
    { term:'die Umwelt',           definition:'the environment',             hint:'The natural world' },
    { term:'das Recycling',        definition:'recycling',                   hint:'Reusing materials' },
    { term:'die Umweltverschmutzung', definition:'pollution',               hint:'Contamination of environment' },
    { term:'die Erderwärmung',     definition:'global warming',             hint:'Earth\'s temperature rising' },
    { term:'sparen',               definition:'to save / economise',        hint:'Using less' },
    { term:'schützen',             definition:'to protect',                 hint:'Keeping something safe' },
  ],

};

// ────────────────────────────────────────────────────────────
// SPANISH — AQA GCSE (8698)
// term = Spanish word/phrase, definition = English translation
// ────────────────────────────────────────────────────────────
VOCAB['spanish'] = VOCAB['spanish'] || {};
VOCAB['spanish']['aqa-gcse'] = {

  'Identity and Culture': [
    { term:'llamarse',             definition:'to be called',                    hint:'Stating your name' },
    { term:'la familia',           definition:'the family',                      hint:'Group of relatives' },
    { term:'los padres',           definition:'the parents',                     hint:'Mother and father' },
    { term:'el padre',             definition:'the father',                      hint:'Male parent' },
    { term:'la madre',             definition:'the mother',                      hint:'Female parent' },
    { term:'el hermano',           definition:'the brother',                     hint:'Male sibling' },
    { term:'la hermana',           definition:'the sister',                      hint:'Female sibling' },
    { term:'el abuelo',            definition:'the grandfather',                hint:'Father\'s/mother\'s father' },
    { term:'la abuela',            definition:'the grandmother',               hint:'Father\'s/mother\'s mother' },
    { term:'el marido',            definition:'the husband',                    hint:'Married male partner' },
    { term:'la mujer',             definition:'the wife / woman',              hint:'Married female partner' },
    { term:'el hijo',              definition:'the son',                        hint:'Male child' },
    { term:'la hija',              definition:'the daughter',                  hint:'Female child' },
    { term:'el amigo / la amiga',  definition:'the friend (male/female)',     hint:'A close friend' },
    { term:'simpático / simpática', definition:'nice, friendly',              hint:'Pleasant personality' },
    { term:'tímido / tímida',      definition:'shy',                           hint:'Nervous around others' },
    { term:'gracioso / graciosa',  definition:'funny',                         hint:'Makes people laugh' },
    { term:'trabajador / trabajadora', definition:'hard-working',             hint:'Works hard' },
    { term:'perezoso / perezosa',  definition:'lazy',                          hint:'Dislikes effort' },
    { term:'alto / alta',          definition:'tall',                          hint:'Above average height' },
    { term:'bajo / baja',          definition:'short',                         hint:'Below average height' },
    { term:'los ojos',             definition:'the eyes',                      hint:'Used for seeing' },
    { term:'el pelo',              definition:'the hair',                      hint:'Grows on your head' },
    { term:'llevarse bien',        definition:'to get on well',               hint:'Having a good relationship' },
  ],

  'Technology': [
    { term:'el móvil',             definition:'the mobile phone',             hint:'Portable phone' },
    { term:'el ordenador',         definition:'the computer',                 hint:'Electronic work device' },
    { term:'el teclado',           definition:'the keyboard',                 hint:'Used to type' },
    { term:'internet',             definition:'the internet',                 hint:'Global network' },
    { term:'la página web',        definition:'the website',                  hint:'Online page' },
    { term:'enviar',               definition:'to send',                      hint:'Dispatching a message' },
    { term:'descargar',            definition:'to download',                  hint:'Getting files from internet' },
    { term:'las redes sociales',   definition:'social networks',             hint:'Facebook, Instagram etc.' },
    { term:'comunicarse',          definition:'to communicate',              hint:'Sharing information' },
    { term:'útil',                 definition:'useful',                       hint:'Has practical value' },
    { term:'práctico / práctica',  definition:'practical',                   hint:'Easy to use' },
  ],

  'Free Time': [
    { term:'ver la televisión',    definition:'to watch TV',                 hint:'Television viewing' },
    { term:'escuchar música',      definition:'to listen to music',         hint:'Enjoying songs' },
    { term:'jugar al fútbol',      definition:'to play football',           hint:'Kicking a ball' },
    { term:'leer',                 definition:'to read',                    hint:'Books and magazines' },
    { term:'salir',                definition:'to go out',                  hint:'Leaving the house' },
    { term:'el cine',              definition:'the cinema',                 hint:'Watching films' },
    { term:'el deporte',           definition:'sport',                      hint:'Physical activity' },
    { term:'la música',            definition:'music',                      hint:'Songs and instruments' },
    { term:'nadar',                definition:'to swim',                    hint:'Moving through water' },
    { term:'montar en bici',       definition:'to cycle',                   hint:'Riding a bike' },
    { term:'el concierto',         definition:'the concert',               hint:'Live music performance' },
    { term:'el partido',           definition:'the match / game',          hint:'Competitive sporting event' },
    { term:'gratis',               definition:'free (no charge)',           hint:'No cost required' },
    { term:'caro / cara',          definition:'expensive',                  hint:'Costs a lot' },
  ],

  'Home and Town': [
    { term:'la casa',              definition:'the house',                  hint:'A home building' },
    { term:'el piso',              definition:'the flat / apartment',      hint:'Home in a block' },
    { term:'el dormitorio',        definition:'the bedroom',               hint:'Room for sleeping' },
    { term:'la cocina',            definition:'the kitchen',               hint:'Room for cooking' },
    { term:'el cuarto de baño',    definition:'the bathroom',              hint:'Room for washing' },
    { term:'el salón',             definition:'the living room',           hint:'Room for relaxing' },
    { term:'el jardín',            definition:'the garden',                hint:'Outdoor growing space' },
    { term:'en la ciudad',         definition:'in the city / town',       hint:'Urban location' },
    { term:'en el campo',          definition:'in the countryside',       hint:'Rural location' },
    { term:'en la costa',          definition:'on the coast',             hint:'Near the sea' },
    { term:'la panadería',         definition:'the bakery',               hint:'Sells bread' },
    { term:'la farmacia',          definition:'the pharmacy',             hint:'Sells medicine' },
    { term:'la estación de tren',  definition:'the train station',       hint:'Where trains stop' },
    { term:'el banco',             definition:'the bank',                 hint:'Financial institution' },
  ],

  'School and Work': [
    { term:'el colegio',           definition:'the school',               hint:'Place of learning' },
    { term:'la asignatura',        definition:'the (school) subject',    hint:'What you study' },
    { term:'las matemáticas',      definition:'maths',                   hint:'Numbers and equations' },
    { term:'el español',           definition:'Spanish',                 hint:'The language of Spain' },
    { term:'las ciencias',         definition:'science(s)',              hint:'Biology, chemistry, physics' },
    { term:'la historia',          definition:'history',                 hint:'Study of the past' },
    { term:'la geografía',         definition:'geography',              hint:'Study of the world' },
    { term:'la clase',             definition:'the lesson / class',     hint:'A class at school' },
    { term:'los deberes',          definition:'homework',               hint:'Work done at home' },
    { term:'el profesor / la profesora', definition:'the teacher (m/f)', hint:'Person who teaches' },
    { term:'el trabajo',           definition:'work',                   hint:'Employment' },
    { term:'la profesión',         definition:'the job / profession',  hint:'Type of work' },
    { term:'el sueldo',            definition:'the salary',             hint:'Monthly pay' },
    { term:'trabajar',             definition:'to work',                hint:'Being employed' },
  ],

  'Health and Environment': [
    { term:'la salud',             definition:'health',                 hint:'State of being well' },
    { term:'enfermo / enferma',    definition:'ill, sick',             hint:'Not feeling well' },
    { term:'el médico / la médica', definition:'the doctor',          hint:'Medical professional' },
    { term:'el hospital',          definition:'the hospital',         hint:'Medical treatment building' },
    { term:'sentirse bien',        definition:'to feel well',         hint:'Feeling healthy' },
    { term:'comer sano',           definition:'to eat healthily',    hint:'Good food choices' },
    { term:'hacer deporte',        definition:'to do sport',          hint:'Physical exercise' },
    { term:'el medio ambiente',    definition:'the environment',     hint:'The natural world' },
    { term:'el reciclaje',         definition:'recycling',           hint:'Reusing materials' },
    { term:'la contaminación',     definition:'pollution',           hint:'Contamination of environment' },
    { term:'el calentamiento global', definition:'global warming',  hint:'Earth\'s temperature rising' },
    { term:'ahorrar',              definition:'to save / economise', hint:'Using less' },
    { term:'proteger',             definition:'to protect',          hint:'Keeping something safe' },
  ],

};

// ────────────────────────────────────────────────────────────
// ART AND DESIGN — GCSE (general / AQA 8201)
// ────────────────────────────────────────────────────────────
VOCAB['art'] = VOCAB['art'] || {};
VOCAB['art']['aqa-gcse'] = {

  'Elements of Art': [
    { term:'Line',                 definition:'A mark made on a surface that can vary in length, width, direction and tone.',                    hint:'Basic mark — can be thick or thin' },
    { term:'Shape',                definition:'A flat, enclosed area defined by lines or colour — can be geometric or organic.',               hint:'Flat enclosed area' },
    { term:'Form',                 definition:'A three-dimensional shape with height, width and depth.',                                       hint:'3D shape with depth' },
    { term:'Tone',                 definition:'The lightness or darkness of a colour or surface.',                                             hint:'Light or dark values' },
    { term:'Colour',               definition:'The visual property produced by different wavelengths of light — hue, saturation and value.',  hint:'Hue and saturation of light' },
    { term:'Texture',              definition:'The surface quality of an artwork — actual or implied roughness, smoothness, etc.',            hint:'Surface feel — rough or smooth' },
    { term:'Pattern',              definition:'The repetition of shapes, lines or colours in a design.',                                      hint:'Repeated elements' },
    { term:'Space',                definition:'The area within, around, between or behind objects in a composition.',                         hint:'Area around or between objects' },
    { term:'Composition',          definition:'The arrangement of visual elements within an artwork.',                                        hint:'How elements are arranged' },
    { term:'Perspective',          definition:'A technique for representing three-dimensional space on a flat surface.',                      hint:'Showing 3D on a flat surface' },
  ],

  'Colour Theory': [
    { term:'Primary colours',      definition:'Colours that cannot be mixed from other colours: red, yellow and blue.',                       hint:'Cannot be mixed — red, yellow, blue' },
    { term:'Secondary colours',    definition:'Colours made by mixing two primary colours: orange, green and purple.',                       hint:'Mixed from two primaries' },
    { term:'Complementary colours', definition:'Colours opposite each other on the colour wheel that create strong contrast when placed together.', hint:'Opposite on colour wheel' },
    { term:'Warm colours',         definition:'Colours associated with warmth — reds, oranges and yellows.',                                hint:'Reds, oranges, yellows' },
    { term:'Cool colours',         definition:'Colours associated with coldness — blues, greens and purples.',                             hint:'Blues, greens, purples' },
    { term:'Hue',                  definition:'The pure colour itself — what we commonly call colour, e.g. red or blue.',                  hint:'Pure colour name' },
    { term:'Saturation',           definition:'The intensity or purity of a colour — how vivid or dull it is.',                           hint:'How vivid or dull a colour is' },
    { term:'Tint',                 definition:'A colour mixed with white, making it lighter.',                                             hint:'Colour + white' },
    { term:'Shade',                definition:'A colour mixed with black, making it darker.',                                             hint:'Colour + black' },
    { term:'Monochromatic',        definition:'Using only one colour and its tints and shades in an artwork.',                            hint:'One colour — different tones' },
  ],

  'Processes and Materials': [
    { term:'Printmaking',          definition:'Creating artworks by transferring ink from a prepared surface onto paper or fabric.',       hint:'Transferring ink from a surface' },
    { term:'Etching',              definition:'A printmaking technique where acid is used to bite into a metal plate to create lines.',   hint:'Acid on metal — printmaking' },
    { term:'Collage',              definition:'An artwork made by assembling different materials such as paper and photographs.',         hint:'Assembled from different materials' },
    { term:'Mixed media',          definition:'Artwork using more than one type of material or medium.',                                 hint:'More than one type of material' },
    { term:'Relief',               definition:'Sculpted elements that project from a flat background.',                                  hint:'3D elements on a flat surface' },
    { term:'Installation',         definition:'Art created in a specific space, often using multiple objects or materials.',            hint:'Art made for a specific space' },
    { term:'Ceramics',             definition:'Art made from clay and hardened by firing at high temperatures.',                        hint:'Clay fired at high temperature' },
    { term:'Rendering',            definition:'Drawing or painting in detail to create a realistic representation.',                   hint:'Detailed realistic drawing' },
  ],

  'Art History and Analysis': [
    { term:'Impressionism',        definition:'A 19th-century art movement focused on capturing light and everyday scenes with loose brushwork.', hint:'19th c. — light and loose brushwork' },
    { term:'Cubism',               definition:'An early 20th-century art movement that showed objects from multiple viewpoints simultaneously.', hint:'Multiple viewpoints at once' },
    { term:'Abstract',             definition:'Art that does not represent recognisable reality — uses shape, colour and line for expression.', hint:'Non-representational — shape and colour' },
    { term:'Figurative',           definition:'Art that represents real or recognisable subjects — people, animals, objects.',        hint:'Represents real subjects' },
    { term:'Symbolism',            definition:'The use of symbols or objects to represent deeper meanings in artwork.',              hint:'Objects represent deeper meaning' },
    { term:'Foreground',           definition:'The part of an artwork or scene that appears closest to the viewer.',                 hint:'Closest to the viewer' },
    { term:'Background',           definition:'The part of an artwork or scene that appears furthest from the viewer.',            hint:'Furthest from the viewer' },
    { term:'Still life',           definition:'A genre of artwork depicting inanimate objects, especially food and household items.', hint:'Painting of everyday objects' },
    { term:'Portrait',             definition:'A representation of a person, focusing on the face and expression.',               hint:'Representation of a person\'s face' },
    { term:'Landscape',            definition:'A genre of artwork depicting natural outdoor scenery.',                           hint:'Outdoor natural scenery' },
  ],

};

// ────────────────────────────────────────────────────────────
// MUSIC — GCSE (AQA 8271)
// ────────────────────────────────────────────────────────────
VOCAB['music'] = VOCAB['music'] || {};
VOCAB['music']['aqa-gcse'] = {

  'Musical Elements': [
    { term:'Pitch',                definition:'How high or low a musical note sounds, determined by the frequency of vibration.',              hint:'High or low — frequency of sound' },
    { term:'Rhythm',               definition:'The pattern of long and short sounds and silences in music.',                                   hint:'Pattern of beats and silences' },
    { term:'Tempo',                definition:'The speed of the beat in music — measured in beats per minute (BPM).',                         hint:'Speed of the music' },
    { term:'Dynamics',             definition:'The variation in loudness and softness in a piece of music.',                                  hint:'Loud and soft variations' },
    { term:'Timbre',               definition:'The characteristic tone quality or "colour" of a sound that distinguishes different instruments.', hint:'Tone colour — what makes a sound unique' },
    { term:'Texture',              definition:'The way different layers of sound are combined in music — e.g. monophonic, homophonic, polyphonic.', hint:'How musical layers are combined' },
    { term:'Structure',            definition:'The way a piece of music is organised and put together — e.g. verse/chorus, rondo, binary.',   hint:'How music is organised' },
    { term:'Harmony',              definition:'Two or more notes sounded simultaneously to create chords.',                                   hint:'Notes sounding together — chords' },
    { term:'Melody',               definition:'A sequence of single notes that forms a recognisable musical idea.',                          hint:'A tune — single notes in sequence' },
    { term:'Tonality',             definition:'The key or scale upon which a piece of music is based — major or minor.',                     hint:'Major or minor key' },
  ],

  'Musical Vocabulary': [
    { term:'Forte',                definition:'Loud — a dynamic marking in music.',                                                          hint:'Italian for loud' },
    { term:'Piano',                definition:'Soft — a dynamic marking in music.',                                                         hint:'Italian for soft' },
    { term:'Crescendo',            definition:'Gradually getting louder.',                                                                  hint:'Gradually louder' },
    { term:'Diminuendo',           definition:'Gradually getting softer.',                                                                  hint:'Gradually softer' },
    { term:'Allegro',              definition:'A fast tempo marking in music.',                                                             hint:'Italian for fast' },
    { term:'Andante',              definition:'A walking pace tempo marking — moderately slow.',                                           hint:'Italian for walking pace' },
    { term:'Legato',               definition:'Smooth and connected — notes played without breaks.',                                      hint:'Smooth — connected notes' },
    { term:'Staccato',             definition:'Short and detached — each note cut short.',                                               hint:'Short and detached notes' },
    { term:'Syncopation',          definition:'Emphasis placed on normally weak beats, creating an off-beat rhythm.',                    hint:'Emphasis on off-beats' },
    { term:'Ostinato',             definition:'A short musical pattern that is continuously repeated.',                                 hint:'Continuously repeated short pattern' },
    { term:'Modulation',           definition:'The process of changing from one musical key to another within a piece.',               hint:'Changing key within a piece' },
    { term:'Cadence',              definition:'A sequence of chords at the end of a phrase that creates a sense of resolution or pause.', hint:'Chord sequence ending a phrase' },
    { term:'Chord',                definition:'Three or more notes sounded simultaneously.',                                           hint:'Three or more notes at once' },
    { term:'Interval',             definition:'The distance in pitch between two notes.',                                             hint:'Distance between two notes' },
    { term:'Scale',                definition:'A series of notes in ascending or descending order within an octave.',                hint:'Series of notes in order' },
  ],

  'Instruments and Voices': [
    { term:'Strings',              definition:'The family of instruments that produce sound by vibrating strings — e.g. violin, cello.', hint:'Violin, viola, cello, double bass' },
    { term:'Woodwind',             definition:'The family of instruments played by blowing air — e.g. flute, clarinet, oboe.',         hint:'Flute, clarinet, oboe, bassoon' },
    { term:'Brass',                definition:'The family of metal wind instruments — e.g. trumpet, trombone, French horn.',          hint:'Trumpet, trombone, French horn' },
    { term:'Percussion',           definition:'The family of instruments played by hitting or shaking — e.g. drums, xylophone.',     hint:'Hit or shaken — drums, xylophone' },
    { term:'Soprano',              definition:'The highest female voice type.',                                                       hint:'Highest female voice' },
    { term:'Tenor',                definition:'The highest male voice type.',                                                        hint:'Highest male voice' },
    { term:'Bass',                 definition:'The lowest male voice type.',                                                        hint:'Lowest male voice' },
    { term:'Ensemble',             definition:'A group of musicians who perform together.',                                        hint:'Group of musicians performing together' },
    { term:'Orchestra',            definition:'A large ensemble of instruments typically including strings, woodwind, brass and percussion.', hint:'Large instrumental group' },
  ],

  'Music History and Genres': [
    { term:'Baroque',              definition:'Musical period c.1600–1750 characterised by ornate style — e.g. Bach, Handel.',      hint:'1600–1750 — ornate style' },
    { term:'Classical period',     definition:'Musical period c.1750–1820 characterised by clarity and balance — e.g. Mozart, Haydn.', hint:'1750–1820 — clarity and balance' },
    { term:'Romantic period',      definition:'Musical period c.1820–1900 characterised by emotional expression — e.g. Beethoven, Chopin.', hint:'1820–1900 — emotional expression' },
    { term:'Blues',                definition:'A genre originating in African American communities, characterised by the blues scale and call-and-response patterns.', hint:'African American origin — blues scale' },
    { term:'Jazz',                 definition:'A genre characterised by improvisation, syncopation and swing rhythm, originating in early 20th-century America.', hint:'Improvisation — syncopation' },
    { term:'Improvisation',        definition:'Creating music spontaneously without written notation.',                            hint:'Making up music on the spot' },
    { term:'Sonata form',          definition:'A three-section musical structure: exposition, development and recapitulation.',   hint:'Exposition — development — recapitulation' },
  ],

};

// ────────────────────────────────────────────────────────────
// DRAMA — GCSE (AQA 8261)
// ────────────────────────────────────────────────────────────
VOCAB['drama'] = VOCAB['drama'] || {};
VOCAB['drama']['aqa-gcse'] = {

  'Performance Skills': [
    { term:'Vocal skills',         definition:'The use of voice in performance — including volume, pitch, tone, pace and clarity.',         hint:'How you use your voice on stage' },
    { term:'Physical skills',      definition:'The use of the body in performance — including gesture, movement, posture and facial expression.', hint:'How you use your body on stage' },
    { term:'Gesture',              definition:'A movement of the hands, arms or body used to communicate meaning or emotion.',            hint:'Body movement to express meaning' },
    { term:'Facial expression',    definition:'The use of the face to convey character, emotion or reaction.',                           hint:'Face used to show emotion' },
    { term:'Proxemics',            definition:'The use of space between performers on stage to communicate relationships.',              hint:'Space between performers — relationships' },
    { term:'Pace',                 definition:'The speed at which lines are delivered or actions are performed.',                       hint:'Speed of delivery' },
    { term:'Pause',                definition:'A deliberate silence used for emphasis or dramatic effect.',                            hint:'Deliberate silence for effect' },
    { term:'Projection',           definition:'Directing the voice outward so it can be clearly heard by the whole audience.',        hint:'Making voice carry to the audience' },
    { term:'Intonation',           definition:'The rise and fall of the voice in speech to convey meaning.',                         hint:'Rise and fall of voice' },
    { term:'Characterisation',     definition:'The process of creating a believable, convincing character in performance.',          hint:'Creating a convincing character' },
  ],

  'Drama Techniques': [
    { term:'Monologue',            definition:'A long speech delivered by one character, revealing their thoughts or feelings.',        hint:'One person speaking alone' },
    { term:'Soliloquy',            definition:'A speech where a character speaks their innermost thoughts aloud to the audience, as if alone.', hint:'Private thoughts spoken aloud' },
    { term:'Improvisation',        definition:'Creating and performing drama spontaneously without a script.',                        hint:'Unscripted spontaneous performance' },
    { term:'Hot seating',          definition:'A technique where an actor sits in character and answers questions from others.',     hint:'Actor answers questions in character' },
    { term:'Freeze frame',         definition:'A technique where performers hold a still image at a significant moment.',           hint:'Performers hold a still image' },
    { term:'Still image',          definition:'A frozen, static picture created by performers to represent a moment or idea.',     hint:'Frozen picture of performers' },
    { term:'Thought tracking',     definition:'A technique where a performer voices a character\'s internal thoughts.',           hint:'Character\'s inner thoughts voiced' },
    { term:'Split stage',          definition:'Dividing the stage to show two separate scenes simultaneously.',                  hint:'Two scenes shown at once' },
    { term:'Narration',            definition:'A technique where a performer speaks directly to the audience to explain the action.', hint:'Performer explains story to audience' },
    { term:'Ensemble',             definition:'A group of performers working together as a team.',                              hint:'Group working collaboratively' },
  ],

  'Theatre and Production': [
    { term:'Staging',              definition:'The arrangement of performance space — including proscenium arch, thrust, in-the-round and traverse.', hint:'How the performance space is arranged' },
    { term:'Proscenium arch',      definition:'A traditional stage with a frame separating the audience from the performance area.',  hint:'Traditional framed stage' },
    { term:'Thrust stage',         definition:'A stage that extends into the audience area, surrounded on three sides.',           hint:'Stage surrounded on three sides' },
    { term:'In the round',         definition:'A performance space where the audience surrounds the stage on all sides.',         hint:'Audience on all sides' },
    { term:'Set design',           definition:'The creation of the physical environment of a performance including scenery and furniture.', hint:'Physical environment of performance' },
    { term:'Lighting',             definition:'The use of light to create atmosphere, focus attention and indicate time and place.', hint:'Used to create atmosphere — focus attention' },
    { term:'Sound design',         definition:'The use of sound effects and music to enhance the atmosphere of a performance.',  hint:'Sound effects and music for atmosphere' },
    { term:'Costume',              definition:'The clothing and accessories worn by performers to communicate character and context.', hint:'Clothing to show character' },
    { term:'Subtext',              definition:'The meaning or feeling beneath the spoken text — what is implied rather than stated.', hint:'Meaning beneath the words' },
    { term:'Genre',                definition:'A category of drama defined by its style — e.g. tragedy, comedy, musical theatre, physical theatre.', hint:'Category of drama — e.g. tragedy, comedy' },
  ],

};

// ────────────────────────────────────────────────────────────
// PE — GCSE (AQA 8582)
// ────────────────────────────────────────────────────────────
VOCAB['pe'] = VOCAB['pe'] || {};
VOCAB['pe']['aqa-gcse'] = {

  'Physical Training': [
    { term:'Cardiovascular endurance', definition:'The ability of the heart and lungs to supply oxygen to working muscles over a prolonged period.', hint:'Heart and lung efficiency over time' },
    { term:'Muscular endurance',   definition:'The ability of a muscle or muscle group to perform repeated contractions without fatigue.',       hint:'Muscles working repeatedly without tiring' },
    { term:'Muscular strength',    definition:'The maximum force a muscle or muscle group can exert in a single contraction.',                  hint:'Maximum force from a muscle' },
    { term:'Flexibility',          definition:'The range of movement possible at a joint.',                                                    hint:'Range of movement at a joint' },
    { term:'Speed',                definition:'The ability to move the body or a limb quickly.',                                              hint:'How fast you can move' },
    { term:'Agility',              definition:'The ability to change direction quickly and accurately while moving at speed.',                hint:'Quick direction changes at speed' },
    { term:'Balance',              definition:'The ability to maintain the body\'s centre of mass over its base of support.',               hint:'Keeping stable and controlled' },
    { term:'Coordination',         definition:'The ability to use two or more body parts together smoothly and efficiently.',              hint:'Using body parts together smoothly' },
    { term:'Reaction time',        definition:'The time taken to respond to a stimulus.',                                                 hint:'Time from stimulus to response' },
    { term:'Power',                definition:'The ability to perform strength movements quickly — a combination of speed and strength.',  hint:'Speed + strength combined' },
  ],

  'Training Principles': [
    { term:'Overload',             definition:'Training harder than normal to cause the body to adapt and improve.',                       hint:'Training harder than normal' },
    { term:'Progression',         definition:'Gradually increasing the amount of training to continue improving.',                        hint:'Gradually increasing training' },
    { term:'Specificity',         definition:'Training that is relevant and appropriate to the demands of the sport or activity.',        hint:'Training matched to the sport' },
    { term:'Reversibility',       definition:'Fitness gains are lost when training stops — "use it or lose it".',                       hint:'Fitness lost when training stops' },
    { term:'Rest and recovery',   definition:'Time given for the body to repair and adapt after training.',                             hint:'Time for body to repair after training' },
    { term:'FITT principle',      definition:'Frequency, Intensity, Time and Type — the variables of training that can be adjusted.',   hint:'Frequency, Intensity, Time, Type' },
    { term:'Aerobic exercise',    definition:'Exercise using oxygen to produce energy — sustained, moderate-intensity activity.',       hint:'With oxygen — sustained activity' },
    { term:'Anaerobic exercise',  definition:'High-intensity exercise without sufficient oxygen — produces lactic acid.',             hint:'Without oxygen — short bursts' },
    { term:'Circuit training',    definition:'A series of exercises performed at different stations with little rest between them.',  hint:'Stations of exercises in sequence' },
    { term:'Interval training',   definition:'Training with alternating periods of high-intensity work and rest or recovery.',       hint:'High intensity then rest — repeated' },
  ],

  'Anatomy and Physiology': [
    { term:'Heart rate',           definition:'The number of times the heart beats per minute.',                                    hint:'Beats per minute' },
    { term:'Stroke volume',        definition:'The volume of blood pumped out of the heart per beat.',                            hint:'Blood per heartbeat' },
    { term:'Cardiac output',       definition:'The total volume of blood pumped by the heart per minute — heart rate × stroke volume.', hint:'Heart rate × stroke volume' },
    { term:'Oxygen uptake',        definition:'The amount of oxygen the body consumes during exercise.',                         hint:'Oxygen used during exercise' },
    { term:'Lactic acid',          definition:'A by-product of anaerobic respiration that causes muscle fatigue.',              hint:'Anaerobic by-product — causes fatigue' },
    { term:'Lever system',         definition:'The bones, joints and muscles working together to produce movement.',           hint:'Bones and muscles producing movement' },
    { term:'Antagonistic muscles', definition:'Pairs of muscles that work in opposition — one contracts while the other relaxes.', hint:'Muscle pairs that work in opposition' },
    { term:'Synovial joint',       definition:'A freely movable joint lubricated by synovial fluid — e.g. the knee or shoulder.', hint:'Freely movable joint — e.g. knee' },
    { term:'Tidal volume',         definition:'The amount of air inhaled or exhaled in one breath.',                          hint:'Air in one breath' },
    { term:'Breathing rate',       definition:'The number of breaths taken per minute.',                                     hint:'Breaths per minute' },
  ],

  'Sport Psychology': [
    { term:'Motivation',           definition:'The drive and determination to achieve a goal.',                               hint:'Drive to achieve' },
    { term:'Arousal',              definition:'A state of alertness and readiness — affects performance positively or negatively.', hint:'State of alertness — affects performance' },
    { term:'Anxiety',              definition:'A negative emotional state associated with worry or apprehension before performance.', hint:'Worry before performance' },
    { term:'Self-confidence',      definition:'Belief in one\'s own ability to succeed.',                                  hint:'Belief in your own ability' },
    { term:'Goal setting',         definition:'Setting specific, measurable targets to improve performance.',             hint:'Setting targets to improve' },
    { term:'Intrinsic motivation', definition:'Motivation that comes from within — personal satisfaction and enjoyment.', hint:'Internal drive — personal satisfaction' },
    { term:'Extrinsic motivation', definition:'Motivation that comes from external rewards — trophies, money or praise.', hint:'External drive — rewards' },
  ],

};

// ────────────────────────────────────────────────────────────
// ASTRONOMY — GCSE (OCR J190 / generic)
// ────────────────────────────────────────────────────────────
VOCAB['astronomy'] = VOCAB['astronomy'] || {};
VOCAB['astronomy']['aqa-gcse'] = {

  'The Solar System': [
    { term:'Solar system',         definition:'The Sun and all the objects that orbit it, including planets, moons, asteroids and comets.',    hint:'Sun and everything orbiting it' },
    { term:'Planet',               definition:'A large, spherical body that orbits a star and has cleared its orbital path of other objects.', hint:'Large body orbiting a star' },
    { term:'Moon',                 definition:'A natural satellite that orbits a planet.',                                                    hint:'Natural satellite of a planet' },
    { term:'Asteroid',             definition:'A small, rocky body that orbits the Sun, mostly found in the asteroid belt between Mars and Jupiter.', hint:'Small rocky body — asteroid belt' },
    { term:'Comet',                definition:'A small icy body that orbits the Sun and develops a bright tail as it approaches the Sun.',  hint:'Icy body with a tail near the Sun' },
    { term:'Orbit',                definition:'The curved path of one object around another due to gravity.',                               hint:'Curved path due to gravity' },
    { term:'Gravitational field',  definition:'A region in which a mass experiences a force due to gravity.',                             hint:'Region where gravity acts' },
    { term:'Astronomical unit (AU)', definition:'A unit of distance equal to the average distance between the Earth and the Sun — about 150 million km.', hint:'Earth–Sun distance — 150 million km' },
    { term:'Retrograde motion',    definition:'The apparent backward motion of a planet as seen from Earth, caused by differences in orbital speeds.', hint:'Apparent backward movement of planet' },
  ],

  'Stars and Galaxies': [
    { term:'Star',                 definition:'A massive ball of gas held together by gravity that produces energy through nuclear fusion.',  hint:'Ball of gas — nuclear fusion' },
    { term:'Nuclear fusion',       definition:'The process in stars where light nuclei combine to form heavier ones, releasing enormous energy.', hint:'Light nuclei combine — releases energy' },
    { term:'Main sequence',        definition:'The stage in a star\'s life when it fuses hydrogen into helium in its core.',               hint:'Hydrogen fusing stage — most of star\'s life' },
    { term:'Red giant',            definition:'A stage of stellar evolution when a star expands and cools after leaving the main sequence.', hint:'Expanded, cooled star — late life' },
    { term:'White dwarf',          definition:'The remnant core of a low-mass star after it has shed its outer layers.',                  hint:'Core remnant of low-mass star' },
    { term:'Neutron star',         definition:'The extremely dense remnant of a massive star after a supernova explosion.',              hint:'Dense remnant after supernova' },
    { term:'Black hole',           definition:'A region of space with gravity so strong that nothing, not even light, can escape.',      hint:'Escape velocity greater than light speed' },
    { term:'Supernova',            definition:'A catastrophic explosion of a massive star at the end of its life.',                    hint:'Massive star explosion' },
    { term:'Galaxy',               definition:'A large system of stars, gas and dust bound together by gravity.',                     hint:'Billions of stars held by gravity' },
    { term:'Milky Way',            definition:'The spiral galaxy that contains our Solar System.',                                   hint:'Our galaxy' },
    { term:'Light year',           definition:'The distance travelled by light in one year — approximately 9.5 × 10¹⁵ m.',          hint:'Distance light travels in one year' },
    { term:'Parallax',             definition:'The apparent shift in position of a nearby star against distant stars, used to measure stellar distances.', hint:'Apparent star shift — used to measure distance' },
  ],

  'Telescopes and Observation': [
    { term:'Refracting telescope', definition:'A telescope that uses lenses to collect and focus light.',                           hint:'Uses lenses to focus light' },
    { term:'Reflecting telescope', definition:'A telescope that uses mirrors to collect and focus light.',                        hint:'Uses mirrors to focus light' },
    { term:'Electromagnetic spectrum', definition:'The range of all types of electromagnetic radiation, from radio waves to gamma rays.', hint:'All EM radiation — radio to gamma' },
    { term:'Red shift',            definition:'The shift of light from distant galaxies towards longer wavelengths, indicating they are moving away.', hint:'Galaxies moving away — wavelength increases' },
    { term:'Hubble\'s law',        definition:'The observation that galaxies are moving away from us at speeds proportional to their distance.', hint:'Galaxies recede — speed proportional to distance' },
    { term:'Big Bang',             definition:'The prevailing theory that the universe began from an extremely hot, dense state about 13.8 billion years ago.', hint:'Universe began ~13.8 billion years ago' },
    { term:'Cosmic microwave background', definition:'The thermal radiation left over from the Big Bang, detectable as a faint glow throughout the universe.', hint:'Relic radiation from the Big Bang' },
    { term:'Magnitude',            definition:'A measure of the brightness of a star — apparent magnitude is brightness as seen from Earth.', hint:'Measure of star brightness' },
    { term:'Spectrometer',         definition:'An instrument that splits light into its component wavelengths to produce a spectrum.', hint:'Splits light into spectrum' },
    { term:'Spectral lines',       definition:'Dark or bright lines in a spectrum caused by the absorption or emission of light at specific wavelengths.', hint:'Lines in spectrum — identify elements' },
  ],

  'Space Exploration': [
    { term:'Satellite',            definition:'An object that orbits another object — can be natural (moon) or artificial.', hint:'Object orbiting another object' },
    { term:'Geosynchronous orbit', definition:'An orbit in which a satellite takes the same time to orbit Earth as Earth takes to rotate — appears stationary.', hint:'Appears stationary overhead' },
    { term:'Rocket propulsion',    definition:'The force produced by expelling gas backwards, driving a rocket forwards by Newton\'s third law.', hint:'Gas expelled backwards — rocket moves forward' },
    { term:'Space probe',          definition:'An unmanned spacecraft sent to explore the solar system or beyond.', hint:'Unmanned spacecraft for exploration' },
    { term:'Escape velocity',      definition:'The minimum speed needed for an object to escape a planet\'s gravitational field.', hint:'Speed needed to escape gravity' },
    { term:'Weightlessness',       definition:'The sensation experienced in orbit when gravitational force provides the centripetal force — apparent lack of gravity.', hint:'Apparent lack of gravity in orbit' },
    { term:'Exoplanet',            definition:'A planet that orbits a star outside our Solar System.', hint:'Planet around another star' },
  ],

};

// ────────────────────────────────────────────────────────────
// BIOLOGY — Edexcel GCSE (1BI0)
// Topics: 1 Key Concepts, 2 Cells & Control, 3 Genetics,
//         4 Natural Selection, 5 Health & Disease,
//         6 Plant Structures, 7 Animal Coordination,
//         8 Exchange & Transport, 9 Ecosystems
// Source: Edexcel 1BI0 spec + PMT definitions
// ────────────────────────────────────────────────────────────
VOCAB['biology']['edexcel-gcse'] = {

  'Key Concepts in Biology': [
    { term:'Cell',                  definition:'The basic building block of all living organisms.',                                                    hint:'Smallest unit of life' },
    { term:'Cell membrane',         definition:'A partially permeable barrier that surrounds the cell, controlling what enters and exits.',            hint:'Controls entry/exit of substances' },
    { term:'Cell wall',             definition:'An outer layer made of cellulose that strengthens plant cells.',                                       hint:'Cellulose — plant cells only' },
    { term:'Chloroplast',           definition:'An organelle that is the site of photosynthesis.',                                                     hint:'Site of photosynthesis' },
    { term:'Mitochondria',          definition:'An organelle that is the site of respiration.',                                                        hint:'Site of respiration' },
    { term:'Nucleus',               definition:'An organelle in eukaryotic cells that contains the genetic material and controls cell activities.',    hint:'Contains DNA — controls cell' },
    { term:'Ribosome',              definition:'A sub-cellular structure where protein synthesis takes place.',                                        hint:'Makes proteins' },
    { term:'Vacuole',               definition:'An organelle in plant cells that stores cell sap and supports the cell.',                              hint:'Stores cell sap — plant cells' },
    { term:'Plasmid',               definition:'A small loop of DNA found in the cytoplasm of prokaryotic cells.',                                    hint:'Small DNA loop in bacteria' },
    { term:'Eukaryotic cell',       definition:'A cell found in plants and animals that contains a membrane-bound nucleus.',                          hint:'Has a membrane-bound nucleus' },
    { term:'Prokaryotic cell',      definition:'A cell found in bacteria that does not contain a nucleus.',                                           hint:'No nucleus — bacteria' },
    { term:'Enzyme',                definition:'A biological catalyst that increases the rate of reactions in living organisms.',                      hint:'Biological catalyst — protein' },
    { term:'Active site',           definition:'The specific region on an enzyme where the substrate binds and the reaction takes place.',            hint:'Where substrate binds on enzyme' },
    { term:'Denaturation',          definition:'The permanent change in the shape of an enzyme\'s active site caused by high temperature or extreme pH.', hint:'Active site shape destroyed' },
    { term:'Lock and key hypothesis', definition:'The theory that substrates must be the correct complementary shape to fit the active site of an enzyme.', hint:'Substrate must fit active site' },
    { term:'Diffusion',             definition:'The net movement of particles from high concentration to low concentration.',                         hint:'High to low concentration — passive' },
    { term:'Osmosis',               definition:'The diffusion of water molecules from a high water concentration to a lower concentration across a partially permeable membrane.', hint:'Water through semi-permeable membrane' },
    { term:'Active transport',      definition:'The movement of substances against a concentration gradient using energy from respiration.',          hint:'Against gradient — needs energy' },
    { term:'Magnification',         definition:'How many times bigger an image appears compared to the real object.',                                 hint:'Image size ÷ real size' },
    { term:'Resolution',            definition:'The smallest distance between two objects that can be distinguished using a microscope.',             hint:'Clarity of detail under microscope' },
    { term:'Specificity',           definition:'The ability of an enzyme to catalyse only specific reactions in which a substrate fits its active site.', hint:'One enzyme — one substrate type' },
  ],

  'Cells and Control': [
    { term:'Mitosis',               definition:'Cell division producing two genetically identical daughter cells, used for growth and repair.',        hint:'Two identical cells — growth/repair' },
    { term:'Cell cycle',            definition:'A series of events involving cell growth, DNA replication and cell division.',                        hint:'Growth → DNA copy → divide' },
    { term:'Stem cell',             definition:'An undifferentiated cell that can divide and develop into specialised cell types.',                  hint:'Undifferentiated — can become anything' },
    { term:'Differentiation',       definition:'The process by which a cell becomes specialised to carry out a particular function.',               hint:'Cell becomes specialised' },
    { term:'Cancer',                definition:'Uncontrolled cell division resulting in a tumour — caused by mutations in DNA.',                    hint:'Uncontrolled cell division' },
    { term:'Tumour',                definition:'A mass of abnormal cells resulting from uncontrolled cell division.',                              hint:'Mass of abnormally dividing cells' },
    { term:'Neurone',               definition:'A specialised cell that transmits electrical impulses around the body.',                            hint:'Transmits electrical impulses' },
    { term:'Synapse',               definition:'A junction between two neurones where chemical neurotransmitters pass the signal across.',         hint:'Gap between neurones' },
    { term:'Reflex arc',            definition:'The pathway of a nerve impulse from receptor to effector during a reflex action.',                 hint:'Pathway of a reflex — receptor to effector' },
    { term:'Central nervous system', definition:'The brain and spinal cord — processes information and coordinates responses.',                   hint:'Brain and spinal cord' },
  ],

  'Genetics': [
    { term:'DNA',                   definition:'A double-stranded polymer in a double helix that carries the genetic code for an organism.',         hint:'Double helix — genetic code' },
    { term:'Gene',                  definition:'A section of DNA that codes for a specific sequence of amino acids to make a protein.',             hint:'Section of DNA — codes for protein' },
    { term:'Allele',                definition:'A version of a gene.',                                                                              hint:'Version of a gene' },
    { term:'Chromosome',            definition:'A long coiled DNA molecule carrying genetic information in the form of genes.',                    hint:'Coiled DNA — in nucleus' },
    { term:'Genotype',              definition:'The genetic composition of an organism — the alleles it possesses.',                               hint:'Alleles an organism carries' },
    { term:'Phenotype',             definition:'The observable characteristics of an organism, determined by genotype and environment.',           hint:'Observable characteristics' },
    { term:'Dominant',              definition:'An allele that is always expressed in the phenotype when present.',                               hint:'Always expressed — capital letter' },
    { term:'Recessive',             definition:'An allele only expressed when two copies are present (homozygous).',                              hint:'Only expressed when two copies present' },
    { term:'Homozygous',            definition:'Having two identical alleles for a gene.',                                                        hint:'Two same alleles — AA or aa' },
    { term:'Heterozygous',          definition:'Having two different alleles for a gene.',                                                        hint:'Two different alleles — Aa' },
    { term:'Meiosis',               definition:'Cell division producing four genetically different gametes, each with half the chromosome number.', hint:'Produces gametes — halves chromosomes' },
    { term:'Gamete',                definition:'A sex cell (sperm or egg) containing half the normal chromosome number.',                        hint:'Sex cell — half chromosomes' },
    { term:'Mutation',              definition:'A random change in the base sequence of DNA.',                                                   hint:'Random change in DNA' },
    { term:'Punnett square',        definition:'A grid used to predict the possible genotypes and phenotypes of offspring from a genetic cross.', hint:'Genetic cross prediction grid' },
    { term:'Sex chromosomes',       definition:'The pair of chromosomes that determine biological sex — XX in females, XY in males.',          hint:'XX female, XY male' },
  ],

  'Natural Selection and Evolution': [
    { term:'Natural selection',     definition:'The process by which advantageous traits become more frequent in a population over time.',         hint:'Survival of the fittest' },
    { term:'Evolution',             definition:'The gradual change in inherited traits in a population over successive generations.',             hint:'Change in population over time' },
    { term:'Mutation',              definition:'A random change in DNA that may produce new alleles — the source of genetic variation.',         hint:'Source of new variation' },
    { term:'Selective breeding',    definition:'The process where humans choose organisms with desirable traits to breed together.',            hint:'Humans choose traits to breed' },
    { term:'Genetic engineering',   definition:'Modifying an organism\'s genome by inserting a gene from another organism.',                   hint:'Inserting genes from other organisms' },
    { term:'Fossil',                definition:'The preserved remains of organisms found in rock, used as evidence for evolution.',            hint:'Preserved remains in rock' },
    { term:'Classification',        definition:'The organisation of organisms into groups based on shared characteristics.',                   hint:'Grouping organisms by features' },
    { term:'Taxonomy',              definition:'The classification of organisms into kingdom, phylum, class, order, family, genus and species.', hint:'Kingdom to species classification' },
    { term:'Antibiotic resistance', definition:'When bacteria mutate and become resistant to antibiotics, surviving and reproducing rapidly.', hint:'Bacteria survive antibiotics — mutation' },
    { term:'Vector',                definition:'A carrier used to transfer a gene from one organism to another in genetic engineering.',       hint:'Carrier of a gene in genetic engineering' },
    { term:'Recombinant DNA',       definition:'DNA combining sequences from two different organisms.',                                       hint:'DNA from two organisms combined' },
  ],

  'Health, Disease and Medicines': [
    { term:'Pathogen',              definition:'A microorganism that causes disease.',                                                         hint:'Disease-causing microorganism' },
    { term:'Communicable disease',  definition:'A disease that can be passed between individuals through various routes.',                   hint:'Can be passed between people' },
    { term:'Non-communicable disease', definition:'A disease that cannot be passed between individuals — often linked to genetics or lifestyle.', hint:'Cannot be passed between people' },
    { term:'Antibody',              definition:'A protein produced by white blood cells that binds specifically to an antigen on a pathogen.', hint:'Produced by white blood cells — binds antigen' },
    { term:'Antigen',               definition:'A molecule on the surface of a pathogen that triggers an immune response.',                  hint:'Triggers immune response' },
    { term:'Vaccination',           definition:'Introducing dead or inactive pathogens to stimulate the immune system to produce antibodies.', hint:'Trains immune system with harmless pathogen' },
    { term:'Antibiotic',            definition:'A medicine that kills or inhibits bacteria — ineffective against viruses.',                 hint:'Kills bacteria — not viruses' },
    { term:'Monoclonal antibody',   definition:'An antibody produced from a single clone of cells, specific to one antigen.',              hint:'One type — one antigen specific' },
    { term:'Risk factor',           definition:'A variable associated with a greater chance of developing a disease or condition.',        hint:'Increases chance of disease' },
    { term:'Placebo',               definition:'A dummy treatment containing no active ingredient, used as a control in drug trials.',    hint:'Dummy treatment — no active ingredient' },
    { term:'Double blind trial',    definition:'A drug trial where neither patients nor researchers know who receives the drug or placebo.', hint:'Neither side knows who has drug' },
    { term:'Phagocytosis',          definition:'The process by which white blood cells engulf and destroy pathogens.',                    hint:'White blood cells engulf pathogens' },
  ],

  'Plant Structures and Functions': [
    { term:'Photosynthesis',        definition:'An endothermic reaction where light energy converts CO₂ and water into glucose and oxygen in chloroplasts.', hint:'Light + CO₂ + water → glucose + O₂' },
    { term:'Transpiration',         definition:'The evaporation of water from leaves, drawing water up from roots through the xylem.',    hint:'Water evaporates from leaves' },
    { term:'Xylem',                 definition:'A plant tissue that transports water and minerals from roots to leaves.',               hint:'Carries water upwards — roots to leaves' },
    { term:'Phloem',                definition:'A plant tissue that transports dissolved sugars from leaves to other parts of the plant.', hint:'Carries sugar — from leaves' },
    { term:'Stomata',               definition:'Tiny pores on the underside of leaves through which gas exchange and transpiration occur.', hint:'Tiny pores — gas exchange in leaves' },
    { term:'Guard cells',           definition:'Cells that surround stomata and control their opening and closing.',                   hint:'Control stomata opening' },
    { term:'Auxin',                 definition:'A plant hormone that controls cell elongation, responsible for phototropism and gravitropism.', hint:'Plant hormone — cell elongation' },
    { term:'Phototropism',          definition:'The growth of a plant in response to light.',                                         hint:'Plant grows towards light' },
    { term:'Gravitropism',          definition:'The growth of a plant in response to gravity.',                                      hint:'Plant responds to gravity' },
    { term:'Limiting factor',       definition:'A factor that limits the rate of photosynthesis when in short supply — e.g. light, CO₂ or temperature.', hint:'Limits rate of photosynthesis' },
  ],

  'Animal Coordination and Homeostasis': [
    { term:'Homeostasis',           definition:'The regulation of internal conditions to maintain a stable environment for cells.',    hint:'Maintaining internal stability' },
    { term:'Negative feedback',     definition:'A mechanism that reverses a change to restore optimal conditions.',                  hint:'Reverses changes — restores optimum' },
    { term:'Insulin',               definition:'A hormone from the pancreas that lowers blood glucose by stimulating cells to absorb glucose.', hint:'Lowers blood glucose — pancreas' },
    { term:'Glucagon',              definition:'A hormone from the pancreas that raises blood glucose by converting glycogen to glucose.', hint:'Raises blood glucose — pancreas' },
    { term:'Type 1 diabetes',       definition:'A condition where the pancreas fails to produce insulin, requiring insulin injections.', hint:'Pancreas produces no insulin' },
    { term:'Type 2 diabetes',       definition:'A condition where body cells no longer respond to insulin, often linked to obesity.', hint:'Cells resist insulin' },
    { term:'Oestrogen',             definition:'A female reproductive hormone that stimulates the development of secondary sexual characteristics and controls the menstrual cycle.', hint:'Female hormone — reproductive cycle' },
    { term:'Testosterone',          definition:'A male reproductive hormone that stimulates sperm production and development of secondary sexual characteristics.', hint:'Male hormone — sperm production' },
    { term:'Adrenaline',            definition:'A hormone released in response to stress that prepares the body for fight or flight.', hint:'Fight or flight hormone' },
    { term:'Thermoregulation',      definition:'The process by which the body maintains its core temperature.',                    hint:'Maintaining body temperature' },
    { term:'ADH',                   definition:'Antidiuretic hormone — released by the pituitary gland, increases water reabsorption in the kidneys.', hint:'Kidney water reabsorption hormone' },
    { term:'Dialysis',              definition:'An artificial process that filters the blood to remove waste products when the kidneys have failed.', hint:'Artificial kidney filtration' },
  ],

  'Exchange and Transport': [
    { term:'Alveoli',               definition:'Tiny air sacs in the lungs where gas exchange between air and blood takes place.',   hint:'Air sacs in lungs — gas exchange' },
    { term:'Gas exchange',          definition:'The movement of oxygen into the blood and carbon dioxide out, occurring at the alveoli.', hint:'O₂ in, CO₂ out — at alveoli' },
    { term:'Haemoglobin',           definition:'The protein in red blood cells that binds oxygen for transport around the body.',  hint:'Oxygen-carrying protein in red blood cells' },
    { term:'Red blood cell',        definition:'A biconcave cell containing haemoglobin, specialised for carrying oxygen around the body.', hint:'Biconcave — carries oxygen' },
    { term:'White blood cell',      definition:'An immune system cell that defends the body against pathogens.',                 hint:'Immune defence cell' },
    { term:'Plasma',                definition:'The liquid component of blood that transports dissolved substances.',             hint:'Liquid part of blood' },
    { term:'Platelet',              definition:'A cell fragment in blood involved in blood clotting.',                          hint:'Blood clotting cell fragment' },
    { term:'Artery',                definition:'A blood vessel carrying blood at high pressure away from the heart.',           hint:'Away from heart — thick walls' },
    { term:'Vein',                  definition:'A blood vessel carrying blood at low pressure back to the heart, containing valves.', hint:'Towards heart — has valves' },
    { term:'Capillary',             definition:'The smallest blood vessel, one cell thick, where exchange of substances occurs with tissues.', hint:'One cell thick — exchange occurs' },
  ],

  'Ecosystems and Material Cycles': [
    { term:'Ecosystem',             definition:'The community of organisms and the non-living environment with which they interact in a defined area.', hint:'Living + non-living — defined area' },
    { term:'Biodiversity',          definition:'The variety of different species of organisms in an area.',                      hint:'Variety of species' },
    { term:'Food chain',            definition:'A sequence showing the transfer of energy from one organism to the next.',      hint:'Energy transfer — producer to consumer' },
    { term:'Food web',              definition:'An interconnected network of food chains in an ecosystem.',                   hint:'Network of food chains' },
    { term:'Producer',              definition:'An organism that makes its own food through photosynthesis.',                hint:'Makes own food — photosynthesis' },
    { term:'Consumer',              definition:'An organism that obtains energy by eating other organisms.',                 hint:'Eats other organisms' },
    { term:'Decomposer',            definition:'An organism such as a bacterium or fungus that breaks down dead organic material.', hint:'Breaks down dead material' },
    { term:'Carbon cycle',          definition:'The cycling of carbon through living organisms and the non-living environment via photosynthesis, respiration and decomposition.', hint:'Carbon recycled through ecosystem' },
    { term:'Nitrogen cycle',        definition:'The cycling of nitrogen compounds through the environment, involving bacteria that fix, nitrify and denitrify nitrogen.', hint:'Nitrogen recycled — bacteria involved' },
    { term:'Deforestation',         definition:'The large-scale removal of forests, reducing biodiversity and increasing atmospheric CO₂.',  hint:'Forest removal — CO₂ increases' },
    { term:'Global warming',        definition:'The increase in average global temperature caused by rising greenhouse gas levels.',         hint:'Rising global temperature' },
    { term:'Biomass',               definition:'The total mass of living organisms in a given area or trophic level.',                      hint:'Total mass of living things' },
    { term:'Trophic level',         definition:'A feeding level in a food chain or food web.',                                             hint:'Feeding position in food chain' },
    { term:'Sampling',              definition:'A method of estimating population size or species distribution by studying a representative portion.', hint:'Estimating population from a portion' },
    { term:'Quadrat',               definition:'A square frame used to sample organisms in a given area.',                               hint:'Square frame for counting organisms' },
  ],

};

// ────────────────────────────────────────────────────────────
// CHEMISTRY — Edexcel GCSE (1CH0)
// Topics: 1 States of Matter, 2 Methods of Separating,
//         3 Atomic Structure, 4 Periodic Table,
//         5 Ionic Bonding, 6 Covalent Bonding,
//         7 Metals/Alloys, 8 Acids/Alkalis,
//         9 Calculations, 10 Electrolysis,
//         11 Obtaining Metals, 12 Reversible Reactions,
//         13 Hydrocarbons, 14 Earth & Atmosphere
// ────────────────────────────────────────────────────────────
VOCAB['chemistry']['edexcel-gcse'] = {

  'Atomic Structure and Periodic Table': [
    { term:'Atom',                  definition:'The smallest particle of an element that can take part in a chemical reaction.',                  hint:'Smallest part of an element' },
    { term:'Element',               definition:'A substance made of only one type of atom.',                                                    hint:'One type of atom only' },
    { term:'Compound',              definition:'A substance made of two or more elements chemically combined in fixed proportions.',            hint:'Elements chemically joined' },
    { term:'Mixture',               definition:'Two or more substances not chemically combined — can be separated by physical means.',         hint:'Not chemically combined — separable' },
    { term:'Proton',                definition:'A positively charged subatomic particle in the nucleus with relative mass 1.',                hint:'Positive — in nucleus — mass 1' },
    { term:'Neutron',               definition:'A neutral subatomic particle in the nucleus with relative mass 1.',                          hint:'Neutral — in nucleus — mass 1' },
    { term:'Electron',              definition:'A negatively charged subatomic particle orbiting the nucleus with negligible mass.',         hint:'Negative — orbits nucleus' },
    { term:'Atomic number',         definition:'The number of protons in the nucleus of an atom — unique to each element.',                hint:'Number of protons — unique per element' },
    { term:'Mass number',           definition:'The total number of protons and neutrons in the nucleus of an atom.',                      hint:'Protons + neutrons' },
    { term:'Isotope',               definition:'Atoms of the same element with the same number of protons but different numbers of neutrons.', hint:'Same element — different neutrons' },
    { term:'Relative atomic mass',  definition:'The weighted average mass of an atom of an element compared to 1/12 the mass of carbon-12.',  hint:'Average mass accounting for isotopes' },
    { term:'Electronic configuration', definition:'The arrangement of electrons in an atom\'s shells or energy levels.',                   hint:'How electrons are arranged in shells' },
    { term:'Period',                definition:'A horizontal row of elements in the periodic table — elements in the same period have the same number of electron shells.', hint:'Horizontal row — same number of shells' },
    { term:'Group',                 definition:'A vertical column in the periodic table — elements in the same group have similar properties.', hint:'Vertical column — similar properties' },
    { term:'Noble gas',             definition:'An element in Group 0 — unreactive due to a full outer electron shell.',                  hint:'Group 0 — full outer shell — unreactive' },
    { term:'Transition metal',      definition:'A metal in the central block of the periodic table — good conductors with variable oxidation states.', hint:'Central block — variable oxidation states' },
  ],

  'Bonding and Structure': [
    { term:'Ionic bond',            definition:'A bond formed when a metal atom transfers electrons to a non-metal, creating oppositely charged ions.', hint:'Electron transfer — metal to non-metal' },
    { term:'Covalent bond',         definition:'A shared pair of electrons between two non-metal atoms.',                                 hint:'Shared electrons — non-metals' },
    { term:'Metallic bond',         definition:'The attraction between positive metal ions and a sea of delocalised electrons.',         hint:'Positive ions + delocalised electrons' },
    { term:'Ionic lattice',         definition:'A regular three-dimensional arrangement of oppositely charged ions held together by electrostatic forces.', hint:'Regular arrangement of opposite ions' },
    { term:'Molecular formula',     definition:'The actual number and type of atoms present in a molecule.',                           hint:'Exact atoms in a molecule' },
    { term:'Empirical formula',     definition:'The simplest whole number ratio of atoms in a compound.',                            hint:'Simplest ratio of atoms' },
    { term:'Diamond',               definition:'A giant covalent structure of carbon where each atom bonds to four others — very hard and high melting point.', hint:'Giant covalent carbon — very hard' },
    { term:'Graphite',              definition:'A giant covalent structure of carbon with layered hexagonal sheets — conducts electricity.',  hint:'Carbon layers — conducts electricity' },
    { term:'Polymer',               definition:'A large molecule made of many small monomer units joined by covalent bonds.',          hint:'Long chain of monomers' },
    { term:'Nanoparticle',          definition:'A particle 1–100 nm in size with different properties to the bulk material.',         hint:'1–100 nm — tiny particle' },
    { term:'Alloy',                 definition:'A mixture of a metal with one or more other elements to improve its properties.',    hint:'Metal mixture — improved properties' },
  ],

  'Quantitative Chemistry': [
    { term:'Conservation of mass',  definition:'The total mass of reactants equals the total mass of products in a chemical reaction.',   hint:'Mass unchanged in reaction' },
    { term:'Relative formula mass', definition:'The sum of the relative atomic masses of all atoms in a formula.',                       hint:'Sum of all atomic masses in formula' },
    { term:'Mole',                  definition:'The unit of amount of substance — 1 mole contains 6.02 × 10²³ particles.',              hint:'Unit of amount — 6.02 × 10²³ particles' },
    { term:'Concentration',         definition:'The amount of solute dissolved per unit volume of solution.',                           hint:'Amount per unit volume' },
    { term:'Limiting reactant',     definition:'The reactant used up first in a reaction, determining the maximum yield of product.',   hint:'Runs out first — limits product' },
    { term:'Percentage yield',      definition:'The actual yield as a percentage of the theoretical yield.',                           hint:'Actual ÷ theoretical × 100' },
    { term:'Atom economy',          definition:'The percentage of reactant atoms that are converted into useful product.',            hint:'Useful product ÷ all products × 100' },
  ],

  'Chemical Changes': [
    { term:'Acid',                  definition:'A substance that produces hydrogen ions (H⁺) in aqueous solution — pH below 7.',        hint:'pH below 7 — H⁺ ions' },
    { term:'Alkali',                definition:'A soluble base producing hydroxide ions (OH⁻) in aqueous solution — pH above 7.',     hint:'pH above 7 — OH⁻ ions' },
    { term:'Neutralisation',        definition:'The reaction of an acid with a base producing a salt and water.',                    hint:'Acid + base → salt + water' },
    { term:'Oxidation',             definition:'The loss of electrons or gain of oxygen.',                                           hint:'Lose electrons or gain oxygen' },
    { term:'Reduction',             definition:'The gain of electrons or loss of oxygen.',                                          hint:'Gain electrons or lose oxygen' },
    { term:'Electrolysis',          definition:'Decomposing an ionic compound using electrical energy.',                           hint:'Electricity decomposes ionic compound' },
    { term:'Electrolyte',           definition:'A molten or dissolved ionic compound that conducts electricity.',                 hint:'Conducts electricity — ionic compound' },
    { term:'Cathode',               definition:'The negative electrode in electrolysis — where reduction occurs.',               hint:'Negative electrode — reduction' },
    { term:'Anode',                 definition:'The positive electrode in electrolysis — where oxidation occurs.',              hint:'Positive electrode — oxidation' },
    { term:'Reactivity series',     definition:'Metals arranged in order of reactivity — used to predict displacement reactions.',  hint:'Metals in order of reactivity' },
    { term:'Redox reaction',        definition:'A reaction involving simultaneous oxidation and reduction.',                    hint:'Oxidation + reduction occur together' },
    { term:'Titration',             definition:'A technique using a known-concentration solution to determine the concentration of an unknown solution.', hint:'Find unknown concentration' },
  ],

  'Energy Changes and Rates': [
    { term:'Exothermic reaction',   definition:'A reaction that releases energy to the surroundings — temperature increases.',       hint:'Releases heat — temperature rises' },
    { term:'Endothermic reaction',  definition:'A reaction that absorbs energy from the surroundings — temperature decreases.',    hint:'Absorbs heat — temperature drops' },
    { term:'Activation energy',     definition:'The minimum energy required for a reaction to occur.',                           hint:'Minimum energy to start reaction' },
    { term:'Catalyst',              definition:'A substance that increases the rate of a reaction without being used up.',       hint:'Speeds up reaction — not used up' },
    { term:'Rate of reaction',      definition:'How quickly reactants are converted to products per unit time.',                hint:'Speed of reaction' },
    { term:'Collision theory',      definition:'Reactions occur when particles collide with sufficient energy.',               hint:'Particles must collide with enough energy' },
    { term:'Reversible reaction',   definition:'A reaction where products can react to re-form reactants.',                   hint:'Can go forwards and backwards' },
    { term:'Equilibrium',           definition:'The state in a closed system when the forward and reverse reactions occur at equal rates.', hint:'Forward = reverse rate' },
  ],

  'Organic Chemistry': [
    { term:'Hydrocarbon',           definition:'A compound containing only hydrogen and carbon atoms.',                         hint:'Only H and C atoms' },
    { term:'Crude oil',             definition:'A mixture of hydrocarbons formed from the remains of ancient marine organisms.', hint:'Ancient marine organisms — hydrocarbons' },
    { term:'Alkane',                definition:'A saturated hydrocarbon with general formula CₙH₂ₙ₊₂.',                      hint:'Saturated — CₙH₂ₙ₊₂' },
    { term:'Alkene',                definition:'An unsaturated hydrocarbon with a C=C double bond and general formula CₙH₂ₙ.', hint:'Double bond — CₙH₂ₙ' },
    { term:'Fractional distillation', definition:'Separating crude oil into fractions based on different boiling points.',   hint:'Separates crude oil by boiling point' },
    { term:'Cracking',              definition:'Breaking large hydrocarbons into smaller, more useful molecules by heating.', hint:'Breaks large hydrocarbons into smaller' },
    { term:'Combustion',            definition:'The reaction of a fuel with oxygen to release energy.',                    hint:'Fuel + oxygen → energy' },
    { term:'Polymer',               definition:'A long-chain molecule made of many monomer units joined by covalent bonds.', hint:'Long chain of monomers' },
    { term:'Monomer',               definition:'A small molecule that can join with others to form a polymer.',           hint:'Small molecule — building block of polymer' },
  ],

  'Earth and Atmosphere': [
    { term:'Greenhouse effect',     definition:'Greenhouse gases in the atmosphere trap infrared radiation, warming the Earth.',  hint:'Gases trap heat — warm Earth' },
    { term:'Greenhouse gas',        definition:'A gas such as CO₂, methane or water vapour that absorbs and re-emits infrared radiation.',   hint:'Absorbs infrared — CO₂, methane' },
    { term:'Carbon footprint',      definition:'The total amount of CO₂ and other greenhouse gases produced by a product or activity.',       hint:'Total greenhouse gases produced' },
    { term:'Acid rain',             definition:'Rain made acidic by dissolved sulfur dioxide and nitrogen oxides from burning fossil fuels.',  hint:'Acidic rain from SO₂ and NOₓ' },
    { term:'Potable water',         definition:'Water that is safe to drink — has been treated to remove harmful substances.',                hint:'Safe drinking water' },
    { term:'Life cycle assessment', definition:'An analysis of the environmental impact of a product throughout its entire life.',           hint:'Environmental impact — whole life of product' },
  ],

};

// ────────────────────────────────────────────────────────────
// PHYSICS — Edexcel GCSE (1PH0)
// Topics follow Edexcel 1PH0 specification
// ────────────────────────────────────────────────────────────
VOCAB['physics']['edexcel-gcse'] = {

  'Motion and Forces': [
    { term:'Speed',                 definition:'The distance travelled per unit time — a scalar quantity.',                               hint:'Distance ÷ time — no direction' },
    { term:'Velocity',              definition:'Speed in a given direction — a vector quantity.',                                        hint:'Speed + direction — vector' },
    { term:'Acceleration',          definition:'The rate of change of velocity.',                                                       hint:'Change in velocity ÷ time' },
    { term:'Scalar quantity',       definition:'A quantity with magnitude only, no direction.',                                        hint:'Magnitude only — e.g. speed, mass' },
    { term:'Vector quantity',       definition:'A quantity with both magnitude and direction.',                                       hint:'Magnitude + direction — e.g. force' },
    { term:'Resultant force',       definition:'The single force equivalent to all forces acting on an object combined.',             hint:'Net force — all forces combined' },
    { term:'Newton\'s first law',   definition:'An object remains stationary or moves at constant velocity unless a resultant force acts.',  hint:'No resultant force → no change in motion' },
    { term:'Newton\'s second law',  definition:'Resultant force equals mass times acceleration (F = ma).',                           hint:'F = ma' },
    { term:'Newton\'s third law',   definition:'Every action force has an equal and opposite reaction force.',                      hint:'Equal and opposite forces' },
    { term:'Momentum',              definition:'The product of mass and velocity — measured in kg m/s.',                           hint:'Mass × velocity' },
    { term:'Stopping distance',     definition:'Thinking distance plus braking distance — total distance to stop.',              hint:'Thinking + braking distance' },
    { term:'Weight',                definition:'The gravitational force acting on an object — mass × gravitational field strength.', hint:'Gravitational force — mass × g' },
    { term:'Friction',              definition:'A force that opposes the motion of objects in contact.',                        hint:'Opposes motion — opposing force' },
    { term:'Terminal velocity',     definition:'The constant maximum velocity reached when drag equals driving force.',        hint:'Drag = driving force — constant speed' },
  ],

  'Energy': [
    { term:'Energy',                definition:'The capacity to do work — measured in joules.',                                  hint:'Capacity to do work — joules' },
    { term:'Kinetic energy',        definition:'The energy a moving object possesses — ½mv².',                                 hint:'Energy of motion — ½mv²' },
    { term:'Gravitational potential energy', definition:'The energy of an object due to its height — mgh.',                  hint:'Energy due to height — mgh' },
    { term:'Elastic potential energy', definition:'Energy stored in a stretched or compressed spring or elastic object.',    hint:'Energy in stretched/compressed object' },
    { term:'Conservation of energy', definition:'Energy cannot be created or destroyed, only transferred or transformed.',  hint:'Energy cannot be created or destroyed' },
    { term:'Work done',             definition:'Energy transferred when a force causes movement — force × distance.',       hint:'Force × distance' },
    { term:'Power',                 definition:'The rate of energy transfer or work done — measured in watts.',            hint:'Energy ÷ time — watts' },
    { term:'Efficiency',            definition:'The ratio of useful energy output to total energy input.',               hint:'Useful output ÷ total input' },
    { term:'Specific heat capacity', definition:'The energy needed to raise 1 kg of a substance by 1°C.',              hint:'Energy per kg per °C' },
    { term:'Watt',                  definition:'The unit of power — one joule per second.',                            hint:'Unit of power — J/s' },
  ],

  'Waves': [
    { term:'Wave',                  definition:'A disturbance that transfers energy from one place to another without transferring matter.',  hint:'Transfers energy — not matter' },
    { term:'Amplitude',             definition:'The maximum displacement of a wave from its equilibrium position.',              hint:'Maximum displacement from equilibrium' },
    { term:'Wavelength',            definition:'The distance between two successive points in phase on a wave.',               hint:'Peak to peak distance' },
    { term:'Frequency',             definition:'The number of complete waves passing a point per second.',                    hint:'Waves per second — hertz' },
    { term:'Wave speed',            definition:'The speed of wave propagation — frequency × wavelength.',                   hint:'Frequency × wavelength' },
    { term:'Transverse wave',       definition:'A wave where oscillations are perpendicular to the direction of travel.',   hint:'Oscillations perpendicular to travel' },
    { term:'Longitudinal wave',     definition:'A wave where oscillations are parallel to the direction of travel.',       hint:'Oscillations parallel to travel' },
    { term:'Reflection',            definition:'When a wave bounces back from a surface.',                                hint:'Bounces back from surface' },
    { term:'Refraction',            definition:'The change of direction of a wave when it passes from one medium to another.', hint:'Changes direction at boundary' },
    { term:'Electromagnetic spectrum', definition:'The family of transverse waves from radio waves to gamma rays, all travelling at 3 × 10⁸ m/s in a vacuum.', hint:'All EM waves — radio to gamma' },
    { term:'Total internal reflection', definition:'When a wave travelling in a denser medium strikes the boundary at or above the critical angle and is totally reflected.', hint:'Total reflection inside dense medium' },
  ],

  'Electricity and Magnetism': [
    { term:'Current',               definition:'The flow of charge — measured in amperes.',                               hint:'Flow of charge — amperes' },
    { term:'Potential difference',  definition:'The energy transferred per unit charge between two points.',           hint:'Energy per unit charge — volts' },
    { term:'Resistance',            definition:'The opposition to the flow of current — measured in ohms.',            hint:'Opposition to current — ohms' },
    { term:'Ohm\'s law',            definition:'Current is directly proportional to potential difference at constant temperature — V = IR.', hint:'V = IR' },
    { term:'Series circuit',        definition:'A circuit where components are connected in a single loop.',          hint:'Single loop — same current' },
    { term:'Parallel circuit',      definition:'A circuit where components are connected in separate branches.',     hint:'Separate branches — same voltage' },
    { term:'Direct current',        definition:'Current that flows in one direction only.',                         hint:'One direction only' },
    { term:'Alternating current',   definition:'Current that repeatedly changes direction.',                       hint:'Changes direction repeatedly' },
    { term:'Magnetic field',        definition:'A region where a magnetic force is exerted on magnetic materials or moving charges.', hint:'Region of magnetic force' },
    { term:'Electromagnet',         definition:'A temporary magnet created by passing current through a coil of wire.',  hint:'Coil + current = temporary magnet' },
    { term:'Motor effect',          definition:'The force on a current-carrying conductor in a magnetic field.',   hint:'Current in field → force' },
    { term:'Generator effect',      definition:'The induction of a potential difference when a conductor moves relative to a magnetic field.', hint:'Movement in field → voltage' },
    { term:'Transformer',           definition:'A device that changes the voltage of an alternating current using electromagnetic induction.', hint:'Changes AC voltage' },
    { term:'National Grid',         definition:'The network of cables and transformers that distributes electricity from power stations to consumers.', hint:'Power station to consumer network' },
  ],

  'Radioactivity and Space': [
    { term:'Radioactive decay',     definition:'The spontaneous disintegration of unstable atomic nuclei, emitting radiation.',    hint:'Unstable nucleus emits radiation' },
    { term:'Alpha particle',        definition:'A helium nucleus (2 protons + 2 neutrons) emitted during radioactive decay.',   hint:'Helium nucleus — least penetrating' },
    { term:'Beta particle',         definition:'A fast-moving electron emitted when a neutron becomes a proton in a nucleus.',  hint:'Fast electron — medium penetration' },
    { term:'Gamma ray',             definition:'High-frequency electromagnetic radiation emitted from a nucleus.',             hint:'EM radiation — most penetrating' },
    { term:'Half-life',             definition:'The time for half the unstable nuclei in a sample to decay.',               hint:'Time for half to decay' },
    { term:'Nuclear fission',       definition:'The splitting of a large unstable nucleus into two smaller nuclei, releasing energy.', hint:'Large nucleus splits — releases energy' },
    { term:'Nuclear fusion',        definition:'The joining of two light nuclei to form a heavier one, releasing energy.',  hint:'Light nuclei join — releases energy' },
    { term:'Background radiation',  definition:'Low-level radiation from natural and man-made sources present all around us.', hint:'Always-present radiation' },
    { term:'Red-shift',             definition:'The increase in wavelength of light from distant galaxies, indicating they are moving away.',  hint:'Wavelength increases — galaxies receding' },
    { term:'Big Bang',              definition:'The theory that the universe began from an extremely hot, dense point approximately 13.8 billion years ago.', hint:'Universe origin ~13.8 billion years ago' },
    { term:'Star life cycle',       definition:'The sequence of stages a star passes through from nebula to its eventual end state.', hint:'Nebula → main sequence → death' },
  ],

};

// ────────────────────────────────────────────────────────────
// GEOGRAPHY — Edexcel GCSE (1GA0)
// Edexcel B spec — topics differ from AQA
// ────────────────────────────────────────────────────────────
VOCAB['geography']['edexcel-gcse'] = {

  'Dynamic Planet': [
    { term:'Tectonic plate',        definition:'A rigid segment of the Earth\'s lithosphere that moves on the semi-molten asthenosphere.', hint:'Rigid crust segment — moves on mantle' },
    { term:'Plate boundary',        definition:'The margin where two tectonic plates meet — site of earthquakes and volcanoes.',         hint:'Where two plates meet' },
    { term:'Constructive boundary', definition:'A plate boundary where plates move apart and new crust is formed by rising magma.',     hint:'Plates apart — new crust forms' },
    { term:'Destructive boundary',  definition:'A plate boundary where plates move together and oceanic crust is subducted.',          hint:'Plates together — crust destroyed' },
    { term:'Conservative boundary', definition:'A plate boundary where plates slide past each other — no crust created or destroyed.', hint:'Plates slide past — no crust change' },
    { term:'Earthquake',            definition:'A sudden violent shaking of the ground caused by movement of tectonic plates.',       hint:'Ground shaking — plate movement' },
    { term:'Volcano',               definition:'An opening in the Earth\'s surface through which lava, ash and gases are released.',  hint:'Opening emitting lava and gases' },
    { term:'Seismometer',           definition:'An instrument used to detect and record seismic waves from earthquakes.',           hint:'Detects and records earthquake waves' },
    { term:'Richter scale',         definition:'A logarithmic scale measuring the magnitude of earthquakes.',                      hint:'Measures earthquake magnitude' },
    { term:'Tsunami',               definition:'A large ocean wave triggered by an underwater earthquake or volcanic eruption.',  hint:'Giant wave — underwater earthquake' },
    { term:'Primary effect',        definition:'The immediate, direct impact of a natural hazard on people and property.',      hint:'Immediate direct impact' },
    { term:'Secondary effect',      definition:'An indirect consequence that develops after a natural hazard.',               hint:'Indirect — develops after event' },
  ],

  'Coastal Landscapes': [
    { term:'Erosion',               definition:'The wearing away of coastline by wave action, weathering and mass movement.',     hint:'Wearing away of coastline' },
    { term:'Deposition',            definition:'The laying down of sediment when waves lose energy.',                           hint:'Sediment laid down — energy lost' },
    { term:'Hydraulic action',      definition:'The force of water being compressed into cracks in a cliff, breaking it apart.', hint:'Water pressure breaks cliff' },
    { term:'Abrasion',              definition:'Sand and pebbles carried by waves scrape and wear away cliff faces.',          hint:'Sand/pebbles scrape cliff' },
    { term:'Attrition',             definition:'Rocks carried by waves collide and break into smaller, smoother pieces.',     hint:'Rocks collide — break smaller' },
    { term:'Longshore drift',       definition:'The zigzag movement of sediment along a coast as waves approach at an angle.', hint:'Sediment moves along coast in zigzag' },
    { term:'Spit',                  definition:'A ridge of sand or shingle extending from the shore into the sea.',           hint:'Sand ridge extending into sea' },
    { term:'Wave-cut platform',     definition:'A flat rocky shelf at sea level, the eroded remnant of former cliffs.',      hint:'Flat rock — eroded cliff base' },
    { term:'Sea wall',              definition:'A concrete barrier built along a coast to reflect wave energy and prevent erosion.', hint:'Reflects waves — prevents erosion' },
    { term:'Managed retreat',       definition:'Allowing coastal erosion or flooding to occur by removing coastal defences.', hint:'Allow natural erosion to proceed' },
    { term:'Hard engineering',      definition:'Using concrete and artificial structures to protect coastlines.',           hint:'Artificial structures — coastal defence' },
    { term:'Soft engineering',      definition:'Managing erosion using natural processes such as beach nourishment.',       hint:'Works with natural processes' },
  ],

  'Urbanisation': [
    { term:'Urbanisation',          definition:'The increase in the proportion of people living in urban areas.',            hint:'More people living in cities' },
    { term:'Rural-urban migration', definition:'The movement of people from rural areas to urban areas in search of work and better living conditions.', hint:'People move from countryside to city' },
    { term:'Megacity',              definition:'A city with a population exceeding 10 million people.',                    hint:'City with 10+ million people' },
    { term:'Urban sprawl',          definition:'The unplanned expansion of urban areas into surrounding countryside.',    hint:'City spreads into countryside' },
    { term:'Squatter settlement',   definition:'An area of housing built illegally, often on the edge of a city, without proper sanitation or services.', hint:'Illegal housing — no services' },
    { term:'Brownfield site',       definition:'Previously developed land that can be reused for new development.',       hint:'Previously developed — reusable' },
    { term:'Greenfield site',       definition:'Land that has not been previously built on.',                           hint:'Never built on before' },
    { term:'Gentrification',        definition:'The process of improving a run-down area, often displacing existing lower-income residents.',  hint:'Improving area — displacing poor residents' },
    { term:'Sustainable development', definition:'Development that meets present needs without compromising the ability of future generations to meet their own needs.', hint:'Meets needs now — doesn\'t harm future' },
    { term:'Infrastructure',        definition:'Basic facilities and services needed for a society — roads, water, electricity, communications.',  hint:'Basic services — roads, water, power' },
  ],

  'Development and Globalisation': [
    { term:'Development',           definition:'The level of economic and social progress of a country.',                  hint:'Economic and social progress' },
    { term:'Gross domestic product', definition:'The total value of goods and services produced by a country in one year.',  hint:'Total economic output of a country' },
    { term:'HDI',                   definition:'Human Development Index — combines life expectancy, education and income to measure development.', hint:'Life expectancy + education + income' },
    { term:'Globalisation',         definition:'The increasing interconnection of the world\'s economies, cultures and populations.',  hint:'World becoming more interconnected' },
    { term:'Transnational corporation', definition:'A large company that operates in multiple countries.',                hint:'Large company — operates globally' },
    { term:'Fair trade',            definition:'A trading system that ensures producers in developing countries receive fair prices.',  hint:'Fair prices for developing world producers' },
    { term:'Aid',                   definition:'Money, goods or services given by one country or organisation to another in need.', hint:'Help given to countries in need' },
    { term:'Trade',                 definition:'The exchange of goods and services between countries.',                 hint:'Exchange of goods between countries' },
    { term:'Inequality',            definition:'Differences in wealth, income, opportunity or access to services between people or regions.', hint:'Unequal distribution of wealth/opportunity' },
  ],

  'Changing Environments': [
    { term:'Climate change',        definition:'Long-term change in global average temperature and weather patterns.',   hint:'Long-term temperature and weather change' },
    { term:'Carbon dioxide',        definition:'A greenhouse gas produced by burning fossil fuels and respiration — a major cause of climate change.', hint:'Main greenhouse gas — CO₂' },
    { term:'Deforestation',         definition:'The widespread removal of forests, reducing biodiversity and increasing CO₂.',  hint:'Forest removal — CO₂ rises' },
    { term:'Biodiversity',          definition:'The variety of living species in a given area.',                        hint:'Variety of species' },
    { term:'Ecosystem',             definition:'A community of living organisms interacting with each other and their non-living environment.', hint:'Community + non-living environment' },
    { term:'Desertification',       definition:'The process by which fertile land becomes desert due to drought, deforestation or unsuitable farming.', hint:'Fertile land turns to desert' },
    { term:'Sustainability',        definition:'Using resources to meet present needs without depleting them for future generations.', hint:'Meeting needs now — preserving for future' },
    { term:'Renewable energy',      definition:'Energy from sources that are naturally replenished — e.g. solar, wind, hydroelectric.',  hint:'Naturally replenished — solar, wind' },
    { term:'Carbon footprint',      definition:'The total greenhouse gas emissions caused by an individual, organisation or product.', hint:'Total greenhouse gases from an activity' },
  ],

};

// ────────────────────────────────────────────────────────────
// HISTORY — Edexcel GCSE (1HI0)
// Edexcel History has thematic and period studies
// Core concepts are shared; period vocab differs slightly
// ────────────────────────────────────────────────────────────
VOCAB['history']['edexcel-gcse'] = {

  'Historical Concepts': [
    { term:'Causation',             definition:'The relationship between causes and effects — explaining why events happened.',    hint:'Why events happened — cause and effect' },
    { term:'Consequence',           definition:'The result or effect of a historical event or decision.',                       hint:'Results of historical events' },
    { term:'Significance',          definition:'The historical importance of a person, event or development.',                hint:'Historical importance' },
    { term:'Change',                definition:'Aspects of historical periods that were different from before.',             hint:'Things that became different' },
    { term:'Continuity',            definition:'Aspects of historical periods that remained the same over time.',           hint:'Things that stayed the same' },
    { term:'Primary source',        definition:'Evidence created at the time of the events being studied.',                hint:'Created at the time — e.g. diary' },
    { term:'Secondary source',      definition:'Evidence created after the events, interpreting or analysing the past.',  hint:'Created after — interpretation' },
    { term:'Bias',                  definition:'A tendency in a source to present a one-sided view of events.',          hint:'One-sided view' },
    { term:'Reliability',           definition:'The degree to which a source can be trusted to give an accurate account of events.', hint:'How trustworthy a source is' },
    { term:'Interpretation',        definition:'A historian\'s analysis or judgement about historical events.',          hint:'Historian\'s view or judgement' },
    { term:'Propaganda',            definition:'Information — often biased or misleading — used to promote a political viewpoint.', hint:'Biased info to influence opinion' },
    { term:'Chronology',            definition:'The arrangement of events in the order in which they occurred.',         hint:'Events in time order' },
  ],

  'Medicine Through Time': [
    { term:'Germ theory',           definition:'Louis Pasteur\'s theory that disease is caused by microorganisms.',       hint:'Pasteur — disease from microorganisms' },
    { term:'Miasma theory',         definition:'The incorrect belief that disease was caused by bad air from rotting matter.',  hint:'Old belief — disease from bad air' },
    { term:'Vaccination',           definition:'Introducing a weakened pathogen to stimulate immunity against disease.',  hint:'Stimulates immunity against disease' },
    { term:'Anaesthetic',           definition:'A drug that prevents pain or induces unconsciousness during surgery.',  hint:'Removes pain in surgery' },
    { term:'Antiseptic',            definition:'A substance that kills or prevents the growth of microorganisms, reducing infection.',  hint:'Kills bacteria — reduces infection' },
    { term:'Public health',         definition:'Government action to prevent disease and promote the health of the whole population.',  hint:'Government promotes population health' },
    { term:'NHS',                   definition:'The National Health Service — free healthcare for all British citizens, established 1948.',  hint:'Free healthcare — established 1948' },
    { term:'Surgery',               definition:'Medical treatment involving cutting into the body — developed significantly in the 19th and 20th centuries.',  hint:'Medical treatment by cutting' },
    { term:'Clinical trial',        definition:'A carefully controlled scientific test of a new treatment on human patients.',  hint:'Controlled test of new treatment' },
  ],

  'Weimar and Nazi Germany': [
    { term:'Weimar Republic',       definition:'The democratic government of Germany 1919–1933, established after World War One.',  hint:'German democracy 1919–1933' },
    { term:'Nazi Party',            definition:'The National Socialist German Workers\' Party, led by Hitler, ruling Germany 1933–1945.',  hint:'Hitler\'s party — ruled Germany' },
    { term:'Hyperinflation',        definition:'An extreme and rapid rise in prices making money nearly worthless — Germany 1923.',  hint:'Extreme price rises — 1923 Germany' },
    { term:'Totalitarianism',       definition:'A system of government with absolute control over all aspects of life.',           hint:'Total state control over all life' },
    { term:'Holocaust',             definition:'The systematic murder of six million Jews and millions of others by the Nazi regime.',  hint:'Systematic Nazi genocide' },
    { term:'Propaganda',            definition:'Biased information used by the Nazis to control what people believed.',            hint:'Biased info to control beliefs' },
    { term:'Appeasement',           definition:'The British and French policy of making concessions to Hitler to avoid war.',      hint:'Giving in to Hitler to avoid war' },
    { term:'Reichstag',             definition:'The German parliament building — burned down in 1933 and used by Hitler to justify emergency powers.',  hint:'German parliament — burned 1933' },
    { term:'Gestapo',               definition:'The Nazi secret state police that monitored and suppressed opposition.',          hint:'Nazi secret police' },
    { term:'SS',                    definition:'The Schutzstaffel — Hitler\'s elite personal guard and later a major force in running concentration camps.',  hint:'Hitler\'s elite guard' },
  ],

  'Cold War': [
    { term:'Cold War',              definition:'The period of political and military tension between the USA and USSR from 1945 to 1991, without direct armed conflict.',  hint:'USA vs USSR — no direct fighting' },
    { term:'Containment',          definition:'The US policy of preventing the spread of communism beyond where it already existed.',  hint:'US policy — stop communism spreading' },
    { term:'Iron Curtain',         definition:'The ideological and physical division between communist Eastern Europe and democratic Western Europe.',  hint:'Divide — communist East, democratic West' },
    { term:'NATO',                 definition:'North Atlantic Treaty Organisation — a military alliance of Western nations formed in 1949.',  hint:'Western military alliance — 1949' },
    { term:'Warsaw Pact',          definition:'A military alliance of communist Eastern European nations under Soviet leadership, formed in 1955.',  hint:'Communist military alliance — 1955' },
    { term:'Nuclear deterrence',   definition:'The strategy of possessing nuclear weapons to prevent enemy attack by threatening devastating retaliation.',  hint:'Nuclear weapons prevent attack' },
    { term:'Arms race',            definition:'The competition between the USA and USSR to develop more powerful weapons.',  hint:'USA and USSR competing for weapons' },
    { term:'Space race',           definition:'The competition between the USA and USSR to achieve superiority in space exploration.',  hint:'USA vs USSR in space exploration' },
    { term:'Détente',              definition:'A period of easing tensions between the USA and USSR in the 1970s.',  hint:'Relaxed tensions — 1970s' },
    { term:'Berlin Wall',          definition:'The barrier built in 1961 separating East and West Berlin — a symbol of the Iron Curtain.',  hint:'Wall dividing Berlin — 1961' },
  ],

};

// ────────────────────────────────────────────────────────────
// MATHS — Edexcel GCSE (1MA1)
// Core content is near-identical to AQA — same national DfE curriculum
// Adding Edexcel-specific notation and a few extra topics
// ────────────────────────────────────────────────────────────
VOCAB['maths']['edexcel-gcse'] = {

  'Number': [
    { term:'Integer',               definition:'A whole number, either positive, negative or zero.',                                hint:'Whole number — no decimal' },
    { term:'Prime number',          definition:'A number greater than 1 with exactly two factors: 1 and itself.',                hint:'Only divisible by 1 and itself' },
    { term:'Factor',                definition:'A number that divides exactly into another without a remainder.',                hint:'Divides exactly — no remainder' },
    { term:'Multiple',              definition:'A number obtained by multiplying a given number by a positive integer.',        hint:'In the times table of a number' },
    { term:'HCF',                   definition:'Highest Common Factor — the largest number that is a factor of two or more given numbers.',  hint:'Largest shared factor' },
    { term:'LCM',                   definition:'Lowest Common Multiple — the smallest number that is a multiple of two or more given numbers.',  hint:'Smallest shared multiple' },
    { term:'Surd',                  definition:'An irrational number expressed as a root, such as √2, which cannot be simplified to a rational number.',  hint:'Irrational root — e.g. √2' },
    { term:'Standard form',         definition:'Writing a number as a × 10ⁿ where 1 ≤ a < 10 and n is an integer.',           hint:'a × 10ⁿ — very large or small numbers' },
    { term:'Rational number',       definition:'A number that can be expressed as a fraction p/q where p and q are integers.',  hint:'Can be written as a fraction' },
    { term:'Irrational number',     definition:'A number that cannot be expressed as a fraction — decimal is infinite and non-repeating.',  hint:'Cannot be written as a fraction — e.g. π' },
  ],

  'Algebra': [
    { term:'Expression',            definition:'A mathematical phrase with numbers and/or variables but no equals sign.',      hint:'Numbers and letters — no equals' },
    { term:'Equation',              definition:'A mathematical statement where two expressions are equal.',                   hint:'Two expressions — equals sign' },
    { term:'Formula',               definition:'A rule using symbols to show a relationship between quantities.',            hint:'Rule using symbols — e.g. A = lw' },
    { term:'Inequality',            definition:'A mathematical statement showing one expression is greater or less than another.',  hint:'< > ≤ ≥ — not equal' },
    { term:'Expand',                definition:'To multiply out brackets and simplify the result.',                         hint:'Multiply out the brackets' },
    { term:'Factorise',             definition:'To express an algebraic expression as a product of its factors.',          hint:'Put brackets in — reverse of expand' },
    { term:'Gradient',              definition:'The slope of a straight line — change in y divided by change in x.',      hint:'Rise ÷ run — steepness of line' },
    { term:'Quadratic',             definition:'A polynomial of degree 2 — containing a term in x².',                    hint:'Contains x² — degree 2' },
    { term:'Simultaneous equations', definition:'Two equations with the same variables that are solved at the same time.',  hint:'Two equations — same unknowns — solve together' },
    { term:'Function',              definition:'A rule that maps each input to exactly one output.',                     hint:'Input → exactly one output' },
  ],

  'Geometry and Measures': [
    { term:'Perimeter',             definition:'The total length of the boundary of a 2D shape.',                          hint:'Distance around the outside' },
    { term:'Area',                  definition:'The measure of the space enclosed within a 2D shape.',                   hint:'Space inside a 2D shape' },
    { term:'Volume',                definition:'The measure of space enclosed within a 3D shape.',                      hint:'Space inside a 3D shape' },
    { term:'Circumference',         definition:'The perimeter of a circle — πd or 2πr.',                              hint:'Perimeter of a circle — πd' },
    { term:'Congruent',             definition:'Two shapes that are identical in shape and size — all corresponding sides and angles are equal.',  hint:'Identical shape and size' },
    { term:'Similar',               definition:'Two shapes with the same angles but different sizes — sides in the same ratio.',  hint:'Same shape — different size' },
    { term:'Pythagoras\' theorem',  definition:'In a right-angled triangle: a² + b² = c², where c is the hypotenuse.',  hint:'a² + b² = c² in right triangle' },
    { term:'Trigonometry',          definition:'The study of relationships between angles and sides in triangles.',    hint:'Sin, cos, tan — angles and sides' },
    { term:'Vector',                definition:'A quantity with both magnitude and direction, often represented as a column vector.',  hint:'Magnitude + direction' },
    { term:'Locus',                 definition:'The set of all points satisfying a given condition.',                 hint:'Path traced following a rule' },
  ],

  'Statistics and Probability': [
    { term:'Mean',                  definition:'The sum of all values divided by the number of values.',              hint:'Sum ÷ number of values' },
    { term:'Median',                definition:'The middle value when data is arranged in order.',                   hint:'Middle value when ordered' },
    { term:'Mode',                  definition:'The value that occurs most frequently in a data set.',             hint:'Most common value' },
    { term:'Range',                 definition:'The difference between the highest and lowest values.',           hint:'Highest − lowest' },
    { term:'Probability',           definition:'A numerical measure of how likely an event is to occur — between 0 and 1.',  hint:'Likelihood of event — 0 to 1' },
    { term:'Relative frequency',    definition:'The proportion of times an event occurs in an experiment — used to estimate probability.',  hint:'Times event occurs ÷ total trials' },
    { term:'Correlation',           definition:'The relationship or pattern between two variables on a scatter diagram.',  hint:'Pattern between two variables' },
    { term:'Cumulative frequency',  definition:'A running total of frequencies used to find the median and quartiles.',  hint:'Running total of frequencies' },
    { term:'Interquartile range',   definition:'The difference between the upper and lower quartiles — Q3 − Q1.',  hint:'Q3 − Q1 — spread of middle 50%' },
    { term:'Outlier',               definition:'A data value significantly different from the rest of the data set.',  hint:'Value far from others' },
  ],

  'Ratio and Proportion': [
    { term:'Ratio',                 definition:'A comparison of two quantities by division — written as a:b.',       hint:'Comparison — written a:b' },
    { term:'Proportion',            definition:'A statement that two ratios are equal — or a part compared to a whole.',  hint:'Equal ratios — part to whole' },
    { term:'Percentage',            definition:'A fraction expressed as parts per hundred.',                       hint:'Out of 100' },
    { term:'Direct proportion',     definition:'Two quantities that increase or decrease at the same rate — y = kx.',  hint:'Both increase together — y = kx' },
    { term:'Inverse proportion',    definition:'Two quantities where one increases as the other decreases — y = k/x.',  hint:'One increases, other decreases — y = k/x' },
    { term:'Scale factor',          definition:'The ratio of corresponding lengths in two similar shapes.',       hint:'Ratio of lengths in similar shapes' },
  ],

};

// ────────────────────────────────────────────────────────────
// ENGLISH — Edexcel GCSE (1EN0 Language / 1ET0 Literature)
// Core literary and language terms are the same nationally
// Adding Edexcel-specific structural terms
// ────────────────────────────────────────────────────────────
VOCAB['english']['edexcel-gcse'] = {

  'Language Techniques': [
    { term:'Simile',               definition:'A comparison using "like" or "as".',                                        hint:'Comparison using like or as' },
    { term:'Metaphor',             definition:'A direct comparison stating one thing is another.',                        hint:'Direct comparison — not like/as' },
    { term:'Personification',      definition:'Giving human qualities to non-human things.',                             hint:'Human qualities to non-human things' },
    { term:'Alliteration',         definition:'Repetition of the same initial consonant sound in nearby words.',        hint:'Same starting consonant repeated' },
    { term:'Onomatopoeia',         definition:'Words that sound like what they describe.',                             hint:'Word sounds like the noise — e.g. bang' },
    { term:'Hyperbole',            definition:'Deliberate exaggeration for emphasis or effect.',                      hint:'Deliberate exaggeration' },
    { term:'Irony',                definition:'Saying the opposite of what is meant, or events turning out contrary to expectations.',  hint:'Opposite of what is meant/expected' },
    { term:'Juxtaposition',        definition:'Placing two contrasting ideas or images side by side.',               hint:'Contrasting ideas placed together' },
    { term:'Imagery',              definition:'Vivid descriptive language creating mental pictures.',               hint:'Vivid description — mental picture' },
    { term:'Symbolism',            definition:'Using an object or image to represent a deeper meaning.',           hint:'Object represents deeper meaning' },
    { term:'Repetition',           definition:'Using the same word or phrase more than once for emphasis.',        hint:'Same word repeated for emphasis' },
    { term:'Rhetorical question',  definition:'A question asked for effect — no answer expected.',               hint:'Question for effect — no answer needed' },
    { term:'Tone',                 definition:'The writer\'s attitude towards the subject conveyed through language choices.',  hint:'Writer\'s attitude through language' },
    { term:'Emotive language',     definition:'Language designed to provoke an emotional response.',            hint:'Language that creates emotion' },
  ],

  'Structure and Form': [
    { term:'Structure',            definition:'The way a text is organised — sequence of ideas, use of paragraphs, openings and endings.',  hint:'How a text is organised' },
    { term:'Narrative perspective', definition:'The viewpoint from which a story is told — first, second or third person.',  hint:'Viewpoint of the narrator' },
    { term:'Chronological',        definition:'Organised in time order from earliest to latest.',                hint:'In time order — earliest to latest' },
    { term:'Non-chronological',    definition:'Organised in a way that does not follow time order — may use flashbacks.',  hint:'Not in time order' },
    { term:'Foreshadowing',        definition:'Hints or clues about events that will happen later in the text.',  hint:'Hints about later events' },
    { term:'Flashback',            definition:'A narrative technique returning to an earlier time.',           hint:'Goes back in time in narrative' },
    { term:'Stanza',               definition:'A group of lines forming a unit in a poem.',                  hint:'Group of lines in a poem' },
    { term:'Rhyme scheme',         definition:'The pattern of rhymes at the ends of lines in a poem — shown as ABAB, ABBA etc.',  hint:'Pattern of rhymes — ABAB etc.' },
    { term:'Enjambment',           definition:'When a sentence or phrase continues across a line break in poetry.',  hint:'Sentence continues over line break' },
    { term:'Caesura',              definition:'A pause or break within a line of poetry.',                 hint:'Pause in the middle of a line' },
  ],

  'Literature Concepts': [
    { term:'Theme',                definition:'The central idea or message running through a text.',          hint:'Central message of the text' },
    { term:'Protagonist',          definition:'The main character of a narrative.',                          hint:'Main character' },
    { term:'Antagonist',           definition:'The character or force that opposes the protagonist.',       hint:'Opposes the main character' },
    { term:'Conflict',             definition:'A struggle between opposing forces — internal or external.',  hint:'Struggle — internal or external' },
    { term:'Connotation',          definition:'The implied or associated meaning of a word beyond its literal definition.',  hint:'Implied meaning beyond literal' },
    { term:'Motif',                definition:'A recurring image, symbol or idea that reinforces theme.',  hint:'Recurring image or idea' },
    { term:'Setting',              definition:'The time and place in which a narrative takes place.',     hint:'Time and place of the story' },
    { term:'Genre',                definition:'The category of a literary work defined by its style and conventions.',  hint:'Category of literary work' },
    { term:'Dramatic irony',       definition:'When the audience knows something a character does not.',  hint:'Audience knows more than character' },
    { term:'Pathetic fallacy',     definition:'Using weather or environment to reflect a character\'s emotions.',  hint:'Weather reflects character emotion' },
  ],

  'Reading and Writing Skills': [
    { term:'Inference',            definition:'Drawing a conclusion that is suggested but not directly stated.',  hint:'Conclusion drawn from clues' },
    { term:'Explicit',             definition:'Clearly and directly stated in the text.',                hint:'Clearly stated — directly' },
    { term:'Implicit',             definition:'Suggested or implied rather than directly stated.',      hint:'Suggested — not directly stated' },
    { term:'Audience',             definition:'The intended readers or viewers of a text.',           hint:'Who the text is written for' },
    { term:'Purpose',              definition:'The reason a text was written — to inform, persuade, entertain etc.',  hint:'Why the text was written' },
    { term:'Form',                 definition:'The type of text — e.g. letter, article, speech, story.',  hint:'Type of text — letter, speech etc.' },
    { term:'Register',             definition:'The level of formality and style appropriate to the audience and purpose.',  hint:'Level of formality in language' },
    { term:'Cohesion',             definition:'The way a text holds together logically and flows clearly from one idea to the next.',  hint:'Text flows and holds together logically' },
  ],

};

// ────────────────────────────────────────────────────────────
// COMPUTING — Edexcel GCSE (1CP1)
// Very similar to AQA but with slightly different topic organisation
// ────────────────────────────────────────────────────────────
VOCAB['computing']['edexcel-gcse'] = {

  'Algorithms and Programming': [
    { term:'Algorithm',            definition:'A step-by-step set of instructions for solving a problem.',                hint:'Step-by-step problem solution' },
    { term:'Decomposition',        definition:'Breaking a complex problem into smaller, manageable sub-problems.',        hint:'Breaking problem into smaller parts' },
    { term:'Abstraction',          definition:'Removing unnecessary details to focus on essential features of a problem.', hint:'Removing unnecessary detail' },
    { term:'Pseudocode',           definition:'An informal high-level description of an algorithm using plain language.',  hint:'Plain language resembling code' },
    { term:'Flowchart',            definition:'A visual diagram showing an algorithm using standard symbols.',           hint:'Diagram showing algorithm steps' },
    { term:'Sequence',             definition:'Instructions executed in order, one after another.',                     hint:'Instructions in order' },
    { term:'Selection',            definition:'A decision structure — IF/THEN/ELSE — that executes different code based on a condition.',  hint:'IF statement — decision in code' },
    { term:'Iteration',            definition:'Repeating a block of code — using FOR, WHILE or REPEAT loops.',         hint:'Repeating a block of code' },
    { term:'Variable',             definition:'A named memory location storing a value that can change during execution.',  hint:'Named storage — can change' },
    { term:'Constant',             definition:'A named value that does not change during the execution of a program.',  hint:'Named storage — cannot change' },
    { term:'Data type',            definition:'The classification of data — integer, real, Boolean, string or character.',  hint:'Type of data stored' },
    { term:'Array',                definition:'A data structure holding multiple values of the same type under one name.',  hint:'Multiple values — one variable name' },
    { term:'Subroutine',           definition:'A named block of code — a function or procedure — that can be called from elsewhere in a program.',  hint:'Named reusable block of code' },
  ],

  'Data Representation': [
    { term:'Binary',               definition:'Base-2 number system using digits 0 and 1.',                            hint:'Base-2 — only 0 and 1' },
    { term:'Bit',                  definition:'A single binary digit — 0 or 1.',                                      hint:'Single binary digit' },
    { term:'Byte',                 definition:'A group of 8 bits.',                                                   hint:'8 bits' },
    { term:'Denary',               definition:'The base-10 number system used in everyday life.',                    hint:'Base-10 — everyday number system' },
    { term:'Hexadecimal',          definition:'Base-16 number system using digits 0–9 and letters A–F.',           hint:'Base-16 — 0-9 and A-F' },
    { term:'ASCII',                definition:'American Standard Code for Information Interchange — a character encoding using 7 or 8 bits per character.',  hint:'Character encoding — letters/symbols' },
    { term:'Unicode',              definition:'A character encoding standard supporting all world languages and symbols.',  hint:'Expanded character encoding — all languages' },
    { term:'Pixel',                definition:'The smallest unit of a digital image.',                             hint:'Smallest unit of digital image' },
    { term:'Compression',          definition:'Reducing file size to save storage or reduce transmission time.',   hint:'Reducing file size' },
    { term:'Lossless compression', definition:'Compression that reduces file size without losing any data.',     hint:'No data lost — original recoverable' },
    { term:'Lossy compression',    definition:'Compression that reduces file size by permanently removing some data.',  hint:'Data permanently removed' },
    { term:'Sampling rate',        definition:'The number of audio samples taken per second — affects sound quality.',  hint:'Audio samples per second' },
  ],

  'Computer Systems': [
    { term:'CPU',                  definition:'Central Processing Unit — executes instructions and processes data.',  hint:'Brain of the computer' },
    { term:'RAM',                  definition:'Random Access Memory — volatile memory holding currently running programs and data.',  hint:'Temporary volatile memory' },
    { term:'ROM',                  definition:'Read Only Memory — non-volatile memory storing permanent boot instructions.',  hint:'Permanent read-only memory' },
    { term:'Cache',                definition:'A small, fast memory between the CPU and RAM storing frequently accessed data.',  hint:'Fast memory close to CPU' },
    { term:'Clock speed',          definition:'The number of CPU instruction cycles per second — measured in GHz.',  hint:'Instructions per second — GHz' },
    { term:'Secondary storage',    definition:'Non-volatile storage for long-term data — e.g. hard drives, SSDs, optical discs.',  hint:'Long-term non-volatile storage' },
    { term:'Operating system',     definition:'Software that manages hardware resources and provides an interface for users and applications.',  hint:'Manages hardware and software' },
    { term:'Embedded system',      definition:'A computer system built into a device to control a specific function.',  hint:'Computer built into a device' },
  ],

  'Networks and Cyber Security': [
    { term:'Network',              definition:'Two or more connected devices that can communicate and share resources.',  hint:'Connected devices sharing resources' },
    { term:'LAN',                  definition:'Local Area Network — a network in a small area such as a building.',  hint:'Small area network' },
    { term:'WAN',                  definition:'Wide Area Network — a network spanning a large geographical area.',  hint:'Large area network — e.g. internet' },
    { term:'Internet',             definition:'A global WAN connecting billions of devices worldwide.',           hint:'Global network of networks' },
    { term:'Protocol',             definition:'A set of rules governing data transmission between devices.',     hint:'Rules for data transmission' },
    { term:'IP address',           definition:'A unique numerical identifier assigned to each device on a network.',  hint:'Unique address for each device' },
    { term:'Packet switching',     definition:'Data is broken into packets that travel independently and are reassembled at the destination.',  hint:'Data sent in packets — reassembled' },
    { term:'Encryption',           definition:'Encoding data so only authorised parties can read it.',          hint:'Encoding data for security' },
    { term:'Firewall',             definition:'Hardware or software that filters network traffic to protect against threats.',  hint:'Filters traffic — blocks threats' },
    { term:'Malware',              definition:'Software designed to damage or gain unauthorised access to systems.',  hint:'Malicious software' },
    { term:'Phishing',             definition:'A cyber attack using deceptive messages to trick users into revealing personal information.',  hint:'Fake messages steal personal info' },
    { term:'Social engineering',   definition:'Manipulating people into revealing confidential information rather than using technical attacks.',  hint:'Manipulating people — not technology' },
  ],

};

// ────────────────────────────────────────────────────────────
// KS3 — SCIENCE (Biology, Chemistry, Physics combined)
// Generic — no specific exam board
// Age 11–14, Years 7–9
// Source: National Curriculum KS3 + school vocabulary lists
// ────────────────────────────────────────────────────────────
VOCAB['biology']['ks3'] = {

  'Cells': [
    { term:'Cell',               definition:'The basic unit of all living organisms.',                                                hint:'Smallest unit of life' },
    { term:'Cell membrane',      definition:'A thin layer surrounding the cell that controls what enters and leaves.',              hint:'Controls what enters/leaves cell' },
    { term:'Cell wall',          definition:'A rigid layer outside the cell membrane in plant cells, made of cellulose.',          hint:'Rigid layer — plant cells only' },
    { term:'Nucleus',            definition:'The control centre of the cell, containing DNA.',                                     hint:'Control centre — contains DNA' },
    { term:'Cytoplasm',          definition:'The jelly-like fluid inside a cell where chemical reactions take place.',             hint:'Jelly-like fluid inside cell' },
    { term:'Chloroplast',        definition:'A structure in plant cells that absorbs light energy for photosynthesis.',            hint:'Absorbs light — photosynthesis' },
    { term:'Vacuole',            definition:'A large space in plant cells filled with cell sap.',                                  hint:'Large space — cell sap — plants' },
    { term:'Mitochondria',       definition:'Structures in the cell where energy is released during respiration.',                hint:'Energy release — respiration' },
    { term:'Tissue',             definition:'A group of similar cells working together to perform a function.',                   hint:'Group of similar cells' },
    { term:'Organ',              definition:'A structure made of different tissues working together.',                           hint:'Made of tissues — e.g. heart' },
    { term:'Organ system',       definition:'A group of organs working together to carry out a major function.',                hint:'Group of organs — major function' },
    { term:'Microscope',         definition:'An instrument that magnifies objects too small to see with the naked eye.',        hint:'Magnifies tiny objects' },
    { term:'Magnification',      definition:'How many times larger an image appears compared to the real object.',            hint:'Image size ÷ real size' },
    { term:'Diffusion',          definition:'The movement of particles from high concentration to low concentration.',         hint:'High to low concentration — passive' },
    { term:'Osmosis',            definition:'The movement of water from a dilute to a concentrated solution through a membrane.', hint:'Water movement through a membrane' },
    { term:'Specialised cell',   definition:'A cell adapted in structure to carry out a specific function.',                  hint:'Adapted for one purpose' },
  ],

  'Reproduction and Life Processes': [
    { term:'Reproduction',       definition:'The process by which organisms produce offspring.',                               hint:'Producing new organisms' },
    { term:'Sexual reproduction', definition:'Reproduction involving the fusion of male and female sex cells.',              hint:'Involves egg and sperm joining' },
    { term:'Asexual reproduction', definition:'Reproduction involving a single parent, producing genetically identical offspring.', hint:'One parent — identical offspring' },
    { term:'Gamete',             definition:'A sex cell — sperm in males, egg in females.',                                 hint:'Sex cell — sperm or egg' },
    { term:'Fertilisation',      definition:'The fusion of a sperm cell and an egg cell.',                                 hint:'Sperm and egg join' },
    { term:'Embryo',             definition:'An early stage of development from a fertilised egg.',                       hint:'Early stage of development' },
    { term:'Puberty',            definition:'The period during which a child develops physically into an adult capable of reproduction.', hint:'Physical changes to adult body' },
    { term:'Ovulation',          definition:'The release of an egg from the ovary.',                                     hint:'Egg released from ovary' },
    { term:'Pollination',        definition:'The transfer of pollen from anther to stigma in plants.',                  hint:'Pollen moves from anther to stigma' },
    { term:'Germination',        definition:'The process by which a seed begins to grow.',                             hint:'Seed starts to grow' },
    { term:'Variation',          definition:'Differences between individual organisms of the same species.',           hint:'Differences between individuals' },
    { term:'Inherited',          definition:'Characteristics passed on from parents to offspring through genes.',     hint:'Passed from parent to offspring' },
    { term:'Chromosome',         definition:'A thread-like structure in the nucleus made of DNA and carrying genetic information.',  hint:'Thread-like DNA structure in nucleus' },
    { term:'DNA',                definition:'The molecule that carries genetic information — shaped like a double helix.',  hint:'Carries genetic information' },
    { term:'Gene',               definition:'A section of DNA that codes for a characteristic.',                    hint:'Section of DNA — controls a characteristic' },
  ],

  'Body Systems': [
    { term:'Digestion',          definition:'The breakdown of food into small soluble molecules that can be absorbed into the blood.',  hint:'Food broken into small molecules' },
    { term:'Enzyme',             definition:'A biological catalyst that speeds up chemical reactions in the body.',               hint:'Biological catalyst — speeds reactions' },
    { term:'Aerobic respiration', definition:'The release of energy from glucose using oxygen — produces CO₂ and water.',         hint:'Glucose + oxygen → energy' },
    { term:'Anaerobic respiration', definition:'The release of energy from glucose without oxygen — produces lactic acid.',      hint:'No oxygen — produces lactic acid' },
    { term:'Photosynthesis',     definition:'The process by which plants make glucose using light energy, CO₂ and water.',       hint:'Plants make glucose using light' },
    { term:'Circulation',        definition:'The movement of blood around the body through the heart and blood vessels.',      hint:'Blood moving through heart and vessels' },
    { term:'Artery',             definition:'A blood vessel that carries blood away from the heart under high pressure.',       hint:'Away from heart — high pressure' },
    { term:'Vein',               definition:'A blood vessel that carries blood back to the heart under low pressure.',        hint:'Towards heart — low pressure' },
    { term:'Capillary',          definition:'A tiny blood vessel where exchange of substances between blood and tissues occurs.', hint:'Tiny — exchange of substances' },
    { term:'Pathogen',           definition:'A microorganism that causes disease.',                                          hint:'Disease-causing microorganism' },
    { term:'Immune system',      definition:'The body\'s defence system against pathogens.',                               hint:'Body\'s defence against disease' },
    { term:'Vaccine',            definition:'A preparation of dead or weakened pathogens used to stimulate immunity.',    hint:'Stimulates immunity — weakened pathogen' },
  ],

  'Ecology': [
    { term:'Ecosystem',          definition:'A community of organisms and the non-living environment they live in.',       hint:'Living things + their environment' },
    { term:'Habitat',            definition:'The natural environment in which an organism lives.',                        hint:'Where an organism lives' },
    { term:'Food chain',         definition:'A sequence showing how energy passes from one organism to another.',       hint:'Energy transfer sequence' },
    { term:'Food web',           definition:'An interconnected network of food chains.',                               hint:'Network of food chains' },
    { term:'Producer',           definition:'An organism that makes its own food through photosynthesis.',            hint:'Makes own food — green plants' },
    { term:'Consumer',           definition:'An organism that feeds on other organisms.',                            hint:'Feeds on other organisms' },
    { term:'Predator',           definition:'An animal that hunts and eats other animals.',                         hint:'Hunts and eats other animals' },
    { term:'Prey',               definition:'An animal that is hunted and eaten by a predator.',                   hint:'Eaten by a predator' },
    { term:'Decomposer',         definition:'An organism that breaks down dead organic matter.',                   hint:'Breaks down dead material' },
    { term:'Adaptation',         definition:'A feature of an organism that helps it survive in its environment.',  hint:'Feature helping survival' },
    { term:'Competition',        definition:'When organisms compete for the same limited resources.',             hint:'Struggle for same resources' },
    { term:'Population',         definition:'All the organisms of the same species in an area.',                hint:'Same species — same area' },
    { term:'Biodiversity',       definition:'The variety of different living organisms in an area.',           hint:'Variety of species' },
    { term:'Extinction',         definition:'When all members of a species die out permanently.',             hint:'Species no longer exists' },
    { term:'Pollution',          definition:'The introduction of harmful substances into the environment.',  hint:'Harmful substances in environment' },
  ],
};

VOCAB['chemistry']['ks3'] = {

  'Particles and States of Matter': [
    { term:'Particle',           definition:'A tiny piece of matter such as an atom, ion or molecule.',                         hint:'Tiny piece of matter' },
    { term:'Atom',               definition:'The smallest particle of an element that can exist.',                              hint:'Smallest part of an element' },
    { term:'Molecule',           definition:'Two or more atoms joined together by chemical bonds.',                            hint:'Two or more atoms bonded' },
    { term:'Solid',              definition:'A state of matter with a fixed shape and volume — particles close together.',     hint:'Fixed shape — particles close together' },
    { term:'Liquid',             definition:'A state of matter with a fixed volume but no fixed shape — particles can move.',  hint:'Fixed volume — no fixed shape' },
    { term:'Gas',                definition:'A state of matter with no fixed shape or volume — particles move freely.',       hint:'No fixed shape or volume' },
    { term:'Melting',            definition:'Changing from solid to liquid by heating.',                                      hint:'Solid → liquid — heating' },
    { term:'Boiling',            definition:'Changing from liquid to gas throughout the liquid by heating.',                 hint:'Liquid → gas throughout — boiling point' },
    { term:'Condensing',         definition:'Changing from gas to liquid by cooling.',                                      hint:'Gas → liquid — cooling' },
    { term:'Freezing',           definition:'Changing from liquid to solid by cooling.',                                   hint:'Liquid → solid — cooling' },
    { term:'Evaporation',        definition:'Changing from liquid to gas at the surface, below the boiling point.',       hint:'Surface liquid → gas — below boiling point' },
    { term:'Diffusion',          definition:'The spreading of particles from high concentration to low concentration.',    hint:'Spreading from high to low concentration' },
    { term:'Density',            definition:'Mass per unit volume of a substance.',                                       hint:'Mass ÷ volume' },
    { term:'Mixture',            definition:'Two or more substances not chemically combined.',                          hint:'Not chemically combined' },
    { term:'Pure substance',     definition:'A substance consisting of only one type of element or compound.',         hint:'Only one type of element or compound' },
    { term:'Solution',           definition:'A mixture formed when a solute dissolves in a solvent.',                hint:'Solute dissolved in solvent' },
    { term:'Solute',             definition:'The substance that dissolves in a solvent to form a solution.',         hint:'Dissolves in the solvent' },
    { term:'Solvent',            definition:'The liquid that dissolves the solute to form a solution.',            hint:'Liquid that does the dissolving' },
    { term:'Filtration',         definition:'A separation technique that separates insoluble solids from liquids.',hint:'Separates solid from liquid' },
    { term:'Distillation',       definition:'A separation technique that separates liquids with different boiling points.',hint:'Separates liquids by boiling point' },
  ],

  'Elements, Compounds and Reactions': [
    { term:'Element',            definition:'A substance made of only one type of atom — cannot be split into simpler substances.',  hint:'Only one type of atom' },
    { term:'Compound',           definition:'A substance made from two or more elements chemically joined in fixed proportions.',    hint:'Elements chemically joined' },
    { term:'Periodic table',     definition:'A table of all known elements arranged in order of atomic number.',                   hint:'All elements — ordered by atomic number' },
    { term:'Chemical reaction',  definition:'A process in which substances are changed into different substances.',               hint:'Substances changed into new substances' },
    { term:'Reactant',           definition:'A substance that takes part in and is changed by a chemical reaction.',             hint:'Substance that reacts' },
    { term:'Product',            definition:'A new substance formed in a chemical reaction.',                                   hint:'New substance made in reaction' },
    { term:'Combustion',         definition:'The reaction of a substance with oxygen, releasing heat and light.',              hint:'Burning — reacts with oxygen' },
    { term:'Oxidation',          definition:'A reaction in which a substance gains oxygen.',                                  hint:'Gains oxygen' },
    { term:'Acid',               definition:'A substance with a pH below 7 that produces H⁺ ions in solution.',             hint:'pH below 7 — H⁺ ions' },
    { term:'Alkali',             definition:'A soluble base with a pH above 7 that produces OH⁻ ions.',                    hint:'pH above 7 — OH⁻ ions' },
    { term:'Neutralisation',     definition:'The reaction between an acid and an alkali to produce a salt and water.',     hint:'Acid + alkali → salt + water' },
    { term:'pH scale',           definition:'A scale from 0 to 14 measuring how acidic or alkaline a solution is.',      hint:'0–14 — acidity/alkalinity scale' },
    { term:'Indicator',          definition:'A dye that changes colour depending on whether a substance is acidic or alkaline.',  hint:'Changes colour — shows pH' },
    { term:'Conservation of mass', definition:'The total mass of reactants equals the total mass of products in a reaction.',  hint:'Mass stays the same in reaction' },
    { term:'Exothermic',         definition:'A reaction that releases energy to the surroundings — feels hot.',          hint:'Releases heat — temperature rises' },
    { term:'Endothermic',        definition:'A reaction that takes in energy from the surroundings — feels cold.',      hint:'Absorbs heat — temperature drops' },
  ],

  'Atoms and the Periodic Table': [
    { term:'Proton',             definition:'A positively charged particle in the nucleus of an atom.',                  hint:'Positive — in nucleus' },
    { term:'Neutron',            definition:'A neutral particle in the nucleus of an atom.',                            hint:'Neutral — in nucleus' },
    { term:'Electron',           definition:'A negatively charged particle that orbits the nucleus.',                  hint:'Negative — orbits nucleus' },
    { term:'Atomic number',      definition:'The number of protons in the nucleus of an atom.',                       hint:'Number of protons' },
    { term:'Mass number',        definition:'The total number of protons and neutrons in the nucleus.',              hint:'Protons + neutrons' },
    { term:'Ion',                definition:'An atom or group of atoms with an electric charge due to gaining or losing electrons.', hint:'Charged atom — gained/lost electrons' },
    { term:'Group',              definition:'A vertical column in the periodic table — elements with similar properties.',  hint:'Vertical column — similar properties' },
    { term:'Period',             definition:'A horizontal row in the periodic table.',                               hint:'Horizontal row' },
    { term:'Metal',              definition:'An element that is typically shiny, conducts electricity and is malleable.',  hint:'Shiny, conducts electricity, malleable' },
    { term:'Non-metal',          definition:'An element that is typically dull and does not conduct electricity.',  hint:'Dull — poor conductor' },
    { term:'Isotope',            definition:'Atoms of the same element with different numbers of neutrons.',       hint:'Same element — different neutrons' },
  ],
};

VOCAB['physics']['ks3'] = {

  'Forces and Motion': [
    { term:'Force',              definition:'A push or pull that can change the shape, speed or direction of an object.',     hint:'Push or pull on an object' },
    { term:'Gravity',            definition:'The attractive force between objects with mass — pulls objects towards Earth.',  hint:'Attractive force — pulls to Earth' },
    { term:'Weight',             definition:'The force of gravity acting on an object — measured in newtons.',              hint:'Gravitational force — newtons' },
    { term:'Mass',               definition:'The amount of matter in an object — measured in kilograms.',                  hint:'Amount of matter — kilograms' },
    { term:'Friction',           definition:'A force that opposes the motion of two surfaces in contact.',                hint:'Opposes motion — between surfaces' },
    { term:'Air resistance',     definition:'A frictional force that opposes the motion of objects moving through air.',  hint:'Friction in air — opposes motion' },
    { term:'Upthrust',           definition:'The upward force exerted by a fluid on an object placed in it.',           hint:'Upward force from fluid' },
    { term:'Speed',              definition:'The distance travelled per unit of time — measured in m/s.',              hint:'Distance ÷ time — m/s' },
    { term:'Acceleration',       definition:'The rate at which speed or velocity changes.',                           hint:'Change in speed ÷ time' },
    { term:'Balanced forces',    definition:'When forces acting on an object are equal and opposite, so there is no change in motion.', hint:'Equal and opposite — no movement change' },
    { term:'Unbalanced forces',  definition:'When forces acting on an object are not equal, causing a change in motion.',  hint:'Not equal — causes change in motion' },
    { term:'Newton',             definition:'The unit of force.',                                                    hint:'Unit of force — N' },
    { term:'Pressure',           definition:'The force applied per unit area — measured in pascals.',              hint:'Force ÷ area — pascals' },
    { term:'Moment',             definition:'The turning effect of a force about a pivot — force × distance.',    hint:'Turning effect — force × distance' },
  ],

  'Energy': [
    { term:'Energy',             definition:'The ability to do work or cause change — measured in joules.',            hint:'Ability to do work — joules' },
    { term:'Kinetic energy',     definition:'The energy an object has because it is moving.',                         hint:'Energy of movement' },
    { term:'Potential energy',   definition:'Stored energy — gravitational potential or elastic potential.',         hint:'Stored energy' },
    { term:'Thermal energy',     definition:'The energy stored in the movement of particles — heat energy.',        hint:'Heat energy — particle movement' },
    { term:'Conservation of energy', definition:'Energy cannot be created or destroyed, only transferred.',        hint:'Energy cannot be created or destroyed' },
    { term:'Work done',          definition:'Energy transferred when a force moves an object — force × distance.',  hint:'Force × distance' },
    { term:'Power',              definition:'The rate of energy transfer — measured in watts.',                   hint:'Energy per second — watts' },
    { term:'Conduction',         definition:'The transfer of heat through a material by particle vibration.',    hint:'Heat transfer through material' },
    { term:'Convection',         definition:'The transfer of heat through a fluid by the movement of particles.', hint:'Heat transfer through fluid movement' },
    { term:'Radiation',          definition:'The transfer of heat energy by infrared waves — does not need a medium.',  hint:'Heat transfer by waves — no medium needed' },
    { term:'Insulator',          definition:'A material that does not conduct heat or electricity well.',       hint:'Poor conductor of heat/electricity' },
    { term:'Conductor',          definition:'A material that conducts heat or electricity well.',             hint:'Good conductor of heat/electricity' },
    { term:'Renewable energy',   definition:'Energy from sources that are naturally replenished.',           hint:'Naturally replenished — solar, wind' },
    { term:'Non-renewable energy', definition:'Energy from sources that will run out and cannot be replaced.',  hint:'Will run out — fossil fuels' },
  ],

  'Waves and Light': [
    { term:'Wave',               definition:'A disturbance that transfers energy from one place to another.',         hint:'Transfers energy — not matter' },
    { term:'Amplitude',          definition:'The maximum displacement of a wave from its rest position.',           hint:'Maximum displacement from rest' },
    { term:'Wavelength',         definition:'The distance between two successive identical points on a wave.',     hint:'Peak to peak distance' },
    { term:'Frequency',          definition:'The number of waves passing a point per second — measured in hertz.',  hint:'Waves per second — hertz' },
    { term:'Reflection',         definition:'When a wave bounces back from a surface.',                          hint:'Wave bounces off surface' },
    { term:'Refraction',         definition:'When a wave changes speed and direction as it passes from one medium to another.',  hint:'Wave bends at boundary' },
    { term:'Transverse wave',    definition:'A wave where vibrations are perpendicular to the direction of travel.',  hint:'Vibrations perpendicular to travel' },
    { term:'Longitudinal wave',  definition:'A wave where vibrations are parallel to the direction of travel.',   hint:'Vibrations parallel to travel' },
    { term:'Electromagnetic spectrum', definition:'The family of transverse waves including visible light, radio waves and X-rays.',  hint:'Family of light waves — radio to gamma' },
    { term:'Visible light',      definition:'The part of the electromagnetic spectrum that can be detected by the human eye.',  hint:'EM waves we can see' },
    { term:'Absorption',         definition:'When a wave transfers its energy to a surface rather than being reflected.',  hint:'Energy transferred to surface' },
    { term:'Opaque',             definition:'A material that does not allow light to pass through.',              hint:'Does not transmit light' },
    { term:'Transparent',        definition:'A material that allows light to pass through it.',                  hint:'Allows light to pass through' },
  ],

  'Electricity and Magnetism': [
    { term:'Electric current',   definition:'The flow of electric charge — measured in amperes.',                hint:'Flow of charge — amperes' },
    { term:'Voltage',            definition:'The energy transferred per unit of charge — measured in volts.',   hint:'Energy per charge — volts' },
    { term:'Resistance',         definition:'The opposition to the flow of electric current — measured in ohms.',  hint:'Opposition to current — ohms' },
    { term:'Circuit',            definition:'A closed path through which electric current flows.',              hint:'Closed path for current' },
    { term:'Series circuit',     definition:'A circuit where components are connected in a single loop.',     hint:'Single loop — same current everywhere' },
    { term:'Parallel circuit',   definition:'A circuit where components are in separate branches.',          hint:'Separate branches' },
    { term:'Conductor',          definition:'A material that allows electric current to flow through it easily.',  hint:'Allows current to flow easily' },
    { term:'Insulator',          definition:'A material that does not allow electric current to flow through it.',  hint:'Does not allow current to flow' },
    { term:'Magnet',             definition:'An object that produces a magnetic field and can attract magnetic materials.',  hint:'Produces magnetic field' },
    { term:'Magnetic field',     definition:'The region around a magnet where magnetic forces act.',         hint:'Region of magnetic force' },
    { term:'Electromagnet',      definition:'A magnet created by passing an electric current through a coil of wire.',  hint:'Current in coil = temporary magnet' },
    { term:'Static electricity', definition:'The build-up of electric charge on the surface of an insulating material.',  hint:'Charge build-up on insulator' },
  ],
};

// ────────────────────────────────────────────────────────────
// KS3 MATHS — generic, no board
// ────────────────────────────────────────────────────────────
VOCAB['maths']['ks3'] = {

  'Number': [
    { term:'Integer',            definition:'A whole number — positive, negative or zero.',                            hint:'Whole number — no decimal' },
    { term:'Positive number',    definition:'A number greater than zero.',                                            hint:'Greater than zero' },
    { term:'Negative number',    definition:'A number less than zero.',                                              hint:'Less than zero' },
    { term:'Factor',             definition:'A number that divides exactly into another number.',                    hint:'Divides exactly — no remainder' },
    { term:'Multiple',           definition:'A number in the times table of a given number.',                      hint:'In the times table' },
    { term:'Prime number',       definition:'A number with exactly two factors: 1 and itself.',                   hint:'Only divisible by 1 and itself' },
    { term:'Square number',      definition:'The result of multiplying a number by itself — e.g. 4 × 4 = 16.',  hint:'Number multiplied by itself' },
    { term:'Cube number',        definition:'The result of multiplying a number by itself three times — e.g. 2³ = 8.',  hint:'Number × itself × itself' },
    { term:'Square root',        definition:'A number that when multiplied by itself gives the original number.',  hint:'Reverse of squaring' },
    { term:'HCF',                definition:'Highest Common Factor — the largest factor shared by two or more numbers.',  hint:'Largest shared factor' },
    { term:'LCM',                definition:'Lowest Common Multiple — the smallest multiple shared by two or more numbers.',  hint:'Smallest shared multiple' },
    { term:'Fraction',           definition:'A number expressed as one integer divided by another — e.g. ¾.',   hint:'One number divided by another' },
    { term:'Decimal',            definition:'A number expressed using a decimal point — e.g. 0.75.',          hint:'Uses a decimal point' },
    { term:'Percentage',         definition:'A number expressed as parts per hundred.',                       hint:'Out of 100' },
    { term:'Ratio',              definition:'A comparison of two or more quantities — written as a:b.',      hint:'Comparison written as a:b' },
    { term:'Proportion',         definition:'A part compared to the whole, or a statement that two ratios are equal.',  hint:'Part to whole — or equal ratios' },
  ],

  'Algebra': [
    { term:'Variable',           definition:'A letter used to represent an unknown or changing value.',              hint:'Letter representing unknown value' },
    { term:'Expression',         definition:'A combination of numbers, variables and operations without an equals sign.',  hint:'Numbers and letters — no equals' },
    { term:'Equation',           definition:'A mathematical statement showing two expressions are equal.',          hint:'Two expressions equal — has = sign' },
    { term:'Formula',            definition:'A rule written using letters and numbers to show a relationship.',    hint:'Rule using letters — e.g. A = lw' },
    { term:'Expand',             definition:'To multiply out brackets.',                                          hint:'Multiply out the brackets' },
    { term:'Simplify',           definition:'To collect like terms and write an expression in its simplest form.',  hint:'Collect like terms — simplest form' },
    { term:'Substitute',         definition:'To replace a variable with a number to evaluate an expression.',   hint:'Replace letter with number' },
    { term:'Solve',              definition:'To find the value of the unknown that makes an equation true.',   hint:'Find the value of the unknown' },
    { term:'Sequence',           definition:'An ordered list of numbers following a pattern or rule.',        hint:'Ordered list following a rule' },
    { term:'Term',               definition:'A number or variable, or a product of numbers and variables, in an expression.',  hint:'Each separate part of an expression' },
    { term:'Coefficient',        definition:'The number multiplied by a variable in a term — e.g. 3 in 3x.',  hint:'Number in front of a variable' },
    { term:'Inequality',         definition:'A mathematical statement showing that one value is greater or less than another.',  hint:'< or > — not equal' },
    { term:'Coordinates',        definition:'A pair of numbers (x, y) describing the position of a point on a grid.',  hint:'(x, y) position on a grid' },
    { term:'Gradient',           definition:'The steepness of a line on a graph.',                           hint:'Steepness of a line' },
  ],

  'Geometry and Measures': [
    { term:'Angle',              definition:'The amount of turn between two lines meeting at a point — measured in degrees.',  hint:'Amount of turn — degrees' },
    { term:'Acute angle',        definition:'An angle between 0° and 90°.',                                    hint:'Less than 90°' },
    { term:'Obtuse angle',       definition:'An angle between 90° and 180°.',                                hint:'Between 90° and 180°' },
    { term:'Reflex angle',       definition:'An angle greater than 180°.',                                  hint:'Greater than 180°' },
    { term:'Parallel lines',     definition:'Lines that never meet — always the same distance apart.',     hint:'Never meet — equal distance apart' },
    { term:'Perpendicular',      definition:'Lines that meet at a right angle (90°).',                    hint:'Meet at 90°' },
    { term:'Perimeter',          definition:'The total distance around the outside of a shape.',         hint:'Distance around the outside' },
    { term:'Area',               definition:'The amount of space inside a 2D shape.',                  hint:'Space inside a 2D shape' },
    { term:'Volume',             definition:'The amount of space inside a 3D shape.',                 hint:'Space inside a 3D shape' },
    { term:'Symmetry',           definition:'A shape has symmetry if it looks the same after a reflection or rotation.',  hint:'Looks the same after flip/turn' },
    { term:'Polygon',            definition:'A closed 2D shape with straight sides.',                hint:'Closed 2D shape — straight sides' },
    { term:'Congruent',          definition:'Shapes that are identical in shape and size.',         hint:'Identical shape and size' },
    { term:'Similar',            definition:'Shapes with the same angles but different sizes.',   hint:'Same shape — different size' },
    { term:'Pythagoras',         definition:'In a right-angled triangle: a² + b² = c².',         hint:'a² + b² = c² — right-angled triangle' },
    { term:'Circumference',      definition:'The perimeter of a circle — πd.',                  hint:'Perimeter of a circle' },
    { term:'Diameter',           definition:'The distance across a circle through its centre.',  hint:'Across circle through centre' },
    { term:'Radius',             definition:'The distance from the centre to the edge of a circle.',  hint:'Centre to edge of circle' },
  ],

  'Statistics and Probability': [
    { term:'Data',               definition:'Information collected for analysis.',                            hint:'Collected information' },
    { term:'Mean',               definition:'The average found by adding all values and dividing by how many there are.',  hint:'Sum ÷ number of values' },
    { term:'Median',             definition:'The middle value when data is arranged in order.',             hint:'Middle value when ordered' },
    { term:'Mode',               definition:'The most common value in a data set.',                       hint:'Most common value' },
    { term:'Range',              definition:'The difference between the largest and smallest values.',   hint:'Largest − smallest' },
    { term:'Frequency',          definition:'How many times a value occurs in a data set.',            hint:'How many times it occurs' },
    { term:'Bar chart',          definition:'A graph using rectangular bars to show frequencies of categories.',  hint:'Rectangular bars showing frequency' },
    { term:'Pie chart',          definition:'A circular chart divided into sectors to show proportions.',  hint:'Circle divided into sectors' },
    { term:'Scatter graph',      definition:'A graph plotting two variables to see if there is a relationship.',  hint:'Two variables plotted — shows relationship' },
    { term:'Correlation',        definition:'A relationship or pattern between two variables.',         hint:'Pattern between two variables' },
    { term:'Probability',        definition:'A measure of how likely an event is — from 0 (impossible) to 1 (certain).',  hint:'Likelihood — 0 to 1' },
    { term:'Outcome',            definition:'A possible result of a trial or experiment.',            hint:'Possible result' },
    { term:'Sample space',       definition:'The set of all possible outcomes of an experiment.',   hint:'All possible outcomes listed' },
  ],
};

// ────────────────────────────────────────────────────────────
// KS3 ENGLISH — generic
// ────────────────────────────────────────────────────────────
VOCAB['english']['ks3'] = {

  'Language Techniques': [
    { term:'Simile',             definition:'A comparison using "like" or "as".',                                      hint:'Comparison using like or as' },
    { term:'Metaphor',           definition:'A direct comparison — saying one thing is another.',                     hint:'Direct comparison — one thing is another' },
    { term:'Personification',    definition:'Giving human feelings or actions to non-human things.',                 hint:'Human qualities to non-human things' },
    { term:'Alliteration',       definition:'Repetition of the same consonant sound at the start of nearby words.',  hint:'Same starting sound repeated' },
    { term:'Onomatopoeia',       definition:'A word that sounds like the noise it describes.',                      hint:'Word sounds like the noise' },
    { term:'Rhyme',              definition:'Words that end with the same sound.',                                  hint:'Same ending sound' },
    { term:'Rhythm',             definition:'A regular pattern of beats or stresses in speech or writing.',        hint:'Regular pattern of beats' },
    { term:'Repetition',         definition:'Using the same word or phrase more than once for effect.',           hint:'Same word repeated' },
    { term:'Hyperbole',          definition:'Deliberate exaggeration for emphasis.',                             hint:'Deliberate exaggeration' },
    { term:'Imagery',            definition:'Language that creates a vivid mental picture using the senses.',   hint:'Vivid description — uses senses' },
    { term:'Tone',               definition:'The mood or attitude of a piece of writing.',                     hint:'Mood or attitude in writing' },
    { term:'Adjective',          definition:'A word that describes a noun.',                                  hint:'Describes a noun' },
    { term:'Adverb',             definition:'A word that describes a verb, adjective or another adverb.',    hint:'Describes a verb or adjective' },
    { term:'Noun',               definition:'A word that names a person, place, thing or idea.',           hint:'Names a person, place or thing' },
    { term:'Verb',               definition:'A doing or being word.',                                    hint:'Action or state — doing word' },
  ],

  'Reading and Writing': [
    { term:'Narrative',          definition:'A story or account of events.',                                      hint:'A told story' },
    { term:'Character',          definition:'A person (or animal) in a story.',                                  hint:'Person in a story' },
    { term:'Setting',            definition:'The time and place where a story takes place.',                    hint:'Time and place of story' },
    { term:'Plot',               definition:'The sequence of events in a story.',                             hint:'Sequence of events' },
    { term:'Theme',              definition:'The main idea or message in a piece of writing.',               hint:'Main idea or message' },
    { term:'Viewpoint',          definition:'The perspective from which a story is told.',                  hint:'Perspective of the narrator' },
    { term:'First person',       definition:'Narrating using "I" — the narrator is a character.',         hint:'Narrating using I' },
    { term:'Third person',       definition:'Narrating using "he", "she" or "they" — narrator is outside the story.',  hint:'Narrating using he/she/they' },
    { term:'Audience',           definition:'The person or people a text is written for.',               hint:'Who the text is for' },
    { term:'Purpose',            definition:'The reason a text was written.',                          hint:'Why the text was written' },
    { term:'Formal language',    definition:'Language that is serious and follows grammatical rules — used in official contexts.',  hint:'Serious language — official contexts' },
    { term:'Informal language',  definition:'Casual, everyday language — used with friends and family.',  hint:'Casual everyday language' },
    { term:'Structure',          definition:'How a piece of writing is organised.',                   hint:'How writing is organised' },
    { term:'Paragraph',          definition:'A group of sentences about the same topic.',           hint:'Group of sentences — same topic' },
    { term:'Dialogue',           definition:'Conversation between characters, shown with speech marks.',  hint:'Characters speaking — speech marks' },
  ],

  'Grammar': [
    { term:'Sentence',           definition:'A group of words that makes complete sense — contains a subject and a verb.',  hint:'Complete sense — subject and verb' },
    { term:'Subject',            definition:'The person or thing that the sentence is about.',                           hint:'Who or what the sentence is about' },
    { term:'Object',             definition:'The person or thing that the action of the verb is done to.',             hint:'Receives the action of the verb' },
    { term:'Clause',             definition:'A group of words containing a subject and a verb.',                      hint:'Contains subject and verb' },
    { term:'Phrase',             definition:'A group of words that does not contain a verb.',                        hint:'Group of words — no verb' },
    { term:'Punctuation',        definition:'Marks used in writing to organise and clarify meaning.',               hint:'Marks organising meaning in writing' },
    { term:'Apostrophe',         definition:'A punctuation mark used to show possession or contraction.',         hint:'Shows possession or contraction' },
    { term:'Conjunction',        definition:'A word that joins clauses or sentences — e.g. and, but, because.',  hint:'Joining word — and, but, because' },
    { term:'Preposition',        definition:'A word showing the relationship between a noun and another word — e.g. in, on, under.',  hint:'Shows relationship — in, on, under' },
    { term:'Synonym',            definition:'A word with the same or similar meaning to another word.',         hint:'Same meaning — different word' },
    { term:'Antonym',            definition:'A word with the opposite meaning to another word.',             hint:'Opposite meaning' },
    { term:'Tense',              definition:'The form of a verb that shows when something happened.',       hint:'Shows when — past, present, future' },
  ],
};

// ────────────────────────────────────────────────────────────
// KS3 HISTORY — generic
// ────────────────────────────────────────────────────────────
VOCAB['history']['ks3'] = {

  'Historical Skills and Concepts': [
    { term:'Primary source',     definition:'Evidence created at the time of the events — e.g. letters, photographs, artefacts.',  hint:'Created at the time — original evidence' },
    { term:'Secondary source',   definition:'Evidence created after the event, analysing or interpreting what happened.',        hint:'Created after — analysis of the past' },
    { term:'Cause',              definition:'A reason why an event happened.',                                                  hint:'Reason why something happened' },
    { term:'Consequence',        definition:'A result or effect of an event.',                                                 hint:'Result of an event' },
    { term:'Change',             definition:'Something that is different from before.',                                       hint:'Something that became different' },
    { term:'Continuity',         definition:'Something that stayed the same over time.',                                     hint:'Something that stayed the same' },
    { term:'Chronology',         definition:'Events arranged in the order they happened.',                                  hint:'Events in time order' },
    { term:'Bias',               definition:'A one-sided view that favours one group or idea.',                           hint:'One-sided — favours one view' },
    { term:'Reliability',        definition:'How trustworthy a source of information is.',                               hint:'How trustworthy a source is' },
    { term:'Significance',       definition:'The importance or impact of a person or event in history.',                hint:'Historical importance' },
    { term:'Interpretation',     definition:'A view or explanation of what happened in history — different historians may disagree.',  hint:'A view of what happened in history' },
    { term:'Evidence',           definition:'Information used to support a claim or argument about the past.',         hint:'Information supporting a claim' },
  ],

  'Medieval England': [
    { term:'Feudal system',      definition:'The social hierarchy of medieval England with the king at the top and peasants at the bottom.',  hint:'Social hierarchy — king at top' },
    { term:'Monarch',            definition:'A king or queen who rules a country.',                                hint:'King or queen — rules a country' },
    { term:'Noble',              definition:'A member of the upper class — e.g. lord or baron — who held land from the king.',  hint:'Upper class landowner' },
    { term:'Serf / peasant',     definition:'A poor farmer who worked land owned by a lord and had few rights.',    hint:'Poor farmer — worked lord\'s land' },
    { term:'Domesday Book',      definition:'A detailed survey of England ordered by William I in 1086 to record land and resources.',  hint:'William I\'s survey of England — 1086' },
    { term:'Crusade',            definition:'A series of religious wars fought by Christian Europeans to capture the Holy Land.',  hint:'Religious wars — Holy Land' },
    { term:'Plague',             definition:'A deadly disease — the Black Death of 1348–49 killed about one third of Europe\'s population.',  hint:'Deadly disease — Black Death 1348' },
    { term:'Magna Carta',        definition:'A charter signed by King John in 1215 limiting royal power and establishing rights.',  hint:'Charter limiting royal power — 1215' },
    { term:'Parliament',         definition:'The group of people who make laws — developed during the medieval period.',  hint:'Law-making group' },
    { term:'Pope',               definition:'The head of the Roman Catholic Church.',                             hint:'Head of the Catholic Church' },
  ],

  'Early Modern Period': [
    { term:'Reformation',        definition:'A 16th-century religious movement that led to the creation of Protestantism.',  hint:'Religious split — created Protestantism' },
    { term:'Renaissance',        definition:'A period of renewed interest in classical art, science and learning from the 14th to 17th centuries.',  hint:'Revival of art and learning — 14th–17th c.' },
    { term:'Protestant',         definition:'A Christian who broke away from the Catholic Church following the Reformation.',  hint:'Non-Catholic Christian — after Reformation' },
    { term:'Catholic',           definition:'A member of the Roman Catholic Church, led by the Pope.',                hint:'Roman Catholic — led by Pope' },
    { term:'Empire',             definition:'A group of countries or territories controlled by one ruler or country.',  hint:'Group of territories under one ruler' },
    { term:'Colonisation',       definition:'The process by which a country takes control of another territory and settles there.',  hint:'Taking control of other territories' },
    { term:'Slavery',            definition:'The practice of owning people as property and forcing them to work without pay.',  hint:'Owning people — forced unpaid labour' },
    { term:'Industrial Revolution', definition:'The period of rapid industrialisation beginning in Britain in the late 18th century.',  hint:'Rapid industrialisation — 18th–19th c.' },
    { term:'Democracy',          definition:'A system of government where citizens vote for their representatives.',  hint:'Citizens vote for government' },
    { term:'Revolution',         definition:'A sudden and fundamental change in government, society or ideas.',  hint:'Sudden fundamental change' },
  ],

  'The World Wars': [
    { term:'World War One',      definition:'The global war of 1914–1918, fought mainly in Europe.',                   hint:'Global war 1914–1918' },
    { term:'World War Two',      definition:'The global war of 1939–1945 involving most of the world\'s nations.',    hint:'Global war 1939–1945' },
    { term:'Trench warfare',     definition:'A type of combat where soldiers fight from long ditches dug into the ground.',  hint:'Fighting from ditches in the ground' },
    { term:'Treaty of Versailles', definition:'The peace treaty of 1919 that ended World War One and imposed harsh terms on Germany.',  hint:'Peace treaty ending WW1 — 1919' },
    { term:'Propaganda',         definition:'Biased information used by governments to influence public opinion.',  hint:'Biased government information' },
    { term:'Rationing',          definition:'Limiting the amount of food or goods available to ensure fair distribution during wartime.',  hint:'Limiting food/goods during war' },
    { term:'Evacuation',         definition:'The process of moving people from dangerous areas to safer ones — especially children in WW2.',  hint:'Moving people to safety during war' },
    { term:'D-Day',              definition:'The Allied invasion of Normandy on 6 June 1944 — a turning point in WW2.',  hint:'Allied Normandy invasion — June 1944' },
    { term:'Holocaust',          definition:'The systematic murder of six million Jews and millions of others by the Nazi regime.',  hint:'Nazi systematic genocide' },
    { term:'Armistice',          definition:'An agreement to stop fighting — WW1 ended with an armistice on 11 November 1918.',  hint:'Agreement to stop fighting' },
  ],
};

// ────────────────────────────────────────────────────────────
// KS3 GEOGRAPHY — generic
// ────────────────────────────────────────────────────────────
VOCAB['geography']['ks3'] = {

  'Physical Geography': [
    { term:'Tectonic plate',     definition:'A large piece of the Earth\'s crust that moves slowly.',                 hint:'Moving piece of Earth\'s crust' },
    { term:'Earthquake',         definition:'A sudden violent shaking of the ground caused by movement of tectonic plates.',  hint:'Ground shaking — plate movement' },
    { term:'Volcano',            definition:'An opening in the Earth\'s surface through which lava and gases erupt.',  hint:'Opening — lava erupts' },
    { term:'Erosion',            definition:'The wearing away of rocks and soil by water, wind or ice.',            hint:'Wearing away by water/wind/ice' },
    { term:'Weathering',         definition:'The breaking down of rocks in place by physical or chemical processes.',  hint:'Breaking down rocks in place' },
    { term:'River',              definition:'A large natural flow of water towards the sea.',                      hint:'Natural water flow to the sea' },
    { term:'Flood',              definition:'When water overflows its banks and covers normally dry land.',       hint:'Water overflows onto dry land' },
    { term:'Climate',            definition:'The average weather conditions of a place over a long period.',    hint:'Average weather over a long time' },
    { term:'Weather',            definition:'The atmospheric conditions in a place at a specific time.',       hint:'Conditions right now' },
    { term:'Water cycle',        definition:'The continuous movement of water between the atmosphere, land and sea.',  hint:'Water moving through atmosphere and land' },
    { term:'Evaporation',        definition:'The process of liquid water turning into water vapour.',         hint:'Liquid → water vapour' },
    { term:'Condensation',       definition:'The process of water vapour turning back into liquid water.',   hint:'Water vapour → liquid' },
    { term:'Precipitation',      definition:'Water falling from the atmosphere — rain, snow, sleet or hail.',  hint:'Water falling from atmosphere' },
    { term:'Glacier',            definition:'A large, slow-moving body of ice.',                            hint:'Large slow-moving ice' },
    { term:'Biome',              definition:'A large-scale ecosystem with distinctive climate, plants and animals.',  hint:'Large ecosystem — distinctive climate' },
  ],

  'Human Geography': [
    { term:'Population',         definition:'The number of people living in an area.',                           hint:'Number of people in an area' },
    { term:'Migration',          definition:'The movement of people from one place to another.',               hint:'People moving from place to place' },
    { term:'Urbanisation',       definition:'The growth of towns and cities as more people move to urban areas.',  hint:'Growth of cities — rural to urban' },
    { term:'Rural',              definition:'Relating to the countryside.',                                  hint:'Countryside area' },
    { term:'Urban',              definition:'Relating to towns and cities.',                                hint:'Town or city area' },
    { term:'Settlement',         definition:'A place where people live — from a small hamlet to a large city.',  hint:'Where people live — any size' },
    { term:'Economy',            definition:'The system of production, trade and consumption in a country.',  hint:'System of production and trade' },
    { term:'Trade',              definition:'The exchange of goods and services between countries.',        hint:'Exchange of goods between countries' },
    { term:'Development',        definition:'The level of economic and social progress in a country.',    hint:'Economic and social progress' },
    { term:'Poverty',            definition:'The state of lacking basic needs such as food, shelter and income.',  hint:'Lacking basic needs' },
    { term:'Sustainability',     definition:'Using resources in a way that doesn\'t prevent future generations from meeting their needs.',  hint:'Using resources without harming future' },
    { term:'Deforestation',      definition:'The removal of trees from a forested area.',                hint:'Removing forest trees' },
    { term:'Globalisation',      definition:'The increasing connection between countries through trade, culture and communication.',  hint:'Countries becoming more connected' },
  ],

  'Map Skills and Fieldwork': [
    { term:'Map',                definition:'A flat diagram representing an area from above.',                hint:'Flat diagram of an area from above' },
    { term:'Scale',              definition:'The ratio between a distance on a map and the real distance.',  hint:'Map distance ÷ real distance' },
    { term:'Contour line',       definition:'A line on a map connecting points of equal height.',           hint:'Line connecting equal heights' },
    { term:'Grid reference',     definition:'A number system used to pinpoint a location on a map.',      hint:'Numbers locating a point on map' },
    { term:'Compass',            definition:'A tool showing direction — North, South, East, West.',      hint:'Shows direction — N, S, E, W' },
    { term:'Latitude',           definition:'The distance north or south of the Equator — measured in degrees.',  hint:'Distance north/south of Equator' },
    { term:'Longitude',          definition:'The distance east or west of the Prime Meridian — measured in degrees.',  hint:'Distance east/west of Prime Meridian' },
    { term:'Key / legend',       definition:'An explanation of the symbols and colours used on a map.',  hint:'Explains map symbols and colours' },
    { term:'Fieldwork',          definition:'The collection of data in the real world outside the classroom.',  hint:'Collecting data in the real world' },
    { term:'Hypothesis',         definition:'A prediction that can be tested through investigation.',   hint:'Prediction to be tested' },
    { term:'Data',               definition:'Facts and statistics collected for analysis.',           hint:'Facts and statistics for analysis' },
  ],
};

// ────────────────────────────────────────────────────────────
// BIOLOGY — AQA A-Level (7402)
// Topics: 1 Biological Molecules, 2 Cells, 3 Organisms Exchange,
//         4 Genetic Information, 5 Energy Transfers,
//         6 Organisms Respond, 7 Genetics Populations,
//         8 Control of Gene Expression
// Source: AQA 7402 spec + PMT A-level definitions
// ────────────────────────────────────────────────────────────
VOCAB['biology']['aqa-alevel'] = {

  'Biological Molecules': [
    { term:'Monomer',              definition:'A small molecule that can be joined to others to form a polymer.',                              hint:'Building block of a polymer' },
    { term:'Polymer',              definition:'A large molecule made from many repeating monomer units joined by covalent bonds.',            hint:'Long chain of monomers' },
    { term:'Condensation reaction', definition:'A reaction joining two molecules together with the elimination of water.',                   hint:'Joins molecules — releases water' },
    { term:'Hydrolysis',           definition:'The breaking of chemical bonds by the addition of water.',                                   hint:'Breaks bonds using water' },
    { term:'Monosaccharide',       definition:'The monomer unit of carbohydrates — e.g. glucose, fructose, galactose.',                    hint:'Monomer of carbohydrates — e.g. glucose' },
    { term:'Disaccharide',         definition:'Two monosaccharides joined by a glycosidic bond — e.g. maltose, sucrose, lactose.',         hint:'Two monosaccharides — glycosidic bond' },
    { term:'Polysaccharide',       definition:'A polymer of monosaccharides joined by glycosidic bonds — e.g. starch, glycogen, cellulose.',  hint:'Polymer of monosaccharides' },
    { term:'Glycosidic bond',      definition:'A covalent bond between two monosaccharides formed by a condensation reaction.',           hint:'Bond between monosaccharides' },
    { term:'Amino acid',           definition:'The monomer of proteins — contains an amino group, carboxyl group and R group.',          hint:'Monomer of proteins' },
    { term:'Peptide bond',         definition:'A covalent bond formed between two amino acids by a condensation reaction.',             hint:'Bond between amino acids' },
    { term:'Polypeptide',          definition:'A chain of amino acids joined by peptide bonds.',                                       hint:'Chain of amino acids' },
    { term:'Primary structure',    definition:'The sequence of amino acids in a polypeptide chain.',                                  hint:'Amino acid sequence' },
    { term:'Secondary structure',  definition:'The alpha helix or beta pleated sheet formed by hydrogen bonding within a polypeptide.',  hint:'Alpha helix or beta sheet' },
    { term:'Tertiary structure',   definition:'The three-dimensional folding of a polypeptide, maintained by various bonds.',         hint:'3D folded shape of protein' },
    { term:'Quaternary structure', definition:'The association of two or more polypeptide chains into one functional protein.',      hint:'Two or more polypeptides together' },
    { term:'Triglyceride',         definition:'A lipid formed from one glycerol and three fatty acids joined by ester bonds.',      hint:'Glycerol + 3 fatty acids — ester bonds' },
    { term:'Phospholipid',         definition:'A modified triglyceride with one fatty acid replaced by a phosphate group — forms cell membranes.',  hint:'Modified triglyceride — forms membranes' },
    { term:'Ester bond',           definition:'The bond formed between glycerol and fatty acids in the synthesis of triglycerides.',  hint:'Bond in triglycerides — glycerol + fatty acid' },
    { term:'Saturated fatty acid', definition:'A fatty acid with no carbon-carbon double bonds — all carbons are single-bonded.',  hint:'No double bonds — all single C-C bonds' },
    { term:'Unsaturated fatty acid', definition:'A fatty acid with one or more carbon-carbon double bonds.',                     hint:'Has C=C double bonds' },
    { term:'Nucleotide',           definition:'The monomer of nucleic acids — consists of a pentose sugar, phosphate group and nitrogenous base.',  hint:'Monomer of DNA/RNA — sugar + phosphate + base' },
    { term:'Complementary base pairing', definition:'The specific pairing of bases in DNA: adenine with thymine and cytosine with guanine.',  hint:'A-T and C-G pair in DNA' },
    { term:'Induced fit model',    definition:'Enzyme model where the active site changes shape slightly to accommodate the substrate.',  hint:'Active site changes shape to fit substrate' },
    { term:'Competitive inhibitor', definition:'A molecule structurally similar to the substrate that binds to the enzyme\'s active site.',  hint:'Binds active site — similar shape to substrate' },
    { term:'Non-competitive inhibitor', definition:'A molecule that binds to an allosteric site on the enzyme, changing the shape of the active site.', hint:'Binds allosteric site — changes active site shape' },
    { term:'Cofactor',             definition:'A non-protein molecule required for an enzyme to function.',                      hint:'Non-protein — required by enzyme' },
    { term:'Coenzyme',             definition:'An organic cofactor — often a vitamin derivative — that carries chemical groups between enzymes.',  hint:'Organic cofactor — carries chemical groups' },
  ],

  'Cell Structure and Division': [
    { term:'Cell fractionation',   definition:'The process of breaking cells open and separating organelles by differential centrifugation.',  hint:'Breaking cells — separating organelles' },
    { term:'Ultracentrifugation',  definition:'The use of high-speed centrifugation to separate cell components by density.',              hint:'High-speed separation of organelles' },
    { term:'Fluid mosaic model',   definition:'The model of the cell membrane — a phospholipid bilayer with embedded proteins.',           hint:'Phospholipid bilayer with proteins' },
    { term:'Intrinsic protein',    definition:'A protein that spans the full width of the cell membrane — e.g. channel proteins.',        hint:'Spans the membrane — channel proteins' },
    { term:'Extrinsic protein',    definition:'A protein on one surface of the cell membrane — e.g. for cell signalling.',              hint:'On surface only — cell signalling' },
    { term:'Cholesterol',          definition:'A lipid molecule in the cell membrane that regulates fluidity.',                        hint:'Lipid in membrane — regulates fluidity' },
    { term:'Cell cycle',           definition:'The sequence of events — interphase and mitosis — by which a cell grows and divides.',   hint:'Interphase + mitosis — cell growth and division' },
    { term:'Interphase',           definition:'The phase of the cell cycle in which the cell grows, replicates DNA and prepares for division.',  hint:'Cell grows and copies DNA' },
    { term:'Prophase',             definition:'The first stage of mitosis — chromosomes condense and the spindle forms.',             hint:'Chromosomes condense — spindle forms' },
    { term:'Metaphase',            definition:'Mitosis stage where chromosomes line up at the cell equator.',                       hint:'Chromosomes line up at equator' },
    { term:'Anaphase',             definition:'Mitosis stage where sister chromatids are pulled to opposite poles.',               hint:'Chromatids pulled to opposite poles' },
    { term:'Telophase',            definition:'Final stage of mitosis — nuclear envelopes reform around two sets of chromosomes.',  hint:'Nuclear envelopes reform' },
    { term:'Cytokinesis',          definition:'The division of the cytoplasm following nuclear division to produce two daughter cells.',  hint:'Cytoplasm divides — two daughter cells' },
    { term:'Apoptosis',            definition:'Programmed cell death — a controlled process by which cells self-destruct.',       hint:'Controlled cell death — programmed' },
    { term:'Semi-conservative replication', definition:'DNA replication in which each new molecule contains one original strand and one new strand.',  hint:'Each new DNA has one old and one new strand' },
  ],

  'Exchange and Transport': [
    { term:'Surface area to volume ratio', definition:'A measure that affects the rate of exchange — smaller organisms have a higher ratio.',  hint:'Smaller organism = higher ratio' },
    { term:'Fick\'s law',          definition:'The rate of diffusion is proportional to surface area × concentration difference ÷ thickness.',  hint:'Rate ∝ SA × conc. diff. ÷ thickness' },
    { term:'Alveolus',             definition:'A tiny air sac in the lung with a large surface area for gas exchange.',              hint:'Air sac in lung — gas exchange' },
    { term:'Haemoglobin',          definition:'A globular protein in red blood cells that carries oxygen — consists of four polypeptide chains with haem groups.',  hint:'Oxygen-carrying protein — four polypeptides' },
    { term:'Oxyhaemoglobin',       definition:'Haemoglobin combined with oxygen — formed in the lungs.',                        hint:'Haemoglobin + oxygen' },
    { term:'Bohr effect',          definition:'The effect of CO₂ concentration on haemoglobin\'s oxygen affinity — high CO₂ reduces affinity.',  hint:'CO₂ reduces Hb oxygen affinity' },
    { term:'Transpiration',        definition:'The loss of water vapour from plant leaves by evaporation through stomata.',     hint:'Water vapour lost from leaves' },
    { term:'Cohesion-tension theory', definition:'Water moves up the xylem due to transpiration pull creating tension — water molecules cohere by hydrogen bonds.',  hint:'Transpiration pull + cohesion of water' },
    { term:'Apoplast pathway',     definition:'Water movement through cell walls and intercellular spaces.',                 hint:'Water through cell walls' },
    { term:'Symplast pathway',     definition:'Water movement through the cytoplasm and plasmodesmata of cells.',           hint:'Water through cytoplasm — plasmodesmata' },
    { term:'Casparian strip',      definition:'A waxy barrier in the endodermis of roots that forces water into the symplast pathway.',  hint:'Waxy barrier in root endodermis' },
    { term:'Source',               definition:'In phloem transport — a region of active photosynthesis or starch hydrolysis producing sucrose.',  hint:'Where sucrose is loaded into phloem' },
    { term:'Sink',                 definition:'In phloem transport — a region that uses or stores sucrose.',                hint:'Where sucrose is unloaded from phloem' },
    { term:'Mass flow hypothesis', definition:'The proposed mechanism of phloem transport — sucrose moves from source to sink along a pressure gradient.',  hint:'Sucrose moves along pressure gradient in phloem' },
    { term:'Cardiac cycle',        definition:'The sequence of events in one heartbeat — atrial systole, ventricular systole and diastole.',  hint:'Atrial systole → ventricular systole → diastole' },
    { term:'Atheroma',             definition:'A fatty deposit within the wall of an artery, reducing the lumen and restricting blood flow.',  hint:'Fatty deposit in artery wall' },
  ],

  'Genetics and Variation': [
    { term:'Gene',                 definition:'A sequence of DNA bases that codes for a polypeptide or functional RNA molecule.',              hint:'DNA sequence coding for a polypeptide' },
    { term:'Allele',               definition:'An alternative form of a gene, arising from mutation.',                                       hint:'Alternative form of a gene' },
    { term:'Locus',                definition:'The fixed position of a gene on a chromosome.',                                              hint:'Fixed position of gene on chromosome' },
    { term:'Codon',                definition:'A sequence of three bases on mRNA that codes for a specific amino acid.',                   hint:'Three mRNA bases — one amino acid' },
    { term:'Anticodon',            definition:'A triplet of bases on tRNA complementary to a specific mRNA codon.',                       hint:'Three tRNA bases — complementary to codon' },
    { term:'Transcription',        definition:'The synthesis of mRNA from a DNA template in the nucleus.',                               hint:'DNA → mRNA in nucleus' },
    { term:'Translation',          definition:'The synthesis of a polypeptide at a ribosome using the mRNA template.',                  hint:'mRNA → polypeptide at ribosome' },
    { term:'Pre-mRNA',             definition:'The initial RNA transcript before introns are removed — also called primary transcript.',  hint:'RNA before introns removed' },
    { term:'Intron',               definition:'A non-coding sequence of DNA within a gene that is transcribed but spliced out before translation.',  hint:'Non-coding DNA — spliced out of mRNA' },
    { term:'Exon',                 definition:'A coding sequence of DNA within a gene that is retained in mature mRNA.',                hint:'Coding DNA — kept in mRNA' },
    { term:'Meiosis',              definition:'Cell division producing four haploid genetically unique cells — gametes.',              hint:'Produces four haploid genetically different cells' },
    { term:'Crossing over',        definition:'The exchange of segments between non-sister chromatids of homologous chromosomes during meiosis.',  hint:'Exchange of chromatid segments in meiosis' },
    { term:'Independent assortment', definition:'The random distribution of homologous chromosome pairs to daughter cells during meiosis.',  hint:'Random separation of homologues in meiosis' },
    { term:'Chi-squared test',     definition:'A statistical test used to determine whether observed results differ significantly from expected results.',  hint:'Statistical test — observed vs expected' },
    { term:'Hardy-Weinberg principle', definition:'In the absence of evolutionary pressures, allele and genotype frequencies remain constant from generation to generation.',  hint:'Allele frequencies stable without evolution' },
    { term:'Genetic bottleneck',   definition:'A sharp reduction in population size that dramatically reduces genetic diversity.',      hint:'Population crash → reduced genetic diversity' },
    { term:'Founder effect',       definition:'Reduced genetic diversity when a small number of individuals colonise a new area.',    hint:'Small group colonises new area — low diversity' },
    { term:'Speciation',           definition:'The formation of new species from existing ones, through reproductive isolation.',     hint:'New species from reproductive isolation' },
    { term:'Allopatric speciation', definition:'Speciation that occurs when populations are geographically separated.',             hint:'Speciation — geographic separation' },
    { term:'Sympatric speciation', definition:'Speciation that occurs within the same geographic area due to reproductive isolation.',  hint:'Speciation — same area — reproductive isolation' },
  ],

  'Energy Transfers and Ecosystems': [
    { term:'Photosynthesis',       definition:'The process by which light energy is used to convert CO₂ and water into glucose and oxygen.',  hint:'Light → glucose — in chloroplast' },
    { term:'Light-dependent reaction', definition:'The stage of photosynthesis occurring in the thylakoid membranes — produces ATP, NADPH and oxygen.',  hint:'Thylakoids — produces ATP and NADPH' },
    { term:'Light-independent reaction', definition:'The Calvin cycle — the stage of photosynthesis in the stroma using ATP and NADPH to reduce CO₂ to GP, then GALP.',  hint:'Calvin cycle — CO₂ fixed in stroma' },
    { term:'ATP',                  definition:'Adenosine triphosphate — the universal energy currency of cells.',                    hint:'Universal energy currency of cells' },
    { term:'Photophosphorylation', definition:'The production of ATP from ADP and Pi using light energy in the thylakoid membranes.',  hint:'ATP made using light energy' },
    { term:'Photoionisation',      definition:'The splitting of water by light energy to release electrons, protons and oxygen.',  hint:'Water split by light — releases O₂' },
    { term:'Glycolysis',           definition:'The first stage of respiration — glucose is broken down into two pyruvate molecules in the cytoplasm.',  hint:'Glucose → pyruvate in cytoplasm' },
    { term:'Krebs cycle',          definition:'A series of reactions in the mitochondrial matrix that oxidise acetyl-CoA to produce ATP, NADH and CO₂.',  hint:'Matrix reactions — acetyl-CoA oxidised' },
    { term:'Oxidative phosphorylation', definition:'ATP synthesis using the energy from NADH and FADH₂ oxidation via the electron transport chain.',  hint:'ATP synthesis — electron transport chain' },
    { term:'Chemiosmosis',         definition:'The flow of H⁺ ions through ATP synthase down an electrochemical gradient, driving ATP synthesis.',  hint:'H⁺ flow through ATP synthase → ATP' },
    { term:'Gross primary production', definition:'The total amount of organic matter produced by photosynthesis per unit area per unit time.',  hint:'Total photosynthetic output' },
    { term:'Net primary production', definition:'GPP minus the energy lost by the plants in respiration.',                      hint:'GPP − respiration = NPP' },
    { term:'Nitrogen cycle',       definition:'The cycling of nitrogen through living organisms and the environment, involving fixation, nitrification and denitrification.',  hint:'Nitrogen recycled through ecosystem' },
    { term:'Nitrification',        definition:'The oxidation of ammonia to nitrites and then nitrates by nitrifying bacteria.',  hint:'Ammonia → nitrites → nitrates' },
    { term:'Denitrification',      definition:'The conversion of nitrates back to nitrogen gas by denitrifying bacteria in anaerobic conditions.',  hint:'Nitrates → N₂ gas — anaerobic conditions' },
  ],

  'Organisms and their Environment': [
    { term:'Population',           definition:'All the organisms of one species living in one place at one time.',                hint:'All of one species — one place — one time' },
    { term:'Community',            definition:'All the populations of different species living in the same place at the same time.',  hint:'All species in a habitat' },
    { term:'Ecosystem',            definition:'A community of organisms and the non-living environment with which they interact.',  hint:'Community + non-living environment' },
    { term:'Niche',                definition:'The role of a species in its ecosystem — including its interactions and resource use.',  hint:'Role of species in ecosystem' },
    { term:'Interspecific competition', definition:'Competition between individuals of different species for the same resource.',  hint:'Between different species — same resources' },
    { term:'Intraspecific competition', definition:'Competition between individuals of the same species.',                    hint:'Within the same species' },
    { term:'Carrying capacity',    definition:'The maximum population size that can be sustained by the available resources in an environment.',  hint:'Maximum sustainable population size' },
    { term:'Mark-release-recapture', definition:'A method to estimate population size — organisms are captured, marked, released and recaptured.',  hint:'Count → mark → release → recount' },
    { term:'Succession',           definition:'The directional change in a community over time, from pioneer species to a climax community.',  hint:'Community changes over time → climax' },
    { term:'Climax community',     definition:'The stable, final community in a succession that remains in equilibrium unless disturbed.',  hint:'Final stable community in succession' },
    { term:'Biomass',              definition:'The total dry mass of organisms at a trophic level — represents the available energy.',  hint:'Total dry mass at a trophic level' },
  ],

  'Gene Expression and Genetics': [
    { term:'Operon',               definition:'A unit of prokaryotic gene regulation — a promoter, operator and structural genes that are transcribed together.',  hint:'Prokaryotic gene regulation unit' },
    { term:'Lac operon',           definition:'An operon in E. coli that controls the genes for lactose metabolism — regulated by a repressor protein.',  hint:'E. coli lactose metabolism operon' },
    { term:'Epigenetics',          definition:'The study of heritable changes in gene expression that do not involve changes to the DNA sequence.',  hint:'Gene expression changes — no DNA change' },
    { term:'DNA methylation',      definition:'The addition of methyl groups to cytosine bases in DNA, which silences gene expression.',  hint:'Methyl groups on DNA → gene silenced' },
    { term:'Histone modification', definition:'Changes to histone proteins that alter how tightly DNA is wound, affecting gene expression.',  hint:'Histone changes → gene expression altered' },
    { term:'Transcription factor', definition:'A protein that binds to DNA and controls the transcription of specific genes.',  hint:'Protein controlling gene transcription' },
    { term:'Totipotent',           definition:'Describes a stem cell capable of differentiating into any cell type, including extra-embryonic tissue.',  hint:'Can become any cell type' },
    { term:'Pluripotent',          definition:'Describes a stem cell capable of differentiating into most cell types but not extra-embryonic tissue.',  hint:'Can become most cell types' },
    { term:'PCR',                  definition:'Polymerase chain reaction — a technique to amplify small DNA samples using repeated cycles of heating and cooling.',  hint:'Amplifies DNA — repeated heat/cool cycles' },
    { term:'Gel electrophoresis',  definition:'A technique that separates DNA fragments by size using an electric current in a gel.',  hint:'Separates DNA by size in electric field' },
    { term:'Genetic fingerprinting', definition:'A technique that uses DNA profiles to identify individuals, based on unique patterns of short tandem repeats.',  hint:'Unique DNA pattern — identifies individuals' },
    { term:'Recombinant DNA',      definition:'DNA created by combining sequences from two different organisms.',                    hint:'DNA from two different organisms combined' },
    { term:'Gene therapy',         definition:'The introduction of a functional gene into cells to correct a genetic disorder.',  hint:'Introducing a gene to correct a disorder' },
    { term:'Restriction enzyme',   definition:'An enzyme that cuts DNA at specific base sequences, producing sticky ends.',      hint:'Cuts DNA at specific sequences' },
    { term:'Ligase',               definition:'An enzyme that joins sticky ends of DNA fragments to seal the sugar-phosphate backbone.',  hint:'Joins DNA fragments — seals backbone' },
  ],

};

// ────────────────────────────────────────────────────────────
// CHEMISTRY — AQA A-Level (7405)
// Source: AQA 7405 spec + PMT A-level definitions
// ────────────────────────────────────────────────────────────
VOCAB['chemistry']['aqa-alevel'] = {

  'Physical Chemistry': [
    { term:'First ionisation energy', definition:'The energy required to remove one mole of electrons from one mole of gaseous atoms.',  hint:'Energy to remove first electron from gas atoms' },
    { term:'Electron configuration', definition:'The arrangement of electrons in orbitals within an atom — written as 1s²2s²2p⁶ etc.',  hint:'Arrangement of electrons in orbitals' },
    { term:'Electronegativity',    definition:'The ability of an atom to attract the electron density in a covalent bond towards itself.',  hint:'Pulls electron density in covalent bond' },
    { term:'Polar bond',           definition:'A covalent bond between atoms of different electronegativity, producing a dipole.',  hint:'Unequal electron sharing — creates dipole' },
    { term:'Hydrogen bond',        definition:'A relatively strong intermolecular force between a H atom bonded to N, O or F and a lone pair on another electronegative atom.',  hint:'H bonded to N/O/F attracted to lone pair' },
    { term:'Van der Waals forces', definition:'Temporary induced dipole-dipole attractions between all molecules — also called London dispersion forces.',  hint:'Temporary dipole-dipole — all molecules' },
    { term:'Enthalpy change',      definition:'The heat energy change at constant pressure — represented by ΔH.',                hint:'Heat energy change at constant pressure — ΔH' },
    { term:'Hess\'s law',          definition:'The enthalpy change of a reaction is independent of the route taken.',            hint:'Enthalpy independent of route taken' },
    { term:'Mean bond enthalpy',   definition:'The average enthalpy required to break one mole of a specific type of covalent bond.',  hint:'Average energy to break a type of bond' },
    { term:'Activation energy',    definition:'The minimum kinetic energy colliding particles must have for a reaction to occur.',  hint:'Minimum energy for successful collision' },
    { term:'Maxwell-Boltzmann distribution', definition:'A graph showing the distribution of kinetic energies among particles in a gas.',  hint:'Distribution of particle energies in a gas' },
    { term:'Dynamic equilibrium',  definition:'State where forward and reverse reactions occur at equal rates in a closed system, so concentrations remain constant.',  hint:'Forward = reverse rate — concentrations constant' },
    { term:'Le Chatelier\'s principle', definition:'If a system at equilibrium is disturbed, it shifts to oppose the change and re-establish equilibrium.',  hint:'System opposes changes to equilibrium' },
    { term:'Equilibrium constant Kc', definition:'An expression showing the ratio of product concentrations to reactant concentrations at equilibrium.',  hint:'Products ÷ reactants concentration ratio at equilibrium' },
    { term:'Oxidation state',      definition:'The theoretical charge of an atom in a compound assuming all bonds are ionic.',  hint:'Theoretical charge of atom in compound' },
    { term:'Reducing agent',       definition:'A species that donates electrons, causing itself to be oxidised.',               hint:'Donates electrons — itself oxidised' },
    { term:'Oxidising agent',      definition:'A species that accepts electrons, causing itself to be reduced.',               hint:'Accepts electrons — itself reduced' },
    { term:'Standard electrode potential', definition:'The EMF of a half-cell measured against a standard hydrogen electrode under standard conditions.',  hint:'EMF vs standard hydrogen electrode' },
    { term:'Enthalpy of atomisation', definition:'The enthalpy change when one mole of gaseous atoms is formed from the element in its standard state.',  hint:'Energy to form 1 mol gaseous atoms from element' },
    { term:'Lattice enthalpy',     definition:'The energy released when one mole of an ionic compound is formed from its gaseous ions.',  hint:'Energy released forming ionic lattice from ions' },
  ],

  'Inorganic Chemistry': [
    { term:'Period 3 trends',      definition:'Across Period 3, atomic radius decreases and ionisation energy increases (with exceptions) as nuclear charge increases.',  hint:'Atomic radius ↓, ionisation energy ↑ across period 3' },
    { term:'Transition metal',     definition:'A d-block element that forms at least one stable ion with an incomplete d-subshell.',  hint:'d-block — at least one ion with incomplete d-subshell' },
    { term:'Complex ion',          definition:'A central metal ion surrounded by ligands — molecules or ions donating lone pairs.',  hint:'Metal ion + ligands donating lone pairs' },
    { term:'Ligand',               definition:'A molecule or ion that donates a lone pair to a metal ion to form a co-ordinate bond.',  hint:'Donates lone pair to metal ion' },
    { term:'Co-ordination number', definition:'The number of co-ordinate bonds formed between ligands and the central metal ion.',  hint:'Number of bonds from ligands to metal' },
    { term:'Variable oxidation state', definition:'The ability of transition metals to exist in more than one oxidation state — due to similar energies of 3d and 4s subshells.',  hint:'Transition metal property — multiple oxidation states' },
    { term:'Catalytic activity',   definition:'The ability of transition metals to act as catalysts due to variable oxidation states and ability to adsorb reactants.',  hint:'Transition metals as catalysts' },
    { term:'Precipitation reaction', definition:'A reaction in which an insoluble solid (precipitate) forms from mixing two aqueous solutions.',  hint:'Insoluble solid forms from solution' },
    { term:'Amphoteric',           definition:'A substance that can act as both an acid and a base.',                            hint:'Acts as both acid and base' },
    { term:'Disproportionation',   definition:'A reaction where the same element is simultaneously oxidised and reduced.',      hint:'Element oxidised and reduced simultaneously' },
  ],

  'Organic Chemistry': [
    { term:'Homologous series',    definition:'A series of organic compounds with the same functional group and general formula — each member differs by CH₂.',  hint:'Same functional group — differ by CH₂' },
    { term:'Functional group',     definition:'The atom or group of atoms responsible for the characteristic reactions of an organic molecule.',  hint:'Determines chemical reactions of molecule' },
    { term:'Structural isomers',   definition:'Molecules with the same molecular formula but different structural arrangements.',  hint:'Same formula — different structure' },
    { term:'Stereoisomers',        definition:'Molecules with the same structural formula but different arrangements of atoms in space.',  hint:'Same structure — different spatial arrangement' },
    { term:'E/Z isomerism',        definition:'A type of stereoisomerism in alkenes caused by restricted rotation about C=C double bond.',  hint:'Stereoisomerism in alkenes — C=C restriction' },
    { term:'Optical isomerism',    definition:'A type of stereoisomerism where molecules are non-superimposable mirror images — due to a chiral carbon.',  hint:'Mirror image molecules — chiral carbon' },
    { term:'Nucleophilic substitution', definition:'A reaction where a nucleophile replaces a leaving group on a carbon atom.',  hint:'Nucleophile replaces leaving group' },
    { term:'Electrophilic addition', definition:'A reaction where an electrophile adds across a C=C double bond.',            hint:'Electrophile adds across C=C' },
    { term:'Free radical substitution', definition:'A reaction in alkanes initiated by UV light — proceeds via initiation, propagation and termination steps.',  hint:'Alkane + halogens — UV light — three steps' },
    { term:'Elimination reaction', definition:'A reaction where atoms or groups are removed from adjacent carbons to form a C=C double bond.',  hint:'Removes atoms from adjacent carbons — forms C=C' },
    { term:'Carboxylic acid',      definition:'An organic compound containing the –COOH functional group.',                  hint:'Contains –COOH group' },
    { term:'Ester',                definition:'A compound formed by the reaction between a carboxylic acid and an alcohol — contains –COO–.',  hint:'Carboxylic acid + alcohol — contains –COO–' },
    { term:'Esterification',       definition:'The reaction of a carboxylic acid with an alcohol to produce an ester and water.',  hint:'Carboxylic acid + alcohol → ester + water' },
    { term:'Hydrolysis',           definition:'The breaking of a chemical bond by reaction with water — can be acid or base catalysed.',  hint:'Bond broken by reaction with water' },
    { term:'Addition polymerisation', definition:'The formation of a polymer from monomers with C=C double bonds — no atoms are lost.',  hint:'Monomers with C=C join — no atoms lost' },
    { term:'Condensation polymerisation', definition:'Polymer formation by repeated condensation reactions, with loss of small molecules (e.g. water).',  hint:'Monomers join — small molecule lost each time' },
    { term:'Amino acid',           definition:'An organic compound with both an amino (–NH₂) and carboxylic acid (–COOH) group — monomers of proteins.',  hint:'–NH₂ and –COOH groups — monomer of protein' },
    { term:'Peptide bond',         definition:'The amide bond –CO–NH– formed between amino acids in protein synthesis by condensation.',  hint:'–CO–NH– bond — joins amino acids' },
    { term:'Infrared spectroscopy', definition:'A technique identifying functional groups by the wavelengths of infrared radiation absorbed.',  hint:'Identifies functional groups — IR absorption' },
    { term:'Mass spectrometry',    definition:'A technique identifying compounds by measuring mass-to-charge ratios of fragment ions.',  hint:'Identifies compounds — mass:charge ratio' },
    { term:'NMR spectroscopy',     definition:'Nuclear magnetic resonance spectroscopy — a technique identifying the structure of organic compounds from chemical shifts.',  hint:'Identifies organic structure — chemical shifts' },
  ],

};

// ────────────────────────────────────────────────────────────
// PHYSICS — AQA A-Level (7408)
// ────────────────────────────────────────────────────────────
VOCAB['physics']['aqa-alevel'] = {

  'Particles and Radiation': [
    { term:'Hadron',               definition:'A particle made of quarks — experiences the strong nuclear force.',               hint:'Made of quarks — strong force' },
    { term:'Baryon',               definition:'A hadron made of three quarks — e.g. proton, neutron.',                         hint:'Three quarks — e.g. proton/neutron' },
    { term:'Meson',                definition:'A hadron made of a quark and an antiquark — e.g. pion.',                       hint:'Quark + antiquark — e.g. pion' },
    { term:'Lepton',               definition:'A fundamental particle that does not experience the strong force — e.g. electron, neutrino.',  hint:'Fundamental — no strong force — e.g. electron' },
    { term:'Quark',                definition:'A fundamental constituent of hadrons — types include up, down and strange.',   hint:'Fundamental — inside hadrons — up, down, strange' },
    { term:'Antiparticle',         definition:'A particle with the same mass but opposite charge to its corresponding particle.',  hint:'Same mass — opposite charge to particle' },
    { term:'Positron',             definition:'The antiparticle of the electron — same mass but positive charge.',            hint:'Antiparticle of electron — positive charge' },
    { term:'Annihilation',         definition:'The mutual destruction of a particle and its antiparticle, producing photons.',  hint:'Particle + antiparticle → photons' },
    { term:'Pair production',      definition:'The conversion of a photon into a particle-antiparticle pair.',               hint:'Photon → particle + antiparticle' },
    { term:'Photon',               definition:'A quantum of electromagnetic radiation — has energy E = hf.',                hint:'Quantum of EM radiation — E = hf' },
    { term:'Photoelectric effect', definition:'The emission of electrons from a metal surface when electromagnetic radiation above a threshold frequency is incident.',  hint:'Electrons emitted when light hits metal — threshold frequency' },
    { term:'Work function',        definition:'The minimum energy required to remove an electron from the surface of a metal.',  hint:'Minimum energy to remove electron from metal' },
    { term:'de Broglie wavelength', definition:'The wavelength associated with a moving particle — λ = h/mv.',              hint:'Wavelength of moving particle — λ = h/mv' },
    { term:'Wave-particle duality', definition:'The concept that all matter and radiation exhibits both wave and particle properties.',  hint:'Matter and radiation are both waves and particles' },
    { term:'Strong nuclear force', definition:'The short-range attractive force that holds nucleons together in the nucleus — overcomes electrostatic repulsion.',  hint:'Short-range force holding nucleus together' },
    { term:'Weak nuclear force',   definition:'The force responsible for beta decay — changes one type of quark into another.',  hint:'Responsible for beta decay — quark changes' },
    { term:'Baryon number',        definition:'A conserved quantum number — baryons have +1, antibaryons have -1, other particles have 0.',  hint:'Conserved — baryons +1, antibaryons -1' },
    { term:'Lepton number',        definition:'A conserved quantum number — leptons have +1, antileptons have -1.',           hint:'Conserved — leptons +1, antileptons -1' },
    { term:'Strangeness',          definition:'A quantum number conserved in strong interactions but not in weak interactions.',  hint:'Conserved in strong — not in weak interactions' },
  ],

  'Waves and Optics': [
    { term:'Superposition',        definition:'When two or more waves meet, the resultant displacement is the algebraic sum of the individual displacements.',  hint:'Waves add — algebraic sum of displacements' },
    { term:'Interference',         definition:'The superposition of two coherent waves producing regions of reinforcement and cancellation.',  hint:'Superposition — constructive and destructive' },
    { term:'Coherent',             definition:'Having the same frequency and a constant phase difference.',                   hint:'Same frequency — constant phase difference' },
    { term:'Path difference',      definition:'The difference in the distances travelled by two waves from their sources to a point.',  hint:'Difference in distances from two sources' },
    { term:'Diffraction',          definition:'The spreading of waves as they pass through an opening or around an obstacle.',  hint:'Waves spread through gaps or round obstacles' },
    { term:'Stationary wave',      definition:'A wave formed by the superposition of two progressive waves of the same frequency travelling in opposite directions.',  hint:'Same frequency waves travelling opposite ways' },
    { term:'Node',                 definition:'A point of no displacement on a stationary wave.',                           hint:'Zero displacement on stationary wave' },
    { term:'Antinode',             definition:'A point of maximum displacement on a stationary wave.',                     hint:'Maximum displacement on stationary wave' },
    { term:'Refractive index',     definition:'The ratio of the speed of light in a vacuum to its speed in a medium — n = c/v.',  hint:'c/v — how much light slows in medium' },
    { term:'Total internal reflection', definition:'When light travelling in a denser medium strikes the boundary at or above the critical angle and is completely reflected.',  hint:'Light reflected internally at critical angle' },
    { term:'Critical angle',       definition:'The angle of incidence above which total internal reflection occurs.',       hint:'Angle where TIR begins' },
    { term:'Polarisation',         definition:'The restriction of transverse wave oscillations to a single plane.',        hint:'Transverse oscillations in one plane only' },
  ],

  'Mechanics and Materials': [
    { term:'Scalar',               definition:'A quantity with magnitude only — e.g. speed, mass, temperature.',           hint:'Magnitude only — no direction' },
    { term:'Vector',               definition:'A quantity with both magnitude and direction — e.g. velocity, force, displacement.',  hint:'Magnitude + direction' },
    { term:'Momentum',             definition:'Mass × velocity — a vector quantity conserved in all collisions.',         hint:'Mass × velocity — conserved in collisions' },
    { term:'Impulse',              definition:'The change in momentum of an object — equal to force × time.',             hint:'Force × time = change in momentum' },
    { term:'Conservation of momentum', definition:'The total momentum of a closed system is constant unless an external force acts.',  hint:'Total momentum unchanged — no external force' },
    { term:'Elastic collision',    definition:'A collision in which kinetic energy is conserved as well as momentum.',    hint:'KE conserved — momentum conserved' },
    { term:'Inelastic collision',  definition:'A collision in which kinetic energy is not conserved — some is converted to other forms.',  hint:'KE not conserved — only momentum conserved' },
    { term:'Young\'s modulus',     definition:'The ratio of tensile stress to tensile strain for a material within its elastic limit.',  hint:'Stress ÷ strain — measures material stiffness' },
    { term:'Tensile stress',       definition:'Force per unit cross-sectional area — σ = F/A.',                          hint:'Force ÷ area — σ = F/A' },
    { term:'Tensile strain',       definition:'The fractional extension of a material — ε = ΔL/L.',                     hint:'Extension ÷ original length' },
    { term:'Hooke\'s law',         definition:'Extension is proportional to force applied until the elastic limit is exceeded.',  hint:'Extension ∝ force — up to elastic limit' },
    { term:'Limit of proportionality', definition:'The point beyond which extension is no longer proportional to force applied.',  hint:'Beyond this — Hooke\'s law no longer applies' },
    { term:'Elastic limit',        definition:'The maximum force beyond which a material will not return to its original shape.',  hint:'Beyond this — permanent deformation' },
    { term:'Work done',            definition:'Force × displacement in the direction of the force — measured in joules.',  hint:'Force × displacement — joules' },
    { term:'Power',                definition:'The rate of doing work or transferring energy — P = W/t.',                hint:'Work ÷ time — watts' },
    { term:'Efficiency',           definition:'Useful power output ÷ total power input — as a percentage.',            hint:'Useful output ÷ total input × 100' },
  ],

  'Electricity': [
    { term:'Charge carriers',      definition:'Particles that carry electric charge through a conductor — free electrons in metals.',  hint:'Carry charge — free electrons in metals' },
    { term:'Drift velocity',       definition:'The mean velocity of charge carriers along a conductor — I = nqvA.',      hint:'Mean velocity of carriers — I = nqvA' },
    { term:'Ohm\'s law',           definition:'Current through a conductor is directly proportional to the potential difference at constant temperature.',  hint:'I ∝ V at constant temperature' },
    { term:'Resistivity',          definition:'A material property measuring resistance — ρ = RA/L.',                   hint:'Material resistance property — ρ = RA/L' },
    { term:'EMF',                  definition:'Electromotive force — the total energy per unit charge supplied by a source.',  hint:'Energy per unit charge from a source' },
    { term:'Internal resistance',  definition:'The resistance of the cells within a battery — causes terminal pd to be less than EMF.',  hint:'Battery\'s own resistance — reduces terminal voltage' },
    { term:'Kirchhoff\'s first law', definition:'The sum of currents entering a junction equals the sum leaving — conservation of charge.',  hint:'Sum of currents in = sum out at junction' },
    { term:'Kirchhoff\'s second law', definition:'The sum of EMFs around a loop equals the sum of potential differences — conservation of energy.',  hint:'Sum of EMF = sum of pd around a loop' },
    { term:'Potential divider',    definition:'A circuit using two resistors to provide a fraction of the supply voltage.',  hint:'Two resistors — fraction of supply voltage' },
    { term:'Superconductivity',    definition:'A phenomenon where certain materials have zero electrical resistance below a critical temperature.',  hint:'Zero resistance below critical temperature' },
  ],

  'Fields and Further Mechanics': [
    { term:'Gravitational field strength', definition:'The gravitational force per unit mass at a point — g = F/m.',       hint:'Force per unit mass — g = F/m' },
    { term:'Gravitational potential', definition:'The work done per unit mass in moving a small mass from infinity to a point in a gravitational field.',  hint:'Work per unit mass from infinity to that point' },
    { term:'Coulomb\'s law',       definition:'The electrostatic force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance.',  hint:'F = kQ₁Q₂/r² — inverse square law' },
    { term:'Electric field strength', definition:'The force per unit positive charge at a point in an electric field — E = F/Q.',  hint:'Force per positive charge — E = F/Q' },
    { term:'Capacitor',            definition:'A device that stores charge — consists of two conductors separated by an insulator.',  hint:'Stores charge — two conductors + insulator' },
    { term:'Time constant',        definition:'In a capacitor circuit — τ = RC — the time for charge to fall to 1/e of its initial value.',  hint:'τ = RC — charging/discharging time measure' },
    { term:'Simple harmonic motion', definition:'Oscillation where acceleration is proportional to displacement and directed towards the equilibrium position.',  hint:'Acceleration ∝ −displacement from equilibrium' },
    { term:'Resonance',            definition:'When a system is driven at its natural frequency — maximum amplitude oscillations occur.',  hint:'Driven at natural frequency — maximum amplitude' },
    { term:'Magnetic flux density', definition:'A measure of the strength of a magnetic field — force per unit current per unit length — measured in tesla.',  hint:'Magnetic field strength — tesla' },
    { term:'Faraday\'s law',       definition:'The induced EMF is proportional to the rate of change of magnetic flux linkage.',  hint:'EMF ∝ rate of flux linkage change' },
    { term:'Lenz\'s law',          definition:'The direction of an induced current opposes the change that caused it.',  hint:'Induced current opposes the causing change' },
  ],

  'Thermal Physics and Nuclear': [
    { term:'Absolute zero',        definition:'The temperature at which particles have minimum internal energy — 0 K or −273°C.',  hint:'0 K — minimum particle energy' },
    { term:'Boltzmann constant',   definition:'A constant relating the average kinetic energy of a particle to its temperature — k = 1.38 × 10⁻²³ J K⁻¹.',  hint:'Links particle energy to temperature' },
    { term:'Root mean square speed', definition:'A measure of the speed of gas molecules — the square root of the mean of the squared speeds.',  hint:'√(mean of squared speeds) — gas molecules' },
    { term:'Specific heat capacity', definition:'The energy needed to raise the temperature of 1 kg of a substance by 1 K.',  hint:'Energy per kg per kelvin' },
    { term:'Specific latent heat', definition:'The energy needed to change the state of 1 kg of a substance at constant temperature.',  hint:'Energy per kg to change state' },
    { term:'Nuclear binding energy', definition:'The energy required to completely separate all nucleons in a nucleus.',  hint:'Energy to separate all nucleons' },
    { term:'Mass defect',          definition:'The difference between the total mass of separate nucleons and the mass of the nucleus — converted to binding energy.',  hint:'Mass lost when nucleus forms — → binding energy' },
    { term:'Nuclear fission',      definition:'The splitting of a heavy nucleus into two lighter nuclei with the release of energy and neutrons.',  hint:'Heavy nucleus splits — releases energy' },
    { term:'Nuclear fusion',       definition:'The joining of two light nuclei to form a heavier nucleus, releasing large amounts of energy.',  hint:'Light nuclei join — large energy release' },
    { term:'Half-life',            definition:'The time taken for half the radioactive nuclei in a sample to decay.',     hint:'Time for half to decay' },
    { term:'Activity',             definition:'The number of radioactive decays per unit time — measured in becquerels.',  hint:'Decays per second — becquerels' },
    { term:'Decay constant',       definition:'The probability that a nucleus will decay per unit time — related to half-life by λ = ln2/t½.',  hint:'Probability of decay per unit time' },
    { term:'Hubble\'s law',        definition:'The recession speed of a galaxy is proportional to its distance — v = H₀d.',  hint:'v = H₀d — galaxies recede proportionally to distance' },
    { term:'Critical density',     definition:'The density of the universe that determines its ultimate fate — whether it expands forever or collapses.',  hint:'Universe density determining its fate' },
    { term:'Dark matter',          definition:'Invisible matter that does not emit light but whose existence is inferred from gravitational effects.',  hint:'Invisible matter — inferred from gravity' },
  ],

};

// ────────────────────────────────────────────────────────────
// MATHS — AQA A-Level (7357)
// ────────────────────────────────────────────────────────────
VOCAB['maths']['aqa-alevel'] = {

  'Pure Mathematics': [
    { term:'Function',             definition:'A rule that maps each element of one set to exactly one element of another.',      hint:'Each input maps to exactly one output' },
    { term:'Domain',               definition:'The set of all possible input values for a function.',                            hint:'All possible inputs for a function' },
    { term:'Range',                definition:'The set of all possible output values of a function.',                           hint:'All possible outputs of a function' },
    { term:'Inverse function',     definition:'A function that reverses the mapping of the original function — f⁻¹(x).',       hint:'Reverses the function — f⁻¹(x)' },
    { term:'Composite function',   definition:'A function applied to the output of another function — fg(x) means g applied first, then f.',  hint:'Function of a function — fg(x)' },
    { term:'Logarithm',            definition:'The inverse of an exponential — log_a(x) = y means aʸ = x.',                  hint:'Inverse of exponential — log_a(x) = y ↔ aʸ = x' },
    { term:'Natural logarithm',    definition:'Logarithm with base e — written as ln(x).',                                  hint:'Log base e — ln(x)' },
    { term:'Exponential function', definition:'A function of the form aˣ where a > 0 — models rapid growth or decay.',      hint:'aˣ — models growth or decay' },
    { term:'Differentiation',      definition:'The process of finding the derivative — the rate of change of a function.',  hint:'Finding rate of change — dy/dx' },
    { term:'Integration',          definition:'The reverse of differentiation — finding the area under a curve.',          hint:'Reverse of differentiation — area under curve' },
    { term:'Chain rule',           definition:'A rule for differentiating composite functions — dy/dx = dy/du × du/dx.',   hint:'Differentiating composite functions' },
    { term:'Product rule',         definition:'A rule for differentiating products — d/dx(uv) = u(dv/dx) + v(du/dx).',  hint:'Differentiating products of two functions' },
    { term:'Quotient rule',        definition:'A rule for differentiating quotients — d/dx(u/v) = [v(du/dx) − u(dv/dx)] / v².',  hint:'Differentiating quotients' },
    { term:'Stationary point',     definition:'A point on a curve where dy/dx = 0 — may be a maximum, minimum or point of inflection.',  hint:'dy/dx = 0 — max, min or inflection' },
    { term:'Binomial expansion',   definition:'A formula for expanding (a + b)ⁿ — uses binomial coefficients.',            hint:'Expanding (a + b)ⁿ using coefficients' },
    { term:'Arithmetic sequence',  definition:'A sequence where consecutive terms differ by a constant amount — the common difference d.',  hint:'Constant difference between terms' },
    { term:'Geometric sequence',   definition:'A sequence where each term is multiplied by a constant ratio r.',          hint:'Constant ratio between terms' },
    { term:'Sum to infinity',      definition:'The sum of an infinite geometric series — exists only when |r| < 1, equals a/(1−r).',  hint:'Sum of infinite geometric series — |r| < 1' },
    { term:'Proof by contradiction', definition:'Assuming the statement is false and deriving a contradiction.',         hint:'Assume false → show contradiction' },
    { term:'Proof by induction',   definition:'Proving a statement true for all positive integers by showing base case and inductive step.',  hint:'Base case + inductive step → true for all n' },
    { term:'Parametric equations', definition:'Equations expressing x and y separately in terms of a third variable (parameter).',  hint:'x and y expressed in terms of a parameter' },
  ],

  'Statistics': [
    { term:'Probability distribution', definition:'A function that gives the probability of each possible outcome of a random variable.',  hint:'Probabilities for each outcome' },
    { term:'Discrete random variable', definition:'A variable that can only take specific distinct values.',                hint:'Specific distinct values only' },
    { term:'Binomial distribution', definition:'A distribution for the number of successes in n independent trials each with probability p — B(n,p).',  hint:'n trials, probability p — B(n,p)' },
    { term:'Normal distribution',  definition:'A continuous symmetric bell-shaped distribution characterised by mean μ and standard deviation σ.',  hint:'Bell-shaped — mean μ and standard deviation σ' },
    { term:'Standard normal distribution', definition:'A normal distribution with mean 0 and standard deviation 1 — N(0,1).',  hint:'N(0,1) — mean 0, SD 1' },
    { term:'Hypothesis test',      definition:'A statistical procedure to test whether sample data provides sufficient evidence to reject a null hypothesis.',  hint:'Test whether evidence rejects null hypothesis' },
    { term:'Null hypothesis',      definition:'The hypothesis assumed to be true — the one being tested.',               hint:'Default assumption being tested' },
    { term:'Significance level',   definition:'The probability threshold below which the null hypothesis is rejected.',  hint:'Threshold probability for rejecting H₀' },
    { term:'Critical region',      definition:'The range of values that lead to rejection of the null hypothesis.',     hint:'Values that reject null hypothesis' },
    { term:'p-value',              definition:'The probability of obtaining results as extreme as observed, assuming the null hypothesis is true.',  hint:'Probability of result if H₀ is true' },
    { term:'Correlation coefficient', definition:'A measure of the strength and direction of linear correlation — Pearson\'s r ranges from −1 to +1.',  hint:'Strength of linear correlation — −1 to +1' },
    { term:'Regression line',      definition:'The line of best fit y = a + bx that minimises the sum of squared residuals.',  hint:'Best-fit line — y = a + bx' },
  ],

  'Mechanics': [
    { term:'Displacement',         definition:'The distance moved in a specified direction from a reference point — a vector quantity.',  hint:'Distance with direction — vector' },
    { term:'Velocity',             definition:'The rate of change of displacement — a vector quantity.',                 hint:'Rate of change of displacement — vector' },
    { term:'Acceleration',         definition:'The rate of change of velocity.',                                        hint:'Rate of change of velocity' },
    { term:'SUVAT equations',      definition:'Five equations relating displacement, initial and final velocity, acceleration and time for uniform acceleration.',  hint:'5 equations — uniform acceleration' },
    { term:'Newton\'s first law',  definition:'A body remains at rest or in constant velocity unless acted upon by a resultant force.',  hint:'No resultant force → constant motion' },
    { term:'Newton\'s second law', definition:'The resultant force equals mass × acceleration — F = ma.',             hint:'F = ma' },
    { term:'Newton\'s third law',  definition:'Every action has an equal and opposite reaction.',                    hint:'Equal and opposite forces' },
    { term:'Impulse',              definition:'The change in momentum — impulse = force × time = Δmv.',             hint:'Force × time = Δ(mv)' },
    { term:'Conservation of momentum', definition:'The total momentum of a closed system is constant in the absence of external forces.',  hint:'Total momentum constant — no external force' },
    { term:'Moment of a force',    definition:'The turning effect of a force about a pivot — moment = force × perpendicular distance.',  hint:'Force × perpendicular distance from pivot' },
    { term:'Equilibrium',          definition:'A body is in equilibrium when the resultant force and resultant moment are both zero.',  hint:'Zero resultant force and moment' },
    { term:'Friction',             definition:'A force opposing relative motion between surfaces — F ≤ μN.',         hint:'Opposes motion — F ≤ μN' },
    { term:'Coefficient of friction', definition:'The ratio of friction force to normal reaction — μ = F/N.',     hint:'Friction ÷ normal reaction — μ = F/N' },
  ],

};

// ────────────────────────────────────────────────────────────
// HISTORY — AQA A-Level (7042)
// ────────────────────────────────────────────────────────────
VOCAB['history']['aqa-alevel'] = {

  'Historical Skills': [
    { term:'Historiography',       definition:'The study of how history has been written and interpreted by different historians over time.',  hint:'How history has been written and interpreted' },
    { term:'Primary source',       definition:'Evidence created at the time of the events being studied.',                  hint:'Created at the time — original evidence' },
    { term:'Secondary source',     definition:'Evidence created after the events, interpreting or analysing the past.',   hint:'Written after — analyses the past' },
    { term:'Revisionist',          definition:'A historian who challenges the accepted or orthodox interpretation of historical events.',  hint:'Challenges accepted interpretations' },
    { term:'Orthodoxy',            definition:'The conventional or widely accepted interpretation of an historical event.',  hint:'Conventional accepted interpretation' },
    { term:'Contemporaneous',      definition:'Existing or occurring at the same period of time.',                        hint:'Same period of time — contemporary' },
    { term:'Counterfactual',       definition:'Speculating about what might have happened if key historical events had occurred differently.',  hint:'What if — different historical outcomes' },
    { term:'Determinism',          definition:'The view that historical events are inevitable — caused by deeper structural forces rather than individual decisions.',  hint:'Events inevitable — structural forces' },
    { term:'Agency',               definition:'The ability of individuals to influence historical events through their decisions and actions.',  hint:'Individuals influencing historical events' },
    { term:'Synthesis',            definition:'Drawing together evidence and arguments from multiple sources to form a coherent historical argument.',  hint:'Combining evidence into a coherent argument' },
    { term:'Corroboration',        definition:'Supporting or confirming evidence from one source with evidence from another.',  hint:'One source confirmed by another' },
    { term:'Contextualisation',    definition:'Placing historical evidence in its broader historical, social or political context.',  hint:'Placing evidence in broader context' },
  ],

  'Russia and the USSR': [
    { term:'Autocracy',            definition:'A system of government with absolute power held by one ruler.',              hint:'Absolute power — one ruler' },
    { term:'Bolsheviks',           definition:'The revolutionary socialist party led by Lenin that seized power in Russia in October 1917.',  hint:'Lenin\'s party — seized power 1917' },
    { term:'Soviet',               definition:'An elected workers\' council — the governing unit of the USSR.',           hint:'Workers\' council — USSR governance unit' },
    { term:'Collectivisation',     definition:'The Soviet policy of reorganising private farms into state-controlled collective farms.',  hint:'Private farms → state collective farms' },
    { term:'Kulak',                definition:'A prosperous peasant farmer in Russia who was targeted and persecuted during collectivisation.',  hint:'Prosperous peasant — persecuted under Stalin' },
    { term:'Purges',               definition:'The systematic removal and execution of perceived political enemies under Stalin in the 1930s.',  hint:'Systematic elimination of enemies — Stalin 1930s' },
    { term:'Gulag',                definition:'The system of Soviet forced labour camps to which political prisoners were sent.',  hint:'Soviet forced labour camps' },
    { term:'Five Year Plans',      definition:'Stalin\'s programmes of rapid industrialisation with specific production targets set for five-year periods.',  hint:'Rapid industrialisation targets — 5 year periods' },
    { term:'Totalitarianism',      definition:'A political system with total state authority over all aspects of public and private life.',  hint:'Total state control — all aspects of life' },
    { term:'Cult of personality',  definition:'The promotion of an idealized, heroic image of a political leader through propaganda.',  hint:'Heroic leader image through propaganda' },
  ],

  'Germany': [
    { term:'Weimar Republic',      definition:'The democratic republic governing Germany 1919–1933, established after World War One.',  hint:'German democracy 1919–1933' },
    { term:'Enabling Act',         definition:'The 1933 law that gave Hitler dictatorial powers by allowing him to pass laws without the Reichstag.',  hint:'1933 — gave Hitler dictatorial powers' },
    { term:'Gleichschaltung',      definition:'The Nazi process of bringing all institutions and individuals into line with Nazi ideology.',  hint:'Bringing everything under Nazi control' },
    { term:'Volksgemeinschaft',    definition:'The Nazi concept of a unified "people\'s community" based on racial identity.',  hint:'Nazi racial people\'s community concept' },
    { term:'Antisemitism',         definition:'Hostility, prejudice or discrimination against Jewish people.',                hint:'Prejudice and discrimination against Jews' },
    { term:'Kristallnacht',        definition:'The "Night of Broken Glass" on 9-10 November 1938 — coordinated Nazi attacks on Jewish people and property.',  hint:'Night of Broken Glass — Nov 1938' },
    { term:'Nuremberg Laws',       definition:'The 1935 laws that stripped German Jews of citizenship and prohibited marriage between Jews and non-Jews.',  hint:'1935 — stripped Jews of citizenship' },
    { term:'Lebensraum',           definition:'Hitler\'s concept of "living space" — the territorial expansion of Germany eastward.',  hint:'Living space — eastward expansion' },
    { term:'Blitzkrieg',           definition:'The German military tactic of rapid, coordinated attacks using tanks, aircraft and motorised infantry.',  hint:'Lightning war — tanks, aircraft, speed' },
    { term:'Denazification',       definition:'The post-war Allied programme to remove Nazi ideology and personnel from German society.',  hint:'Removing Nazis from German society — post-war' },
  ],

};

// ────────────────────────────────────────────────────────────
// GEOGRAPHY — AQA A-Level (7037)
// ────────────────────────────────────────────────────────────
VOCAB['geography']['aqa-alevel'] = {

  'Physical Systems': [
    { term:'Drainage basin',       definition:'The area of land drained by a river and its tributaries.',                    hint:'Area drained by a river system' },
    { term:'Hydrological cycle',   definition:'The continuous movement of water between the atmosphere, land and oceans.',  hint:'Continuous movement of water — atmosphere to land' },
    { term:'Infiltration',         definition:'The process by which water enters the soil from the surface.',              hint:'Water entering the soil' },
    { term:'Throughflow',          definition:'The lateral movement of water through the soil above an impermeable layer.',  hint:'Water moving sideways through soil' },
    { term:'Groundwater flow',     definition:'The slow movement of water through permeable rock below the water table.',  hint:'Slow water movement through permeable rock' },
    { term:'Discharge',            definition:'The volume of water flowing in a river per unit time — measured in m³/s.',  hint:'Volume of river flow per time — m³/s' },
    { term:'Hydrograph',           definition:'A graph showing river discharge over time — shows peak flow and lag time.',  hint:'River discharge over time — shows peak flow' },
    { term:'Lag time',             definition:'The delay between peak rainfall and peak river discharge.',                  hint:'Delay between peak rain and peak discharge' },
    { term:'Freeze-thaw weathering', definition:'Physical weathering where water repeatedly freezes and expands in cracks, breaking rock apart.',  hint:'Water freezes in cracks — expands — breaks rock' },
    { term:'Mass movement',        definition:'The downslope movement of material under gravity — includes slumping, sliding and creep.',  hint:'Material moves downslope by gravity' },
    { term:'Soil creep',           definition:'The very slow movement of soil downslope due to gravity.',                 hint:'Very slow soil movement downslope' },
    { term:'Subduction',           definition:'The process where one tectonic plate is forced beneath another.',          hint:'One plate forced under another' },
    { term:'Mantle convection',    definition:'The circulation of material in the mantle driven by heat from the Earth\'s core — drives plate movement.',  hint:'Heat-driven circulation in mantle — moves plates' },
  ],

  'Human Systems': [
    { term:'Globalisation',        definition:'The increasing economic, cultural and political integration of the world.',  hint:'Increasing world integration' },
    { term:'Transnational corporation', definition:'A large company that operates production and sales across multiple countries.',  hint:'Company operating in many countries' },
    { term:'Foreign direct investment', definition:'Investment by a company in business infrastructure in another country.',  hint:'Investment in another country\'s infrastructure' },
    { term:'Global shift',         definition:'The movement of manufacturing from developed to developing countries, attracted by lower labour costs.',  hint:'Manufacturing moves to lower-cost countries' },
    { term:'World city',           definition:'A city with a concentration of international financial services, headquarters and media — e.g. London, New York.',  hint:'International financial hub — e.g. London' },
    { term:'Deindustrialisation',  definition:'The decline of manufacturing industry in developed countries.',             hint:'Decline of manufacturing — developed countries' },
    { term:'Development gap',      definition:'The difference in levels of development between the richest and poorest countries.',  hint:'Difference in development — rich vs poor countries' },
    { term:'Neoliberalism',        definition:'An economic policy approach favouring free markets, privatisation and reduced government intervention.',  hint:'Free markets — privatisation — less government' },
    { term:'Sustainable development', definition:'Development that meets present needs without compromising the ability of future generations to meet their own needs.',  hint:'Meets needs now — doesn\'t harm future' },
    { term:'Cultural diffusion',   definition:'The spread of cultural elements from one society to another.',             hint:'Culture spreads from one society to another' },
    { term:'Demographic transition model', definition:'A model showing how birth and death rates change as a country develops — four stages.',  hint:'Birth/death rates change through development — 4 stages' },
    { term:'Rural-urban migration', definition:'The movement of people from rural areas to cities in search of employment and better living conditions.',  hint:'People move from countryside to cities' },
  ],

  'Environmental Systems': [
    { term:'Carbon cycle',         definition:'The movement of carbon between the atmosphere, biosphere, hydrosphere and lithosphere.',  hint:'Carbon moving through atmosphere, living things, rock' },
    { term:'Carbon sink',          definition:'A reservoir that absorbs more carbon from the atmosphere than it releases — e.g. oceans, forests.',  hint:'Absorbs more carbon than releases' },
    { term:'Carbon source',        definition:'A reservoir that releases more carbon to the atmosphere than it absorbs.',  hint:'Releases more carbon than absorbs' },
    { term:'Albedo',               definition:'The proportion of incoming solar radiation reflected by a surface.',       hint:'Proportion of solar radiation reflected' },
    { term:'Positive feedback',    definition:'A process where an initial change amplifies the original change — e.g. melting sea ice reduces albedo.',  hint:'Initial change amplifies — makes it stronger' },
    { term:'Negative feedback',    definition:'A process where an initial change is counteracted — stabilising the system.',  hint:'Initial change counteracted — stabilises system' },
    { term:'Tipping point',        definition:'A critical threshold in the climate system beyond which changes become self-sustaining and irreversible.',  hint:'Threshold — change becomes irreversible' },
    { term:'Mitigation',           definition:'Actions taken to reduce greenhouse gas emissions and limit the extent of climate change.',  hint:'Reducing emissions — limiting climate change' },
    { term:'Adaptation',           definition:'Adjusting to the expected or actual effects of climate change to reduce vulnerability.',  hint:'Adjusting to cope with climate change' },
    { term:'Ecological footprint', definition:'The area of productive land and water required to support a person\'s lifestyle.',  hint:'Land needed to support a person\'s lifestyle' },
  ],

};

// ────────────────────────────────────────────────────────────
// ENGLISH LITERATURE — AQA A-Level (7712)
// ────────────────────────────────────────────────────────────
VOCAB['english']['aqa-alevel'] = {

  'Critical Terminology': [
    { term:'Polyphony',            definition:'A narrative technique where multiple distinct voices or perspectives coexist without one dominating.',  hint:'Multiple voices — none dominant' },
    { term:'Free indirect discourse', definition:'A narrative technique blending the narrator\'s voice with a character\'s thoughts without direct speech markers.',  hint:'Narrator blends with character\'s thoughts' },
    { term:'Unreliable narrator',  definition:'A narrator whose account is not fully trustworthy — may be naive, biased or self-deceiving.',  hint:'Narrator whose account can\'t be trusted' },
    { term:'Intertextuality',      definition:'The relationship between a text and other texts it references, alludes to or responds to.',  hint:'References and relationships between texts' },
    { term:'Bathos',               definition:'A sudden drop from the sublime to the trivial — used for comic or ironic effect.',  hint:'Sudden drop from high to trivial — comic effect' },
    { term:'Anagnorisis',          definition:'A moment of recognition or revelation in which a character discovers the true nature of their situation.',  hint:'Moment of revelation — character discovers truth' },
    { term:'Hamartia',             definition:'The fatal flaw or error of judgement that leads to a tragic hero\'s downfall.',  hint:'Fatal flaw of tragic hero' },
    { term:'Hubris',               definition:'Excessive pride or arrogance that leads to a tragic hero\'s downfall.',  hint:'Excessive pride leading to downfall' },
    { term:'Nemesis',              definition:'The inevitable fate or downfall that follows a character\'s hubris or wrongdoing.',  hint:'Inevitable punishment following hubris' },
    { term:'Catharsis',            definition:'The emotional purging of pity and fear experienced by the audience at the end of a tragedy.',  hint:'Emotional release — end of tragedy' },
    { term:'Bildungsroman',        definition:'A novel depicting the psychological and moral growth of the protagonist from youth to adulthood.',  hint:'Coming-of-age novel — moral growth' },
    { term:'Epistolary novel',     definition:'A novel written as a series of letters or documents.',                  hint:'Novel written as letters or documents' },
    { term:'Gothic',               definition:'A literary genre characterised by atmosphere, mystery, darkness, the supernatural and psychological terror.',  hint:'Mystery, darkness, supernatural terror' },
    { term:'Pastoral',             definition:'A literary mode that idealises rural life and nature — often contrasted with corruption of urban life.',  hint:'Idealises rural life — nature' },
    { term:'Modernism',            definition:'A literary movement rejecting traditional forms — characterised by stream of consciousness, fragmented narrative and ambiguity.',  hint:'Rejects tradition — fragmented, stream of consciousness' },
    { term:'Post-colonialism',     definition:'A critical approach examining the cultural legacy of colonialism and the representation of colonised peoples.',  hint:'Examines colonial legacy and representation' },
    { term:'Marxist criticism',    definition:'A critical approach examining literature in terms of class, economic power and social inequality.',  hint:'Class, power and economic inequality in literature' },
    { term:'Feminist criticism',   definition:'A critical approach examining literature in terms of gender, power and the representation of women.',  hint:'Gender, power and women\'s representation' },
    { term:'Psychoanalytic criticism', definition:'A critical approach using Freudian and Lacanian concepts to analyse characters, authors and texts.',  hint:'Freudian concepts applied to literature' },
  ],

  'Drama and Theatre': [
    { term:'Tragedy',              definition:'A dramatic genre depicting the downfall of a noble protagonist through their own flaw or external forces.',  hint:'Noble protagonist\'s downfall — their own flaw' },
    { term:'Comedy',               definition:'A dramatic genre that ends happily — often involving social resolution through marriage or reconciliation.',  hint:'Happy ending — social resolution' },
    { term:'Tragicomedy',          definition:'A dramatic genre mixing elements of tragedy and comedy.',                    hint:'Mix of tragic and comic elements' },
    { term:'Soliloquy',            definition:'A speech in which a character reveals their private thoughts to the audience while alone on stage.',  hint:'Private thoughts to audience — alone on stage' },
    { term:'Aside',                definition:'A brief remark made to the audience that other characters cannot hear.',    hint:'Brief remark to audience — not heard by others' },
    { term:'Dramatic irony',       definition:'When the audience knows more than the characters on stage.',              hint:'Audience knows more than characters' },
    { term:'Peripeteia',           definition:'A sudden reversal of fortune in a narrative or drama — often the turning point.',  hint:'Sudden reversal of fortune' },
    { term:'In medias res',        definition:'Beginning a narrative in the middle of the action rather than at the beginning.',  hint:'Narrative begins in the middle of action' },
    { term:'Deus ex machina',      definition:'An unexpected power or event that resolves a seemingly unsolvable problem in a story.',  hint:'Sudden unexpected resolution to plot' },
    { term:'Mise en scène',        definition:'All the visual elements of a theatrical or film production — set, lighting, costume, actors.',  hint:'All visual elements of a production' },
  ],

  'Poetic Forms and Devices': [
    { term:'Iambic pentameter',    definition:'A metrical pattern of five iambs per line — unstressed syllable followed by stressed syllable, ten syllables per line.',  hint:'Five iambs per line — ten syllables — Shakespeare' },
    { term:'Sonnet',               definition:'A 14-line poem — Shakespearean sonnets have three quatrains and a couplet; Petrarchan sonnets have an octave and sestet.',  hint:'14 lines — Shakespearean or Petrarchan' },
    { term:'Volta',                definition:'The turn or shift in thought, mood or argument in a sonnet — usually at line 9 in Petrarchan sonnets.',  hint:'Turn in argument or mood in a sonnet' },
    { term:'Blank verse',          definition:'Unrhymed iambic pentameter — used in Shakespeare\'s plays and much English poetry.',  hint:'Unrhymed iambic pentameter' },
    { term:'Enjambment',           definition:'When a sentence or phrase continues beyond the end of a line without pause.',  hint:'Sentence continues past line break' },
    { term:'Caesura',              definition:'A pause or break within a line of poetry, often indicated by punctuation.',  hint:'Pause mid-line in poetry' },
    { term:'Anaphora',             definition:'The repetition of a word or phrase at the beginning of successive clauses.',  hint:'Repetition at start of successive clauses' },
    { term:'Apostrophe',           definition:'A figure of speech addressing an absent person, idea or object as if present.',  hint:'Addressing absent person or thing as if present' },
    { term:'Synecdoche',           definition:'A figure of speech using a part to represent the whole, or the whole to represent a part.',  hint:'Part represents whole — or whole represents part' },
    { term:'Metonymy',             definition:'A figure of speech replacing a name with something closely associated with it — e.g. "the crown" for monarchy.',  hint:'Associated term replaces the name — e.g. crown for king' },
    { term:'Pathetic fallacy',     definition:'Attributing human emotions to elements of the natural world to reflect a character\'s mood.',  hint:'Nature reflects human emotion' },
    { term:'Elegy',                definition:'A poem mourning the death of a person or the passing of something lost.',  hint:'Poem mourning death or loss' },
    { term:'Ode',                  definition:'A lyric poem in praise or celebration of a person, place, thing or idea.',  hint:'Lyric poem in praise or celebration' },
  ],

};

// ════════════════════════════════════════════════════════════
// EDEXCEL A-LEVEL
// ════════════════════════════════════════════════════════════

VOCAB['biology']['edexcel-alevel'] = {
  'Lifestyle, Health and Risk': [
    { term:'Cardiovascular disease', definition:'A group of diseases affecting the heart and blood vessels.',                                           hint:'Diseases of heart and blood vessels' },
    { term:'Atherosclerosis',       definition:'Build-up of fatty plaques inside artery walls, narrowing the lumen.',                                  hint:'Fatty plaques in artery walls' },
    { term:'Thrombosis',            definition:'Formation of a blood clot inside a blood vessel — may block blood flow.',                              hint:'Blood clot inside vessel' },
    { term:'HDL',                   definition:'High-density lipoprotein — carries cholesterol from tissues to the liver for removal.',                hint:'Good cholesterol — removes cholesterol to liver' },
    { term:'LDL',                   definition:'Low-density lipoprotein — transports cholesterol to tissues; high levels increase CVD risk.',          hint:'Bad cholesterol — deposits in arteries' },
    { term:'BMI',                   definition:'Body mass index — weight divided by height squared, used to assess health risk.',                     hint:'Weight/height² — health measure' },
    { term:'Waist-to-hip ratio',    definition:'Waist circumference divided by hip circumference — a predictor of cardiovascular risk.',              hint:'Waist ÷ hip — CVD risk indicator' },
    { term:'Statin',                definition:'A drug that inhibits cholesterol synthesis in the liver, lowering blood LDL levels.',                  hint:'Drug lowering blood cholesterol' },
    { term:'Risk factor',           definition:'A variable that increases the probability of developing a disease.',                                   hint:'Increases disease probability' },
    { term:'Correlation',           definition:'A statistical relationship between two variables — does not necessarily indicate causation.',          hint:'Statistical relationship — not necessarily causation' },
    { term:'Causation',             definition:'A direct relationship where one variable causes another to change.',                                   hint:'One variable directly causes another' },
    { term:'Cohort study',          definition:'A long-term study following a group of people to observe whether exposure to a risk factor leads to disease.', hint:'Long-term study following a group over time' },
  ],
  'Genes and Health': [
    { term:'Cystic fibrosis',       definition:'A genetic disorder caused by a mutation in the CFTR gene — causes thick mucus in the lungs.',         hint:'CFTR mutation — thick mucus in lungs' },
    { term:'CFTR protein',          definition:'Cystic fibrosis transmembrane conductance regulator — a chloride ion channel in cell membranes.',     hint:'Chloride channel — affected in cystic fibrosis' },
    { term:'Monogenic disorder',    definition:'A disorder caused by a mutation in a single gene.',                                                   hint:'Single gene causes disorder' },
    { term:'Incomplete dominance',  definition:'When the heterozygous phenotype is intermediate between the two homozygous phenotypes.',              hint:'Heterozygote is intermediate phenotype' },
    { term:'Codominance',           definition:'When both alleles in a heterozygote are expressed simultaneously in the phenotype.',                  hint:'Both alleles expressed — heterozygote' },
    { term:'Carrier',               definition:'A heterozygous individual who does not show a recessive disorder but can pass it to offspring.',      hint:'Heterozygous — carries but not affected' },
    { term:'Pedigree diagram',      definition:'A diagram showing inheritance of a characteristic through multiple generations of a family.',         hint:'Family tree showing inheritance pattern' },
    { term:'Gene therapy',          definition:'The insertion of a functional allele into cells to correct a genetic disorder.',                      hint:'Inserting functional gene to correct disorder' },
    { term:'Somatic gene therapy',  definition:'Gene therapy targeting body cells — changes are not inherited by offspring.',                         hint:'Body cells — not passed to offspring' },
  ],
  'Biodiversity and Natural Resources': [
    { term:'Species richness',      definition:'The number of different species present in a habitat.',                                               hint:'Number of different species' },
    { term:'Species evenness',      definition:'How evenly individuals are distributed across different species in a habitat.',                       hint:'Even distribution between species' },
    { term:'Index of diversity',    definition:'A measure combining species richness and evenness to quantify biodiversity.',                         hint:'Richness + evenness combined' },
    { term:'Binomial nomenclature', definition:'Two-part Latin naming system — genus and species.',                                                  hint:'Genus species — two-part Latin name' },
    { term:'Phylogenetics',         definition:'The study of evolutionary relationships between organisms.',                                          hint:'Evolutionary relationships between organisms' },
    { term:'Sustainable management', definition:'Using natural resources in ways that allow them to be replenished for future generations.',          hint:'Using resources without depleting them' },
    { term:'Plant cell wall',       definition:'Rigid layer outside the plant cell membrane made of cellulose microfibrils — provides structural support.', hint:'Cellulose layer — structural support' },
    { term:'Conservation',          definition:'The protection and management of biodiversity and natural habitats.',                                 hint:'Protection and management of biodiversity' },
  ],
  'On the Wild Side': [
    { term:'Net primary productivity', definition:'The rate of organic matter production by plants after respiratory losses — available to consumers.', hint:'GPP minus plant respiration' },
    { term:'Trophic efficiency',    definition:'The percentage of energy passed from one trophic level to the next.',                                 hint:'Energy passed between trophic levels (%)' },
    { term:'Succession',            definition:'The sequential change in species composition of a community over time.',                              hint:'Community changes over time' },
    { term:'Climax community',      definition:'The stable final community reached at the end of succession.',                                       hint:'Final stable community' },
    { term:'Carbon sequestration',  definition:'The long-term storage of atmospheric CO₂ in forests, soils or geological formations.',               hint:'Long-term storage of atmospheric CO₂' },
    { term:'Albedo',                definition:'The proportion of solar radiation reflected by a surface.',                                           hint:'Reflectivity of a surface' },
    { term:'Positive feedback',     definition:'A mechanism that amplifies an initial change — e.g. melting ice reduces albedo, causing more warming.', hint:'Amplifies the original change' },
  ],
};

VOCAB['chemistry']['edexcel-alevel'] = {
  'Core Physical Chemistry': [
    { term:'Born-Haber cycle',      definition:'A thermochemical cycle used to calculate lattice enthalpy indirectly using Hess\'s law.',             hint:'Thermochemical cycle → lattice enthalpy' },
    { term:'Lattice enthalpy',      definition:'The enthalpy change when one mole of ionic compound forms from gaseous ions.',                       hint:'Energy forming ionic lattice from gaseous ions' },
    { term:'Entropy',               definition:'A measure of the disorder or randomness of a system — symbol S.',                                    hint:'Measure of disorder — S' },
    { term:'Gibbs free energy',     definition:'ΔG = ΔH − TΔS — reaction is spontaneous when ΔG is negative.',                                     hint:'ΔG = ΔH − TΔS — spontaneous when negative' },
    { term:'Rate equation',         definition:'rate = k[A]ᵐ[B]ⁿ — shows how rate depends on concentration of reactants.',                         hint:'rate = k[A]ᵐ[B]ⁿ' },
    { term:'Rate constant k',       definition:'The proportionality constant in the rate equation — varies with temperature via Arrhenius equation.', hint:'Proportionality constant — varies with temperature' },
    { term:'Buffer solution',       definition:'A solution that resists pH changes when small amounts of acid or base are added.',                   hint:'Resists pH change when acid/base added' },
    { term:'Ka',                    definition:'The acid dissociation constant — measures strength of a weak acid.',                                  hint:'Acid dissociation constant' },
    { term:'Henderson-Hasselbalch', definition:'pH = pKa + log([A⁻]/[HA]) — calculates pH of a buffer solution.',                                  hint:'pH = pKa + log([A⁻]/[HA])' },
  ],
  'Inorganic Chemistry': [
    { term:'Ligand',                definition:'A molecule or ion with a lone pair donated to a metal ion to form a coordinate bond.',               hint:'Donates lone pair to metal ion' },
    { term:'Bidentate ligand',      definition:'A ligand that donates two lone pairs to a central metal ion — e.g. ethane-1,2-diamine.',            hint:'Donates two lone pairs — e.g. en' },
    { term:'EDTA',                  definition:'A hexadentate ligand forming very stable chelate complexes with metal ions.',                        hint:'Hexadentate — forms stable chelates' },
    { term:'Chelation',             definition:'Formation of multiple coordinate bonds between a polydentate ligand and a metal ion.',               hint:'Multiple bonds from polydentate ligand' },
    { term:'Disproportionation',    definition:'A redox reaction where the same element is simultaneously oxidised and reduced.',                    hint:'One element — oxidised and reduced' },
    { term:'Autocatalysis',         definition:'A reaction catalysed by one of its own products.',                                                   hint:'Product catalyses its own formation' },
  ],
  'Organic Chemistry': [
    { term:'Nucleophilic addition',  definition:'Addition of a nucleophile across a C=O double bond — characteristic of aldehydes and ketones.',    hint:'Nucleophile adds across C=O' },
    { term:'Aldehyde',              definition:'Organic compound with –CHO group — oxidised to carboxylic acid; positive Fehling\'s and Tollens\'.',hint:'–CHO group — oxidised to carboxylic acid' },
    { term:'Ketone',                definition:'Organic compound with C=O flanked by carbon atoms — resistant to oxidation.',                       hint:'C=O flanked by carbons — resists oxidation' },
    { term:'Fehling\'s test',       definition:'Blue Cu²⁺ reduced to brick-red Cu₂O precipitate by aldehydes but not ketones.',                   hint:'Blue → brick red — tests aldehydes' },
    { term:'Tollens\' reagent',     definition:'Ag⁺ reduced to silver mirror by aldehydes but not ketones.',                                        hint:'Silver mirror — tests aldehydes' },
    { term:'Friedel-Crafts reaction', definition:'Alkylation or acylation of benzene using a halogenoalkane/acyl chloride with AlCl₃ catalyst.',  hint:'Alkylation/acylation of benzene — AlCl₃' },
    { term:'Nitration',             definition:'Introduction of –NO₂ into benzene using concentrated H₂SO₄ and HNO₃.',                            hint:'–NO₂ added to benzene — mixed acid' },
    { term:'Chiral carbon',         definition:'A carbon bonded to four different groups — creates optical isomers.',                               hint:'Four different groups — optical isomers' },
    { term:'Enantiomers',           definition:'Non-superimposable mirror image molecules — rotate plane-polarised light in opposite directions.',  hint:'Mirror image molecules — opposite optical rotation' },
    { term:'Racemic mixture',       definition:'An equal mixture of two enantiomers — optically inactive overall.',                                 hint:'Equal enantiomers — no optical activity' },
  ],
};

VOCAB['physics']['edexcel-alevel'] = {
  'Mechanics': [
    { term:'Scalar',                definition:'A quantity with magnitude only — e.g. speed, mass.',                                                hint:'Magnitude only — no direction' },
    { term:'Vector',                definition:'A quantity with both magnitude and direction — e.g. velocity, force.',                              hint:'Magnitude + direction' },
    { term:'Projectile motion',     definition:'Motion under gravity alone — horizontal and vertical components are independent.',                  hint:'Horizontal and vertical independent — gravity only' },
    { term:'Conservation of momentum', definition:'Total momentum of a closed system is constant.',                                               hint:'Total momentum constant — closed system' },
    { term:'Stokes\' law',          definition:'Drag force on a sphere — F = 6πηrv.',                                                             hint:'Drag on sphere — F = 6πηrv' },
    { term:'Upthrust',              definition:'Upward force on object in fluid — equals weight of displaced fluid.',                              hint:'Weight of fluid displaced — Archimedes' },
    { term:'Work-energy theorem',   definition:'Net work done on an object equals its change in kinetic energy.',                                  hint:'Net work = change in KE' },
  ],
  'Electricity and Waves': [
    { term:'Resistivity',           definition:'Material property — R = ρL/A — measured in ohm-metres.',                                          hint:'ρ = RA/L — material resistance property' },
    { term:'Superconductor',        definition:'Material with zero resistance below its critical temperature.',                                    hint:'Zero resistance below critical temperature' },
    { term:'Intensity',             definition:'Power per unit area — I = P/A — W m⁻².',                                                         hint:'Power per unit area — W m⁻²' },
    { term:'Diffraction grating',   definition:'Many closely spaced slits — sharp maxima at angles nλ = d sinθ.',                                hint:'nλ = d sinθ — sharp maxima' },
    { term:'Standing wave',         definition:'Formed when two identical waves travel in opposite directions — has nodes and antinodes.',         hint:'Opposite waves — nodes + antinodes' },
    { term:'Polarisation',          definition:'Restriction of transverse oscillations to a single plane.',                                       hint:'Oscillations in one plane only' },
  ],
  'Quantum Physics and Particles': [
    { term:'Photoelectric effect',  definition:'Emission of electrons from metal when incident EM radiation exceeds threshold frequency.',         hint:'Electrons emitted above threshold frequency' },
    { term:'Work function',         definition:'Minimum energy needed to remove an electron from a metal surface.',                               hint:'Minimum energy to free electron from metal' },
    { term:'de Broglie wavelength', definition:'Wavelength of a moving particle — λ = h/p.',                                                     hint:'λ = h/p — wave nature of particles' },
    { term:'Energy levels',         definition:'Discrete allowed energies for electrons in atoms — transitions emit or absorb photons.',          hint:'Discrete energies — photon emission/absorption' },
    { term:'Exponential decay',     definition:'N = N₀e^(−λt) — radioactive nuclei decrease exponentially with time.',                          hint:'N = N₀e^(−λt) — undecayed nuclei' },
  ],
  'Fields and Further Mechanics': [
    { term:'Gravitational field strength', definition:'Force per unit mass — g = GM/r².',                                                       hint:'Force per unit mass — g = GM/r²' },
    { term:'Capacitance',           definition:'Charge stored per unit voltage — C = Q/V — farads.',                                             hint:'C = Q/V — charge per volt' },
    { term:'SHM',                   definition:'Acceleration proportional to and directed towards equilibrium — a = −ω²x.',                     hint:'a ∝ −x — towards equilibrium' },
    { term:'Magnetic flux',         definition:'Φ = BA — measured in webers.',                                                                   hint:'Φ = BA — webers' },
    { term:'Faraday\'s law',        definition:'Induced EMF equals rate of change of flux linkage.',                                             hint:'EMF = −ΔΦ/Δt' },
    { term:'Specific heat capacity', definition:'Energy to raise 1 kg by 1 K — Q = mcΔT.',                                                     hint:'Q = mcΔT — energy per kg per K' },
    { term:'Ideal gas',             definition:'Gas obeying pV = nRT — molecules with no volume, no intermolecular forces.',                    hint:'pV = nRT — ideal model' },
  ],
};

VOCAB['maths']['edexcel-alevel'] = {
  'Pure Mathematics': [
    { term:'Proof by contradiction', definition:'Assuming the statement is false and deriving a contradiction.',                                   hint:'Assume false → contradiction' },
    { term:'Modulus function',      definition:'|x| — absolute value — always non-negative.',                                                    hint:'Absolute value — always positive' },
    { term:'Partial fractions',     definition:'Decomposing a fraction with polynomial denominator into simpler fractions.',                      hint:'Simpler fraction sum' },
    { term:'Implicit differentiation', definition:'Differentiating when y is not expressed explicitly in terms of x.',                          hint:'y not isolated — differentiate implicitly' },
    { term:'Integration by parts',  definition:'∫u dv = uv − ∫v du.',                                                                          hint:'∫u dv = uv − ∫v du' },
    { term:'Differential equation', definition:'An equation involving a function and its derivatives.',                                          hint:'Equation with derivatives — find function' },
    { term:'Dot product',           definition:'a·b = |a||b|cosθ — scalar product for angle between vectors.',                                  hint:'a·b = |a||b|cosθ — angle between vectors' },
    { term:'Newton-Raphson method', definition:'Iterative root finding — xₙ₊₁ = xₙ − f(xₙ)/f\'(xₙ).',                                        hint:'xₙ₊₁ = xₙ − f/f\' — root finding' },
  ],
  'Statistics': [
    { term:'Binomial distribution',  definition:'Number of successes in n independent trials each with probability p.',                          hint:'n trials probability p — B(n,p)' },
    { term:'Normal distribution',   definition:'Continuous bell-shaped distribution described by mean μ and standard deviation σ.',             hint:'Bell-shaped — μ and σ' },
    { term:'Hypothesis testing',    definition:'Statistical procedure testing whether evidence is sufficient to reject a null hypothesis.',      hint:'Testing null hypothesis against evidence' },
    { term:'Type I error',          definition:'Rejecting a true null hypothesis — probability equals significance level.',                      hint:'Rejecting true H₀ — prob = α' },
    { term:'Type II error',         definition:'Failing to reject a false null hypothesis.',                                                     hint:'Not rejecting a false H₀' },
    { term:'Conditional probability', definition:'P(A|B) = P(A∩B)/P(B) — probability of A given B.',                                          hint:'P(A|B) = P(A∩B)/P(B)' },
  ],
  'Mechanics': [
    { term:'SUVAT equations',       definition:'Five equations for uniform acceleration: v=u+at, v²=u²+2as, s=ut+½at², etc.',                   hint:'Five equations — uniform acceleration' },
    { term:'Coefficient of friction', definition:'μ = F/N — ratio of friction to normal force.',                                              hint:'μ = F/N' },
    { term:'Moments',               definition:'Force × perpendicular distance from pivot — must balance in equilibrium.',                      hint:'Force × perpendicular distance' },
    { term:'Variable acceleration', definition:'Non-constant acceleration — requires calculus rather than SUVAT.',                             hint:'Changing acceleration — use calculus' },
    { term:'Connected particles',   definition:'Particles joined by strings — apply Newton\'s 2nd law to each separately.',                   hint:'Joined particles — Newton 2nd for each' },
  ],
};

VOCAB['history']['edexcel-alevel'] = {
  'Historical Skills': [
    { term:'Causation',             definition:'Why historical events occurred — distinguishing short and long-term causes.',                     hint:'Why events happened — short vs long-term' },
    { term:'Significance',         definition:'Historical importance assessed by impact and duration.',                                         hint:'Impact and duration — historical importance' },
    { term:'Historiography',        definition:'How historians have written and interpreted historical events over time.',                       hint:'How history has been interpreted' },
    { term:'Revisionism',           definition:'Challenging previously accepted historical interpretations with new evidence.',                  hint:'Challenges accepted interpretations' },
    { term:'Corroboration',         definition:'Supporting or confirming one source with evidence from another.',                               hint:'One source confirmed by another' },
  ],
  'Mao\'s China 1949-1976': [
    { term:'Great Leap Forward',    definition:'Mao\'s 1958–62 campaign to rapidly industrialise China — caused a devastating famine.',         hint:'1958 rapid industrialisation — caused famine' },
    { term:'Cultural Revolution',   definition:'Mao\'s 1966–76 campaign to purge traditional elements and reassert his power.',                hint:'1966 — purge traditional elements' },
    { term:'Red Guards',            definition:'Young Maoist militants who enforced the Cultural Revolution.',                                  hint:'Maoist youth — Cultural Revolution enforcers' },
    { term:'Collectivisation',      definition:'Organisation of Chinese agriculture into state-controlled collective farms.',                    hint:'Private farms → state collective farms' },
    { term:'Cult of personality',   definition:'The promotion of Mao as an infallible god-like leader through propaganda.',                    hint:'Mao as infallible leader — propaganda' },
    { term:'Sino-Soviet split',     definition:'The deterioration of relations between China and the USSR in the late 1950s.',                  hint:'China–USSR relations deteriorated' },
  ],
  'Civil Rights in the USA 1865-1992': [
    { term:'Reconstruction',        definition:'Post-Civil War period 1865–77 aimed at integrating former slaves into US society.',            hint:'Post-Civil War reintegration 1865–77' },
    { term:'Jim Crow laws',         definition:'State laws enforcing racial segregation in the American South.',                                hint:'Racial segregation laws — US South' },
    { term:'NAACP',                 definition:'National Association for the Advancement of Colored People — civil rights organisation.',      hint:'Civil rights organisation — 1909' },
    { term:'Brown v Board of Education', definition:'1954 Supreme Court ruling that racial segregation in schools was unconstitutional.',     hint:'1954 — segregated schools unconstitutional' },
    { term:'Civil Rights Act 1964', definition:'US legislation banning discrimination based on race, colour, religion or national origin.',   hint:'1964 — banned racial discrimination' },
    { term:'Black Power',           definition:'Political movement emphasising racial pride and Black self-determination.',                      hint:'Racial pride and self-determination' },
  ],
  'Russia 1917-91': [
    { term:'October Revolution 1917', definition:'Bolshevik seizure of power led by Lenin, establishing Communist rule in Russia.',            hint:'Bolshevik seizure of power — Lenin' },
    { term:'War Communism',          definition:'Lenin\'s 1918–21 economic policy — nationalisation and grain requisitioning.',               hint:'Lenin\'s wartime economic control' },
    { term:'NEP',                    definition:'New Economic Policy — Lenin\'s limited capitalism to revive the economy 1921–28.',           hint:'Lenin\'s limited capitalism — 1921–28' },
    { term:'Great Terror',           definition:'Stalin\'s wave of mass executions and imprisonment 1936–38.',                                hint:'Mass executions — 1936–38' },
    { term:'Glasnost',               definition:'Gorbachev\'s policy of openness and transparency in Soviet governance.',                     hint:'Gorbachev\'s openness policy' },
    { term:'Perestroika',            definition:'Gorbachev\'s policy of economic restructuring.',                                             hint:'Gorbachev\'s economic restructuring' },
  ],
};

// ════════════════════════════════════════════════════════════
// OCR A-LEVEL
// ════════════════════════════════════════════════════════════

VOCAB['biology']['ocr-alevel'] = {
  'Foundations in Biology': [
    { term:'Cytoskeleton',          definition:'Network of protein fibres providing structural support and enabling intracellular transport.',         hint:'Protein fibres — support and transport in cell' },
    { term:'Confocal microscopy',   definition:'Microscopy using lasers to scan a specimen point by point — produces detailed 3D images.',            hint:'Laser scanning — detailed 3D images' },
    { term:'Lysosome',              definition:'Membrane-bound vesicle containing hydrolytic enzymes — digests waste materials.',                      hint:'Hydrolytic enzymes — digests waste' },
    { term:'Phosphodiester bond',   definition:'Covalent bond joining nucleotides in a polynucleotide chain.',                                        hint:'Bond joining nucleotides in DNA/RNA' },
    { term:'Degenerate code',       definition:'More than one codon can code for the same amino acid.',                                               hint:'Multiple codons for same amino acid' },
    { term:'DNA helicase',          definition:'Enzyme that unwinds and unzips the DNA double helix during replication.',                             hint:'Unwinds DNA — replication' },
    { term:'Fibrous protein',       definition:'Insoluble protein with structural role — e.g. collagen, keratin.',                                    hint:'Insoluble — structural — collagen' },
    { term:'Globular protein',      definition:'Soluble, spherical protein with metabolic role — e.g. enzymes, haemoglobin.',                        hint:'Soluble — metabolic role' },
    { term:'Prosthetic group',      definition:'Non-protein component permanently bound to a protein, essential for function.',                       hint:'Non-protein permanently bound to protein' },
    { term:'Purines',               definition:'Nitrogenous bases with double ring — adenine and guanine.',                                           hint:'Double ring — adenine and guanine' },
    { term:'Pyrimidines',           definition:'Nitrogenous bases with single ring — cytosine, thymine, uracil.',                                    hint:'Single ring — cytosine, thymine, uracil' },
  ],
  'Exchange and Transport': [
    { term:'Counter-current system', definition:'Blood and water flow in opposite directions in fish gills — maintains diffusion gradient.',          hint:'Opposite flow — constant gradient — gills' },
    { term:'Tracheal system',       definition:'Network of air tubes in insects delivering oxygen directly to tissues.',                               hint:'Air tubes direct to tissues — insects' },
    { term:'Casparian strip',       definition:'Waxy suberin band in root endodermis — forces water into symplast, controlling mineral uptake.',      hint:'Suberin band — forces water into symplast' },
    { term:'Pressure flow hypothesis', definition:'Sugars loaded at source create high pressure, driving phloem flow to sink.',                      hint:'High pressure at source → flow to sink' },
    { term:'Sinoatrial node',       definition:'The pacemaker of the heart — generates electrical impulse initiating each heartbeat.',                hint:'Pacemaker — generates heartbeat' },
    { term:'ECG',                   definition:'Electrocardiogram — records electrical activity of heart — shows P, QRS and T waves.',               hint:'Heart\'s electrical activity — P, QRS, T' },
  ],
  'Biodiversity and Evolution': [
    { term:'Phylogenetic tree',     definition:'Diagram showing evolutionary relationships and common ancestry between organisms.',                    hint:'Diagram of evolutionary relationships' },
    { term:'Adaptive radiation',    definition:'Rapid diversification of one species to fill many ecological niches.',                               hint:'Rapid diversification into many niches' },
    { term:'Genetic drift',         definition:'Random changes in allele frequencies in a small population — not selection.',                        hint:'Random allele changes — small population' },
    { term:'Directional selection', definition:'Natural selection favouring individuals at one extreme of a phenotypic range.',                       hint:'One extreme of phenotype favoured' },
    { term:'Stabilising selection', definition:'Natural selection favouring intermediate phenotypes — reduces variation.',                            hint:'Middle phenotype favoured — less variation' },
    { term:'Disruptive selection',  definition:'Natural selection favouring both extremes of phenotypic range.',                                      hint:'Both extremes favoured — more variation' },
    { term:'Reproductive isolation', definition:'Mechanisms preventing gene flow between populations — leads to speciation.',                        hint:'Prevents gene flow → speciation' },
    { term:'Index of diversity',    definition:'d = N(N−1)/Σn(n−1) — combines richness and evenness.',                                              hint:'d = N(N−1)/Σn(n−1)' },
    { term:'Transect',              definition:'A line across a habitat along which samples are taken to study distribution.',                        hint:'Sampling line across habitat' },
  ],
  'Communication, Homeostasis and Energy': [
    { term:'Second messenger',      definition:'Intracellular molecule (e.g. cAMP) relaying signal from surface receptor.',                          hint:'Intracellular signal relay — e.g. cAMP' },
    { term:'Acetylcholine',         definition:'Neurotransmitter at cholinergic synapses — broken down by acetylcholinesterase.',                    hint:'Neurotransmitter — cholinergic synapses' },
    { term:'Refractory period',     definition:'Period after an action potential during which a neurone cannot be stimulated again.',                 hint:'Recovery period — no second impulse possible' },
    { term:'Saltatory conduction',  definition:'Impulse jumping between nodes of Ranvier in myelinated neurones — faster transmission.',             hint:'Jumps between nodes — faster conduction' },
    { term:'Gluconeogenesis',       definition:'Synthesis of glucose from non-carbohydrate sources in the liver.',                                   hint:'Glucose from non-carbohydrate sources' },
    { term:'Osmoregulation',        definition:'Homeostatic control of blood water potential — mainly by the kidneys.',                              hint:'Controlling water potential — kidneys' },
  ],
  'Genetics, Evolution and Ecosystems': [
    { term:'Gene pool',             definition:'The total collection of alleles in a population.',                                                    hint:'All alleles in a population' },
    { term:'Hardy-Weinberg equilibrium', definition:'Allele and genotype frequencies remain constant when no evolutionary forces act.',              hint:'Frequencies stable without evolution' },
    { term:'Restriction endonuclease', definition:'Enzyme cutting DNA at specific recognition sequences.',                                          hint:'Cuts DNA at specific sequences' },
    { term:'Electrophoresis',       definition:'Technique separating DNA fragments by size using electric current through gel.',                      hint:'Separates DNA by size — electric field' },
    { term:'Eutrophication',        definition:'Excessive nutrient enrichment of water — causes algal blooms and oxygen depletion.',                 hint:'Excess nutrients → algal bloom → O₂ depletion' },
    { term:'Biomagnification',      definition:'Increase in pollutant concentration at higher trophic levels.',                                      hint:'Pollutant concentration up food chain' },
  ],
};

VOCAB['chemistry']['ocr-alevel'] = {
  'Foundations in Chemistry': [
    { term:'Effective nuclear charge', definition:'Net positive charge experienced by outer electrons after shielding by inner electrons.',          hint:'Net charge felt by outer electron' },
    { term:'Shielding',             definition:'Reduction in nuclear attraction felt by outer electrons due to inner electrons.',                    hint:'Inner electrons reduce pull on outer electrons' },
    { term:'VSEPR',                 definition:'Valence shell electron pair repulsion — predicts molecular geometry from electron pair repulsions.',hint:'Electron pairs repel → determines shape' },
    { term:'Ionic equation',        definition:'Shows only ions participating in a reaction — spectator ions omitted.',                             hint:'Only reacting ions — spectators omitted' },
    { term:'Hess\'s law',           definition:'Total enthalpy change is independent of the route taken.',                                          hint:'Enthalpy independent of route' },
    { term:'Orbital',               definition:'Region around the nucleus with high probability of finding an electron.',                           hint:'High probability electron region' },
  ],
  'Periodic Table and Energy': [
    { term:'Born-Haber cycle',      definition:'Thermochemical cycle calculating lattice enthalpy indirectly via Hess\'s law.',                     hint:'Cycle for lattice enthalpy' },
    { term:'Enthalpy of hydration', definition:'Heat change when 1 mol gaseous ions dissolves in excess water.',                                    hint:'Gaseous ions dissolving in water' },
    { term:'Gibbs equation',        definition:'ΔG = ΔH − TΔS — feasible when ΔG is negative.',                                                   hint:'ΔG = ΔH − TΔS' },
    { term:'Electrode potential',   definition:'Half-cell potential measured vs standard hydrogen electrode under standard conditions.',             hint:'Half-cell EMF vs SHE' },
    { term:'Buffer',                definition:'Solution resisting pH change — contains weak acid and its conjugate base.',                         hint:'Resists pH change — weak acid + conjugate base' },
    { term:'Henderson-Hasselbalch', definition:'pH = pKa + log([A⁻]/[HA]).',                                                                      hint:'pH = pKa + log([A⁻]/[HA])' },
    { term:'Kp',                    definition:'Equilibrium constant in terms of partial pressures — for gaseous equilibria.',                      hint:'Equilibrium constant — partial pressures' },
  ],
  'Core Organic Chemistry': [
    { term:'Homolytic fission',     definition:'Bond breaking where each atom takes one electron — produces radicals.',                             hint:'One electron each — radicals' },
    { term:'Heterolytic fission',   definition:'Bond breaking where both electrons go to one atom — produces ions.',                               hint:'Both electrons one atom — ions' },
    { term:'Curly arrow',           definition:'Symbol showing movement of an electron pair in a mechanism.',                                       hint:'Shows electron pair movement' },
    { term:'Markovnikov\'s rule',   definition:'In electrophilic addition to an alkene, H adds to carbon with most hydrogens.',                    hint:'H to most-H carbon' },
    { term:'SN1 mechanism',         definition:'Two-step nucleophilic substitution — leaving group leaves first, then nucleophile attacks.',        hint:'Leaving group first — two steps' },
    { term:'SN2 mechanism',         definition:'One-step nucleophilic substitution — simultaneous attack and departure.',                          hint:'Simultaneous attack and departure' },
    { term:'Grignard reagent',      definition:'RMgX — organometallic nucleophile used to extend carbon chains.',                                  hint:'RMgX — extends carbon chain' },
    { term:'Zaitsev\'s rule',       definition:'More substituted alkene is the major product in elimination reactions.',                            hint:'More substituted alkene — major product' },
  ],
  'Organic Analysis': [
    { term:'Isoelectric point',     definition:'pH at which an amino acid has no net charge — zwitterion form.',                                   hint:'pH — no net charge on amino acid' },
    { term:'Zwitterion',            definition:'Molecule with both positive and negative charges — amino acid at its isoelectric point.',           hint:'Both + and − charges — amino acid at pI' },
    { term:'TLC',                   definition:'Thin layer chromatography — separates compounds by affinity for stationary/mobile phase.',         hint:'Separates compounds — gives Rf values' },
    { term:'GC-MS',                 definition:'Gas chromatography–mass spectrometry — separates then identifies volatile compounds.',             hint:'Separates then identifies volatile compounds' },
    { term:'¹H NMR',                definition:'Proton NMR — chemical shifts and splitting patterns identify organic structures.',                 hint:'Chemical shifts and splitting patterns' },
    { term:'Chiral centre',         definition:'Carbon bonded to four different groups — creates enantiomers.',                                    hint:'Four different groups → optical isomers' },
    { term:'Fragmentation pattern', definition:'Fragment ions in a mass spectrum used to deduce molecular structure.',                             hint:'Fragment ions → molecular structure' },
  ],
};

VOCAB['physics']['ocr-alevel'] = {
  'Forces and Motion': [
    { term:'Displacement',         definition:'Distance moved in a specified direction — vector quantity.',                                        hint:'Distance with direction' },
    { term:'Projectile',           definition:'Object moving under gravity alone — horizontal and vertical components independent.',               hint:'Under gravity — components independent' },
    { term:'Impulse',              definition:'Change in momentum — J = FΔt.',                                                                   hint:'J = FΔt = Δp' },
    { term:'Young modulus',        definition:'Ratio of tensile stress to tensile strain — E = σ/ε.',                                            hint:'E = stress/strain — stiffness' },
    { term:'Brittle material',     definition:'Fractures without significant plastic deformation.',                                               hint:'Fractures without stretching' },
    { term:'Ductile material',     definition:'Undergoes significant plastic deformation before fracturing.',                                     hint:'Stretches significantly before fracture' },
    { term:'Ultimate tensile strength', definition:'Maximum stress a material can withstand before fracturing.',                               hint:'Maximum stress before fracture' },
  ],
  'Electrons, Waves and Photons': [
    { term:'Drift velocity',       definition:'Mean velocity of conduction electrons — I = nqvA.',                                               hint:'Mean electron velocity — I = nqvA' },
    { term:'EMF',                  definition:'Energy transferred per unit charge by a source — electromotive force.',                           hint:'Energy per charge from source' },
    { term:'Kirchhoff\'s laws',    definition:'1st: currents at junction balance. 2nd: sum of EMFs = sum of pds around loop.',                  hint:'Junction currents; loop EMF = ΣPD' },
    { term:'Coherent sources',     definition:'Sources with same frequency and constant phase difference.',                                       hint:'Same frequency — constant phase difference' },
    { term:'Planck\'s constant',   definition:'h = 6.63 × 10⁻³⁴ J s — E = hf.',                                                               hint:'h = 6.63 × 10⁻³⁴ — E = hf' },
    { term:'Stopping potential',   definition:'Minimum negative voltage stopping fastest photoelectrons.',                                       hint:'Voltage stopping fastest photoelectrons' },
  ],
  'Newtonian World and Astrophysics': [
    { term:'Angular velocity',     definition:'Rate of change of angle — ω = 2π/T — radians per second.',                                       hint:'ω = 2π/T — rad/s' },
    { term:'Geostationary orbit',  definition:'Orbit with same period as Earth\'s rotation — satellite appears stationary.',                    hint:'Same period as Earth — appears stationary' },
    { term:'Stefan-Boltzmann law', definition:'P = σAT⁴ — total power radiated by black body proportional to T⁴.',                            hint:'P = σAT⁴ — power ∝ T⁴' },
    { term:'Wien\'s displacement law', definition:'λmax = b/T — peak wavelength inversely proportional to temperature.',                      hint:'λmax = b/T' },
    { term:'HR diagram',           definition:'Hertzsprung-Russell diagram — luminosity vs temperature showing main sequence, giants, dwarfs.',  hint:'Luminosity vs temperature — stellar types' },
    { term:'Chandrasekhar limit',  definition:'Maximum white dwarf mass — 1.4 solar masses — above this a neutron star forms.',               hint:'1.4 solar masses — white dwarf maximum' },
    { term:'Hubble\'s law',        definition:'v = H₀d — recession speed proportional to distance.',                                          hint:'v = H₀d' },
  ],
  'Particles and Medical Physics': [
    { term:'Specific charge',      definition:'Charge-to-mass ratio — e/m — C kg⁻¹.',                                                          hint:'Charge ÷ mass — e/m' },
    { term:'Mass-energy equivalence', definition:'E = mc² — mass and energy are interchangeable.',                                           hint:'E = mc²' },
    { term:'PET scan',             definition:'Positron emission tomography — positrons annihilate to produce detectable gamma pairs.',         hint:'Positrons → gamma pairs — detected externally' },
    { term:'MRI',                  definition:'Magnetic resonance imaging — radio waves + magnetic field produce soft tissue images.',          hint:'Radio waves + field → soft tissue images' },
    { term:'Acoustic impedance',   definition:'Z = ρc — determines fraction of ultrasound reflected at tissue boundaries.',                    hint:'Z = ρc — reflection at boundaries' },
    { term:'Radiation dose',       definition:'Energy deposited per unit mass of tissue — measured in grays.',                                 hint:'Energy per unit mass — grays' },
    { term:'Effective dose',       definition:'Radiation dose adjusted for type of radiation and tissue sensitivity — sieverts.',             hint:'Dose × weighting factors — sieverts' },
  ],
};

VOCAB['maths']['ocr-alevel'] = {
  'Pure Mathematics': [
    { term:'Proof by induction',    definition:'Base case + assume true for n=k, prove for n=k+1.',                                              hint:'Base case + inductive step' },
    { term:'Modulus function',      definition:'|f(x)| — always non-negative.',                                                                 hint:'Always non-negative' },
    { term:'Parametric equations',  definition:'x and y expressed in terms of parameter t.',                                                     hint:'x and y in terms of t' },
    { term:'Volume of revolution',  definition:'V = π∫y²dx — volume when curve rotated about x-axis.',                                         hint:'V = π∫y²dx' },
    { term:'Complex number',        definition:'a + bi where i = √(−1).',                                                                       hint:'a + bi — i = √(−1)' },
    { term:'Argand diagram',        definition:'Graph of complex numbers — real axis horizontal, imaginary axis vertical.',                      hint:'Graph of complex numbers' },
    { term:'Series convergence',    definition:'A series converges if the sum of its terms approaches a finite limit.',                          hint:'Sum approaches finite limit' },
    { term:'Arc length',            definition:'Length along a curve — found by integration.',                                                   hint:'Length along curve — integration' },
  ],
  'Statistics': [
    { term:'Poisson distribution',  definition:'Distribution for number of events in fixed interval — P(X=r) = e⁻λλʳ/r!.',                     hint:'Events in fixed interval — e⁻λλʳ/r!' },
    { term:'Expectation',           definition:'Mean of a distribution — E(X) = Σxp(x).',                                                       hint:'Mean of distribution — E(X)' },
    { term:'Variance',              definition:'Var(X) = E(X²) − [E(X)]² — measure of spread.',                                                hint:'E(X²) − [E(X)]²' },
    { term:'Two-tailed test',       definition:'Hypothesis test considering both directions of deviation.',                                      hint:'Tests both directions' },
    { term:'Critical value',        definition:'Boundary value beyond which null hypothesis is rejected.',                                       hint:'Boundary for rejecting H₀' },
  ],
  'Mechanics': [
    { term:'Coefficient of restitution', definition:'Ratio of relative speeds after to before collision — e = 0 to 1.',                       hint:'Speed after ÷ speed before — 0 to 1' },
    { term:'Centre of mass',        definition:'Point through which the resultant weight of an object acts.',                                    hint:'Point weight acts through' },
    { term:'Couple',                definition:'Two equal and opposite forces not in same line — produces pure rotation.',                       hint:'Equal opposite forces — pure rotation' },
    { term:'Normal reaction',       definition:'Contact force perpendicular to surface — balances component of weight normal to surface.',      hint:'Perpendicular contact force' },
    { term:'Variable force',        definition:'Force that changes with time or position — requires integration for work/impulse.',             hint:'Changing force — use calculus' },
  ],
};

VOCAB['history']['ocr-alevel'] = {
  'Historical Skills': [
    { term:'Provenance',            definition:'Origin of a source — who created it, when and for what purpose.',                               hint:'Who, when, why — source origin' },
    { term:'Historiographical debate', definition:'Disagreement between historians over interpretation of events.',                           hint:'Historians disagreeing' },
    { term:'Anachronism',           definition:'Applying later values or standards to an earlier historical period.',                           hint:'Applying later values to earlier period' },
    { term:'Periodisation',         definition:'Division of history into distinct periods — historians\' convention.',                         hint:'Dividing history into periods' },
  ],
  'England 1485-1558': [
    { term:'Act of Supremacy 1534', definition:'Made Henry VIII supreme head of the Church of England.',                                        hint:'Henry VIII — supreme head of Church 1534' },
    { term:'Dissolution of the Monasteries', definition:'Henry VIII\'s closure of England\'s monasteries 1536–41.',                          hint:'Henry VIII closed monasteries 1536–41' },
    { term:'Pilgrimage of Grace',   definition:'1536 northern rebellion against the Reformation and Henry VIII\'s policies.',                 hint:'Northern rebellion against Reformation 1536' },
    { term:'Enclosure',             definition:'Conversion of common farmland into private fields — caused rural unemployment.',               hint:'Privatising common land — unemployment' },
    { term:'Privy Council',         definition:'The monarch\'s closest advisers — the core of Tudor government.',                             hint:'Monarch\'s close advisers' },
  ],
  'Russia and the USSR 1917-1953': [
    { term:'Cheka',                 definition:'Bolshevik secret police — responsible for the Red Terror.',                                    hint:'Bolshevik secret police' },
    { term:'Red Army',              definition:'Bolshevik military force created by Trotsky — won the Civil War.',                            hint:'Bolshevik military — Trotsky\'s creation' },
    { term:'Show trials',           definition:'Staged trials of perceived opponents — defendants forced to confess.',                        hint:'Staged confessions — Great Terror' },
    { term:'NKVD',                  definition:'Soviet secret police under Stalin — conducted purges and ran the Gulag.',                    hint:'Stalin\'s secret police' },
    { term:'Socialism in one country', definition:'Stalin\'s policy to build socialism in the USSR alone.',                                  hint:'Build socialism in USSR alone' },
  ],
  'The Cold War in Europe 1941-1995': [
    { term:'Yalta Conference',      definition:'1945 conference dividing post-war Europe into spheres of influence.',                         hint:'1945 — divided post-war Europe' },
    { term:'Truman Doctrine',       definition:'1947 US policy committing to support peoples resisting communism.',                           hint:'1947 — support against communism' },
    { term:'Marshall Plan',         definition:'US economic aid programme 1948–52 rebuilding Western European economies.',                    hint:'US aid to Western Europe' },
    { term:'Berlin Blockade',       definition:'1948–49 Soviet blockade of West Berlin — countered by the Berlin Airlift.',                  hint:'Soviet blockade of Berlin 1948–49' },
    { term:'Détente',               definition:'Relaxation of Cold War tensions — particularly in the 1970s.',                               hint:'Cold War tensions relaxed — 1970s' },
    { term:'Prague Spring',         definition:'1968 liberal reforms in Czechoslovakia under Dubček — crushed by Soviet invasion.',          hint:'Czechoslovakia 1968 — crushed by USSR' },
    { term:'Brezhnev Doctrine',     definition:'Soviet right to intervene in any socialist state threatened by counter-revolution.',         hint:'USSR can intervene in socialist states' },
    { term:'Solidarity',            definition:'Polish independent trade union 1980 — challenged communist rule.',                           hint:'Polish trade union — challenged communism' },
  ],
};

VOCAB['geography']['ocr-alevel'] = {
  'Landscape Systems': [
    { term:'Lithology',             definition:'Physical and chemical characteristics of rock — hardness, permeability, mineralogy.',          hint:'Rock characteristics' },
    { term:'Hydraulic action',      definition:'Force of water compressing air into cracks and weakening rock.',                              hint:'Water compresses air into cracks' },
    { term:'Traction',              definition:'Large boulders rolling along the river bed.',                                                  hint:'Boulders rolling along bed' },
    { term:'Saltation',             definition:'Small particles bouncing along the river bed.',                                                hint:'Particles bouncing along bed' },
    { term:'Suspension',            definition:'Fine sediment carried in the water column.',                                                  hint:'Fine sediment in water' },
    { term:'Rejuvenation',          definition:'Renewed erosion caused by fall in sea level or land uplift.',                                 hint:'Renewed erosion — sea level or uplift' },
    { term:'Periglacial',           definition:'Cold environments on the margins of glaciers.',                                               hint:'Cold — margins of glaciers' },
    { term:'Permafrost',            definition:'Permanently frozen ground — active layer thaws and freezes seasonally.',                     hint:'Permanently frozen ground' },
  ],
  'Earth\'s Life Support Systems': [
    { term:'Carbon flux',           definition:'Movement of carbon between stores — gigatonnes per year.',                                    hint:'Carbon movement between stores' },
    { term:'Ocean acidification',   definition:'Decrease in ocean pH as CO₂ dissolves to form carbonic acid.',                              hint:'Oceans becoming more acidic' },
    { term:'ENSO',                  definition:'El Niño–Southern Oscillation — cyclical Pacific climate pattern causing global disruption.', hint:'Pacific climate cycle — global effects' },
    { term:'Cryosphere',            definition:'Frozen water portions of Earth — ice sheets, glaciers, sea ice.',                            hint:'Earth\'s frozen water' },
    { term:'Water security',        definition:'Reliable access to clean water for all — challenged by climate change.',                     hint:'Reliable clean water access' },
  ],
  'Global Connections': [
    { term:'Trade bloc',            definition:'Group of countries trading freely with each other and imposing common external tariffs.',     hint:'Free trade group' },
    { term:'Comparative advantage', definition:'Ability to produce a good at lower opportunity cost — basis of trade.',                     hint:'Lower opportunity cost — basis of trade' },
    { term:'Remittance',            definition:'Money sent by migrants to their country of origin.',                                          hint:'Money migrants send home' },
    { term:'Digital divide',        definition:'Gap between those with and without access to information technology.',                       hint:'Tech access inequality' },
    { term:'Geopolitics',           definition:'How geography, power and politics interact internationally.',                                hint:'Geography + power + politics globally' },
  ],
  'Geographical Debates': [
    { term:'Hazard risk',           definition:'Probability of hazardous event × vulnerability of population.',                             hint:'Probability × vulnerability' },
    { term:'Vulnerability',         definition:'Degree to which a community cannot withstand a hazard\'s effects.',                         hint:'Inability to withstand hazard' },
    { term:'Resilience',            definition:'Ability of a community to absorb a shock and recover.',                                     hint:'Absorb shock and recover' },
    { term:'REDD+',                 definition:'UN programme reducing emissions from deforestation in developing countries.',               hint:'UN forest protection programme' },
    { term:'Ecosystem services',    definition:'Benefits provided to humans by functioning ecosystems.',                                    hint:'Benefits ecosystems give humans' },
    { term:'Rewilding',             definition:'Restoring land to a natural state — reintroducing lost species.',                          hint:'Restoring natural state — reintroduce species' },
  ],
};

VOCAB['english']['ocr-alevel'] = {
  'Critical Concepts': [
    { term:'Polyphony',             definition:'Multiple voices coexisting in a text without one dominating.',                               hint:'Multiple voices — no dominant narrator' },
    { term:'Dialogism',             definition:'Bakhtin\'s concept — meaning from interaction of different voices in a text.',              hint:'Meaning from voices — Bakhtin' },
    { term:'Reader-response theory', definition:'Meaning is constructed by the reader\'s interaction with the text.',                      hint:'Reader makes meaning — not fixed in text' },
    { term:'New Historicism',       definition:'Reading literature in relation to its historical context — emphasising power.',             hint:'Literature in historical context — power' },
    { term:'Defamiliarisation',     definition:'Making familiar things seem strange — forcing fresh perspective.',                         hint:'Makes familiar things strange' },
    { term:'Semantic field',        definition:'A group of words related in meaning clustering around a theme.',                           hint:'Related words around a theme' },
    { term:'Foregrounding',         definition:'Drawing attention to language features by deviation from the norm.',                       hint:'Drawing attention by deviation' },
    { term:'Allusion',              definition:'Indirect reference to another text, historical event or person.',                          hint:'Indirect reference' },
  ],
  'Poetry and Poetic Form': [
    { term:'Dramatic monologue',    definition:'Poem in which a character other than the poet speaks — e.g. Browning.',                    hint:'Character speaks — not the poet' },
    { term:'Villanelle',            definition:'19-line poem with two refrains and two rhymes.',                                           hint:'19 lines — two refrains' },
    { term:'Sprung rhythm',         definition:'Hopkins\'s metrical system counting only stressed syllables per foot.',                    hint:'Hopkins — counts stresses only' },
    { term:'Kenning',               definition:'Compound metaphorical expression in Old English poetry — e.g. whale-road for sea.',       hint:'Compound metaphor — Old English' },
    { term:'Vers libre',            definition:'Free verse — no regular metrical pattern or rhyme.',                                      hint:'Free verse — no regular metre' },
    { term:'Apostrophe',            definition:'Addressing an absent person, idea or abstraction.',                                       hint:'Addressing absent person or abstraction' },
    { term:'Volta',                 definition:'The turn or shift in thought or mood in a sonnet.',                                       hint:'Turn in sonnet — shift in thought' },
  ],
  'Prose and Drama': [
    { term:'Omniscient narrator',   definition:'Narrator who knows thoughts and feelings of all characters.',                             hint:'All-knowing narrator' },
    { term:'Homodiegetic narrator', definition:'A narrator who is a character in the story they tell.',                                   hint:'Narrator is character in story' },
    { term:'Metafiction',           definition:'Fiction that draws attention to its own fictional nature.',                               hint:'Fiction about its own fictionality' },
    { term:'Stream of consciousness', definition:'Narrative technique representing continuous flow of a character\'s thoughts.',         hint:'Continuous flow of thoughts' },
    { term:'Gothic novel',          definition:'Genre combining horror, mystery and Romanticism — dark settings.',                       hint:'Horror + mystery + dark settings' },
    { term:'Magic realism',         definition:'Realistic narrative blending with fantastical elements treated as ordinary.',            hint:'Realistic + fantastical — treated as normal' },
    { term:'Naturalism',            definition:'Characters shaped by environment, heredity and social forces.',                          hint:'Characters shaped by environment' },
    { term:'Picaresque',            definition:'Genre following a roguish protagonist through episodic adventures.',                     hint:'Rogue hero — episodic adventures' },
  ],
};

// ════════════════════════════════════════════════════════════
// PSYCHOLOGY — new subject
// AQA GCSE (8182), AQA A-Level (7182),
// Edexcel GCSE (1PS0), Edexcel A-Level (9PS0),
// OCR A-Level (H567)
// ════════════════════════════════════════════════════════════

VOCAB['psychology'] = {};

VOCAB['psychology']['aqa-gcse'] = {
  'Social Influence': [
    { term:'Conformity',           definition:'Changing behaviour or beliefs to match the majority group.',                                    hint:'Changing to match the majority' },
    { term:'Compliance',           definition:'Going along with a request whilst privately disagreeing.',                                      hint:'Outward agreement — private disagreement' },
    { term:'Internalisation',      definition:'Accepting the majority view both publicly and privately — genuine change of belief.',           hint:'True belief change — public and private' },
    { term:'Identification',       definition:'Conforming to a role or group whilst it is relevant — not deep belief change.',                hint:'Conforming to a role — not deep change' },
    { term:'Obedience',            definition:'Complying with an instruction from an authority figure.',                                       hint:'Following orders from authority' },
    { term:'Social influence',     definition:'The ways in which other people affect our attitudes, beliefs and behaviour.',                  hint:'How others affect our behaviour and beliefs' },
    { term:'Majority influence',   definition:'Conformity to the views of the larger group.',                                                 hint:'Going along with the larger group' },
    { term:'Minority influence',   definition:'A smaller group causes change in the majority through consistency and commitment.',            hint:'Small group persuades the majority' },
  ],
  'Memory': [
    { term:'Encoding',             definition:'The process of converting information into a form that can be stored in memory.',              hint:'Converting info for storage' },
    { term:'Storage',              definition:'Retaining encoded information in memory over time.',                                           hint:'Keeping information over time' },
    { term:'Retrieval',            definition:'Accessing stored information when needed.',                                                    hint:'Accessing stored information' },
    { term:'Short-term memory',    definition:'A temporary memory store with limited capacity (7±2 items) and duration (15–30 seconds).',    hint:'Brief — limited capacity — seconds' },
    { term:'Long-term memory',     definition:'A relatively permanent memory store with unlimited capacity and potentially lifelong duration.',hint:'Permanent — unlimited capacity' },
    { term:'Multi-store model',    definition:'Atkinson and Shiffrin\'s model proposing separate sensory, short-term and long-term memory stores.', hint:'Sensory → STM → LTM — Atkinson and Shiffrin' },
    { term:'Working memory model', definition:'Baddeley and Hitch\'s model of STM with a central executive and slave systems.',              hint:'Central executive + slave systems — Baddeley' },
    { term:'Forgetting',           definition:'The inability to retrieve information from memory.',                                           hint:'Failure to retrieve stored information' },
    { term:'Interference',         definition:'Forgetting caused by other memories disrupting recall — proactive or retroactive.',           hint:'Other memories disrupt recall' },
    { term:'Eyewitness testimony', definition:'The account given by a witness who directly observed a crime or incident.',                   hint:'Witness account of an observed event' },
  ],
  'Perception': [
    { term:'Perception',           definition:'The process of organising and interpreting sensory information.',                              hint:'Organising and interpreting sensations' },
    { term:'Sensation',            definition:'The detection of physical stimuli by the sense organs.',                                       hint:'Detection of physical stimuli' },
    { term:'Visual illusion',      definition:'A misinterpretation of a visual stimulus — perception differs from the actual stimulus.',     hint:'Perception differs from reality — vision' },
    { term:'Perceptual set',       definition:'A readiness to perceive stimuli in a particular way — influenced by past experience.',        hint:'Readiness to perceive in a certain way' },
    { term:'Nature',               definition:'Innate biological factors that influence behaviour and development.',                          hint:'Innate biological influences' },
    { term:'Nurture',              definition:'Environmental and experiential factors that influence behaviour and development.',             hint:'Environmental influences on development' },
  ],
  'Development and Research': [
    { term:'Cognitive development', definition:'Changes in thinking, problem-solving and understanding as a child grows.',                  hint:'Development of thinking and reasoning' },
    { term:'Piaget\'s stages',     definition:'Four stages of cognitive development — sensorimotor, preoperational, concrete operational, formal operational.',  hint:'Sensorimotor → preoperational → concrete → formal' },
    { term:'Schema',               definition:'A mental framework or structure that organises knowledge and expectations.',                   hint:'Mental framework organising knowledge' },
    { term:'Hypothesis',           definition:'A testable prediction about the relationship between variables.',                             hint:'Testable prediction' },
    { term:'Variable',             definition:'Any factor that can change or be changed in an experiment.',                                  hint:'Factor that can change' },
    { term:'Independent variable', definition:'The variable that the researcher manipulates in an experiment.',                              hint:'What the researcher changes' },
    { term:'Dependent variable',   definition:'The variable that is measured in an experiment — the outcome.',                              hint:'What is measured — the outcome' },
    { term:'Correlation',          definition:'A statistical relationship between two variables — positive, negative or zero.',               hint:'Statistical relationship between variables' },
    { term:'Reliability',          definition:'The consistency of a measure — whether it produces the same results each time.',             hint:'Consistency of measurement' },
    { term:'Validity',             definition:'The extent to which a study measures what it claims to measure.',                             hint:'Measures what it claims to measure' },
  ],
};

VOCAB['psychology']['edexcel-gcse'] = {
  'Social Psychology': [
    { term:'Obedience',            definition:'Complying with a direct order from an authority figure.',                                      hint:'Following orders from authority' },
    { term:'Agency theory',        definition:'Milgram\'s theory that people enter an "agentic state" and see themselves as agents of authority.', hint:'Acting as agent of authority — Milgram' },
    { term:'Social impact theory', definition:'Latané\'s theory that the impact of social influence depends on the strength, immediacy and number of influencers.', hint:'Strength × immediacy × number — Latané' },
    { term:'Conformity',           definition:'Changing behaviour or beliefs to match the majority or social norms.',                         hint:'Matching majority or social norms' },
    { term:'Bystander effect',     definition:'People are less likely to help in an emergency when others are present.',                     hint:'Less likely to help when others present' },
    { term:'Diffusion of responsibility', definition:'In a group, individuals feel less personally responsible for acting.',                hint:'Responsibility shared — less personal duty' },
    { term:'Prejudice',            definition:'A preconceived opinion, not based on reason or experience, held against a group.',             hint:'Unreasonable opinion about a group' },
    { term:'Discrimination',       definition:'Treating a person differently because of their group membership.',                             hint:'Different treatment based on group membership' },
  ],
  'Cognitive Psychology': [
    { term:'Memory',               definition:'The cognitive function allowing us to encode, store and retrieve information.',                hint:'Encode, store, retrieve information' },
    { term:'Semantic memory',      definition:'Long-term memory for facts and general knowledge.',                                            hint:'Facts and general knowledge' },
    { term:'Episodic memory',      definition:'Long-term memory for personal experiences and events.',                                       hint:'Personal experiences and events' },
    { term:'Procedural memory',    definition:'Long-term memory for skills and procedures.',                                                 hint:'Skills and how to do things' },
    { term:'Reconstructive memory', definition:'Bartlett\'s theory that memory is an active process influenced by schemas and expectations.', hint:'Memory rebuilt using schemas — Bartlett' },
    { term:'Schema',               definition:'A mental framework that helps organise and interpret information.',                            hint:'Mental framework organising information' },
    { term:'Cognitive interview',  definition:'A police interviewing technique using cognitive principles to improve eyewitness recall.',    hint:'Police technique — improves eyewitness recall' },
  ],
  'Biological Psychology': [
    { term:'Neurotransmitter',     definition:'A chemical messenger that transmits signals between neurons.',                                 hint:'Chemical messenger between neurons' },
    { term:'Serotonin',            definition:'A neurotransmitter associated with mood — low levels linked to depression.',                   hint:'Mood neurotransmitter — low = depression' },
    { term:'Dopamine',             definition:'A neurotransmitter associated with reward and pleasure.',                                     hint:'Reward and pleasure neurotransmitter' },
    { term:'Central nervous system', definition:'The brain and spinal cord — processes information and coordinates behaviour.',              hint:'Brain and spinal cord' },
    { term:'Synapse',              definition:'The junction between two neurons where neurotransmitters are released.',                      hint:'Gap between neurons — neurotransmitters cross' },
    { term:'Fight or flight',      definition:'A physiological response to perceived threat — adrenaline causes increased heart rate and alertness.', hint:'Threat response — adrenaline — heart rate rises' },
    { term:'Circadian rhythm',     definition:'A biological cycle approximately 24 hours long — regulates sleep-wake cycle.',               hint:'24-hour biological cycle — sleep-wake' },
    { term:'Sleep',                definition:'A naturally recurring state of reduced consciousness.',                                       hint:'Naturally recurring reduced consciousness' },
  ],
  'Research Methods': [
    { term:'Experiment',           definition:'A research method where variables are manipulated and controlled to test a hypothesis.',      hint:'Manipulates variables — tests hypothesis' },
    { term:'Laboratory experiment', definition:'An experiment conducted in a controlled environment.',                                      hint:'Controlled environment — lab' },
    { term:'Field experiment',     definition:'An experiment conducted in a natural environment with manipulation of the IV.',               hint:'Natural setting — IV manipulated' },
    { term:'Observation',          definition:'Watching and recording behaviour systematically.',                                             hint:'Watching and recording behaviour' },
    { term:'Self-report',          definition:'A data collection method where participants report their own thoughts or behaviour.',         hint:'Participants report own thoughts/behaviour' },
    { term:'Sample',               definition:'The group of participants selected from a population to take part in a study.',               hint:'Participants selected from population' },
    { term:'Ethical guidelines',   definition:'Rules protecting participants in research — including informed consent and the right to withdraw.', hint:'Rules protecting participants' },
    { term:'Informed consent',     definition:'Participants\' agreement to take part in a study after being told what it involves.',        hint:'Agreement after being informed' },
  ],
};

VOCAB['psychology']['aqa-alevel'] = {
  'Social Influence': [
    { term:'Conformity',           definition:'A type of social influence where a person changes their behaviour or beliefs to match those of a group.', hint:'Changing to match the group' },
    { term:'Internalisation',      definition:'A deep form of conformity where an individual changes their private and public behaviour due to genuine belief change.', hint:'Deep change — private and public' },
    { term:'Identification',       definition:'Conforming to a role or group because of a desire to be associated with them — not necessarily a permanent belief change.', hint:'Conforming to role — not permanent' },
    { term:'Compliance',           definition:'Publicly going along with group norms while privately disagreeing.',                           hint:'Public agreement — private disagreement' },
    { term:'Informational social influence', definition:'Conforming because we believe others have more accurate information — especially in ambiguous situations.', hint:'Conforming — others seem more informed' },
    { term:'Normative social influence', definition:'Conforming to gain social approval and avoid rejection — not genuine belief change.',   hint:'Conforming — social approval' },
    { term:'Obedience',            definition:'Complying with an instruction from a perceived authority figure.',                             hint:'Following authority\'s instruction' },
    { term:'Agentic state',        definition:'Milgram\'s concept — a psychological state where individuals see themselves as agents executing others\' wishes.', hint:'Acting as agent — Milgram' },
    { term:'Legitimate authority', definition:'The perception that an authority figure has the right to give orders.',                       hint:'Perceived right to give orders' },
    { term:'Resistance to social influence', definition:'The ability to withstand social pressure to conform or obey.',                    hint:'Withstanding pressure to conform or obey' },
    { term:'Social change',        definition:'The process by which a minority influences the majority to change its views or behaviour.',   hint:'Minority changes majority views' },
  ],
  'Memory': [
    { term:'Multi-store model',    definition:'Atkinson and Shiffrin\'s model proposing information passes through sensory register, STM and LTM.',  hint:'Sensory → STM → LTM — Atkinson and Shiffrin' },
    { term:'Working memory model', definition:'Baddeley and Hitch\'s model of STM — central executive, phonological loop, visuospatial sketchpad and episodic buffer.',  hint:'Central executive + three slave systems' },
    { term:'Central executive',    definition:'The supervisory component of working memory — allocates attention to different tasks.',       hint:'Controls attention in working memory' },
    { term:'Phonological loop',    definition:'The slave system in working memory dealing with speech-based information — phonological store and articulatory process.', hint:'Deals with speech-based information' },
    { term:'Visuospatial sketchpad', definition:'The slave system in working memory dealing with visual and spatial information.',            hint:'Visual and spatial information' },
    { term:'Episodic buffer',      definition:'A temporary store in working memory linking LTM with STM and integrating information.',       hint:'Links LTM and working memory systems' },
    { term:'Proactive interference', definition:'When older memories disrupt the recall of newer memories.',                               hint:'Old memories disrupt new memories' },
    { term:'Retroactive interference', definition:'When newer memories disrupt the recall of older memories.',                            hint:'New memories disrupt old memories' },
    { term:'Retrieval failure',    definition:'Forgetting due to absence of the cues that were present at encoding.',                       hint:'No cues available at retrieval' },
    { term:'Leading question',     definition:'A question that suggests an expected answer, which can distort eyewitness memory.',          hint:'Suggests an answer — distorts memory' },
    { term:'Cognitive interview',  definition:'A police interviewing technique using memory principles to improve recall accuracy.',        hint:'Police technique — improves recall accuracy' },
  ],
  'Attachment': [
    { term:'Attachment',           definition:'A strong emotional bond between an infant and caregiver that influences future relationships.', hint:'Strong emotional bond — infant and caregiver' },
    { term:'Monotropic theory',    definition:'Bowlby\'s theory that infants form one primary attachment — with the mother or primary caregiver.', hint:'One primary attachment — Bowlby' },
    { term:'Internal working model', definition:'Bowlby\'s concept — a cognitive framework based on early attachment experiences that shapes future relationships.', hint:'Early attachment shapes future relationships' },
    { term:'Strange situation',    definition:'Ainsworth\'s procedure measuring attachment type — infant responses to separation and reunion.', hint:'Ainsworth\'s procedure — separation and reunion' },
    { term:'Secure attachment',    definition:'A healthy attachment type — infant distressed when separated, easily comforted on return.',   hint:'Healthy attachment — comforted on reunion' },
    { term:'Insecure-avoidant',    definition:'Attachment type where infant shows little distress on separation and ignores caregiver on return.', hint:'Little distress — ignores caregiver on return' },
    { term:'Insecure-resistant',   definition:'Attachment type where infant shows great distress on separation and is hard to comfort on return.', hint:'Great distress — hard to comfort on return' },
    { term:'Deprivation',          definition:'The loss of an existing attachment bond — e.g. through separation or bereavement.',          hint:'Loss of an existing bond' },
    { term:'Privation',            definition:'Never forming any attachment bond — generally more damaging than deprivation.',              hint:'Never formed a bond — worse than deprivation' },
  ],
  'Psychopathology': [
    { term:'Psychopathology',      definition:'The study of psychological disorders — their nature, causes and treatment.',                  hint:'Study of psychological disorders' },
    { term:'Statistical infrequency', definition:'Defining abnormality as behaviour that is statistically rare in the population.',         hint:'Abnormal = statistically rare' },
    { term:'Social norms',         definition:'Defining abnormality as behaviour that violates shared social expectations.',                hint:'Abnormal = violates social expectations' },
    { term:'Failure to function adequately', definition:'Defining abnormality as inability to maintain everyday activities and wellbeing.', hint:'Abnormal = can\'t function in daily life' },
    { term:'Deviation from ideal mental health', definition:'Defining abnormality as absence of positive mental health criteria — Jahoda.',hint:'Abnormal = lacks positive health criteria' },
    { term:'Phobia',               definition:'An irrational, persistent and excessive fear of a specific stimulus.',                       hint:'Irrational persistent fear of specific thing' },
    { term:'Depression',           definition:'A mood disorder characterised by persistent low mood, loss of interest and hopelessness.',  hint:'Persistent low mood and hopelessness' },
    { term:'OCD',                  definition:'Obsessive-compulsive disorder — recurrent, unwanted obsessions and compulsive rituals.',    hint:'Unwanted obsessions + compulsive rituals' },
    { term:'Cognitive Behavioural Therapy', definition:'A psychological therapy addressing faulty thought patterns and maladaptive behaviours.', hint:'Challenges faulty thoughts and behaviours' },
    { term:'Systematic desensitisation', definition:'A behavioural therapy using gradual exposure to reduce phobic anxiety.',             hint:'Gradual exposure — reduces phobia' },
  ],
  'Approaches in Psychology': [
    { term:'Behaviourism',         definition:'The approach focusing on observable behaviour — all behaviour is learned through conditioning.', hint:'Observable behaviour — all behaviour learned' },
    { term:'Classical conditioning', definition:'Learning through association — a neutral stimulus becomes associated with a natural response.', hint:'Learning by association — NS → CS' },
    { term:'Operant conditioning', definition:'Learning through consequences — reinforcement increases behaviour, punishment decreases it.', hint:'Learning through reward and punishment' },
    { term:'Social learning theory', definition:'Bandura\'s theory that behaviour is learned through observation and imitation of role models.', hint:'Observing and imitating role models — Bandura' },
    { term:'Cognitive approach',   definition:'The approach studying internal mental processes — thinking, memory, perception and language.', hint:'Internal mental processes — thinking' },
    { term:'Biological approach',  definition:'The approach explaining behaviour in terms of genetics, neurochemistry and brain structure.', hint:'Genetics and brain explain behaviour' },
    { term:'Psychodynamic approach', definition:'Freud\'s approach — behaviour driven by unconscious conflicts, childhood experiences and the id, ego and superego.', hint:'Unconscious conflicts — Freud' },
    { term:'Humanistic approach',  definition:'The approach emphasising free will, conscious experience and the drive for self-actualisation.', hint:'Free will and self-actualisation — Maslow' },
  ],
  'Biopsychology': [
    { term:'Neuron',               definition:'The basic unit of the nervous system — transmits electrical impulses.',                       hint:'Basic nerve cell' },
    { term:'Synapse',              definition:'The junction between neurons where neurotransmitters are released.',                          hint:'Gap between neurons' },
    { term:'Neurotransmitter',     definition:'A chemical messenger released from presynaptic terminals that binds to postsynaptic receptors.', hint:'Chemical messenger between neurons' },
    { term:'Central nervous system', definition:'The brain and spinal cord — processes and coordinates information.',                      hint:'Brain and spinal cord' },
    { term:'Peripheral nervous system', definition:'All nerves outside the CNS — includes somatic and autonomic nervous systems.',         hint:'Nerves outside brain and spinal cord' },
    { term:'Fight or flight',      definition:'The sympathetic nervous system\'s response to threat — prepares body for action.',           hint:'Sympathetic response to threat' },
    { term:'HPA axis',             definition:'Hypothalamic-pituitary-adrenal axis — the stress response system releasing cortisol.',      hint:'Stress response — cortisol release' },
    { term:'Localisation of function', definition:'The principle that different brain areas control different functions.',                  hint:'Different brain areas — different functions' },
    { term:'Lateralisation',       definition:'The tendency for different functions to be controlled by the left or right hemisphere.',    hint:'Left vs right hemisphere — different functions' },
    { term:'Plasticity',           definition:'The brain\'s ability to change and reorganise itself in response to experience.',           hint:'Brain changes with experience' },
  ],
  'Research Methods': [
    { term:'Hypothesis',           definition:'A testable, falsifiable prediction about the relationship between variables.',               hint:'Testable prediction about variables' },
    { term:'Operationalisation',   definition:'Defining variables in a measurable and precise way.',                                        hint:'Making variables measurable and precise' },
    { term:'Experimental design',  definition:'The way participants are allocated to conditions — independent groups, repeated measures or matched pairs.', hint:'How participants allocated to conditions' },
    { term:'Demand characteristics', definition:'Cues that lead participants to guess the aim of a study and alter their behaviour.',      hint:'Cues altering participant behaviour' },
    { term:'Investigator effects',  definition:'Ways in which the researcher\'s behaviour unintentionally influences participants.',        hint:'Researcher unintentionally influences results' },
    { term:'Counterbalancing',     definition:'A technique controlling order effects in repeated measures — half participants do A then B, half B then A.', hint:'Controls order effects — ABBA design' },
    { term:'Stratified sample',    definition:'A sample where participants are drawn proportionally from subgroups of the population.',    hint:'Proportional from subgroups' },
    { term:'Type I error',         definition:'Rejecting a true null hypothesis — a false positive.',                                       hint:'Rejecting true null — false positive' },
    { term:'Type II error',        definition:'Failing to reject a false null hypothesis — a false negative.',                              hint:'Not rejecting false null — false negative' },
    { term:'Peer review',          definition:'The evaluation of research by other experts before publication.',                            hint:'Expert evaluation before publication' },
  ],
};

VOCAB['psychology']['edexcel-alevel'] = {
  'Social Psychology': [
    { term:'Obedience',            definition:'Complying with an order from an authority figure.',                                           hint:'Following authority\'s order' },
    { term:'Agency theory',        definition:'In an agentic state, people see themselves as agents of authority and shift responsibility upward.', hint:'Agentic state — shifting responsibility — Milgram' },
    { term:'Social impact theory', definition:'Latané — influence depends on strength, immediacy and number of influencers: I = f(SIN).', hint:'I = f(SIN) — Latané' },
    { term:'Proximity',            definition:'The physical closeness of the authority figure — increases obedience.',                       hint:'Closer authority → more obedience' },
    { term:'Authorisation',        definition:'The legitimacy of the authority figure — reduces sense of personal responsibility.',          hint:'Legitimate authority — less personal responsibility' },
    { term:'Routinisation',        definition:'The way people come to see harmful actions as routine tasks, reducing moral concern.',       hint:'Harmful tasks seen as routine' },
    { term:'Crowd psychology',     definition:'LeBon\'s theory that individuals in a crowd lose their individual identity — deindividuation.', hint:'Loss of identity in crowd — LeBon' },
    { term:'Deindividuation',      definition:'The loss of personal identity in a crowd or group — can lead to anti-social behaviour.',     hint:'Loss of personal identity in group' },
    { term:'Social identity theory', definition:'Tajfel and Turner — people derive self-esteem from group membership — ingroup vs outgroup.', hint:'Self-esteem from group — Tajfel and Turner' },
  ],
  'Cognitive Psychology': [
    { term:'Working memory model', definition:'Baddeley — central executive, phonological loop, visuospatial sketchpad, episodic buffer.',  hint:'Central executive + three systems — Baddeley' },
    { term:'Levels of processing',  definition:'Craik and Lockhart — deeper processing (semantic) leads to better memory than shallow (structural).',  hint:'Deeper processing → better memory' },
    { term:'Schema',               definition:'A mental framework that organises knowledge and influences what we perceive and remember.', hint:'Mental framework — influences perception/memory' },
    { term:'Reconstructive memory', definition:'Bartlett — memory is an active reconstruction influenced by prior knowledge and schemas.', hint:'Memory rebuilt — influenced by schemas — Bartlett' },
    { term:'Cognitive interview',  definition:'A police technique using context reinstatement, report everything, recall in different order and change perspective.', hint:'Four cognitive interview techniques' },
    { term:'Flashbulb memory',     definition:'A vivid, detailed memory of the moment of learning surprising, emotional news.',             hint:'Vivid memory of emotional shocking news' },
    { term:'Eyewitness testimony', definition:'Memory for a witnessed event — can be distorted by post-event information and leading questions.', hint:'Witnessed event memory — can be distorted' },
  ],
  'Biological Psychology': [
    { term:'Stress',               definition:'A physiological and psychological response when demands are perceived to exceed resources.',  hint:'Demands exceed resources — response' },
    { term:'Cortisol',             definition:'A steroid hormone released by the adrenal cortex during stress — suppresses the immune system.', hint:'Stress hormone — suppresses immunity' },
    { term:'Hypothalamus',         definition:'The brain region that regulates the HPA axis and controls homeostasis.',                     hint:'Regulates stress and homeostasis' },
    { term:'Immune system',        definition:'The body\'s defence against pathogens — suppressed by chronic stress.',                     hint:'Body\'s defence — suppressed by stress' },
    { term:'Type A personality',   definition:'A personality characterised by competitiveness, time pressure and hostility — linked to heart disease.', hint:'Competitive, time-pressured — heart disease risk' },
    { term:'Hardiness',            definition:'A personality type characterised by commitment, control and challenge — protective against stress.', hint:'Commitment + control + challenge — stress buffer' },
    { term:'Social support',       definition:'Emotional, informational or practical help from others — buffers against stress.',           hint:'Help from others — buffers stress' },
    { term:'Biofeedback',          definition:'A technique teaching control of physiological responses to reduce stress.',                   hint:'Control physiological responses — reduces stress' },
  ],
  'Learning Theories': [
    { term:'Classical conditioning', definition:'Pavlov — learning by association between a neutral and unconditioned stimulus.',           hint:'Association learning — Pavlov' },
    { term:'Operant conditioning', definition:'Skinner — learning through reinforcement (strengthens) and punishment (weakens) behaviour.', hint:'Reinforcement and punishment — Skinner' },
    { term:'Social learning theory', definition:'Bandura — behaviour learned by observing and imitating role models, especially when reinforced.', hint:'Observational learning — Bandura' },
    { term:'Self-efficacy',        definition:'Bandura\'s concept — belief in one\'s ability to succeed at a task.',                       hint:'Belief in own ability to succeed — Bandura' },
    { term:'Vicarious reinforcement', definition:'Learning from observing the consequences of others\' behaviour.',                        hint:'Learning from others\' consequences' },
    { term:'Phobia',               definition:'An irrational, intense fear acquired through conditioning.',                                 hint:'Irrational fear — acquired by conditioning' },
  ],
  'Clinical Psychology': [
    { term:'DSM',                  definition:'Diagnostic and Statistical Manual — the classification system for psychological disorders used in the USA.', hint:'US classification of psychological disorders' },
    { term:'ICD',                  definition:'International Classification of Diseases — the WHO classification system including mental disorders.', hint:'WHO classification — includes mental disorders' },
    { term:'Schizophrenia',        definition:'A psychotic disorder characterised by hallucinations, delusions and disorganised thinking.', hint:'Psychosis — hallucinations and delusions' },
    { term:'Hallucination',        definition:'A perception experienced in the absence of an external stimulus.',                           hint:'Perception without external stimulus' },
    { term:'Delusion',             definition:'A firmly held false belief, out of keeping with the person\'s cultural background.',        hint:'Firmly held false belief' },
    { term:'Unipolar depression',  definition:'Recurrent episodes of low mood and loss of interest without manic episodes.',               hint:'Persistent low mood — no mania' },
    { term:'Cognitive Behavioural Therapy', definition:'A therapy addressing cognitive distortions and maladaptive behaviours.',          hint:'Challenges distorted thinking and behaviour' },
    { term:'Antipsychotics',       definition:'Drugs reducing dopamine activity — used to treat schizophrenia.',                           hint:'Reduce dopamine — treat schizophrenia' },
  ],
};

VOCAB['psychology']['ocr-alevel'] = {
  'Research Methods': [
    { term:'Experimental method',  definition:'Research involving manipulation of an independent variable to observe effects on a dependent variable.',  hint:'Manipulate IV — observe DV' },
    { term:'Null hypothesis',      definition:'The prediction of no relationship or difference between variables.',                         hint:'Predicts no difference or relationship' },
    { term:'Correlation coefficient', definition:'A statistic measuring the strength and direction of a relationship between variables — −1 to +1.', hint:'Strength and direction — −1 to +1' },
    { term:'Reliability',          definition:'The consistency of a measure — inter-rater reliability compares different observers.',      hint:'Consistency — same results' },
    { term:'Validity',             definition:'Ecological validity is the extent to which findings generalise to real-world settings.',    hint:'Generalises to real world — ecological validity' },
    { term:'Standardisation',      definition:'Keeping procedures the same for all participants to ensure reliability.',                   hint:'Same procedures for all — ensures reliability' },
    { term:'Confounding variable', definition:'An uncontrolled variable that affects the DV and makes it hard to establish cause.',        hint:'Uncontrolled variable — affects DV' },
    { term:'Qualitative data',     definition:'Non-numerical data — descriptions, themes and categories.',                                 hint:'Non-numerical — descriptions and themes' },
    { term:'Quantitative data',    definition:'Numerical data that can be statistically analysed.',                                        hint:'Numerical — can be statistically analysed' },
  ],
  'Core Studies': [
    { term:'Milgram (1963)',       definition:'Study of obedience — participants gave apparent electric shocks to a confederate, up to 450V, when ordered by authority.', hint:'Obedience to authority — electric shocks — 1963' },
    { term:'Asch (1951)',          definition:'Conformity study — participants gave wrong answers on line comparison tasks to conform to the majority.', hint:'Line comparison task — conformity — Asch' },
    { term:'Bandura et al (1961)', definition:'Bobo doll study — children imitated aggressive behaviour observed in adult role models.',   hint:'Bobo doll — aggression imitated — Bandura' },
    { term:'Baddeley (1966)',      definition:'Study demonstrating that STM uses acoustic coding and LTM uses semantic coding.',           hint:'STM acoustic, LTM semantic — Baddeley' },
    { term:'Loftus and Palmer (1974)', definition:'Study showing leading questions distort eyewitness memory — "smashed" vs "hit" affected speed estimates.', hint:'Leading questions distort memory — Loftus' },
    { term:'Bowlby\'s 44 thieves', definition:'Study linking maternal deprivation with affectionless psychopathy — juvenile delinquency.', hint:'Maternal deprivation — juvenile delinquency — Bowlby' },
    { term:'Sperry (1968)',        definition:'Split-brain studies demonstrating lateralisation of function in the two cerebral hemispheres.', hint:'Split brain — lateralisation — Sperry' },
    { term:'Freud (1909) Little Hans', definition:'Case study linking a horse phobia to Oedipal conflict — used to support psychodynamic theory.', hint:'Horse phobia — Oedipal conflict — Freud' },
  ],
  'Issues and Debates': [
    { term:'Reductionism',         definition:'Explaining complex behaviour by breaking it down to simpler component parts.',              hint:'Explaining complex behaviour at simpler level' },
    { term:'Holism',               definition:'Explaining behaviour by considering the whole person and context rather than individual components.', hint:'Whole person and context — not just parts' },
    { term:'Nature-nurture',       definition:'The debate about whether behaviour is determined by biology (nature) or environment (nurture).', hint:'Biology vs environment — nature vs nurture' },
    { term:'Ethnocentrism',        definition:'Applying standards from one culture when evaluating another — a form of cultural bias.', hint:'Judging others by own cultural standards' },
    { term:'Androcentric bias',    definition:'Research conducted from a male-centred perspective — results may not apply to women.',    hint:'Male-centred research — may not apply to women' },
    { term:'Free will',            definition:'The belief that individuals are able to make choices that are not determined by prior causes.', hint:'Ability to make undetermined choices' },
    { term:'Determinism',          definition:'The belief that all behaviour is caused by prior events — biological or environmental.',    hint:'All behaviour caused by prior events' },
    { term:'Psychology as a science', definition:'The debate about whether psychology meets the criteria of a science — objectivity, falsifiability, replication.', hint:'Does psychology meet scientific criteria?' },
  ],
};


// ════════════════════════════════════════════════════════════
// ECONOMICS — new subject
// AQA GCSE (8136), AQA A-Level (7136),
// Edexcel GCSE (1EC0), Edexcel A-Level (9EC0),
// OCR A-Level (H460)
// ════════════════════════════════════════════════════════════

VOCAB['economics'] = {};

VOCAB['economics']['aqa-gcse'] = {
  'Basic Economic Ideas': [
    { term:'Scarcity',             definition:'The fundamental economic problem — limited resources cannot satisfy unlimited wants.',        hint:'Limited resources — unlimited wants' },
    { term:'Opportunity cost',     definition:'The value of the next best alternative foregone when a choice is made.',                      hint:'Best alternative given up' },
    { term:'Factors of production', definition:'The inputs used to produce goods and services — land, labour, capital and enterprise.',     hint:'Land, labour, capital, enterprise' },
    { term:'Enterprise',           definition:'The willingness to organise the other factors of production and take risks.',                 hint:'Organisation and risk-taking' },
    { term:'Capital',              definition:'Human-made resources used in production — machines, buildings and tools.',                   hint:'Human-made productive resources' },
    { term:'Division of labour',   definition:'Breaking production into separate tasks — each worker specialises in one task.',             hint:'Each worker specialises — separate tasks' },
    { term:'Specialisation',       definition:'Concentrating on producing goods or services where you have an advantage.',                  hint:'Focus on comparative advantage' },
    { term:'Exchange',             definition:'The trading of goods and services, usually using money as a medium of exchange.',            hint:'Trading goods using money' },
    { term:'Need',                 definition:'Something essential for survival — food, shelter, water.',                                    hint:'Essential for survival' },
    { term:'Want',                 definition:'Something desirable but not essential for survival.',                                        hint:'Desirable but not essential' },
  ],
  'Supply and Demand': [
    { term:'Demand',               definition:'The quantity of a good or service that consumers are willing and able to buy at each price.', hint:'Willing and able to buy at each price' },
    { term:'Supply',               definition:'The quantity of a good or service that producers are willing and able to sell at each price.', hint:'Willing and able to sell at each price' },
    { term:'Price mechanism',      definition:'The way in which prices adjust to allocate resources in a market economy.',                  hint:'Prices adjust to allocate resources' },
    { term:'Equilibrium price',    definition:'The price where quantity demanded equals quantity supplied — the market clears.',            hint:'Demand = supply — market clears' },
    { term:'Surplus',              definition:'When quantity supplied exceeds quantity demanded at the current price.',                     hint:'Supply > demand at current price' },
    { term:'Shortage',             definition:'When quantity demanded exceeds quantity supplied at the current price.',                     hint:'Demand > supply at current price' },
    { term:'Price elasticity of demand', definition:'Measures how responsive demand is to a change in price.',                            hint:'How demand responds to price change' },
    { term:'Elastic demand',       definition:'When a change in price leads to a proportionally larger change in quantity demanded — PED > 1.', hint:'PED > 1 — responsive to price' },
    { term:'Inelastic demand',     definition:'When a change in price leads to a proportionally smaller change in quantity demanded — PED < 1.', hint:'PED < 1 — less responsive to price' },
    { term:'Market failure',       definition:'When the free market does not allocate resources efficiently.',                              hint:'Free market allocates inefficiently' },
    { term:'Externality',          definition:'A cost or benefit to a third party not involved in a transaction.',                          hint:'Cost/benefit to uninvolved third party' },
  ],
  'The Economy': [
    { term:'GDP',                  definition:'Gross Domestic Product — the total value of goods and services produced in a country in a year.', hint:'Total output of a country per year' },
    { term:'Economic growth',      definition:'An increase in the total output of an economy over time.',                                   hint:'Increase in total output over time' },
    { term:'Inflation',            definition:'A sustained increase in the general price level over time.',                                  hint:'Sustained rise in general prices' },
    { term:'Unemployment',         definition:'When people who are able and willing to work cannot find a job.',                            hint:'Able and willing workers without jobs' },
    { term:'Fiscal policy',        definition:'Government spending and taxation decisions used to influence the economy.',                  hint:'Government spending and tax decisions' },
    { term:'Monetary policy',      definition:'Central bank decisions about interest rates to influence the economy.',                     hint:'Interest rate decisions — central bank' },
    { term:'Exchange rate',        definition:'The price of one currency in terms of another.',                                            hint:'Price of one currency in another' },
    { term:'Import',               definition:'A good or service purchased from another country.',                                         hint:'Bought from abroad' },
    { term:'Export',               definition:'A good or service sold to another country.',                                                hint:'Sold abroad' },
    { term:'Trade deficit',        definition:'When a country imports more than it exports.',                                              hint:'Imports > exports' },
  ],
};

VOCAB['economics']['edexcel-gcse'] = {
  'Basic Economic Ideas': [
    { term:'Scarcity',             definition:'The fundamental problem of unlimited wants but limited resources.',                          hint:'Unlimited wants — limited resources' },
    { term:'Opportunity cost',     definition:'The next best alternative sacrificed when making a choice.',                                  hint:'Next best alternative given up' },
    { term:'Factors of production', definition:'Land, labour, capital and enterprise — the inputs used in production.',                   hint:'Land, labour, capital, enterprise' },
    { term:'Production possibility frontier', definition:'A curve showing the maximum combinations of two goods an economy can produce with available resources.', hint:'Maximum combinations of two goods' },
    { term:'Mixed economy',        definition:'An economy with both private sector and government involvement in decision making.',         hint:'Private + government sectors both active' },
    { term:'Free market economy',  definition:'An economy where resource allocation is determined by the price mechanism.',                hint:'Price mechanism allocates resources' },
    { term:'Command economy',      definition:'An economy where the government makes all resource allocation decisions.',                  hint:'Government makes all decisions' },
    { term:'Division of labour',   definition:'Specialisation where production is broken into tasks, each performed by different workers.', hint:'Each worker specialises in one task' },
  ],
  'Microeconomics': [
    { term:'Demand curve',         definition:'A graph showing the relationship between price and quantity demanded — slopes downward.',   hint:'Price vs quantity demanded — downward sloping' },
    { term:'Supply curve',         definition:'A graph showing the relationship between price and quantity supplied — slopes upward.',     hint:'Price vs quantity supplied — upward sloping' },
    { term:'Price elasticity of demand', definition:'The responsiveness of demand to a change in price — % change in Qd ÷ % change in P.', hint:'% ΔQd ÷ % ΔP' },
    { term:'Market equilibrium',   definition:'The price and quantity where demand equals supply.',                                        hint:'Demand = supply — stable price' },
    { term:'Consumer surplus',     definition:'The difference between what consumers are willing to pay and what they actually pay.',     hint:'Willing to pay minus actual price' },
    { term:'Producer surplus',     definition:'The difference between the price firms receive and their minimum supply price.',           hint:'Actual price minus minimum supply price' },
    { term:'Market failure',       definition:'Where the free market fails to allocate resources efficiently.',                           hint:'Free market allocates inefficiently' },
    { term:'Public good',          definition:'A good that is non-excludable and non-rival — e.g. street lighting.',                     hint:'Non-excludable + non-rival — e.g. street lighting' },
    { term:'Merit good',           definition:'A good that has positive externalities and is under-consumed in a free market.',          hint:'Positive externalities — under-consumed' },
  ],
  'Macroeconomics': [
    { term:'GDP',                  definition:'Gross Domestic Product — total value of goods and services produced in a country per year.', hint:'Total output — per year' },
    { term:'Economic growth',      definition:'An increase in real GDP over time.',                                                        hint:'Rise in real GDP' },
    { term:'Inflation',            definition:'A sustained increase in the general price level.',                                          hint:'General prices rising over time' },
    { term:'Unemployment rate',    definition:'The percentage of the labour force without a job but actively seeking work.',              hint:'% of labour force without jobs' },
    { term:'Aggregate demand',     definition:'Total spending in an economy — C + I + G + (X − M).',                                     hint:'C + I + G + (X − M) — total spending' },
    { term:'Aggregate supply',     definition:'Total output that firms are willing to produce at each price level.',                      hint:'Total output firms will produce' },
    { term:'Fiscal policy',        definition:'Government using taxation and spending to influence the economy.',                         hint:'Tax and spending to manage economy' },
    { term:'Monetary policy',      definition:'Using interest rates and money supply to influence economic activity.',                    hint:'Interest rates — central bank policy' },
    { term:'Balance of payments',  definition:'A record of all financial transactions between a country and the rest of the world.',     hint:'Country\'s international financial transactions' },
  ],
};

VOCAB['economics']['aqa-alevel'] = {
  'Microeconomics': [
    { term:'Positive statement',   definition:'A factual statement that can be tested against evidence and does not include a value judgement.', hint:'Testable — no value judgement' },
    { term:'Normative statement',  definition:'A statement containing a value judgement — includes words like "should" or "ought".',       hint:'Contains value judgement — should/ought' },
    { term:'Scarcity',             definition:'The fundamental economic problem — unlimited wants cannot be met with limited resources.',   hint:'Unlimited wants — limited resources' },
    { term:'Opportunity cost',     definition:'The next best alternative foregone when making a choice.',                                   hint:'Best alternative given up' },
    { term:'Utility',              definition:'The satisfaction derived from consuming a good or service.',                                 hint:'Satisfaction from consumption' },
    { term:'Marginal utility',     definition:'The change in total utility from consuming one additional unit.',                           hint:'Extra satisfaction from one more unit' },
    { term:'Diminishing marginal utility', definition:'As more of a good is consumed, each additional unit yields less extra satisfaction.', hint:'Each extra unit gives less satisfaction' },
    { term:'Behavioural economics', definition:'A branch incorporating psychology to explain why economic agents do not always act rationally.', hint:'Psychology + economics — irrational behaviour' },
    { term:'Bounded rationality',  definition:'Human cognitive limitations mean decisions are satisfactory rather than optimal.',         hint:'Cognitive limits — satisfactory not optimal' },
    { term:'Nudge',                definition:'An intervention that guides behaviour without restricting choice — e.g. default options.', hint:'Guides behaviour without restricting choice' },
    { term:'Price elasticity of demand', definition:'PED = % change in Qd ÷ % change in P — measures responsiveness of demand to price.', hint:'% ΔQd ÷ % ΔP' },
    { term:'Income elasticity of demand', definition:'YED = % change in Qd ÷ % change in income — positive for normal goods, negative for inferior.', hint:'% ΔQd ÷ % Δincome' },
    { term:'Cross elasticity of demand', definition:'XED = % change in Qd of A ÷ % change in P of B — positive for substitutes, negative for complements.', hint:'% ΔQd(A) ÷ % ΔP(B)' },
    { term:'Price elasticity of supply', definition:'PES = % change in Qs ÷ % change in P — measures responsiveness of supply to price.', hint:'% ΔQs ÷ % ΔP' },
    { term:'Consumer surplus',     definition:'The difference between what consumers are willing to pay and the price they actually pay.',  hint:'Willing price minus actual price' },
    { term:'Producer surplus',     definition:'The difference between the price received and the minimum price at which producers would supply.', hint:'Actual price minus minimum supply price' },
    { term:'Allocative efficiency', definition:'Resources are allocated to produce goods and services at which P = MC — reflects consumer preferences.', hint:'P = MC — reflects consumer preferences' },
    { term:'Productive efficiency', definition:'Producing at the lowest point of the average cost curve.',                                hint:'Producing at minimum average cost' },
    { term:'Dynamic efficiency',   definition:'Efficiency over time — investment and innovation improving productivity.',                   hint:'Innovation improving efficiency over time' },
    { term:'Market failure',       definition:'When the free market fails to allocate resources optimally — due to externalities, public goods, information failures.', hint:'Free market fails to allocate optimally' },
    { term:'Externality',          definition:'A cost (negative) or benefit (positive) to a third party not party to the transaction.',    hint:'Third party cost or benefit' },
    { term:'Public good',          definition:'A good that is non-excludable and non-rival in consumption — subject to free-rider problem.', hint:'Non-excludable + non-rival — free-rider problem' },
    { term:'Asymmetric information', definition:'One party to a transaction has more information than the other — causes market failure.',  hint:'One party knows more — market failure' },
    { term:'Perfect competition',  definition:'Many small price-taking firms, homogeneous product, free entry — only normal profit in long run.', hint:'Many firms, identical product, free entry' },
    { term:'Monopoly',             definition:'Single firm supplying the entire market — price maker, abnormal profits possible.',          hint:'Single firm — price maker' },
    { term:'Oligopoly',            definition:'A few large firms dominate the market — interdependent pricing, barriers to entry.',        hint:'Few large firms — interdependent' },
    { term:'Collusion',            definition:'Firms working together to fix prices or output — cartel behaviour — illegal in most countries.', hint:'Firms fixing prices together — illegal' },
    { term:'Deadweight loss',      definition:'The loss of consumer and producer surplus when output is not at the socially optimal level.', hint:'Lost surplus from inefficient output' },
    { term:'Monopsony',            definition:'A single buyer of a factor of production — e.g. a dominant employer in a labour market.',  hint:'Single buyer — e.g. dominant employer' },
  ],
  'Macroeconomics': [
    { term:'Aggregate demand',     definition:'Total spending in the economy — C + I + G + (X − M).',                                     hint:'C + I + G + (X − M)' },
    { term:'Aggregate supply',     definition:'Total output that all firms in an economy are willing to produce at each price level.',    hint:'Total output at each price level' },
    { term:'GDP',                  definition:'Gross Domestic Product — total market value of goods and services produced in a year.',    hint:'Total economic output per year' },
    { term:'Economic growth',      definition:'An increase in real GDP over time.',                                                        hint:'Real GDP increases' },
    { term:'Inflation',            definition:'A sustained increase in the general price level — measured by CPI or RPI.',                hint:'General prices rising — CPI or RPI' },
    { term:'Unemployment',         definition:'When people who are willing and able to work cannot find employment.',                     hint:'Willing and able — no employment found' },
    { term:'Cyclical unemployment', definition:'Unemployment caused by a lack of aggregate demand during an economic downturn.',          hint:'Caused by lack of demand — recession' },
    { term:'Structural unemployment', definition:'Unemployment caused by a mismatch between workers\' skills and jobs available.',       hint:'Skills mismatch — long-term' },
    { term:'Natural rate of unemployment', definition:'The rate of unemployment when the labour market is in equilibrium — includes frictional and structural.', hint:'Labour market equilibrium — frictional + structural' },
    { term:'Fiscal policy',        definition:'Government use of taxation and public spending to influence the economy.',                hint:'Tax and spending to manage economy' },
    { term:'Monetary policy',      definition:'Central bank use of interest rates and money supply to influence economic activity.',    hint:'Interest rates — central bank' },
    { term:'Supply-side policy',   definition:'Government policy aimed at increasing the productive capacity of the economy.',          hint:'Increases productive capacity' },
    { term:'Exchange rate',        definition:'The price of one currency expressed in terms of another.',                               hint:'One currency\'s price in another' },
    { term:'Current account',      definition:'Part of the balance of payments recording trade in goods and services, investment income and transfers.', hint:'Trade in goods, services and income' },
    { term:'Multiplier',           definition:'The ratio of the change in equilibrium GDP to the initial change in expenditure.',       hint:'GDP change ÷ initial spending change' },
    { term:'Accelerator',          definition:'The relationship between investment and changes in GDP — rising GDP leads to more investment.', hint:'Rising GDP → more investment' },
    { term:'Phillips curve',       definition:'A suggested inverse relationship between inflation and unemployment.',                    hint:'Inverse — inflation vs unemployment' },
    { term:'Laffer curve',         definition:'Shows that beyond a certain tax rate, increasing taxes reduces total tax revenue.',      hint:'Too high a tax rate reduces revenue' },
    { term:'Quantitative easing',  definition:'A monetary policy where the central bank creates money to buy financial assets, increasing money supply.', hint:'Central bank creates money — buys assets' },
  ],
};

VOCAB['economics']['edexcel-alevel'] = {
  'Microeconomics': [
    { term:'Rational economic agent', definition:'An economic agent who uses all available information to maximise their own benefit.',   hint:'Uses all info to maximise own benefit' },
    { term:'Demand',               definition:'The quantity of a good consumers are willing and able to buy at each price in a given period.', hint:'Willing and able to buy — at each price' },
    { term:'Supply',               definition:'The quantity producers are willing and able to offer for sale at each price in a given period.', hint:'Willing and able to sell — at each price' },
    { term:'Price elasticity of demand', definition:'PED = % ΔQd ÷ % ΔP — measures responsiveness of demand to price changes.',      hint:'% ΔQd ÷ % ΔP' },
    { term:'Derived demand',       definition:'Demand for a factor of production that arises from demand for the good it helps produce.', hint:'Demand from demand for what it makes' },
    { term:'Joint supply',         definition:'Where producing one good results in the production of another — e.g. beef and leather.', hint:'One output produces another — e.g. beef/leather' },
    { term:'Composite demand',     definition:'A good used for multiple purposes — increasing demand for one use reduces supply for others.', hint:'Multiple uses — one use limits others' },
    { term:'Short run',            definition:'The time period when at least one factor of production is fixed.',                        hint:'At least one factor fixed' },
    { term:'Long run',             definition:'The time period when all factors of production are variable.',                          hint:'All factors variable' },
    { term:'Economies of scale',   definition:'Falling average costs as output increases — due to specialisation, bulk buying and spreading fixed costs.', hint:'Average cost falls as output rises' },
    { term:'Minimum efficient scale', definition:'The lowest level of output at which long-run average cost is minimised.',            hint:'Minimum output for lowest LRAC' },
    { term:'Contestable market',   definition:'A market with low barriers to entry and exit — threat of competition constrains incumbent behaviour.', hint:'Low barriers — threat of entry constrains firms' },
    { term:'Sunk cost',            definition:'A cost that cannot be recovered when leaving a market — creates barriers to exit.',     hint:'Unrecoverable cost — barrier to exit' },
    { term:'Price discrimination', definition:'Charging different prices to different consumers for the same product for reasons not based on cost.', hint:'Different prices to different consumers' },
    { term:'Monopsony',            definition:'A single buyer in a market — can force suppliers to accept lower prices.',              hint:'Single buyer — forces lower prices on suppliers' },
  ],
  'Macroeconomics': [
    { term:'Business cycle',       definition:'The regular pattern of expansion and contraction in economic activity over time.',       hint:'Expansion and contraction pattern' },
    { term:'Demand-side policy',   definition:'Government intervention through fiscal or monetary policy to shift aggregate demand.',  hint:'Shifts aggregate demand — fiscal or monetary' },
    { term:'Supply-side policy',   definition:'Policy to increase productive potential — deregulation, tax cuts, education and training.', hint:'Increases productive potential' },
    { term:'Austerity',            definition:'Government policies reducing public spending and increasing taxes to reduce budget deficit.', hint:'Spending cuts + tax rises — reduce deficit' },
    { term:'Crowding out',         definition:'When increased government borrowing raises interest rates and reduces private sector investment.', hint:'Government borrowing reduces private investment' },
    { term:'Quantitative easing',  definition:'Central bank creating money to purchase financial assets — increases money supply.',    hint:'Central bank creates money — buys assets' },
    { term:'Forward guidance',     definition:'A central bank communicating its future monetary policy intentions to influence expectations.', hint:'Central bank signals future policy' },
    { term:'Current account deficit', definition:'When a country\'s imports of goods, services and income exceed exports.',          hint:'Imports exceed exports' },
    { term:'Hot money flows',      definition:'Short-term capital movements seeking higher returns — sensitive to interest rate differentials.', hint:'Short-term capital chasing returns' },
    { term:'Marshall-Lerner condition', definition:'A currency depreciation improves the current account if the combined price elasticities of exports and imports exceed 1.', hint:'Depreciation improves current account if PED(x) + PED(m) > 1' },
    { term:'J-curve effect',       definition:'After a currency depreciation the current account initially worsens before improving.',  hint:'Worsens then improves after depreciation' },
  ],
};

VOCAB['economics']['ocr-alevel'] = {
  'Microeconomics': [
    { term:'Economic problem',     definition:'The problem of unlimited wants and limited resources — necessitating choices.',           hint:'Unlimited wants — limited resources' },
    { term:'Opportunity cost',     definition:'The value of the best alternative foregone when making a decision.',                      hint:'Best alternative sacrificed' },
    { term:'Production possibility boundary', definition:'Shows maximum output combinations of two goods with given resources.',       hint:'Maximum combinations of two goods' },
    { term:'Demand',               definition:'The willingness and ability to buy a good at each price — ceteris paribus.',             hint:'Willing and able to buy — ceteris paribus' },
    { term:'Ceteris paribus',      definition:'Latin for "all other things being equal" — an assumption holding other variables constant.',  hint:'All other things equal' },
    { term:'Elasticity',           definition:'The responsiveness of one variable to a change in another — e.g. demand to price.',     hint:'Responsiveness of one variable to another' },
    { term:'Market equilibrium',   definition:'The price at which demand equals supply — stable unless disturbed.',                    hint:'Demand = supply — stable' },
    { term:'Externalities',        definition:'Third-party costs (negative) or benefits (positive) from a transaction.',               hint:'Third-party costs or benefits' },
    { term:'Government intervention', definition:'Actions by the government to correct market failure — taxes, subsidies, regulation.', hint:'Tax, subsidy, regulation — corrects failure' },
    { term:'Cost-benefit analysis', definition:'Comparing the total costs and benefits of a project to assess social welfare.',        hint:'Total costs vs total benefits — social welfare' },
    { term:'Gini coefficient',     definition:'A measure of income inequality — 0 is perfect equality, 1 is perfect inequality.',     hint:'0 = equal, 1 = unequal — income measure' },
    { term:'Lorenz curve',         definition:'A graph showing the cumulative share of income received by the cumulative share of the population.', hint:'Cumulative income distribution graph' },
  ],
  'Macroeconomics': [
    { term:'National income',      definition:'The total value of goods and services produced in a country over a year.',              hint:'Total output of a country — a year' },
    { term:'Circular flow of income', definition:'A model showing how income flows between households and firms in an economy.',      hint:'Income flowing between households and firms' },
    { term:'Injection',            definition:'Any spending that adds to the circular flow — investment, government spending, exports.', hint:'Adds to circular flow — I, G, X' },
    { term:'Withdrawal',           definition:'Any spending removed from the circular flow — savings, taxes, imports.',               hint:'Removed from circular flow — S, T, M' },
    { term:'Multiplier effect',    definition:'An initial injection increases national income by more than the initial amount.',      hint:'Injection increases income by more than itself' },
    { term:'Deflation',            definition:'A sustained fall in the general price level — can indicate economic weakness.',       hint:'Falling general price level' },
    { term:'Stagflation',          definition:'The simultaneous occurrence of high inflation and high unemployment.',                 hint:'High inflation + high unemployment together' },
    { term:'Economic cycle',       definition:'The pattern of boom, slowdown, recession and recovery in economic activity.',         hint:'Boom → slowdown → recession → recovery' },
    { term:'Monetary transmission mechanism', definition:'The process by which changes in interest rates affect the wider economy.', hint:'How rate changes transmit to economy' },
    { term:'Exchange rate system', definition:'The rules governing how a currency\'s value is determined — fixed, floating or managed.', hint:'Fixed, floating or managed — currency value' },
    { term:'Comparative advantage', definition:'The ability to produce a good at lower opportunity cost than other producers — basis of trade.', hint:'Lower opportunity cost — basis of trade' },
    { term:'Terms of trade',       definition:'The ratio of export prices to import prices — measures trade competitiveness.',       hint:'Export prices ÷ import prices' },
  ],
};

// ════════════════════════════════════════════════════════════
// COMPUTING — A-Level all boards
// ════════════════════════════════════════════════════════════

VOCAB['computing']['aqa-alevel'] = {
  'Fundamentals of Programming': [
    { term:'Abstraction',          definition:'Removing unnecessary detail to focus on essential features of a problem.',               hint:'Remove unnecessary detail' },
    { term:'Decomposition',        definition:'Breaking a complex problem into smaller, more manageable sub-problems.',                 hint:'Break into smaller parts' },
    { term:'Algorithm',            definition:'A step-by-step set of instructions for solving a problem.',                             hint:'Step-by-step problem solution' },
    { term:'Recursion',            definition:'A subroutine that calls itself — requires a base case to prevent infinite recursion.',   hint:'Subroutine calls itself — needs base case' },
    { term:'Object-oriented programming', definition:'A paradigm organising code around objects with attributes and methods.',         hint:'Objects with attributes and methods' },
    { term:'Class',                definition:'A template defining the attributes and methods of objects of that type.',               hint:'Template for objects' },
    { term:'Inheritance',          definition:'A class inheriting attributes and methods from a parent class.',                        hint:'Child class inherits from parent class' },
    { term:'Polymorphism',         definition:'The ability of different objects to respond to the same method call in different ways.', hint:'Same method — different behaviour' },
    { term:'Encapsulation',        definition:'Bundling data and methods within a class and restricting direct access.',               hint:'Bundles data and methods — restricts access' },
    { term:'Big O notation',       definition:'A notation describing the time or space complexity of an algorithm — e.g. O(n), O(n²).', hint:'Describes algorithm complexity — O(n)' },
    { term:'Linear search',        definition:'Searching through each element in sequence until the target is found — O(n).',          hint:'Sequential search — O(n)' },
    { term:'Binary search',        definition:'Dividing a sorted list in half repeatedly to find a target — O(log n).',                hint:'Halves sorted list — O(log n)' },
    { term:'Bubble sort',          definition:'A sorting algorithm repeatedly swapping adjacent elements if out of order — O(n²).',    hint:'Swap adjacent — O(n²)' },
    { term:'Merge sort',           definition:'A divide and conquer sorting algorithm — splits, sorts, then merges — O(n log n).',    hint:'Divide, sort, merge — O(n log n)' },
  ],
  'Computer Systems': [
    { term:'Von Neumann architecture', definition:'CPU design with a single shared memory for both data and instructions — fetch-decode-execute cycle.', hint:'Shared memory — fetch-decode-execute' },
    { term:'Fetch-decode-execute cycle', definition:'The continuous cycle by which a CPU processes instructions from memory.',        hint:'CPU processes instructions — repeating cycle' },
    { term:'Cache memory',         definition:'Small, fast memory between CPU and RAM storing frequently accessed data.',             hint:'Fast memory close to CPU' },
    { term:'Pipelining',           definition:'Overlapping the fetch-decode-execute stages of successive instructions to increase CPU throughput.', hint:'Overlapping instruction stages — faster' },
    { term:'RISC vs CISC',         definition:'RISC uses simple instructions executed in one cycle; CISC uses complex multi-cycle instructions.', hint:'Simple fast vs complex slower instructions' },
    { term:'Operating system',     definition:'Software managing hardware resources and providing interfaces for applications.',      hint:'Manages hardware — interface for apps' },
    { term:'Virtual memory',       definition:'Using hard disk space as an extension of RAM when RAM is full.',                       hint:'Hard disk used as extra RAM' },
    { term:'Interrupt',            definition:'A signal to the CPU requesting attention — the CPU suspends the current task to handle it.', hint:'Signal to CPU — suspends current task' },
    { term:'Paging',               definition:'Dividing memory into fixed-size pages — allows efficient memory management.',         hint:'Fixed-size memory divisions' },
    { term:'Segmentation',         definition:'Dividing memory into variable-size segments based on logical units of data.',         hint:'Variable-size memory divisions' },
  ],
  'Data Representation': [
    { term:'Two\'s complement',    definition:'A binary representation for signed integers — flip bits and add 1 to negate.',         hint:'Flip bits + add 1 — represents negatives' },
    { term:'Floating point',       definition:'Binary representation of real numbers — mantissa × 2^exponent.',                      hint:'Mantissa × 2^exponent — real numbers' },
    { term:'Normalisation',        definition:'Adjusting a floating point number so the mantissa starts with a significant bit.',    hint:'Mantissa starts with significant bit' },
    { term:'Sampling',             definition:'Measuring the amplitude of an analogue signal at regular intervals for digital conversion.', hint:'Measuring analogue signal at intervals' },
    { term:'Bit depth',            definition:'The number of bits used to represent each sample in digital audio — more bits = better quality.', hint:'Bits per sample — audio quality' },
    { term:'Lossless compression', definition:'Reduces file size without losing data — all original data can be recovered.',          hint:'No data lost — original recoverable' },
    { term:'Lossy compression',    definition:'Reduces file size by permanently removing some data.',                                 hint:'Data permanently removed' },
    { term:'Run-length encoding',  definition:'A lossless compression technique replacing repeated data with a count and value.',    hint:'Count + value replaces repeated data' },
    { term:'Huffman coding',       definition:'Lossless compression assigning shorter codes to more frequent characters.',           hint:'More frequent = shorter code' },
  ],
  'Networks and Cyber Security': [
    { term:'Packet switching',     definition:'Data is split into packets that travel independently and are reassembled at the destination.',  hint:'Data in packets — reassembled' },
    { term:'TCP/IP model',         definition:'A four-layer model for internet communication — application, transport, internet, link.',  hint:'Four layers — application to link' },
    { term:'IP address',           definition:'A unique numerical identifier for a device on a network.',                            hint:'Unique address — identifies device' },
    { term:'DNS',                  definition:'Domain Name System — translates domain names to IP addresses.',                       hint:'Translates domain names to IP addresses' },
    { term:'Firewall',             definition:'Hardware or software filtering network traffic to prevent unauthorised access.',       hint:'Filters traffic — blocks unauthorised access' },
    { term:'Encryption',           definition:'Encoding data so only authorised parties can read it — symmetric and asymmetric.',    hint:'Encoding data — symmetric or asymmetric' },
    { term:'Public key cryptography', definition:'An asymmetric system using a public key to encrypt and a private key to decrypt.', hint:'Public encrypts — private decrypts' },
    { term:'Digital certificate',  definition:'An electronic document verifying the identity of a website using digital signatures.', hint:'Verifies website identity' },
    { term:'SQL injection',        definition:'An attack exploiting input fields to insert malicious SQL into a database query.',    hint:'Malicious SQL via input fields' },
    { term:'Social engineering',   definition:'Manipulating people into revealing confidential information or granting access.',     hint:'Tricking people — not technical hacking' },
  ],
  'Theory of Computation': [
    { term:'Turing machine',       definition:'A theoretical model of computation with an infinite tape and read/write head — defines computability.', hint:'Theoretical model — defines computability' },
    { term:'Halting problem',      definition:'Turing\'s proof that no algorithm can determine whether any arbitrary program will halt.',  hint:'No algorithm can solve — Turing\'s proof' },
    { term:'Finite state machine', definition:'A model with a finite number of states and transitions based on inputs.',             hint:'States and transitions — based on inputs' },
    { term:'Regular expression',   definition:'A pattern-matching notation describing sets of strings.',                            hint:'Pattern notation for strings' },
    { term:'Context-free grammar', definition:'A formal grammar describing the syntax of programming languages.',                   hint:'Formal grammar — programming language syntax' },
    { term:'Intractable problem',  definition:'A problem that cannot be solved in polynomial time — e.g. NP-complete problems.',     hint:'Cannot be solved efficiently — NP-complete' },
    { term:'Tractable problem',    definition:'A problem solvable in polynomial time — an efficient algorithm exists.',             hint:'Solvable efficiently — polynomial time' },
  ],
};

VOCAB['computing']['edexcel-alevel'] = {
  'Problem Solving and Programming': [
    { term:'Computational thinking', definition:'The thought processes involved in formulating problems so computers can solve them.',hint:'Thinking like a computer — problem formulation' },
    { term:'Abstraction',          definition:'Focusing on essential information and removing unnecessary details.',                  hint:'Keep essentials — remove detail' },
    { term:'Decomposition',        definition:'Breaking a problem into smaller solvable sub-problems.',                              hint:'Break into smaller parts' },
    { term:'Algorithm',            definition:'A step-by-step sequence of instructions for solving a problem.',                     hint:'Step-by-step instructions' },
    { term:'Recursion',            definition:'A function that calls itself — with a base case to terminate.',                      hint:'Calls itself — needs base case' },
    { term:'Object-oriented programming', definition:'Programming paradigm based on objects with properties and methods.',         hint:'Objects — properties and methods' },
    { term:'Encapsulation',        definition:'Keeping data and methods together in a class — hiding implementation.',              hint:'Data and methods together — hidden' },
    { term:'Inheritance',          definition:'A derived class inheriting attributes and methods from a base class.',               hint:'Derived class inherits from base class' },
    { term:'Polymorphism',         definition:'Same interface, different implementations across different classes.',               hint:'Same interface — different implementations' },
    { term:'Big O notation',       definition:'Expresses the time or space complexity of an algorithm — O(1), O(n), O(n²).',       hint:'Algorithm complexity — O notation' },
  ],
  'Data Structures and Algorithms': [
    { term:'Stack',                definition:'A LIFO data structure — last in, first out — push adds, pop removes from top.',     hint:'LIFO — last in first out' },
    { term:'Queue',                definition:'A FIFO data structure — first in, first out — enqueue adds, dequeue removes.',      hint:'FIFO — first in first out' },
    { term:'Linked list',          definition:'A dynamic data structure where each node stores data and a pointer to the next node.', hint:'Nodes with data and pointers' },
    { term:'Binary tree',          definition:'A hierarchical structure where each node has at most two children.',                 hint:'Hierarchical — max two children' },
    { term:'Hash table',           definition:'A data structure using a hash function to map keys to storage locations.',          hint:'Hash function maps keys to locations' },
    { term:'Depth-first search',   definition:'Graph traversal exploring as far as possible along each branch before backtracking.', hint:'Explore as far as possible — then backtrack' },
    { term:'Breadth-first search', definition:'Graph traversal exploring all neighbours at each depth before going deeper.',       hint:'All neighbours first — then go deeper' },
    { term:'Dijkstra\'s algorithm', definition:'Finds the shortest path between nodes in a weighted graph.',                      hint:'Shortest path — weighted graph' },
  ],
  'Computer Architecture and Networks': [
    { term:'Von Neumann model',    definition:'Architecture with CPU and shared memory — instructions and data in same store.',    hint:'CPU + shared memory — data and instructions together' },
    { term:'Harvard architecture', definition:'Separate memory for instructions and data — allows simultaneous fetch and data access.',  hint:'Separate instruction and data memory' },
    { term:'Pipelining',           definition:'Overlapping fetch-decode-execute stages of successive instructions.',              hint:'Overlapping CPU stages' },
    { term:'TCP/IP',               definition:'The suite of protocols governing internet communication.',                         hint:'Internet communication protocols' },
    { term:'HTTP/HTTPS',           definition:'Protocols for transferring web pages — HTTPS is the encrypted version.',           hint:'Web page transfer — HTTPS is encrypted' },
    { term:'Packet switching',     definition:'Data broken into packets routed independently and reassembled at destination.',    hint:'Data in packets — independent routing' },
    { term:'Encryption',           definition:'Transforming data so it cannot be read without the decryption key.',               hint:'Data transformed — unreadable without key' },
  ],
};

VOCAB['computing']['ocr-alevel'] = {
  'Computer Systems': [
    { term:'Stored program concept', definition:'Instructions and data are stored in the same memory and executed sequentially.', hint:'Instructions and data in same memory' },
    { term:'Harvard architecture', definition:'Separate memory and pathways for instructions and data.',                          hint:'Separate instruction and data memory' },
    { term:'Interrupt handler',    definition:'A routine that processes an interrupt signal — saves CPU state and handles the interrupt.', hint:'Processes interrupt — saves CPU state' },
    { term:'Scheduling',           definition:'The OS process of deciding which process runs next — round robin, shortest job first etc.', hint:'OS decides which process runs — algorithms' },
    { term:'Thrashing',            definition:'Excessive paging activity where the system spends more time swapping than processing.',  hint:'Excessive paging — system barely processes' },
    { term:'BIOS',                 definition:'Basic Input Output System — firmware initialising hardware at startup.',           hint:'Firmware — initialises hardware at boot' },
    { term:'Device driver',        definition:'Software allowing the OS to communicate with hardware peripherals.',               hint:'Software — OS talks to hardware' },
  ],
  'Algorithms and Data Structures': [
    { term:'Stack',                definition:'LIFO structure — push and pop operations at the top.',                             hint:'LIFO — push and pop at top' },
    { term:'Queue',                definition:'FIFO structure — enqueue at rear, dequeue at front.',                              hint:'FIFO — enqueue rear, dequeue front' },
    { term:'Binary search tree',   definition:'A tree where left children < parent < right children — O(log n) search.',        hint:'Left < parent < right — O(log n)' },
    { term:'Bubble sort',          definition:'Repeatedly swap adjacent elements if out of order — O(n²) worst case.',           hint:'Swap adjacent — O(n²)' },
    { term:'Quicksort',            definition:'Divide and conquer sort using a pivot — O(n log n) average, O(n²) worst.',        hint:'Pivot-based — O(n log n) average' },
    { term:'A* algorithm',         definition:'A heuristic pathfinding algorithm using f(n) = g(n) + h(n) — more efficient than Dijkstra in practice.', hint:'f = g + h — heuristic pathfinding' },
    { term:'Dynamic programming',  definition:'Breaking a problem into overlapping sub-problems and storing solutions to avoid recomputation.', hint:'Store sub-problem solutions — avoid recomputing' },
  ],
  'Theory of Computation': [
    { term:'Finite automaton',     definition:'A theoretical machine that accepts or rejects strings based on states and transitions.', hint:'States and transitions — accepts/rejects strings' },
    { term:'Regular language',     definition:'A language that can be recognised by a finite automaton.',                         hint:'Recognised by finite automaton' },
    { term:'Chomsky hierarchy',    definition:'A classification of formal grammars into four types — Type 0 to Type 3.',          hint:'Four grammar types — Type 0 to 3' },
    { term:'P vs NP',              definition:'An unsolved problem — whether every problem whose solution can be verified quickly can also be solved quickly.', hint:'Can every verifiable problem be solved quickly?' },
    { term:'Heuristic',            definition:'An approach finding a good enough solution when an optimal one is too computationally expensive.', hint:'Good enough solution — when optimal is too costly' },
  ],
};

// ════════════════════════════════════════════════════════════
// MISSING: ENGLISH — Edexcel A-Level
// GEOGRAPHY — Edexcel A-Level
// ════════════════════════════════════════════════════════════

VOCAB['english']['edexcel-alevel'] = {
  'Language and Textual Analysis': [
    { term:'Register',             definition:'The level of formality and style appropriate to a particular audience and purpose.',   hint:'Formality level for audience and purpose' },
    { term:'Discourse',            definition:'A piece of extended language — spoken or written — analysed for how it constructs meaning.', hint:'Extended language — spoken or written' },
    { term:'Cohesion',             definition:'The way a text holds together through lexical chains, pronouns, connectives and repeated ideas.', hint:'Text holds together — chains and connectives' },
    { term:'Deixis',               definition:'Words that point to a specific context — spatial (here/there), temporal (now/then), personal (I/you).', hint:'Context-pointing words — here, now, I' },
    { term:'Pragmatics',           definition:'The study of how context influences the interpretation of language.',                 hint:'How context shapes language meaning' },
    { term:'Speech act',           definition:'An utterance that performs an action — assertive, directive, commissive, expressive, declarative.', hint:'Utterance performing an action' },
    { term:'Implied meaning',      definition:'Meaning not explicitly stated — the reader or listener infers it from context.',     hint:'Meaning inferred — not stated directly' },
    { term:'Semantic prosody',     definition:'The tendency of a word to appear in contexts with positive or negative connotations.', hint:'Word\'s tendency to appear in positive/negative contexts' },
  ],
  'Literature Critical Frameworks': [
    { term:'Narratology',          definition:'The study of narrative structure and technique.',                                     hint:'Study of narrative structure' },
    { term:'Intertextuality',      definition:'The relationship between texts where one refers to or is shaped by another.',        hint:'Texts referring to or shaping each other' },
    { term:'Canon',                definition:'The body of literary works widely regarded as authoritative and central to a culture.', hint:'Authoritative central literary works' },
    { term:'Postmodernism',        definition:'A literary mode questioning fixed meaning, truth and grand narratives — often self-referential and ironic.', hint:'Questions fixed meaning — ironic, self-referential' },
    { term:'Feminist criticism',   definition:'A critical approach examining gender roles, power and women\'s representation.',     hint:'Gender, power, women\'s representation' },
    { term:'Marxist criticism',    definition:'A critical approach examining class, economic power and ideological structures.',    hint:'Class, power, ideology' },
    { term:'Psychoanalytic reading', definition:'Applying Freudian concepts — the unconscious, repression, desire — to interpret texts.', hint:'Freudian concepts applied to texts' },
    { term:'Close reading',        definition:'Detailed analysis of a short passage focusing on language, imagery and structure.',  hint:'Detailed language and structure analysis' },
  ],
  'Drama and Poetry': [
    { term:'Tragic flaw',          definition:'The character weakness (hamartia) leading to a tragic hero\'s downfall.',            hint:'Character weakness → downfall' },
    { term:'Catharsis',            definition:'The emotional release of pity and fear experienced by an audience at the end of a tragedy.', hint:'Emotional release at end of tragedy' },
    { term:'Soliloquy',            definition:'A speech revealing a character\'s innermost thoughts to the audience, alone on stage.', hint:'Private thoughts to audience — alone' },
    { term:'Dramatic irony',       definition:'When the audience knows something a character does not.',                            hint:'Audience knows more than character' },
    { term:'Free verse',           definition:'Poetry without regular metre or rhyme scheme.',                                      hint:'No regular metre or rhyme' },
    { term:'Iambic pentameter',    definition:'Five iambic feet per line — unstressed-stressed — ten syllables.',                  hint:'Five iambs — ten syllables per line' },
    { term:'Enjambment',           definition:'A sentence or phrase continuing beyond the end of a line of poetry.',               hint:'Sentence continues past line end' },
    { term:'Volta',                definition:'The turning point or shift in argument or mood in a poem.',                          hint:'Turn or shift in poem\'s argument' },
  ],
};

VOCAB['geography']['edexcel-alevel'] = {
  'Tectonic Processes and Hazards': [
    { term:'Tectonic plate',       definition:'A rigid segment of Earth\'s lithosphere moving on the asthenosphere.',              hint:'Rigid crust segment — moves on mantle' },
    { term:'Subduction zone',      definition:'Where an oceanic plate is forced beneath a continental plate — creates volcanoes and earthquakes.', hint:'Oceanic under continental — volcanoes' },
    { term:'Constructive margin',  definition:'Plates diverge — new crust forms — e.g. Mid-Atlantic Ridge.',                      hint:'Plates diverge — new crust forms' },
    { term:'Magnitude',            definition:'The size of an earthquake measured on the Moment Magnitude Scale.',                 hint:'Earthquake size — Moment Magnitude' },
    { term:'Frequency',            definition:'How often a hazard event of a given magnitude occurs.',                             hint:'How often hazard events occur' },
    { term:'Vulnerability',        definition:'The degree to which a community is susceptible to harm from a hazard.',            hint:'How susceptible to harm' },
    { term:'Resilience',           definition:'The ability of a community to recover from a disaster.',                            hint:'Ability to recover from disaster' },
    { term:'Park model',           definition:'A model showing how a community\'s quality of life changes before, during and after a disaster.', hint:'Quality of life changes around disaster' },
  ],
  'Landscape Systems': [
    { term:'Fluvial geomorphology', definition:'The study of rivers and their landforms.',                                         hint:'Study of rivers and their landforms' },
    { term:'Erosion',              definition:'The wearing away and removal of material by water, ice or wind.',                   hint:'Wearing away and removing material' },
    { term:'Deposition',           definition:'The laying down of transported sediment when energy falls.',                       hint:'Sediment laid down — energy falls' },
    { term:'Meander',              definition:'A sinuous bend in a river caused by differential erosion and deposition.',         hint:'River bend — erosion and deposition' },
    { term:'Floodplain',           definition:'The flat land either side of a river that is periodically flooded.',               hint:'Flat land beside river — periodically flooded' },
    { term:'Coastal processes',    definition:'The erosion, transportation and deposition of material at the coast.',             hint:'Erosion, transport, deposition at coast' },
    { term:'Longshore drift',      definition:'The movement of sediment along a coast by waves approaching at an angle.',        hint:'Sediment moved along coast — angled waves' },
    { term:'Hard engineering',     definition:'Artificial structures reducing coastal erosion — sea walls, groynes.',             hint:'Artificial structures — sea walls, groynes' },
  ],
  'Global Development and Connections': [
    { term:'Human Development Index', definition:'A composite measure of development combining life expectancy, education and income.', hint:'Life expectancy + education + income' },
    { term:'Poverty trap',         definition:'A cycle of poverty where the poor lack resources to escape poverty.',               hint:'Cycle keeping people in poverty' },
    { term:'Dependency theory',    definition:'The view that developing nations remain poor because of exploitation by developed nations.', hint:'Developing remain poor — exploited by developed' },
    { term:'Neoliberalism',        definition:'Economic ideology favouring free markets, deregulation and reduced government intervention.', hint:'Free markets — less government' },
    { term:'Washington Consensus', definition:'A set of economic policies promoted by the IMF and World Bank for developing countries — privatisation, liberalisation, fiscal austerity.', hint:'IMF/World Bank policies — privatise, liberalise' },
    { term:'Millennium Development Goals', definition:'Eight international targets agreed in 2000 to reduce poverty and improve development by 2015.', hint:'Eight poverty-reduction targets — 2000–2015' },
    { term:'Sustainable Development Goals', definition:'17 UN goals adopted in 2015 to address global challenges by 2030.',      hint:'17 UN goals — 2015–2030' },
    { term:'Migration',            definition:'The movement of people from one place to another — internal or international.',    hint:'People moving — internal or international' },
    { term:'Remittances',          definition:'Money sent by migrants to their home country — important income for many developing nations.', hint:'Money migrants send home' },
  ],
  'The Water Cycle and Water Insecurity': [
    { term:'Water cycle',          definition:'The continuous movement of water between atmosphere, land and ocean.',              hint:'Water moving between atmosphere and land' },
    { term:'Evapotranspiration',   definition:'The combined process of evaporation from land and transpiration from plants.',     hint:'Evaporation + plant transpiration' },
    { term:'Groundwater',          definition:'Water stored underground in aquifers — a major freshwater resource.',              hint:'Underground water in aquifers' },
    { term:'Water stress',         definition:'When water demand exceeds available supply in a region.',                          hint:'Demand exceeds supply' },
    { term:'Water scarcity',       definition:'An absolute shortage of water — physical or economic scarcity.',                   hint:'Absolute shortage of water' },
    { term:'Virtual water',        definition:'The hidden water used in producing goods — importing food imports the water used to grow it.', hint:'Water embedded in traded goods' },
    { term:'Water footprint',      definition:'The total amount of freshwater used to produce goods and services consumed by an individual or country.', hint:'Total water use — individuals or countries' },
  ],
};

// ════════════════════════════════════════════════════════════
// MISSING GCSE SUBJECTS FOR EDEXCEL
// Art, Drama, Music, PE — these subjects use generic
// definitions regardless of exam board at GCSE level
// Languages: Edexcel uses same DfE core vocabulary as AQA
// ════════════════════════════════════════════════════════════

// Art — Edexcel GCSE (9-1) uses same elements/principles as AQA
VOCAB['art']['edexcel-gcse'] = VOCAB['art']['aqa-gcse'];

// Drama — Edexcel GCSE has same core performance/production vocab
VOCAB['drama']['edexcel-gcse'] = VOCAB['drama']['aqa-gcse'];

// Music — Edexcel GCSE shares core musical elements
VOCAB['music']['edexcel-gcse'] = VOCAB['music']['aqa-gcse'];

// PE — Edexcel GCSE shares core anatomy, training principles
VOCAB['pe']['edexcel-gcse'] = VOCAB['pe']['aqa-gcse'];

// Languages — Edexcel GCSE uses the same DfE vocabulary framework
VOCAB['french']['edexcel-gcse'] = VOCAB['french']['aqa-gcse'];
VOCAB['german']['edexcel-gcse'] = VOCAB['german']['aqa-gcse'];
VOCAB['spanish']['edexcel-gcse'] = VOCAB['spanish']['aqa-gcse'];


// ════════════════════════════════════════════════════════════
// IB DIPLOMA PROGRAMME
// Board keys: 'ib-sl' (Standard Level) and 'ib-hl' (Higher Level)
// New 2023 syllabus (first assessment 2025)
// SL = ~150 teaching hours  |  HL = ~240 teaching hours
// HL includes all SL content PLUS additional HL-only topics
// ════════════════════════════════════════════════════════════

VOCAB['biology']['ib-sl'] = {
  'Unity and Diversity (Theme A)': [
    { term:'Cell theory',          definition:'All living organisms are composed of cells; cells are the basic unit of life; all cells come from pre-existing cells.',  hint:'Three principles of cell theory' },
    { term:'Prokaryotic cell',     definition:'A cell without a membrane-bound nucleus or organelles — e.g. bacteria. Smallest cells.',  hint:'No nucleus — bacteria' },
    { term:'Eukaryotic cell',      definition:'A cell with a membrane-bound nucleus and membrane-bound organelles — animals, plants, fungi, protists.',  hint:'Has nucleus — animals, plants, fungi' },
    { term:'Cell membrane',        definition:'A fluid mosaic of phospholipids and proteins controlling what enters and leaves the cell.',  hint:'Phospholipid bilayer — controls entry/exit' },
    { term:'Nucleoid region',      definition:'The region of a prokaryotic cell containing its circular DNA — not enclosed by a membrane.',  hint:'Circular DNA in bacteria — no membrane' },
    { term:'Endosymbiotic theory', definition:'The theory that mitochondria and chloroplasts originated as free-living prokaryotes engulfed by a host cell.',  hint:'Mitochondria/chloroplasts were once free bacteria' },
    { term:'Cladistics',           definition:'A system of classification based on shared derived characteristics and common ancestry.',  hint:'Classification by shared derived characteristics' },
    { term:'Clade',                definition:'A group of organisms comprising a common ancestor and all its descendants.',  hint:'Ancestor + all descendants' },
    { term:'Species',              definition:'A group of organisms capable of interbreeding to produce fertile offspring and sharing a gene pool.',  hint:'Interbreed to produce fertile offspring' },
    { term:'Natural selection',    definition:'The differential survival and reproduction of individuals with heritable advantageous traits.',  hint:'Differential survival of advantageous traits' },
    { term:'Convergent evolution', definition:'Independent evolution of similar traits in unrelated lineages due to similar selection pressures.',  hint:'Unrelated organisms — similar traits — same pressure' },
    { term:'Divergent evolution',  definition:'Evolution of different traits in related lineages due to different selection pressures.',  hint:'Related organisms — different traits' },
    { term:'Biodiversity',         definition:'The variety of life including genetic, species and ecosystem diversity.',  hint:'Variety at genetic, species and ecosystem levels' },
    { term:'Keystone species',     definition:'A species that has a disproportionately large effect on its ecosystem relative to its abundance.',  hint:'Disproportionate ecosystem effect' },
  ],
  'Form and Function (Theme B)': [
    { term:'Phospholipid bilayer', definition:'The double layer of phospholipid molecules forming the core of all biological membranes — hydrophilic heads outside, hydrophobic tails inside.',  hint:'Double layer — heads out, tails in' },
    { term:'Fluid mosaic model',   definition:'Singer and Nicolson\'s model of membrane structure — proteins embedded in a fluid phospholipid bilayer.',  hint:'Proteins in fluid bilayer — Singer and Nicolson' },
    { term:'Enzyme',               definition:'A globular protein that acts as a biological catalyst — speeds up chemical reactions without being consumed.',  hint:'Biological catalyst — not consumed' },
    { term:'Active site',          definition:'The specific region of an enzyme that binds the substrate — complementary in shape.',  hint:'Complementary to substrate — binds it' },
    { term:'Induced fit model',    definition:'The active site changes shape slightly to better fit the substrate upon binding.',  hint:'Active site changes shape to fit substrate' },
    { term:'Substrate',            definition:'The molecule on which an enzyme acts.',  hint:'Molecule the enzyme works on' },
    { term:'Gas exchange',         definition:'The movement of oxygen and carbon dioxide between an organism and its environment.',  hint:'O₂ in, CO₂ out — between organism and environment' },
    { term:'Fick\'s law',          definition:'The rate of diffusion is proportional to surface area × concentration difference ÷ diffusion distance.',  hint:'Rate ∝ SA × ΔC ÷ distance' },
    { term:'Transpiration',        definition:'Evaporation of water from plant surfaces — mainly through stomata — creates a tension that pulls water up from roots.',  hint:'Water evaporates from leaves — pulls water up' },
    { term:'Xerophyte',            definition:'A plant adapted to dry conditions — e.g. thick cuticle, sunken stomata, rolled leaves.',  hint:'Plant adapted to dry conditions' },
    { term:'Haemoglobin',          definition:'A quaternary protein in red blood cells with four haem groups each carrying one O₂ molecule.',  hint:'Quaternary protein — carries oxygen — red cells' },
    { term:'Oxygen dissociation curve', definition:'An S-shaped graph showing the relationship between partial pressure of O₂ and haemoglobin saturation.',  hint:'S-shaped curve — O₂ and haemoglobin saturation' },
    { term:'Bohr shift',           definition:'A decrease in haemoglobin\'s O₂ affinity when CO₂ increases — facilitates O₂ release to active tissues.',  hint:'CO₂ rises → Hb releases O₂' },
  ],
  'Interaction and Interdependence (Theme C)': [
    { term:'Metabolism',           definition:'All the chemical reactions occurring within a living organism.',  hint:'All chemical reactions in organism' },
    { term:'Anabolism',            definition:'Metabolic reactions that build up complex molecules from simpler ones — require energy.',  hint:'Building up — requires energy' },
    { term:'Catabolism',           definition:'Metabolic reactions that break down complex molecules — release energy.',  hint:'Breaking down — releases energy' },
    { term:'ATP',                  definition:'Adenosine triphosphate — the universal energy currency of cells.',  hint:'Universal energy currency — ADP + Pi → ATP' },
    { term:'Photosynthesis',       definition:'The process by which chloroplasts use light energy to convert CO₂ and water into glucose and O₂.',  hint:'Light energy → glucose in chloroplast' },
    { term:'Respiration',          definition:'The controlled release of energy from organic molecules in cells — produces ATP.',  hint:'Releases energy as ATP' },
    { term:'Glycolysis',           definition:'The anaerobic splitting of glucose into two pyruvate molecules — occurs in the cytoplasm — produces 2 ATP net.',  hint:'Glucose → pyruvate — cytoplasm — 2 ATP' },
    { term:'Krebs cycle',          definition:'A cycle of reactions in the mitochondrial matrix oxidising acetyl-CoA to CO₂ — produces NADH and FADH₂.',  hint:'Matrix cycle — acetyl-CoA → CO₂ — NADH' },
    { term:'Electron transport chain', definition:'A series of protein complexes in the inner mitochondrial membrane — generates most ATP via chemiosmosis.',  hint:'Inner membrane — generates most ATP' },
    { term:'Symbiosis',            definition:'A close ecological relationship between two organisms of different species.',  hint:'Close relationship — different species' },
    { term:'Mutualism',            definition:'A symbiotic relationship benefiting both organisms.',  hint:'Both organisms benefit' },
    { term:'Parasitism',           definition:'A symbiotic relationship where one organism benefits at the other\'s expense.',  hint:'One benefits — other harmed' },
    { term:'Immunity',             definition:'The ability of an organism to resist infection by recognising and eliminating pathogens.',  hint:'Resistance to infection' },
    { term:'Antigen',              definition:'A molecule — usually a protein — on a pathogen that triggers an immune response.',  hint:'Triggers immune response — on pathogen surface' },
    { term:'Antibody',             definition:'A Y-shaped glycoprotein produced by plasma cells that binds specifically to an antigen.',  hint:'Y-shaped — binds specific antigen' },
    { term:'Clonal selection',     definition:'The process by which an antigen selects and activates specific lymphocytes, which then proliferate.',  hint:'Antigen selects matching lymphocyte — proliferates' },
  ],
  'Continuity and Change (Theme D)': [
    { term:'DNA replication',      definition:'The semi-conservative process by which DNA is copied — each new molecule has one original and one new strand.',  hint:'Semi-conservative — one old one new strand' },
    { term:'Helicase',             definition:'An enzyme that unwinds and unzips the DNA double helix during replication.',  hint:'Unwinds DNA — opens the helix' },
    { term:'DNA polymerase III',   definition:'The enzyme that synthesises new DNA strands by adding complementary nucleotides in the 5\'→3\' direction.',  hint:'Adds nucleotides 5\'→3\' — new strand synthesis' },
    { term:'Transcription',        definition:'The synthesis of mRNA from a DNA template — occurs in the nucleus.',  hint:'DNA → mRNA — in nucleus' },
    { term:'Translation',          definition:'The synthesis of a polypeptide at a ribosome using the mRNA sequence.',  hint:'mRNA → polypeptide — at ribosome' },
    { term:'Codon',                definition:'A sequence of three mRNA bases coding for one amino acid.',  hint:'Three mRNA bases — one amino acid' },
    { term:'Meiosis',              definition:'Cell division producing four genetically unique haploid cells — gametes.',  hint:'Four haploid unique cells — gametes' },
    { term:'Crossing over',        definition:'Exchange of DNA segments between homologous chromosomes during meiosis I — creates genetic variation.',  hint:'Chromatid exchange during meiosis I' },
    { term:'Phenotype',            definition:'The observable characteristics of an organism — determined by genotype and environment.',  hint:'Observable characteristics' },
    { term:'Genotype',             definition:'The genetic makeup of an organism — the specific alleles it possesses.',  hint:'Alleles an organism carries' },
    { term:'Homeostasis',          definition:'The maintenance of a constant internal environment within a narrow range of conditions.',  hint:'Maintaining stable internal conditions' },
    { term:'Negative feedback',    definition:'A regulatory mechanism reversing a deviation from the set point to restore normal conditions.',  hint:'Reverses deviations from set point' },
    { term:'Ecological footprint', definition:'The area of productive land required to sustain an individual\'s or population\'s resource use.',  hint:'Land area needed to sustain lifestyle' },
    { term:'Carbon footprint',     definition:'The total greenhouse gas emissions caused directly or indirectly by an individual or activity.',  hint:'Total GHG emissions from activity' },
  ],
};

// HL adds these additional topics to all SL content
VOCAB['biology']['ib-hl'] = {
  'Unity and Diversity — HL Extensions': [
    { term:'Archaea',              definition:'A domain of prokaryotes distinct from bacteria — often found in extreme environments — third domain of life.',  hint:'Third domain — extreme environments' },
    { term:'Metagenomics',         definition:'Sequencing DNA extracted directly from environmental samples to identify organisms without culturing.',  hint:'DNA sequencing from environment — no culturing' },
    { term:'Neutral theory of evolution', definition:'Kimura\'s theory that most genetic variation is selectively neutral — not subject to positive selection.',  hint:'Most mutations neutral — Kimura' },
    { term:'Gradualism vs punctuated equilibrium', definition:'Gradualism: slow continuous change. Punctuated equilibrium: long stability interrupted by rapid change.',  hint:'Slow continuous vs bursts of rapid change' },
    { term:'Hardy-Weinberg equilibrium', definition:'In the absence of evolutionary forces, allele frequencies remain constant — p² + 2pq + q² = 1.',  hint:'p² + 2pq + q² = 1 — stable frequencies' },
    { term:'Sympatric speciation',  definition:'Speciation within the same geographic area — through polyploidy, sexual selection or disruptive selection.',  hint:'Same area — speciation without geographic barrier' },
    { term:'Allopatric speciation', definition:'Speciation through geographic separation — isolated populations diverge.',  hint:'Geographic separation → populations diverge' },
    { term:'Horizontal gene transfer', definition:'The transfer of genetic material between organisms other than by reproduction — common in prokaryotes.',  hint:'Gene transfer between organisms — not via reproduction' },
  ],
  'Form and Function — HL Extensions': [
    { term:'Muscle fibre',         definition:'A specialised cell of skeletal muscle — contains myofibrils of actin and myosin.',  hint:'Skeletal muscle cell — actin and myosin' },
    { term:'Sarcomere',            definition:'The basic contractile unit of skeletal muscle — from Z-line to Z-line.',  hint:'Z-line to Z-line — contractile unit' },
    { term:'Sliding filament theory', definition:'Muscle contraction occurs when actin filaments slide over myosin filaments, shortening the sarcomere.',  hint:'Actin slides over myosin — sarcomere shortens' },
    { term:'Neuromuscular junction', definition:'The synapse between a motor neuron and a skeletal muscle fibre.',  hint:'Motor neuron meets muscle fibre' },
    { term:'Action potential',     definition:'A rapid depolarisation and repolarisation of a neuron\'s membrane — all-or-nothing signal.',  hint:'All-or-nothing electrical signal — neuron' },
    { term:'Resting potential',    definition:'The electrical potential across a neuron\'s membrane at rest — approximately −70 mV.',  hint:'−70 mV at rest — neuron membrane' },
    { term:'Depolarisation',       definition:'The reduction of a neuron\'s membrane potential — Na⁺ ions rush in.',  hint:'Na⁺ rushes in — membrane potential rises' },
    { term:'Repolarisation',       definition:'Restoration of the resting potential — K⁺ ions leave the cell.',  hint:'K⁺ leaves — membrane potential restored' },
    { term:'Myelination',          definition:'The insulation of axons by Schwann cells — speeds up impulse transmission by saltatory conduction.',  hint:'Schwann cell insulation — faster impulse' },
    { term:'Osmoregulation',       definition:'The regulation of water and solute balance — in vertebrates mainly by the kidneys.',  hint:'Water balance regulation — kidneys' },
    { term:'Glomerular filtration', definition:'The high-pressure filtration of blood in the Bowman\'s capsule of the nephron.',  hint:'High-pressure filtration in Bowman\'s capsule' },
    { term:'Selective reabsorption', definition:'The recovery of useful substances from the filtrate back into the blood — in the proximal tubule.',  hint:'Useful substances recovered — proximal tubule' },
  ],
  'Interaction and Interdependence — HL Extensions': [
    { term:'Light-dependent reactions', definition:'Photosynthesis reactions in the thylakoid membranes — produce ATP, NADPH and O₂ from light energy.',  hint:'Thylakoid reactions — light → ATP and NADPH' },
    { term:'Light-independent reactions', definition:'The Calvin cycle in the stroma — uses ATP and NADPH to fix CO₂ into G3P.',  hint:'Calvin cycle — CO₂ fixed to G3P — stroma' },
    { term:'Photoionisation',      definition:'The splitting of water molecules by light energy — releasing O₂, H⁺ and electrons.',  hint:'Water split by light — releases O₂' },
    { term:'Carbon fixation',      definition:'The incorporation of CO₂ into an organic molecule — by RuBisCO in the Calvin cycle.',  hint:'CO₂ → organic molecule — RuBisCO' },
    { term:'RuBisCO',              definition:'The enzyme catalysing carbon fixation in the Calvin cycle — the most abundant enzyme on Earth.',  hint:'Carbon fixation enzyme — most abundant on Earth' },
    { term:'G3P',                  definition:'Glycerate-3-phosphate — the first stable product of carbon fixation — reduced to G3P (triose phosphate).',  hint:'First stable CO₂ fixation product' },
    { term:'Chemiosmosis',         definition:'The flow of H⁺ ions through ATP synthase down an electrochemical gradient — drives ATP synthesis.',  hint:'H⁺ through ATP synthase → ATP' },
    { term:'Innate immunity',      definition:'Non-specific defence present from birth — physical barriers, phagocytosis, inflammation and fever.',  hint:'Non-specific — present from birth' },
    { term:'Adaptive immunity',    definition:'Specific immunity developed after exposure — involves B and T lymphocytes.',  hint:'Specific — B and T lymphocytes' },
    { term:'MHC',                  definition:'Major Histocompatibility Complex — cell surface proteins presenting antigen fragments to T cells.',  hint:'Cell surface proteins presenting antigens to T cells' },
    { term:'Cytotoxic T cell',     definition:'A T lymphocyte that destroys infected or cancerous cells directly.',  hint:'Kills infected cells directly' },
    { term:'Helper T cell',        definition:'A T lymphocyte that activates B cells and cytotoxic T cells — coordinates immune response.',  hint:'Coordinates immune response' },
  ],
  'Continuity and Change — HL Extensions': [
    { term:'Gene expression',      definition:'The process by which information in a gene is used to produce a functional product (protein or RNA).',  hint:'Gene → functional product' },
    { term:'Epigenetics',          definition:'Heritable changes in gene expression not due to changes in DNA sequence — e.g. methylation, histone modification.',  hint:'Gene expression changes — no DNA sequence change' },
    { term:'DNA methylation',      definition:'Addition of methyl groups to cytosine bases — silences gene expression.',  hint:'Methyl groups on cytosine → gene silenced' },
    { term:'Chromatin remodelling', definition:'Changes to histone proteins altering DNA accessibility — affects which genes are expressed.',  hint:'Histone changes affect gene accessibility' },
    { term:'Post-translational modification', definition:'Chemical changes to a protein after translation — e.g. glycosylation, phosphorylation.',  hint:'Protein modified after translation' },
    { term:'siRNA',                definition:'Small interfering RNA — triggers destruction of complementary mRNA — gene silencing mechanism.',  hint:'Small RNA silences specific genes' },
    { term:'Polyploidy',           definition:'Having more than two complete sets of chromosomes — can result in instant speciation.',  hint:'More than two chromosome sets — instant speciation' },
    { term:'Regeneration',         definition:'The ability of an organism to regrow lost or damaged tissues — involves stem cells and gene expression.',  hint:'Regrowth of lost tissue — stem cells' },
    { term:'Endocrine system',     definition:'The system of glands secreting hormones directly into the blood to regulate body functions.',  hint:'Glands secreting hormones into blood' },
    { term:'Signal transduction',  definition:'The process by which an extracellular signal is converted into an intracellular response.',  hint:'External signal → internal response' },
  ],
};

VOCAB['chemistry']['ib-sl'] = {
  'Structure (Theme 1)': [
    { term:'Atom',                 definition:'The smallest particle of an element retaining its chemical properties.',  hint:'Smallest part of an element' },
    { term:'Relative atomic mass', definition:'The weighted mean mass of an atom compared to 1/12 the mass of ¹²C.',  hint:'Weighted mean vs 1/12 ¹²C' },
    { term:'Isotope',              definition:'Atoms of the same element with different mass numbers — same protons, different neutrons.',  hint:'Same element — different neutron number' },
    { term:'Mole',                 definition:'The amount of substance containing 6.022 × 10²³ entities — Avogadro\'s number.',  hint:'6.022 × 10²³ entities — NA' },
    { term:'Ionic bond',           definition:'Electrostatic attraction between oppositely charged ions formed by electron transfer.',  hint:'Electron transfer → oppositely charged ions attract' },
    { term:'Covalent bond',        definition:'A shared pair of electrons between two non-metal atoms.',  hint:'Shared electron pair' },
    { term:'Polar covalent bond',  definition:'A covalent bond where electrons are unequally shared due to electronegativity difference.',  hint:'Unequal sharing — electronegativity difference' },
    { term:'Electronegativity',    definition:'The ability of an atom in a molecule to attract the shared electron pair.',  hint:'Atom\'s pull on shared electrons' },
    { term:'Intermolecular forces', definition:'Forces between molecules — van der Waals, dipole-dipole and hydrogen bonds.',  hint:'Forces between molecules — not within' },
    { term:'Hydrogen bond',        definition:'An electrostatic attraction between a δ+ hydrogen and a lone pair on N, O or F of an adjacent molecule.',  hint:'H δ+ attracted to lone pair on N, O or F' },
    { term:'VSEPR theory',         definition:'Electron pairs repel each other to maximise distance — determines molecular geometry.',  hint:'Electron pairs repel → molecular shape' },
    { term:'Hybridisation',        definition:'Mixing of atomic orbitals to form new hybrid orbitals — sp, sp², sp³.',  hint:'Orbital mixing — sp, sp², sp³' },
    { term:'Metallic bond',        definition:'Electrostatic attraction between delocalised electrons and positive metal ions.',  hint:'Delocalised electrons + positive ions' },
    { term:'Allotrope',            definition:'One of two or more physical forms of the same element — e.g. diamond, graphite and fullerene.',  hint:'Different forms of same element' },
    { term:'Lattice enthalpy',     definition:'The enthalpy change when one mole of ionic compound forms from its gaseous ions.',  hint:'Energy forming ionic lattice from gaseous ions' },
  ],
  'Reactivity (Theme 2)': [
    { term:'Enthalpy',             definition:'The heat content of a system — enthalpy changes (ΔH) are measured at constant pressure.',  hint:'Heat content — measured at constant pressure' },
    { term:'Exothermic reaction',  definition:'A reaction releasing energy to the surroundings — ΔH is negative.',  hint:'Releases heat — ΔH negative' },
    { term:'Endothermic reaction', definition:'A reaction absorbing energy from the surroundings — ΔH is positive.',  hint:'Absorbs heat — ΔH positive' },
    { term:'Hess\'s law',          definition:'The total enthalpy change is independent of the route taken.',  hint:'Enthalpy independent of route' },
    { term:'Activation energy',    definition:'The minimum energy required for a reaction to proceed.',  hint:'Minimum energy for reaction' },
    { term:'Collision theory',     definition:'Reactions occur when particles collide with sufficient energy and correct orientation.',  hint:'Enough energy + correct orientation' },
    { term:'Rate of reaction',     definition:'The change in concentration of reactant or product per unit time.',  hint:'Change in concentration per unit time' },
    { term:'Catalyst',             definition:'A substance that increases reaction rate by providing an alternative lower activation energy pathway.',  hint:'Lower activation energy pathway — not consumed' },
    { term:'Chemical equilibrium', definition:'A state where forward and reverse reaction rates are equal — concentrations remain constant.',  hint:'Forward = reverse rate — constant concentrations' },
    { term:'Le Chatelier\'s principle', definition:'A system at equilibrium shifts to oppose any imposed change.',  hint:'Equilibrium opposes imposed changes' },
    { term:'Acid',                 definition:'A proton (H⁺) donor — in the Brønsted-Lowry definition.',  hint:'H⁺ donor — Brønsted-Lowry' },
    { term:'Base',                 definition:'A proton (H⁺) acceptor — in the Brønsted-Lowry definition.',  hint:'H⁺ acceptor — Brønsted-Lowry' },
    { term:'pH',                   definition:'A measure of hydrogen ion concentration — pH = −log[H⁺].',  hint:'pH = −log[H⁺]' },
    { term:'Conjugate acid-base pair', definition:'A pair of species differing by one proton — HA and A⁻.',  hint:'Differ by one H⁺ — HA and A⁻' },
    { term:'Oxidation',            definition:'Loss of electrons or increase in oxidation state.',  hint:'Loses electrons — oxidation state rises' },
    { term:'Reduction',            definition:'Gain of electrons or decrease in oxidation state.',  hint:'Gains electrons — oxidation state falls' },
    { term:'Electrolysis',         definition:'Decomposition of an ionic compound using electrical energy.',  hint:'Electricity → decomposition of ionic compound' },
  ],
};

VOCAB['chemistry']['ib-hl'] = {
  'Structure HL Extensions': [
    { term:'Mass spectrometry',    definition:'Analytical technique measuring mass-to-charge ratio of ions — determines molecular mass and structure.',  hint:'Measures m/z ratio — molecular mass and structure' },
    { term:'NMR spectroscopy',     definition:'Nuclear magnetic resonance — used to determine the arrangement of hydrogen or carbon atoms in a molecule.',  hint:'Determines H or C environment in molecule' },
    { term:'IR spectroscopy',      definition:'Infrared spectroscopy — identifies functional groups by their characteristic absorption frequencies.',  hint:'Identifies functional groups — IR absorption' },
    { term:'Crystal field theory', definition:'Explains colour and magnetic properties of transition metal complexes — d orbital splitting by ligands.',  hint:'d orbital splitting by ligands — colour' },
    { term:'Molecular orbital theory', definition:'Describes bonding in terms of molecular orbitals formed by combining atomic orbitals.',  hint:'Atomic orbitals combine → molecular orbitals' },
    { term:'Aromaticity',          definition:'A property of cyclic, planar, fully conjugated molecules with (4n+2) π electrons — Hückel\'s rule.',  hint:'Cyclic planar conjugated — (4n+2) π electrons' },
    { term:'Formal charge',        definition:'The hypothetical charge on an atom in a molecule assuming equal sharing of bonding electrons.',  hint:'Hypothetical charge — equal electron sharing' },
    { term:'Resonance',            definition:'The representation of a molecule as an average of two or more Lewis structures.',  hint:'Average of multiple Lewis structures' },
  ],
  'Reactivity HL Extensions': [
    { term:'Rate equation',        definition:'An experimentally determined expression showing how rate depends on concentrations — rate = k[A]ᵐ[B]ⁿ.',  hint:'rate = k[A]ᵐ[B]ⁿ — experimentally determined' },
    { term:'Order of reaction',    definition:'The power to which a reactant\'s concentration is raised in the rate equation — determined experimentally.',  hint:'Power in rate equation — experimental' },
    { term:'Arrhenius equation',   definition:'k = Ae^(−Ea/RT) — relates rate constant to temperature and activation energy.',  hint:'k = Ae^(−Ea/RT) — rate vs temperature' },
    { term:'Entropy',              definition:'A measure of the disorder or dispersal of energy in a system — symbol S.',  hint:'Disorder or energy dispersal — S' },
    { term:'Gibbs free energy',    definition:'ΔG = ΔH − TΔS — negative ΔG means a reaction is spontaneous.',  hint:'ΔG = ΔH − TΔS — spontaneous if negative' },
    { term:'Equilibrium constant', definition:'Kc or Kp — expresses ratio of product to reactant concentrations (or pressures) at equilibrium.',  hint:'Products ÷ reactants at equilibrium' },
    { term:'Buffer solution',      definition:'Resists pH change when small amounts of acid or base are added — weak acid/base and its conjugate.',  hint:'Resists pH change — weak acid + conjugate base' },
    { term:'SN1 mechanism',        definition:'Nucleophilic substitution where the leaving group leaves first — two steps — tertiary substrates.',  hint:'Leaving group first — two steps — tertiary' },
    { term:'SN2 mechanism',        definition:'Nucleophilic substitution where attack and leaving are simultaneous — one step — primary substrates.',  hint:'Simultaneous — one step — primary' },
    { term:'Electrophilic addition', definition:'Addition of an electrophile across a C=C double bond — follows Markovnikov\'s rule.',  hint:'Electrophile adds across C=C' },
    { term:'Electrophilic substitution', definition:'Substitution of a hydrogen on an aromatic ring by an electrophile — preserves aromaticity.',  hint:'H replaced by electrophile — ring preserved' },
    { term:'Reduction of organic compounds', definition:'Addition of hydrogen or removal of oxygen — NaBH₄ reduces aldehydes/ketones; LiAlH₄ reduces carboxylic acids.',  hint:'Add H / remove O — NaBH₄ and LiAlH₄' },
    { term:'Retrosynthetic analysis', definition:'Planning a synthesis by working backwards from the target molecule to available starting materials.',  hint:'Work backwards from product to start' },
  ],
};

VOCAB['physics']['ib-sl'] = {
  'Space, Time and Motion (Theme A)': [
    { term:'Displacement',         definition:'The change in position of an object — a vector with magnitude and direction.',  hint:'Change in position — vector' },
    { term:'Velocity',             definition:'The rate of change of displacement — a vector.',  hint:'Rate of change of displacement — vector' },
    { term:'Acceleration',         definition:'The rate of change of velocity — a vector.',  hint:'Rate of change of velocity' },
    { term:'SUVAT equations',      definition:'Equations of uniformly accelerated motion — s, u, v, a, t.',  hint:'Uniform acceleration — s, u, v, a, t' },
    { term:'Free fall',            definition:'Motion under gravity alone — all objects accelerate at g regardless of mass (ignoring air resistance).',  hint:'Gravity alone — a = g regardless of mass' },
    { term:'Newton\'s first law',  definition:'A body remains at rest or in uniform motion unless acted on by a net force.',  hint:'No net force → constant motion' },
    { term:'Newton\'s second law', definition:'Net force = mass × acceleration — F = ma.',  hint:'F = ma' },
    { term:'Newton\'s third law',  definition:'Every force has an equal and opposite reaction force — acting on different objects.',  hint:'Equal opposite forces on different objects' },
    { term:'Momentum',             definition:'The product of mass and velocity — p = mv — a vector conserved in closed systems.',  hint:'p = mv — conserved in closed systems' },
    { term:'Impulse',              definition:'The change in momentum — equal to force × time.',  hint:'F × Δt = Δp' },
    { term:'Work',                 definition:'Energy transferred when a force causes displacement — W = Fs cosθ.',  hint:'W = Fs cosθ' },
    { term:'Power',                definition:'Rate of energy transfer — P = W/t.',  hint:'P = W/t — rate of energy transfer' },
    { term:'Gravitational potential energy', definition:'Energy stored due to position in a gravitational field — Ep = mgh.',  hint:'Ep = mgh' },
    { term:'Kinetic energy',       definition:'Energy of motion — Ek = ½mv².',  hint:'Ek = ½mv²' },
    { term:'Conservation of energy', definition:'Total energy in a closed system remains constant.',  hint:'Total energy constant — closed system' },
    { term:'Torque',               definition:'The turning effect of a force about a pivot — τ = Fr sinθ.',  hint:'Turning effect — τ = Fr sinθ' },
  ],
  'The Particulate Nature of Matter (Theme B)': [
    { term:'Thermal energy',       definition:'The internal kinetic energy of particles in a substance.',  hint:'Internal kinetic energy of particles' },
    { term:'Specific heat capacity', definition:'Energy needed to raise 1 kg of substance by 1 K — Q = mcΔT.',  hint:'Q = mcΔT — energy per kg per K' },
    { term:'Specific latent heat', definition:'Energy needed to change state of 1 kg at constant temperature.',  hint:'Energy per kg to change state' },
    { term:'Ideal gas',            definition:'A gas obeying pV = nRT exactly — molecules with no volume or intermolecular forces.',  hint:'pV = nRT — ideal model' },
    { term:'Kinetic molecular theory', definition:'Gas pressure arises from collisions of particles with container walls.',  hint:'Pressure from particle collisions with walls' },
    { term:'Avogadro\'s constant', definition:'6.022 × 10²³ mol⁻¹ — the number of particles in one mole.',  hint:'6.022 × 10²³ per mole' },
    { term:'Internal energy',      definition:'The total kinetic and potential energy of all particles in a substance.',  hint:'Total KE + PE of all particles' },
    { term:'First law of thermodynamics', definition:'The change in internal energy equals heat added minus work done by the system — ΔU = Q − W.',  hint:'ΔU = Q − W' },
  ],
  'Wave Behaviour (Theme C)': [
    { term:'Transverse wave',      definition:'A wave where oscillations are perpendicular to the direction of propagation.',  hint:'Oscillations perpendicular to travel' },
    { term:'Longitudinal wave',    definition:'A wave where oscillations are parallel to the direction of propagation.',  hint:'Oscillations parallel to travel' },
    { term:'Amplitude',            definition:'The maximum displacement from equilibrium.',  hint:'Maximum displacement from equilibrium' },
    { term:'Wavelength',           definition:'The distance between two successive points in phase.',  hint:'Distance between equivalent points' },
    { term:'Frequency',            definition:'The number of complete oscillations per second — measured in Hz.',  hint:'Oscillations per second — Hz' },
    { term:'Wave speed',           definition:'v = fλ — the product of frequency and wavelength.',  hint:'v = fλ' },
    { term:'Reflection',           definition:'A wave bouncing back at a boundary — angle of incidence equals angle of reflection.',  hint:'Bounces back — i = r' },
    { term:'Refraction',           definition:'Change in wave speed and direction at a boundary — described by Snell\'s law.',  hint:'Speed and direction change at boundary — Snell\'s law' },
    { term:'Snell\'s law',         definition:'n₁sinθ₁ = n₂sinθ₂ — relates angles and refractive indices at a boundary.',  hint:'n₁sinθ₁ = n₂sinθ₂' },
    { term:'Diffraction',          definition:'The spreading of waves as they pass through an opening or around an obstacle.',  hint:'Waves spread through gaps' },
    { term:'Superposition',        definition:'When waves overlap, the resultant displacement is the algebraic sum of individual displacements.',  hint:'Displacements add algebraically' },
    { term:'Standing wave',        definition:'Formed by two waves of the same frequency travelling in opposite directions.',  hint:'Two opposite waves — nodes and antinodes' },
    { term:'Doppler effect',       definition:'The apparent change in frequency of a wave due to relative motion of source and observer.',  hint:'Apparent frequency change — relative motion' },
    { term:'Electromagnetic spectrum', definition:'The range of all EM radiation from radio waves to gamma rays — all travel at c in a vacuum.',  hint:'Radio to gamma — all at c in vacuum' },
  ],
  'Fields (Theme D)': [
    { term:'Gravitational field',  definition:'A region where a mass experiences a gravitational force — field strength g = GM/r².',  hint:'Region of gravitational force' },
    { term:'Electric field',       definition:'A region where a charge experiences an electric force — E = F/q.',  hint:'Region of electric force — E = F/q' },
    { term:'Coulomb\'s law',       definition:'The electrostatic force between two point charges — F = kq₁q₂/r².',  hint:'F = kq₁q₂/r² — inverse square' },
    { term:'Magnetic field',       definition:'A region where a moving charge or current-carrying conductor experiences a force.',  hint:'Force on moving charge or current' },
    { term:'Faraday\'s law',       definition:'The induced EMF is proportional to the rate of change of magnetic flux linkage.',  hint:'EMF ∝ rate of flux change' },
    { term:'Lenz\'s law',          definition:'The induced current direction opposes the change in flux causing it.',  hint:'Induced current opposes flux change' },
  ],
  'Nuclear and Quantum Physics (Theme E)': [
    { term:'Radioactive decay',    definition:'Spontaneous emission of particles or energy from an unstable nucleus.',  hint:'Unstable nucleus emits radiation' },
    { term:'Alpha decay',          definition:'Emission of a helium-4 nucleus — reduces atomic number by 2, mass number by 4.',  hint:'Helium nucleus emitted — Z−2, A−4' },
    { term:'Beta-minus decay',     definition:'A neutron converts to a proton — emitting an electron and antineutrino.',  hint:'Neutron → proton + electron + antineutrino' },
    { term:'Gamma radiation',      definition:'High-energy EM radiation from a nucleus — no change in atomic or mass number.',  hint:'EM radiation — no change in Z or A' },
    { term:'Half-life',            definition:'The time for half the radioactive nuclei in a sample to decay.',  hint:'Time for half to decay' },
    { term:'Mass defect',          definition:'The difference between the mass of separate nucleons and the bound nucleus — converted to binding energy.',  hint:'Mass converted to binding energy' },
    { term:'Binding energy',       definition:'The energy needed to completely separate all nucleons in a nucleus.',  hint:'Energy to separate all nucleons' },
    { term:'Photoelectric effect', definition:'Emission of electrons from a metal when incident photon energy exceeds the work function.',  hint:'Electrons emitted — photon > work function' },
    { term:'Work function',        definition:'The minimum energy required to liberate an electron from a metal surface.',  hint:'Minimum energy to free electron' },
    { term:'de Broglie wavelength', definition:'λ = h/p — all matter has an associated wavelength.',  hint:'λ = h/p — matter as wave' },
    { term:'Heisenberg uncertainty principle', definition:'It is impossible to know both the position and momentum of a particle simultaneously — ΔxΔp ≥ h/4π.',  hint:'Cannot know both position and momentum — ΔxΔp ≥ h/4π' },
    { term:'Photon',               definition:'A quantum of electromagnetic radiation — E = hf.',  hint:'Quantum of EM radiation — E = hf' },
    { term:'Energy level',         definition:'A discrete allowed energy state for an electron in an atom.',  hint:'Discrete allowed energy — atom' },
  ],
};

VOCAB['physics']['ib-hl'] = {
  'HL Mechanics': [
    { term:'Angular momentum',     definition:'L = Iω — the rotational equivalent of linear momentum — conserved when net torque is zero.',  hint:'L = Iω — rotational momentum' },
    { term:'Moment of inertia',    definition:'A measure of resistance to rotational acceleration — depends on mass distribution about the axis.',  hint:'Resistance to rotation — mass distribution' },
    { term:'Rotational kinetic energy', definition:'½Iω² — kinetic energy of a rotating body.',  hint:'½Iω² — energy of rotation' },
    { term:'Simple harmonic motion', definition:'Oscillation where acceleration is proportional to and directed opposite to displacement — a = −ω²x.',  hint:'a = −ω²x — restoring acceleration' },
    { term:'Resonance',            definition:'When driving frequency equals natural frequency — maximum amplitude oscillations occur.',  hint:'Driving = natural frequency → max amplitude' },
    { term:'Damping',              definition:'The reduction of oscillation amplitude due to energy dissipation.',  hint:'Amplitude decreases — energy lost' },
  ],
  'HL Thermodynamics': [
    { term:'Second law of thermodynamics', definition:'Entropy of an isolated system increases or remains constant — heat flows from hot to cold spontaneously.',  hint:'Entropy increases — heat hot → cold' },
    { term:'Entropy',              definition:'A measure of disorder or energy dispersal in a system — S.',  hint:'Disorder or energy dispersal — S' },
    { term:'Carnot efficiency',    definition:'The theoretical maximum efficiency of a heat engine — η = 1 − Tc/Th.',  hint:'η = 1 − Tc/Th — maximum efficiency' },
    { term:'Heat pump',            definition:'A device that transfers heat from cold to hot reservoirs using work input.',  hint:'Transfers heat cold → hot using work' },
    { term:'Adiabatic process',    definition:'A process with no heat exchange with surroundings — pV^γ = constant.',  hint:'No heat exchange — pV^γ = constant' },
    { term:'Isothermal process',   definition:'A process at constant temperature — pV = constant (ideal gas).',  hint:'Constant temperature — pV = constant' },
  ],
  'HL Waves and Fields': [
    { term:'Malus\'s law',         definition:'The intensity of polarised light passing through an analyser — I = I₀cos²θ.',  hint:'I = I₀cos²θ — polarised light' },
    { term:'Thin film interference', definition:'Interference between light reflected from the top and bottom surfaces of a thin film.',  hint:'Reflections from top and bottom of thin film' },
    { term:'Gravitational potential', definition:'The work done per unit mass moving from infinity to a point in a field — negative for attractive fields.',  hint:'Work per unit mass from infinity — negative' },
    { term:'Escape speed',         definition:'The minimum speed for an object to escape a gravitational field — v = √(2GM/r).',  hint:'v = √(2GM/r) — minimum escape speed' },
    { term:'Electric potential',   definition:'The work done per unit positive charge moving from infinity to a point — V = kQ/r.',  hint:'V = kQ/r — work per unit charge from infinity' },
    { term:'Capacitance',          definition:'The charge stored per unit voltage — C = Q/V — farads.',  hint:'C = Q/V — charge per volt' },
    { term:'Electromagnetic induction', definition:'The production of an EMF when there is a change in magnetic flux through a conductor.',  hint:'Changing flux → induced EMF' },
  ],
  'HL Nuclear and Particle Physics': [
    { term:'Quark',                definition:'A fundamental constituent of hadrons — types include up, down, strange, charm, top and bottom.',  hint:'Fundamental — inside hadrons — six types' },
    { term:'Gluon',                definition:'The exchange particle of the strong nuclear force — binds quarks together.',  hint:'Exchange particle — strong force — binds quarks' },
    { term:'Antimatter',           definition:'Particles with the same mass but opposite properties to their matter counterparts.',  hint:'Same mass — opposite properties to matter' },
    { term:'Particle accelerator', definition:'A machine using electric and magnetic fields to accelerate charged particles to high speeds for collision.',  hint:'Accelerates particles for high-energy collisions' },
    { term:'Nuclear fission',      definition:'The splitting of a heavy nucleus into lighter nuclei — releases large amounts of energy.',  hint:'Heavy nucleus splits — large energy release' },
    { term:'Nuclear fusion',       definition:'The joining of two light nuclei into a heavier one — releases even more energy per nucleon.',  hint:'Light nuclei join — large energy — stars' },
    { term:'Radioactive dating',   definition:'Using the known half-life of a radioactive isotope to determine the age of a sample.',  hint:'Half-life used to determine age' },
    { term:'Pair production',      definition:'A photon converts into a particle-antiparticle pair — requires E ≥ 2mc².',  hint:'Photon → particle + antiparticle' },
    { term:'Annihilation',         definition:'A particle and antiparticle meet and convert entirely into photons.',  hint:'Matter + antimatter → photons' },
  ],
};

VOCAB['maths']['ib-sl'] = {
  'Analysis and Approaches SL': [
    { term:'Arithmetic sequence',  definition:'A sequence with a constant difference d between terms — general term uₙ = u₁ + (n−1)d.',  hint:'Constant difference — uₙ = u₁ + (n−1)d' },
    { term:'Geometric sequence',   definition:'A sequence with a constant ratio r between terms — general term uₙ = u₁ × rⁿ⁻¹.',  hint:'Constant ratio — uₙ = u₁rⁿ⁻¹' },
    { term:'Sigma notation',       definition:'Σ notation for the sum of a series — Σuₙ from n=a to b.',  hint:'Σ — sum of a series' },
    { term:'Derivative',           definition:'The instantaneous rate of change of a function — dy/dx or f\'(x).',  hint:'Instantaneous rate of change — dy/dx' },
    { term:'Chain rule',           definition:'d/dx[f(g(x))] = f\'(g(x)) × g\'(x) — differentiating composite functions.',  hint:'Composite function differentiation' },
    { term:'Integration',          definition:'The reverse of differentiation — ∫f(x)dx — finds the area under a curve.',  hint:'Reverse of differentiation — area under curve' },
    { term:'Definite integral',    definition:'∫ᵃᵇ f(x)dx — the area between the curve and the x-axis from a to b.',  hint:'Area under curve between limits' },
    { term:'Exponential function', definition:'f(x) = eˣ — self-derivative — used in growth and decay models.',  hint:'Self-derivative — growth and decay' },
    { term:'Logarithm',            definition:'The inverse of an exponential — logₐx = y means aʸ = x.',  hint:'Inverse of exponential — logₐx = y ↔ aʸ = x' },
    { term:'Binomial theorem',     definition:'Expanding (a + b)ⁿ using binomial coefficients — nCr.',  hint:'Expanding (a + b)ⁿ — uses nCr' },
    { term:'Discriminant',         definition:'b² − 4ac — determines the nature of roots of a quadratic.',  hint:'b² − 4ac — nature of quadratic roots' },
    { term:'Radian',               definition:'A unit of angle — one radian is the angle subtended by an arc equal to the radius — 2π rad = 360°.',  hint:'Arc = radius angle — 2π = 360°' },
    { term:'Normal distribution',  definition:'A symmetric bell-shaped distribution — described by mean μ and standard deviation σ.',  hint:'Bell-shaped — μ and σ' },
    { term:'Binomial distribution', definition:'Models the number of successes in n independent trials each with probability p.',  hint:'n trials probability p' },
  ],
  'Applications and Interpretation SL': [
    { term:'Mathematical model',   definition:'A mathematical representation of a real-world situation — used to make predictions.',  hint:'Mathematical representation of reality' },
    { term:'Linear regression',    definition:'Finding the best-fit straight line for a set of data — y = a + bx.',  hint:'Best-fit line y = a + bx' },
    { term:'Pearson\'s r',         definition:'The correlation coefficient measuring the strength of linear association — between −1 and +1.',  hint:'Linear correlation strength — −1 to +1' },
    { term:'Chi-squared test',     definition:'A statistical test comparing observed and expected frequencies — tests for independence.',  hint:'Observed vs expected — tests independence' },
    { term:'Voronoi diagram',      definition:'A partition of a plane into regions based on distance to a set of points.',  hint:'Plane divided by nearest point regions' },
    { term:'Minimum spanning tree', definition:'A subgraph connecting all vertices with minimum total edge weight — no cycles.',  hint:'Connects all vertices — minimum total weight' },
    { term:'Amortisation',         definition:'The gradual repayment of a loan through scheduled payments — combining principal and interest.',  hint:'Loan repaid gradually — principal + interest' },
    { term:'Annuity',              definition:'A fixed periodic payment made over time — can be present or future value calculated.',  hint:'Fixed periodic payment — PV or FV calculated' },
  ],
};

VOCAB['maths']['ib-hl'] = {
  'Analysis and Approaches HL': [
    { term:'Mathematical induction', definition:'Proof technique — show true for n=1, assume true for n=k, prove for n=k+1.',  hint:'Base case + inductive step' },
    { term:'Complex number',       definition:'z = a + bi where i = √(−1) — has real part a and imaginary part b.',  hint:'a + bi — i = √(−1)' },
    { term:'Argand diagram',       definition:'A 2D coordinate system representing complex numbers — real axis horizontal.',  hint:'Graph of complex numbers' },
    { term:'Polar form',           definition:'z = r(cosθ + i sinθ) = re^(iθ) — represents complex number by modulus and argument.',  hint:'z = re^(iθ) — modulus and argument' },
    { term:'De Moivre\'s theorem', definition:'(cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ) — raises complex number to power n.',  hint:'Raises complex to power n' },
    { term:'Implicit differentiation', definition:'Differentiating equations not in explicit y = f(x) form.',  hint:'Differentiate when y not isolated' },
    { term:'L\'Hôpital\'s rule',   definition:'lim(f/g) = lim(f\'/g\') when limit gives 0/0 or ∞/∞.',  hint:'0/0 or ∞/∞ → differentiate numerator and denominator' },
    { term:'Maclaurin series',     definition:'f(x) = f(0) + f\'(0)x + f\'\'(0)x²/2! + ... — power series expansion about x = 0.',  hint:'Power series about x = 0' },
    { term:'Differential equation', definition:'An equation relating a function and its derivatives — solved to find the function.',  hint:'Equation with derivatives — find the function' },
    { term:'Euler\'s method',      definition:'A numerical method approximating the solution to a differential equation step by step.',  hint:'Step-by-step numerical ODE approximation' },
    { term:'Vector product',       definition:'a × b — a vector perpendicular to both a and b — magnitude |a||b|sinθ.',  hint:'Perpendicular to both — |a||b|sinθ' },
    { term:'Eigenvalue',           definition:'A scalar λ such that Av = λv for a matrix A and non-zero vector v.',  hint:'Av = λv — scalar for matrix transformation' },
  ],
  'Applications and Interpretation HL': [
    { term:'Transition matrix',    definition:'A matrix representing probabilities of moving between states — used in Markov chains.',  hint:'Probabilities between states — Markov chains' },
    { term:'Markov chain',         definition:'A sequence of states where the probability of each state depends only on the previous state.',  hint:'Each state depends only on previous' },
    { term:'Game theory',          definition:'Mathematical modelling of strategic decision-making between rational agents.',  hint:'Strategic decisions between rational agents' },
    { term:'Zero-sum game',        definition:'A game where one player\'s gain is exactly another\'s loss.',  hint:'One gains exactly what another loses' },
    { term:'Poisson distribution', definition:'Models the number of events in a fixed interval when events are independent and rare — P(X=r) = e⁻λλʳ/r!.',  hint:'Rare events in fixed interval — e⁻λλʳ/r!' },
    { term:'Type I and II errors', definition:'Type I: rejecting true null hypothesis. Type II: failing to reject false null hypothesis.',  hint:'Type I: false positive. Type II: false negative' },
    { term:'Spearman\'s rank',     definition:'A non-parametric measure of rank correlation — does not assume normal distribution.',  hint:'Rank correlation — non-parametric' },
  ],
};

VOCAB['economics']['ib-sl'] = {
  'Introduction to Economics': [
    { term:'Scarcity',             definition:'The fundamental economic problem — unlimited human wants exceed limited resources.',  hint:'Unlimited wants — limited resources' },
    { term:'Opportunity cost',     definition:'The value of the next best alternative foregone when making an economic choice.',  hint:'Best alternative given up' },
    { term:'Factors of production', definition:'The four inputs to production — land, labour, capital and enterprise.',  hint:'Land, labour, capital, enterprise' },
    { term:'Production possibility curve', definition:'A curve showing maximum combinations of two goods producible with given resources.',  hint:'Maximum two-good combinations' },
    { term:'Ceteris paribus',      definition:'"All other things being equal" — holds other variables constant when analysing one relationship.',  hint:'All other things equal — analysing one variable' },
    { term:'Marginal analysis',    definition:'Making decisions based on the costs and benefits of producing or consuming one additional unit.',  hint:'Costs and benefits of one more unit' },
  ],
  'Microeconomics': [
    { term:'Law of demand',        definition:'As price rises, quantity demanded falls — and vice versa — assuming ceteris paribus.',  hint:'Price rises → Qd falls — inverse relationship' },
    { term:'Law of supply',        definition:'As price rises, quantity supplied increases — and vice versa — assuming ceteris paribus.',  hint:'Price rises → Qs rises — direct relationship' },
    { term:'Price elasticity of demand', definition:'PED = % change in Qd ÷ % change in P — measures demand responsiveness to price.',  hint:'% ΔQd ÷ % ΔP — demand responsiveness' },
    { term:'Cross-price elasticity', definition:'XED = % ΔQd(A) ÷ % ΔP(B) — positive for substitutes, negative for complements.',  hint:'Substitutes positive, complements negative' },
    { term:'Market failure',       definition:'When the price mechanism fails to allocate resources efficiently or equitably.',  hint:'Price mechanism allocates inefficiently' },
    { term:'Externality',          definition:'A third-party cost (negative) or benefit (positive) from a production or consumption activity.',  hint:'Third-party cost or benefit' },
    { term:'Public good',          definition:'A good that is non-excludable (cannot prevent non-payers accessing) and non-rival (one person\'s use doesn\'t reduce availability).',  hint:'Non-excludable + non-rival' },
    { term:'Merit good',           definition:'A good generating positive externalities — under-provided in free markets — e.g. education.',  hint:'Positive externalities — under-provided' },
    { term:'Demerit good',         definition:'A good generating negative externalities — over-provided in free markets — e.g. cigarettes.',  hint:'Negative externalities — over-provided' },
    { term:'Subsidies',            definition:'Government payments to producers to lower costs and encourage production of a good.',  hint:'Government payment to producers — lower costs' },
    { term:'Price ceiling',        definition:'A maximum price set below equilibrium — causes a shortage.',  hint:'Maximum price below equilibrium — causes shortage' },
    { term:'Price floor',          definition:'A minimum price set above equilibrium — causes a surplus.',  hint:'Minimum price above equilibrium — causes surplus' },
  ],
  'Macroeconomics': [
    { term:'National income',      definition:'The total value of goods and services produced in a country — measured as GDP, GNP or GNI.',  hint:'Total output — GDP, GNP or GNI' },
    { term:'Aggregate demand',     definition:'Total spending on an economy\'s goods and services — C + I + G + (X − M).',  hint:'C + I + G + (X − M)' },
    { term:'Aggregate supply',     definition:'Total output all firms are willing to produce at each price level.',  hint:'Total output at each price level' },
    { term:'Keynesian economics',  definition:'The view that aggregate demand drives economic output — government intervention can stabilise the economy.',  hint:'Demand drives output — government can stabilise' },
    { term:'Monetarism',           definition:'The view that controlling money supply controls inflation — associated with Milton Friedman.',  hint:'Control money supply — controls inflation' },
    { term:'Inflation',            definition:'A sustained rise in the general price level — measured by the consumer price index (CPI).',  hint:'Sustained price rise — measured by CPI' },
    { term:'Unemployment',         definition:'People of working age who are without work but actively seeking employment.',  hint:'Without work — actively seeking' },
    { term:'Economic growth',      definition:'An increase in real GDP over a period of time.',  hint:'Real GDP increases over time' },
    { term:'Multiplier',           definition:'The ratio by which a change in autonomous expenditure changes equilibrium GDP.',  hint:'GDP change ÷ initial expenditure change' },
    { term:'Fiscal policy',        definition:'Government manipulation of spending and taxation to influence aggregate demand.',  hint:'Government spending and taxation' },
    { term:'Monetary policy',      definition:'Central bank management of interest rates and money supply.',  hint:'Central bank — interest rates and money' },
  ],
  'Global Economy': [
    { term:'Comparative advantage', definition:'The ability of a country to produce a good at a lower opportunity cost than another.',  hint:'Lower opportunity cost in production' },
    { term:'Terms of trade',       definition:'The price of exports relative to imports — an improvement means exports buy more imports.',  hint:'Export prices ÷ import prices' },
    { term:'Balance of payments',  definition:'A record of all financial transactions between a country and the rest of the world.',  hint:'All international financial transactions' },
    { term:'Exchange rate',        definition:'The price of one currency expressed in terms of another.',  hint:'Price of one currency in another' },
    { term:'Free trade',           definition:'International trade without barriers — tariffs, quotas or subsidies.',  hint:'Trade without barriers' },
    { term:'Protectionism',        definition:'Government policies restricting imports to protect domestic industries.',  hint:'Restricts imports — protects domestic industry' },
    { term:'Development',          definition:'An increase in the standard of living, wellbeing and economic freedom of a country\'s population.',  hint:'Rising standard of living and wellbeing' },
    { term:'Human Development Index', definition:'A composite index measuring development through life expectancy, education and GNI per capita.',  hint:'Life expectancy + education + income per person' },
  ],
};

VOCAB['economics']['ib-hl'] = {
  'HL Microeconomics': [
    { term:'Theory of the firm',   definition:'Explains how firms make output and pricing decisions to maximise profit.',  hint:'How firms maximise profit' },
    { term:'Perfect competition',  definition:'Many small price-taking firms, homogeneous product, free entry/exit — only normal profit in long run.',  hint:'Many firms, identical product, free entry' },
    { term:'Monopoly',             definition:'A single supplier with significant barriers to entry — can maximise profit where MR = MC.',  hint:'Single supplier — MR = MC — abnormal profit' },
    { term:'Oligopoly',            definition:'A few large firms — interdependent, high barriers to entry — price rigidity common.',  hint:'Few large firms — interdependent' },
    { term:'Monopolistic competition', definition:'Many firms, differentiated products, low barriers — normal profit in long run.',  hint:'Many firms, differentiated products' },
    { term:'Marginal revenue',     definition:'The change in total revenue from selling one more unit — MR = ΔTR/ΔQ.',  hint:'Extra revenue from one more unit' },
    { term:'Marginal cost',        definition:'The change in total cost from producing one more unit — MC = ΔTC/ΔQ.',  hint:'Extra cost of one more unit' },
    { term:'Profit maximisation',  definition:'Producing the output where MR = MC — maximum profit occurs at this point.',  hint:'MR = MC — maximum profit' },
    { term:'Allocative efficiency', definition:'P = MC — resources allocated according to consumer preferences.',  hint:'P = MC — consumer preferences met' },
    { term:'Productive efficiency', definition:'Production at the minimum point of the average cost curve.',  hint:'Minimum average cost — no waste' },
    { term:'X-inefficiency',       definition:'Productive inefficiency in firms without competitive pressure — managers pursue own goals.',  hint:'Inefficiency without competition pressure' },
    { term:'Price discrimination', definition:'Charging different prices to different buyers for the same product.',  hint:'Different prices to different buyers' },
    { term:'Game theory',          definition:'The study of strategic decision-making — e.g. prisoner\'s dilemma, Nash equilibrium.',  hint:'Strategic decisions — Nash equilibrium' },
    { term:'Nash equilibrium',     definition:'A state where no player can improve their outcome by unilaterally changing strategy.',  hint:'No player benefits from changing strategy alone' },
  ],
  'HL Macroeconomics': [
    { term:'AD/AS model',          definition:'The aggregate demand and aggregate supply model — shows how output and price level are determined.',  hint:'Shows output and price level determination' },
    { term:'LRAS',                 definition:'Long-run aggregate supply — vertical at the potential output level — not affected by price level.',  hint:'Vertical — potential output — not price affected' },
    { term:'Output gap',           definition:'The difference between actual GDP and potential GDP — positive (boom) or negative (recession).',  hint:'Actual minus potential GDP' },
    { term:'Deflationary gap',     definition:'When actual output is below potential output — demand deficient.',  hint:'Actual output < potential — demand deficient' },
    { term:'Inflationary gap',     definition:'When actual output exceeds potential output — economy overheating.',  hint:'Actual output > potential — overheating' },
    { term:'Crowding out',         definition:'Government borrowing raising interest rates — reducing private sector investment.',  hint:'Government borrowing displaces private investment' },
    { term:'Quantitative easing',  definition:'Central bank purchases of financial assets to inject money into the economy.',  hint:'Central bank buys assets — injects money' },
    { term:'Supply-side policies', definition:'Policies increasing the productive capacity — education, deregulation, privatisation.',  hint:'Increase productive capacity' },
    { term:'Lorenz curve',         definition:'A graph showing the cumulative distribution of income — further from diagonal = more inequality.',  hint:'Income distribution — gap from diagonal' },
    { term:'Gini coefficient',     definition:'A measure of income inequality — 0 is perfect equality, 1 is perfect inequality.',  hint:'0 = equal, 1 = unequal' },
    { term:'Current account deficit', definition:'When the value of imports of goods, services and income exceeds exports.',  hint:'Imports exceed exports — current account' },
    { term:'Marshall-Lerner condition', definition:'A depreciation improves the current account if PED(exports) + PED(imports) > 1.',  hint:'Depreciation works if sum of PEDs > 1' },
  ],
};

VOCAB['history']['ib-sl'] = {
  'Approaches to History': [
    { term:'Historical thinking',  definition:'A set of disciplinary practices — causation, consequence, change, continuity, significance and perspective.',  hint:'Disciplinary practices for analysing the past' },
    { term:'Perspective',          definition:'The viewpoint or standpoint from which a historical account is written.',  hint:'Viewpoint from which history is written' },
    { term:'Primary source',       definition:'Evidence created at the time of the events being studied.',  hint:'Created at the time — original evidence' },
    { term:'Secondary source',     definition:'Evidence created after the events — interpreting or analysing the primary evidence.',  hint:'Created after — analyses primary evidence' },
    { term:'Bias',                 definition:'A tendency to favour a particular view — can distort historical accounts.',  hint:'Tendency to favour one view' },
    { term:'Reliability',          definition:'How trustworthy a source is — considering provenance, purpose and context.',  hint:'How trustworthy — provenance, purpose, context' },
    { term:'Scope',                definition:'The range of time, place and people covered in a historical study.',  hint:'Range of time, place and people' },
    { term:'Synthesis',            definition:'Drawing together diverse evidence to form a coherent historical argument.',  hint:'Drawing together evidence — coherent argument' },
  ],
  'Prescribed Subjects and World History Topics': [
    { term:'Totalitarianism',      definition:'A system of government asserting total control over all aspects of public and private life.',  hint:'Total state control — all aspects of life' },
    { term:'Authoritarian state',  definition:'A state with concentrated power and limited political freedom but less comprehensive control than totalitarianism.',  hint:'Concentrated power — limited freedom' },
    { term:'Cold War',             definition:'The period of ideological and political tension between the USA and USSR 1947–1991.',  hint:'USA vs USSR — ideological tension 1947–1991' },
    { term:'Decolonisation',       definition:'The process by which colonies gained independence from European powers — mainly 1945–1975.',  hint:'Colonies gain independence — post-1945' },
    { term:'Propaganda',           definition:'Biased information used by states to shape public opinion and behaviour.',  hint:'State-controlled biased information' },
    { term:'Nationalism',          definition:'A political ideology asserting that the nation — people with shared identity — should be self-governing.',  hint:'Shared identity → self-governance' },
    { term:'Appeasement',          definition:'The policy of making concessions to an aggressive power to avoid conflict.',  hint:'Concessions to aggressor — avoid conflict' },
    { term:'Genocide',             definition:'The deliberate killing of a large group of people, especially those of a particular ethnicity.',  hint:'Deliberate killing of ethnic group' },
    { term:'Détente',              definition:'A relaxation of Cold War tensions — especially the period of dialogue in the 1970s.',  hint:'Cold War tensions relaxed — 1970s' },
    { term:'Proxy war',            definition:'A conflict in which major powers support opposing sides without directly fighting each other.',  hint:'Major powers support sides — don\'t fight directly' },
  ],
};

VOCAB['history']['ib-hl'] = {
  'HL Extension — Depth Studies': [
    { term:'Periodisation',        definition:'The division of history into distinct eras or periods — a historiographical construction.',  hint:'Dividing history into periods — historians\' choice' },
    { term:'Historiography',       definition:'The study of how history has been written and interpreted by historians over time.',  hint:'How history has been written and interpreted' },
    { term:'Revisionism',          definition:'Challenging established or orthodox historical interpretations with new evidence or perspectives.',  hint:'Challenging accepted interpretations' },
    { term:'Determinism',          definition:'The view that historical events are inevitable — caused by structural forces rather than individual action.',  hint:'Events inevitable — structural forces' },
    { term:'Agency',               definition:'The capacity of individuals to influence historical events.',  hint:'Individuals influencing events' },
    { term:'Counter-factual',      definition:'Speculating about alternative outcomes had key historical events occurred differently.',  hint:'What if history had been different?' },
    { term:'Anachronism',          definition:'Applying values or standards from one era to another — distorting historical understanding.',  hint:'Applying later values to earlier period' },
    { term:'Oral history',         definition:'Historical information gathered from the testimonies of living participants or witnesses.',  hint:'Living witnesses — testimony as history' },
  ],
};

VOCAB['english']['ib-sl'] = {
  'Language and Literature': [
    { term:'Discourse',            definition:'Any coherent piece of spoken or written communication analysed for how it produces meaning.',  hint:'Coherent communication — how it produces meaning' },
    { term:'Textual analysis',     definition:'Close examination of a text\'s language, structure and purpose.',  hint:'Close examination of language, structure, purpose' },
    { term:'Intertextuality',      definition:'The way texts reference, echo or respond to other texts.',  hint:'Texts in dialogue with each other' },
    { term:'Narrative perspective', definition:'The viewpoint from which a story is narrated — first, second or third person.',  hint:'Viewpoint of the narrator' },
    { term:'Authorial voice',      definition:'The distinctive personality and style of a writer that comes through across their work.',  hint:'Writer\'s distinctive personality and style' },
    { term:'Context',              definition:'The historical, cultural, social or biographical circumstances surrounding the production of a text.',  hint:'Circumstances surrounding a text' },
    { term:'Register',             definition:'The level of formality and style appropriate to an audience and purpose.',  hint:'Formality level — audience and purpose' },
    { term:'Connotation',          definition:'The implied or associated meaning of a word beyond its literal definition.',  hint:'Implied meaning beyond the literal' },
    { term:'Denotation',           definition:'The literal, dictionary meaning of a word.',  hint:'Literal dictionary meaning' },
    { term:'Tone',                 definition:'The attitude of the writer or narrator towards the subject or audience — detectable through language choices.',  hint:'Writer\'s attitude — through language choices' },
    { term:'Irony',                definition:'A contrast between the literal meaning and the intended meaning — or between appearance and reality.',  hint:'Contrast between literal and intended meaning' },
    { term:'Motif',                definition:'A recurring image, symbol, idea or theme reinforcing a text\'s central concerns.',  hint:'Recurring image or idea reinforcing theme' },
    { term:'Satire',               definition:'A literary mode using humour, irony or exaggeration to criticise and expose human vices.',  hint:'Humour/irony to criticise human vices' },
  ],
};

VOCAB['english']['ib-hl'] = {
  'HL Literary Analysis': [
    { term:'Polyphony',            definition:'Multiple narrative voices coexisting in a text without one dominating.',  hint:'Multiple voices — none dominant' },
    { term:'Free indirect discourse', definition:'A technique blending the narrator\'s voice with a character\'s thoughts — no speech markers.',  hint:'Narrator blends with character thoughts' },
    { term:'Unreliable narrator',  definition:'A narrator whose account is compromised — by limited knowledge, bias or self-deception.',  hint:'Narrator whose account can\'t be fully trusted' },
    { term:'Defamiliarisation',    definition:'Making the familiar seem strange to encourage fresh perception — Shklovsky\'s concept.',  hint:'Makes familiar strange — fresh perception — Shklovsky' },
    { term:'Ambiguity',            definition:'The quality of having more than one possible interpretation — often intentionally created.',  hint:'More than one valid interpretation' },
    { term:'Archetype',            definition:'A universally recognised character type, symbol or situation — e.g. the hero, the trickster.',  hint:'Universal character type or symbol' },
    { term:'Canon',                definition:'The set of literary works considered authoritative and central to a literary tradition.',  hint:'Authoritative central works of a tradition' },
    { term:'Postcolonial reading', definition:'Analysing texts through the lens of colonial power, representation of the colonised, and cultural identity.',  hint:'Colonial power and identity — critical lens' },
    { term:'Feminist reading',     definition:'Examining gender, patriarchal power structures and women\'s representation in texts.',  hint:'Gender and patriarchy in texts' },
    { term:'Marxist reading',      definition:'Examining class, economic power and ideological structures in texts.',  hint:'Class and economic power in texts' },
    { term:'Trauma literature',    definition:'Fiction dealing with traumatic events — characterised by fragmented narrative, repetition and silence.',  hint:'Fragmented — repetition — silence — trauma' },
  ],
};

VOCAB['psychology']['ib-sl'] = {
  'Biological Approach': [
    { term:'Neurotransmitter',     definition:'A chemical released at a synapse that transmits signals between neurons.',  hint:'Chemical signal between neurons' },
    { term:'Serotonin',            definition:'A neurotransmitter associated with mood regulation — low levels linked to depression.',  hint:'Mood regulation — low = depression' },
    { term:'Dopamine',             definition:'A neurotransmitter associated with reward and motivation.',  hint:'Reward and motivation' },
    { term:'HPA axis',             definition:'Hypothalamic-pituitary-adrenal axis — the hormonal stress response system.',  hint:'Hormonal stress response system' },
    { term:'Localisation',         definition:'Different brain regions are specialised for different functions.',  hint:'Brain regions specialised for functions' },
    { term:'Neuroplasticity',      definition:'The brain\'s ability to reorganise and form new neural connections in response to experience.',  hint:'Brain changes with experience' },
    { term:'Epigenetics',          definition:'Changes in gene expression not caused by changes in DNA sequence — influenced by environment.',  hint:'Gene expression changed by environment' },
    { term:'Twin studies',         definition:'Studies comparing identical and fraternal twins to determine genetic vs environmental contributions.',  hint:'Identical vs fraternal twins — nature vs nurture' },
  ],
  'Cognitive Approach': [
    { term:'Schema',               definition:'A mental framework organising knowledge — influences how we interpret new information.',  hint:'Mental framework organising knowledge' },
    { term:'Cognitive bias',       definition:'A systematic pattern of deviation from rational thinking.',  hint:'Systematic irrational thinking pattern' },
    { term:'Reconstructive memory', definition:'The active process of rebuilding memories — influenced by schemas and expectations.',  hint:'Memory rebuilt using schemas' },
    { term:'Flashbulb memory',     definition:'A vivid, detailed memory of a highly significant emotional event.',  hint:'Vivid memory of emotional event' },
    { term:'Memory encoding',      definition:'The process of converting information into a form stored in memory.',  hint:'Converting info for storage' },
    { term:'Thinking and decision-making', definition:'The cognitive processes of reasoning and choosing between alternatives.',  hint:'Reasoning and choosing between alternatives' },
    { term:'Cognitive interview',  definition:'A police interviewing technique improving eyewitness recall through cognitive principles.',  hint:'Police technique — improves eyewitness recall' },
  ],
  'Sociocultural Approach': [
    { term:'Social identity theory', definition:'Tajfel and Turner — people derive self-esteem from group membership — ingroup and outgroup.',  hint:'Self-esteem from group — Tajfel and Turner' },
    { term:'Social cognitive theory', definition:'Bandura — behaviour is learned through observing others and is influenced by self-efficacy.',  hint:'Observational learning — self-efficacy — Bandura' },
    { term:'Cultural dimensions',  definition:'Hofstede\'s framework for comparing national cultures — individualism, power distance etc.',  hint:'Comparing national cultures — Hofstede' },
    { term:'Stereotype',           definition:'A fixed, oversimplified image or belief about a group of people.',  hint:'Fixed oversimplified belief about a group' },
    { term:'Conformity',           definition:'Changing one\'s behaviour or beliefs to match those of a group.',  hint:'Changing to match the group' },
    { term:'Obedience',            definition:'Following orders from an authority figure.',  hint:'Following authority\'s orders' },
    { term:'Bystander effect',     definition:'People are less likely to help in an emergency when others are present — diffusion of responsibility.',  hint:'Less likely to help — others present' },
  ],
  'Research Methods': [
    { term:'Hypothesis',           definition:'A testable prediction about the relationship between variables.',  hint:'Testable prediction about variables' },
    { term:'Independent variable', definition:'The variable manipulated by the researcher.',  hint:'What the researcher changes' },
    { term:'Dependent variable',   definition:'The variable measured in a study.',  hint:'What is measured' },
    { term:'Experimental method',  definition:'A research method establishing cause-effect by manipulating variables in controlled conditions.',  hint:'Controlled — establishes cause-effect' },
    { term:'Naturalistic observation', definition:'Observing behaviour in its natural setting without intervention.',  hint:'Natural setting — no intervention' },
    { term:'Triangulation',        definition:'Using multiple methods or data sources to strengthen research validity.',  hint:'Multiple methods — stronger validity' },
    { term:'Ethical considerations', definition:'Principles protecting research participants — informed consent, debrief, right to withdraw.',  hint:'Protecting participants — consent, debrief, withdrawal' },
    { term:'Emic vs etic approach', definition:'Emic studies culture from within; etic studies culture from an outside perspective.',  hint:'Emic = inside; etic = outside perspective' },
  ],
};

VOCAB['psychology']['ib-hl'] = {
  'HL Extensions': [
    { term:'Abnormal psychology',  definition:'The study of psychological disorders — their classification, causes and treatment.',  hint:'Study of psychological disorders' },
    { term:'DSM',                  definition:'Diagnostic and Statistical Manual — the American Psychiatric Association\'s classification of mental disorders.',  hint:'APA classification of mental disorders' },
    { term:'ICD',                  definition:'International Classification of Diseases — WHO\'s global classification including mental disorders.',  hint:'WHO global classification' },
    { term:'Validity of diagnosis', definition:'The extent to which a diagnostic category accurately identifies a distinct disorder.',  hint:'Does diagnosis identify a real disorder?' },
    { term:'Reliability of diagnosis', definition:'The extent to which clinicians consistently apply the same diagnosis.',  hint:'Do clinicians agree on the same diagnosis?' },
    { term:'Culture-bound syndrome', definition:'A pattern of psychiatric symptoms specific to a particular cultural context.',  hint:'Symptoms specific to particular culture' },
    { term:'Biomedical model',     definition:'The view that mental illness has biological causes — treated with medication.',  hint:'Biological causes — medication treatment' },
    { term:'Biopsychosocial model', definition:'Mental illness arises from biological, psychological and social factors — requires holistic treatment.',  hint:'Bio + psychological + social — holistic' },
    { term:'Psychotherapy',        definition:'Psychological treatment of mental disorders through therapeutic conversation.',  hint:'Psychological treatment through conversation' },
    { term:'Cognitive Behavioural Therapy', definition:'A therapy challenging distorted thoughts and maladaptive behaviours.',  hint:'Challenges distorted thoughts and behaviours' },
    { term:'Confirmation bias',    definition:'The tendency to seek out information that confirms existing beliefs.',  hint:'Seeking info that confirms beliefs' },
    { term:'Placebo effect',       definition:'Improvement in a condition due to belief in treatment rather than the treatment itself.',  hint:'Improvement from belief in treatment' },
  ],
};
