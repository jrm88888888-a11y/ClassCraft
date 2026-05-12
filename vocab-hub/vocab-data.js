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
