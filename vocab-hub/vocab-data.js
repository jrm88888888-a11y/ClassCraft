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
