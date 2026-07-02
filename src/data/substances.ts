
export type Severity = 'Safe' | 'Caution' | 'Unsafe' | 'Dangerous' | 'Deadly' | 'Unknown';

export interface Substance {
  id: string;
  name: string;
  category: string;
  brandNames?: string[];
  sideEffects?: string[];
  description?: string;
}

export interface Interaction {
  id: string;
  substances: [string, string];
  severity: Severity;
  description: string;
  source?: string;
}

export const substances: Substance[] = [
  { 
    id: 'alcohol', 
    name: 'Alcohol', 
    category: 'Depressant', 
    brandNames: ['Beer', 'Wine', 'Liquor', 'Spirits'], 
    sideEffects: ['Dehydration', 'Nausea', 'Dizziness', 'Impaired coordination', 'Respiratory depression'] 
  },
  { 
    id: 'caffeine', 
    name: 'Caffeine', 
    category: 'Stimulant', 
    brandNames: ['Coffee', 'Tea', 'Energy Drinks', 'NoDoz'], 
    sideEffects: ['Anxiety', 'Jitters', 'Insomnia', 'Increased heart rate', 'Dehydration'] 
  },
  { 
    id: 'cannabis', 
    name: 'Cannabis', 
    category: 'Psychoactive', 
    brandNames: ['Marijuana', 'Weed', 'THC', 'CBD', 'Hash'], 
    sideEffects: ['Dry mouth', 'Red eyes', 'Paranoia', 'Impaired memory', 'Drowsiness'] 
  },
  { 
    id: 'tobacco', 
    name: 'Tobacco/Nicotine', 
    category: 'Stimulant', 
    brandNames: ['Cigarettes', 'Vapes', 'Zyn', 'Nicorette', 'Juul'], 
    sideEffects: ['Dizziness', 'Nausea', 'Increased blood pressure', 'Addiction', 'Coughing'] 
  },
  { 
    id: 'paracetamol', 
    name: 'Paracetamol (Acetaminophen)', 
    category: 'Painkiller', 
    brandNames: ['Tylenol', 'Panadol', 'Excedrin'], 
    sideEffects: ['Nausea', 'Liver damage (high doses)', 'Stomach pain'] 
  },
  { 
    id: 'ibuprofen', 
    name: 'Ibuprofen', 
    category: 'Painkiller', 
    brandNames: ['Advil', 'Motrin', 'Nurofen'], 
    sideEffects: ['Stomach upset', 'Heartburn', 'Ulcers', 'Kidney strain'] 
  },
  { 
    id: 'aspirin', 
    name: 'Aspirin', 
    category: 'Painkiller', 
    brandNames: ['Bayer', 'Ecotrin', 'Bufferin'], 
    sideEffects: ['Stomach pain', 'Bleeding risk', 'Heartburn'] 
  },
  { 
    id: 'mdma', 
    name: 'MDMA', 
    category: 'Stimulant/Psychedelic', 
    brandNames: ['Ecstasy', 'Molly', 'XTC'], 
    sideEffects: ['Jaw clenching', 'Dehydration', 'Hyperthermia', 'Serotonin depletion', 'Anxiety'] 
  },
  { 
    id: 'lsd', 
    name: 'LSD', 
    category: 'Psychedelic', 
    brandNames: ['Acid', 'Lucy', 'Tabs'], 
    sideEffects: ['Hallucinations', 'Anxiety', 'Confusion', 'Insomnia', 'Flashbacks'] 
  },
  { 
    id: 'mushrooms', 
    name: 'Psilocybin Mushrooms', 
    category: 'Psychedelic', 
    brandNames: ['Shrooms', 'Magic Mushrooms', 'Caps'], 
    sideEffects: ['Nausea', 'Hallucinations', 'Anxiety', 'Confusion', 'Drowsiness'] 
  },
  { 
    id: 'cocaine', 
    name: 'Cocaine', 
    category: 'Stimulant', 
    brandNames: ['Coke', 'Blow', 'Snow', 'Crack'], 
    sideEffects: ['Anxiety', 'Paranoia', 'Increased heart rate', 'Insomnia', 'Nasal damage'] 
  },
  {
    id: 'meth',
    name: 'Methamphetamine',
    category: 'Stimulant',
    brandNames: ['Crystal', 'Ice', 'Meth', 'Desoxyn'],
    sideEffects: ['Insomnia', 'Paranoia', 'Aggression', 'Skin picking', 'Tooth decay']
  },
  { 
    id: 'ketamine', 
    name: 'Ketamine', 
    category: 'Dissociative', 
    brandNames: ['Ketalar', 'K', 'Special K'], 
    sideEffects: ['Dissociation', 'Confusion', 'Nausea', 'Bladder damage (chronic use)', 'Impaired motor function'] 
  },
  { 
    id: 'benzos', 
    name: 'Benzodiazepines', 
    category: 'Depressant', 
    brandNames: ['Xanax', 'Valium', 'Klonopin', 'Ativan'], 
    sideEffects: ['Drowsiness', 'Memory loss', 'Impaired coordination', 'Addiction', 'Respiratory depression'] 
  },
  { 
    id: 'opioids', 
    name: 'Opioids', 
    category: 'Depressant', 
    brandNames: ['Heroin', 'OxyContin', 'Vicodin', 'Fentanyl', 'Morphine', 'Percocet'], 
    sideEffects: ['Euphoria', 'Drowsiness', 'Constipation', 'Respiratory depression', 'Nausea'] 
  },
  {
    id: 'tramadol',
    name: 'Tramadol',
    category: 'Opioid',
    brandNames: ['Ultram', 'ConZip'],
    sideEffects: ['Nausea', 'Dizziness', 'Seizures (high doses)', 'Constipation', 'Drowsiness']
  },
  { 
    id: 'ssri', 
    name: 'SSRIs', 
    category: 'Antidepressant', 
    brandNames: ['Prozac', 'Zoloft', 'Lexapro', 'Celexa', 'Paxil'], 
    sideEffects: ['Nausea', 'Insomnia', 'Sexual dysfunction', 'Dizziness', 'Fatigue'] 
  },
  {
    id: 'maoi',
    name: 'MAOIs',
    category: 'Antidepressant',
    brandNames: ['Nardil', 'Parnate', 'Marplan'],
    sideEffects: ['Dizziness', 'Insomnia', 'Hypertension', 'Weight gain', 'Dry mouth']
  },
  {
    id: 'adderall',
    name: 'Amphetamine',
    category: 'Stimulant',
    brandNames: ['Adderall', 'Vyvanse', 'Speed'],
    sideEffects: ['Insomnia', 'Loss of appetite', 'Anxiety', 'Increased heart rate', 'Jitters']
  },
  {
    id: 'ritalin',
    name: 'Methylphenidate',
    category: 'Stimulant',
    brandNames: ['Ritalin', 'Concerta'],
    sideEffects: ['Insomnia', 'Loss of appetite', 'Anxiety', 'Increased heart rate', 'Headache']
  },
  {
    id: 'dxm',
    name: 'DXM (Dextromethorphan)',
    category: 'Dissociative',
    brandNames: ['Robitussin', 'NyQuil', 'Delsym', 'Coricidin'],
    sideEffects: ['Dissociation', 'Nausea', 'Dizziness', 'Itching', 'Confusion']
  },
  {
    id: 'ghb',
    name: 'GHB/GBL',
    category: 'Depressant',
    brandNames: ['Xyrem', 'G', 'Liquid Ecstasy'],
    sideEffects: ['Drowsiness', 'Euphoria', 'Nausea', 'Unconsciousness', 'Respiratory depression']
  },
  {
    id: 'kratom',
    name: 'Kratom',
    category: 'Opioid-like',
    brandNames: ['Maeng Da', 'Bali', 'Red Vein'],
    sideEffects: ['Nausea', 'Constipation', 'Sedation', 'Stimulation (low dose)', 'Itching']
  },
  {
    id: 'nitrous',
    name: 'Nitrous Oxide',
    category: 'Dissociative',
    brandNames: ['Whippits', 'Laughing Gas', 'Nangs'],
    sideEffects: ['Dizziness', 'Euphoria', 'Numbness', 'Fainting', 'Vitamin B12 depletion']
  },
  {
    id: 'dmt',
    name: 'DMT',
    category: 'Psychedelic',
    brandNames: ['Dimitri', 'Ayahuasca (ingredient)', 'Changa'],
    sideEffects: ['Intense hallucinations', 'Fear', 'Rapid heart rate', 'Loss of motor control']
  },
  {
    id: '2cb',
    name: '2C-B',
    category: 'Psychedelic',
    brandNames: ['Nexus', 'Bees', 'Venus'],
    sideEffects: ['Nausea', 'Visuals', 'Confusion', 'Anxiety', 'Muscle tension']
  },
  {
    id: 'poppers',
    name: 'Poppers (Amyl Nitrite)',
    category: 'Inhalant',
    brandNames: ['Jungle Juice', 'Rush', 'Blue Boy'],
    sideEffects: ['Headache', 'Dizziness', 'Warmth', 'Increased heart rate', 'Low blood pressure']
  },
  {
    id: 'sildenafil',
    name: 'Erectile Dysfunction Meds',
    category: 'Vasodilator',
    brandNames: ['Viagra', 'Cialis', 'Levitra', 'Sildenafil'],
    sideEffects: ['Headache', 'Flushing', 'Indigestion', 'Vision changes', 'Nasal congestion']
  },
  {
    id: 'gabapentin',
    name: 'Gabapentinoids',
    category: 'Depressant',
    brandNames: ['Gabapentin', 'Lyrica', 'Neurontin', 'Pregabalin'],
    sideEffects: ['Drowsiness', 'Dizziness', 'Coordination problems', 'Swelling', 'Weight gain']
  },
  {
    id: 'modafinil',
    name: 'Modafinil',
    category: 'Stimulant',
    brandNames: ['Provigil', 'Nuvigil', 'Modalert'],
    sideEffects: ['Headache', 'Nausea', 'Anxiety', 'Insomnia', 'Dizziness']
  }
];

// Helper to create a consistent key for substance pairs
const getKey = (id1: string, id2: string) => {
  return [id1, id2].sort().join('-');
};

// Interaction database
const interactionData: Record<string, Omit<Interaction, 'id' | 'substances'>> = {
  // ALCOHOL INTERACTIONS
  [getKey('alcohol', 'caffeine')]: {
    severity: 'Caution',
    description: "Caffeine can mask the depressant effects of alcohol, leading to increased risk of overconsumption. 'Wide Awake Drunk'.",
  },
  [getKey('alcohol', 'paracetamol')]: {
    severity: 'Unsafe',
    description: "Both are metabolized by the liver. Heavy drinking combined with paracetamol can significantly increase the risk of liver damage.",
  },
  [getKey('alcohol', 'ibuprofen')]: {
    severity: 'Caution',
    description: "Increases the risk of stomach irritation, ulcers, and gastrointestinal bleeding.",
  },
  [getKey('alcohol', 'benzos')]: {
    severity: 'Deadly',
    description: "Both are CNS depressants. The combination amplifies sedation, respiratory depression, and risk of fatal overdose/blackout.",
  },
  [getKey('alcohol', 'opioids')]: {
    severity: 'Deadly',
    description: "Extremely dangerous. Both cause respiratory depression. High risk of fatal overdose.",
  },
  [getKey('alcohol', 'cocaine')]: {
    severity: 'Dangerous',
    description: "Forms cocaethylene in the liver, which is more cardiotoxic and longer-lasting than cocaine alone.",
  },
  [getKey('alcohol', 'ghb')]: {
    severity: 'Deadly',
    description: "Both are strong CNS depressants. High risk of vomiting while unconscious (aspiration), respiratory failure, and death.",
  },
  [getKey('alcohol', 'ketamine')]: {
    severity: 'Dangerous',
    description: "Both cause ataxia (loss of coordination) and sedation. High risk of vomiting and aspiration. 'The spins' are common and severe.",
  },
  [getKey('alcohol', 'tramadol')]: {
    severity: 'Deadly',
    description: "High risk of seizures and respiratory depression. Tramadol lowers seizure threshold; alcohol increases this risk.",
  },
  [getKey('alcohol', 'maoi')]: {
    severity: 'Dangerous',
    description: "Tyramine in some alcoholic drinks (beer, wine) can cause a hypertensive crisis with MAOIs. Also increases sedation.",
  },
  [getKey('alcohol', 'poppers')]: {
    severity: 'Unsafe',
    description: "Both lower blood pressure. Can cause dizziness, fainting, and reduced oxygen to the brain.",
  },

  // CANNABIS INTERACTIONS
  [getKey('cannabis', 'tobacco')]: {
    severity: 'Caution',
    description: "Smoking both increases exposure to carcinogens and lung irritation. Tobacco may amplify the effects of cannabis.",
  },
  [getKey('cannabis', 'alcohol')]: {
    severity: 'Caution',
    description: "Alcohol increases the absorption of THC. Can lead to stronger intoxication, dizziness, and nausea ('the spins').",
  },
  [getKey('cannabis', 'psychedelics')]: { // Generic handler if needed, but specific is better
     severity: 'Caution',
     description: "Cannabis can significantly intensify the psychedelic experience, potentially leading to anxiety or paranoia.",
  },

  // STIMULANT INTERACTIONS
  [getKey('mdma', 'caffeine')]: {
    severity: 'Unsafe',
    description: "Both are stimulants. Increases strain on the heart, risk of dehydration, and hyperthermia.",
  },
  [getKey('cocaine', 'caffeine')]: {
    severity: 'Unsafe',
    description: "Increased cardiovascular strain.",
  },
  [getKey('mdma', 'cocaine')]: {
    severity: 'Unsafe',
    description: "Both are stimulants. Increases strain on the heart, risk of dehydration, and hyperthermia. Don't waste either drug by combining them.",
  },
  [getKey('mdma', 'adderall')]: {
    severity: 'Unsafe',
    description: "Both are amphetamines. Increases neurotoxicity, heart strain, and risk of serotonin syndrome.",
  },
  [getKey('adderall', 'caffeine')]: {
    severity: 'Caution',
    description: "Both are stimulants. Can cause jitteriness, anxiety, and heart palpitations.",
  },
  [getKey('meth', 'adderall')]: {
    severity: 'Dangerous',
    description: "Extremely high cardiovascular strain and neurotoxicity risk.",
  },

  // DEPRESSANT INTERACTIONS
  [getKey('benzos', 'opioids')]: {
    severity: 'Deadly',
    description: "One of the most dangerous combinations. Synergistic respiratory depression leading to fatal overdose.",
  },
  [getKey('benzos', 'ghb')]: {
    severity: 'Deadly',
    description: "Both are CNS depressants. High risk of unconsciouness and respiratory failure.",
  },
  [getKey('benzos', 'alcohol')]: {
    severity: 'Deadly',
    description: "Blackout territory. High risk of fatal respiratory depression and aspiration of vomit.",
  },
  [getKey('opioids', 'ghb')]: {
    severity: 'Deadly',
    description: "Combined respiratory depression. Very high risk of death.",
  },
  [getKey('opioids', 'cocaine')]: {
    severity: 'Dangerous',
    description: "'Speedball'. High strain on the heart. The stimulant wears off first, potentially leaving a fatal opioid dose in the system.",
  },

  // SEROTONIN SYNDROME RISKS
  [getKey('ssri', 'mdma')]: {
    severity: 'Dangerous',
    description: "SSRIs can reduce the desired effects of MDMA, but the combination increases the risk of Serotonin Syndrome, which can be fatal.",
  },
  [getKey('ssri', 'lsd')]: {
    severity: 'Safe', 
    description: "SSRIs generally dampen or nullify the effects of LSD. Not physically toxic, but can be frustrating.",
  },
  [getKey('dxm', 'ssri')]: {
    severity: 'Deadly',
    description: "High risk of Serotonin Syndrome. Both affect serotonin levels. Avoid completely.",
  },
  [getKey('tramadol', 'ssri')]: {
    severity: 'Dangerous',
    description: "High risk of seizures and Serotonin Syndrome.",
  },
  [getKey('tramadol', 'mdma')]: {
    severity: 'Dangerous',
    description: "High risk of Serotonin Syndrome and seizures.",
  },
  [getKey('maoi', 'mdma')]: {
    severity: 'Deadly',
    description: "MAOIs prevent the breakdown of serotonin. Combining with MDMA causes massive serotonin buildup. Highly fatal.",
  },
  [getKey('maoi', 'ssr')]: {
    severity: 'Deadly',
    description: "Serotonin Syndrome risk. These should never be combined.",
  },
  [getKey('maoi', 'dxm')]: {
    severity: 'Deadly',
    description: "High risk of Serotonin Syndrome and Hypertensive Crisis.",
  },

  // SPECIFIC DANGEROUS COMBOS
  [getKey('poppers', 'sildenafil')]: {
    severity: 'Deadly',
    description: "Both cause vasodilation (drop in blood pressure). Combining them can cause a sudden, fatal drop in blood pressure.",
  },
  [getKey('cocaine', 'sildenafil')]: {
    severity: 'Dangerous',
    description: "Cocaine constricts blood vessels while Viagra dilates them. Known to cause priapism and increased heart strain.",
  },
  [getKey('tramadol', 'alcohol')]: {
    severity: 'Deadly',
    description: "Seizure risk + Respiratory depression.",
  },
};

export function getInteraction(id1: string, id2: string): Interaction | null {
  const key = getKey(id1, id2);
  const data = interactionData[key];
  
  if (!data) return null;
  
  return {
    id: key,
    substances: [id1, id2],
    ...data
  };
}

export const severityColors: Record<Severity, string> = {
  'Safe': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
  'Caution': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
  'Unsafe': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800',
  'Dangerous': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800',
  'Deadly': 'bg-red-950 text-red-200 dark:bg-red-950 dark:text-red-200 border-red-800 border-2',
  'Unknown': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
};
