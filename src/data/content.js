export const company = {
  name: 'D2C Ecommerce India',
  brand: 'D2C Mall',
  tagline: 'One Stop Lifestyle Shop',
  headline: "India's 1st Multi D2C Brand Retail Platform",
  subline: 'Aspirational products at affordable prices across all lifestyle categories',
  about:
    "D2C Ecommerce is India's 1st multi-D2C brand retail platform that builds & scales homegrown brands across all lifestyle categories: Beauty, Fashion, Electronics, Fitness, Home, Kitchen, Travel & Auto Accessories.",
  vision: 'To make D2C Mall the go-to lifestyle store for the mass consumer segment across the country.',
  offline:
    'We are growing rapidly and now expanding our presence in offline channels with D2C Mall retail outlets — an offline marketplace for D2C brands.',
  email: 'franchise@d2cecommerce.in',
  phone: '+91 79825 93207',
  phoneRaw: '+917982593207',
  whatsapp: '917982593207',
  website: 'https://www.d2cecommerce.in',
  shop: 'https://www.d2csale.com',
  founder: {
    name: 'Mr. Manish Gupta',
    role: 'Founder & CEO, D2C Ecommerce India',
    image: '/images/rakul-manish-founder.webp',
  },
  ambassador: {
    name: 'Rakul Preet Singh',
    role: 'Brand Ambassador, AccessHer',
  },
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/d2cecommerce' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/d2cecommerce' },
    { name: 'Facebook', url: 'https://www.facebook.com/d2cecommerce' },
    { name: 'X', url: 'https://x.com/d2cecommerce_in' },
    { name: 'YouTube', url: 'https://www.youtube.com/@d2cecommerce335' },
  ],
}

export const logos = {
  mall: '/images/logo-d2c-mall.webp',
  world: '/images/logo-d2c-world.webp',
  ecommerce: '/images/logo-d2c-ecommerce.webp',
  sale: '/images/logo-d2csale.webp',
  kasrat: '/images/logo-kasrat.webp',
  hilife: '/images/logo-hilife.webp',
  accessher: '/images/logo-accessher.webp',
}

export const stats = [
  { value: 5, suffix: ' Lac+', label: 'Happy Customers' },
  { value: 50, suffix: 'K+', label: 'Positive Reviews' },
  { value: 5, suffix: 'K+', label: 'Innovative Products' },
  { value: 25, suffix: '+', label: 'Product Categories' },
  { value: 15, suffix: '+', label: 'Lifestyle Brands' },
]

export const highlights = [
  { value: '0%', label: 'Royalty' },
  { value: '30–50%', label: 'Product Margins' },
  { value: '90%', label: 'Inventory Buyback' },
  { value: '2000+', label: 'SKUs In-Store' },
]

export const marketSplit = {
  online: 10,
  organisedOffline: 10,
  unorganisedOffline: 80,
}

export const problems = [
  {
    title: 'High Investment',
    text: 'Expensive franchise cost of retail outlets — ₹1.5 Crore to ₹3.5 Crore for big retail brands.',
  },
  {
    title: 'Low ROI',
    text: 'Low margins and additional royalty charged as a percentage of total sales, decreasing ROI and increasing the break-even period.',
  },
  {
    title: 'Lack of Support',
    text: 'Less support in franchise running — long-term marketing, sales & training, software & re-ordering.',
  },
]

export const pillars = [
  { title: 'Multi D2C Brands', text: 'Under one umbrella.' },
  { title: 'Product Market Fit', text: 'And constant refresh.' },
  { title: 'Bollywood Marketing', text: 'Marketing with Bollywood celebs.' },
  { title: 'Cross-sell & Upsell', text: 'Strong cross-sell & upsell potential.' },
]
export const storeModels = [
  {
    id: '500',
    name: 'D2C Mall',
    size: '500 sqft',
    investment: '₹13 Lakhs',
    package: '₹11 Lakhs',
    image: '/images/store-3.webp',
    color: 'leaf',
    capex: [
      ['Franchise Fee', '₹1 Lakh'],
      ['Inventory', '₹10 Lakhs'],
      ['Fixtures & Lighting', '₹1 Lakh'],
      ['Misc. CAPEX', '₹1 Lakh'],
    ],
    packageNote: 'Company provides franchise fee + inventory at ₹11 Lakhs',
    opex: [
      ['Rent', '₹40,000'],
      ['Electricity & Misc.', '₹10,000'],
      ['Manpower', '₹50,000'],
    ],
    staff: ['Store Manager – ₹25K', 'Housekeeping – ₹10K', 'Sales Staff – ₹15K'],
    revenue: '₹7.5 Lakhs',
    margin: '₹2 Lakhs',
    marginPct: '30%',
  },
  {
    id: '1000',
    name: 'D2C Mall',
    size: '1000 sqft',
    investment: '₹22 Lakhs',
    package: '₹21 Lakhs',
    image: '/images/store-2.webp',
    color: 'navy',
    capex: [
      ['Franchise Fee', '₹1 Lakh'],
      ['Fixtures & Lighting', '₹5 Lakhs'],
      ['Inventory', '₹15 Lakhs'],
      ['Misc. CAPEX', '₹1 Lakh'],
    ],
    packageNote: 'Company provides fee + fixtures + inventory at ₹21 Lakhs',
    opex: [
      ['Rent', '₹80,000'],
      ['Electricity & Misc.', '₹20,000'],
      ['Manpower', '₹70,000'],
    ],
    staff: ['Store Manager – ₹30K', 'Housekeeping – ₹10K', 'Sales Staff (2) – ₹30K'],
    revenue: '₹15 Lakhs',
    margin: null,
    marginPct: '30%',
  },
  {
    id: '2000',
    name: 'D2C Mall',
    size: '2000 sqft',
    investment: '₹55 Lakhs',
    package: '₹51 Lakhs',
    image: '/images/store-front-render.webp',
    color: 'saffron',
    capex: [
      ['Franchise Fee', '₹1 Lakh'],
      ['Fixtures & Lighting', '₹15 Lakhs'],
      ['Inventory', '₹35 Lakhs'],
      ['A-list Celebrity Inauguration', 'Included'],
      ['Misc. CAPEX', '₹4 Lakhs'],
    ],
    packageNote: 'Company provides fee + fixtures + inventory + celebrity launch at ₹51 Lakhs',
    opex: [
      ['Rent', '₹2,00,000'],
      ['Electricity & Misc.', '₹30,000'],
      ['Manpower', '₹1,20,000'],
    ],
    staff: ['Store Manager – ₹40K', 'Housekeeping (2) – ₹20K', 'Sales Staff (4) – ₹60K'],
    revenue: '₹30 Lakhs',
    margin: '₹10 Lakhs',
    marginPct: '33%',
  },
]

export const experienceModels = [
  {
    id: 'kasrat',
    name: 'Kasrat Gym',
    tagline: 'Be the first to own the future of fitness',
    investment: '₹51 Lakhs',
    size: '2,500 sqft',
    roi: '+50% (18–24 months)*',
    image: '/images/kasrat-interior-1.webp',
    poster: '/images/poster-kasrat.webp',
    includes: ['Gym design blueprint', 'World-class equipment', 'Branded interior & signage'],
  },
  {
    id: 'cafe',
    name: 'Leisure Cafe',
    tagline: "Your city's next favourite cafe starts with you",
    investment: '₹21 Lakhs',
    size: '~2,000 sqft',
    roi: '+50% (18–24 months)*',
    image: '/images/cafe-terrace.webp',
    poster: '/images/poster-leisure-cafe.webp',
    includes: [
      'New and exciting brand with fresh opportunities',
      'First-mover advantage in your city',
      'Unique menu crafted for modern tastes',
      'Dedicated support from setup to launch and beyond',
    ],
  },
  {
    id: 'gaming',
    name: 'Gaming Zone & Indoor Sports',
    tagline: 'All-in-one gaming & sports hub for your city',
    investment: '₹1 Crore',
    size: '~3,000 sqft',
    roi: '+50% (18–24 months)*',
    image: '/images/gaming-pickleball.webp',
    poster: '/images/poster-gaming-zone.webp',
    includes: [
      'Pickleball, TT & Snooker under one roof',
      'Casual arcade games for all age groups',
      'Family-friendly hangout destination',
      'Events, parties & tournaments',
      'All-weather indoor fun & fitness hub',
    ],
  },
  {
    id: 'mega',
    name: 'D2C Mall Mega',
    tagline: 'Leisure Cafe, Gaming Zone, Kasrat Gym, D2C World, Pharmacy & Daily Essentials',
    investment: '₹2.51 Crore',
    size: '12,500 sqft',
    roi: '+50% (18–24 months)*',
    image: '/images/mall-cafe.webp',
    poster: null,
    includes: [
      'Leisure Cafe & Snacks',
      'Gaming Zone',
      'Kasrat Gym',
      'D2C World store',
      'Pharmacy',
      'Daily Essentials',
      'A-list celebrity inauguration',
      'Full-page Times of India ad',
      'Marketing boost in your city',
    ],
    gallery: [
      '/images/mall-cafe.webp',
      '/images/mall-gaming.webp',
      '/images/mall-gym.webp',
      '/images/mall-pharmacy.webp',
      '/images/mall-essentials.webp',
    ],
  },
]

export const roiNote =
  '*ROI as stated in the company brochures. Actual returns depend on location, operations and market conditions.'

export const operatingModels = [
  {
    code: 'FOFO',
    name: 'Franchise Owned, Franchise Operated',
    text: 'You own the store and you operate it.',
  },
  {
    code: 'FOCO',
    name: 'Franchise Owned, Company Operated',
    text: 'You own the store and the company operates it.',
  },
]
export const comparison = {
  columns: ['Electronics Brand Store', 'QSR Chain', 'Tea Cafe Chain', 'D2C Mall'],
  rows: [
    ['Investment', '~₹2 Crore', '~₹3.5 Crore', '~₹20 Lakhs', 'From ₹13 Lakhs'],
    ['Royalty', '—', '7% of sales', '15% of sales', '0%'],
    ['Margin', '~10%', '~50%', '~50%', '30–50%'],
  ],
}

export const support = [
  { title: 'Celebrity Endorsement', text: 'Posters of our brand ambassadors.' },
  { title: 'Visibility – Hoardings', text: 'Sign boards on streets and glow sign boards.' },
  { title: 'Radio Promotions' },
  { title: 'Movie Theater Ads' },
  { title: 'Digital Marketing', text: 'Ads run near your store location.' },
  { title: 'Social Media Marketing', text: 'Your store advertised on our social media platform.' },
  { title: 'Newspaper Pamphlets' },
  { title: 'POS & Retail Software', text: 'Bar code scanner, retail software training and subscription.' },
  { title: 'Seller Support & Re-ordering' },
  { title: 'No MOQ Policy' },
  { title: 'Courier Business' },
]

export const feeIncludes = [
  'Barcode scanner',
  'Retail software training & subscription',
  'Sign boards on streets',
  'Glow sign boards',
  'Posters of brand ambassadors',
  'Newspaper pamphlets',
  'Social media & local digital ads',
]

export const categories = [
  'Jewellery',
  'Beauty',
  'Fashion',
  'Footwear',
  'Electronics',
  'Fitness',
  'Home',
  'Kitchen',
  'Bags',
  'Travel',
  'Ethnic',
  'Kids',
  'Auto Accessories',
  "Men's Accessories",
]

export const brands = [
  { name: 'AccessHer', category: 'Jewellery' },
  { name: 'AccessHim', category: "Men's Accessories" },
  { name: 'Hungama HiLife', category: 'Electronics' },
  { name: 'D2C Vision', category: 'Electronics' },
  { name: 'Luxura Sciences', category: 'Beauty' },
  { name: 'Endless Trendz', category: 'Fashion' },
  { name: 'Endless Steps', category: 'Footwear' },
  { name: 'Kasrat', category: 'Fitness' },
  { name: 'Varjish', category: 'Fitness' },
  { name: 'Swarg Homes', category: 'Home' },
  { name: 'Swarg Kitchen', category: 'Kitchen' },
  { name: 'Bagssy', category: 'Bags' },
  { name: 'D2C Travel', category: 'Travel' },
  { name: 'Drape N Don', category: 'Ethnic' },
  { name: '7 Milestone', category: 'Auto Accessories' },
  { name: 'Baby Babu', category: 'Kids' },
]

export const onboardedBrands = [
  { name: 'Shiv Naresh', category: 'Athleisure' },
  { name: 'Trenz', category: 'Fashion & Footwear' },
  { name: '10Club', category: '8 Lifestyle Brands' },
  { name: 'Unblock by Jenny', category: 'Female Fashion' },
  { name: 'Indigifts', category: 'Gifts – Shark Tank' },
  { name: 'Hari Darshan', category: 'Pooja Items' },
]

export const brandsGrid = '/images/brands-grid.webp'

export const channels = ['d2csale.com', 'Amazon', 'Flipkart', 'Myntra', 'Meesho']

export const hilife = {
  tagline: 'Listen to your Dil',
  text:
    "HiLife is a leading electronics brand offering lifestyle products that make entertainment more immersive. Technology meets ergonomics — elegantly designed electronics accessories at affordable prices.",
  banner: '/images/hilife-jump-banner.webp',
  hero: '/images/hilife-girl-headphones.webp',
  products: [
    { name: 'Groove Speaker', sku: 'HILISPGROOBMN11', image: '/images/hilife-groove-speaker.webp' },
    { name: 'Jump Neckband', sku: 'HILINBJUMPFBK11', image: '/images/hilife-jump-neckband.webp' },
    { name: 'Buzz Headphone', sku: 'HILIHPBUZZFBK11', image: '/images/hilife-buzz-headphone.webp' },
    { name: 'Bounce Earbuds', sku: 'HILIEBBOUNFBK11', image: '/images/hilife-bounce-earbuds.webp' },
    { name: 'G1 Smartwatch', sku: 'HILISWG1SMFBK01', image: '/images/hilife-g1-smartwatch.webp' },
    { name: 'Wireless Neckband', sku: 'HILINBJUMPBYL21', image: '/images/hilife-wireless-neckband.webp' },
  ],
}

export const kasrat = {
  memberships: [
    'Pay-per-session',
    'Any 10 days in a month',
    'Monthly',
    'Quarterly',
    'Yearly',
  ],
  values: [
    { title: 'Culturally Inspired Identity', text: 'Traditional values blended with modern fitness.' },
    { title: 'Premium Ambience', text: 'High-end interiors and designer lighting.' },
    { title: 'State-of-the-Art Equipment', text: 'Latest biomechanics-friendly machines.' },
    { title: 'Certified Trainers', text: 'Expert coaching for every goal.' },
    { title: 'Custom Training & Nutrition', text: 'Personalised plans with progress tracking.' },
    { title: 'Hygiene First', text: 'Daily sanitisation and air purification.' },
    { title: 'Mobile App', text: 'Book sessions and track progress anytime.' },
  ],
  gallery: [
    '/images/kasrat-interior-1.webp',
    '/images/kasrat-interior-2.webp',
    '/images/kasrat-group.webp',
    '/images/kasrat-gym-floor.webp',
  ],
  trainer: '/images/kasrat-trainer.webp',
}

export const leisure = {
  gallery: [
    '/images/cafe-terrace.webp',
    '/images/cafe-food.webp',
    '/images/gaming-pickleball.webp',
    '/images/gaming-bowling.webp',
    '/images/gaming-tt-snooker.webp',
  ],
}

export const stores = [
  { city: 'Gurugram', size: '1,200 sqft', status: 'Operational', image: '/images/store-gurugram-real.webp' },
  { city: 'Patna', size: '400 sqft', status: 'Operational', image: null },
  { city: 'Ghaziabad', size: '300 sqft', status: 'Operational', image: null },
  { city: 'Varanasi', size: null, status: 'In pipeline', image: null },
  { city: 'Hyderabad', size: null, status: 'In pipeline', image: null },
]

export const storeGallery = [
  '/images/store-front-render.webp',
  '/images/store-1.webp',
  '/images/store-2.webp',
  '/images/store-3.webp',
  '/images/store-4.webp',
  '/images/store-5.webp',
  '/images/store-6.webp',
  '/images/store-d2c-world.webp',
  '/images/store-gurugram-real.webp',
]
export const press = [
  { title: 'Brand Capital invests in D2C Ecommerce', source: 'Brand Capital', image: '/images/poster-brand-capital.webp' },
  { title: 'D2C Ecommerce raises ₹6 crore in seed funding', source: 'Mint', image: '/images/press-162.webp' },
  { title: 'D2C Ecommerce acquires lifestyle electronics brand HiLife from Hungama', source: 'Mint', image: '/images/press-150.webp' },
  { title: 'D2C Ecommerce ropes in Rakul Preet Singh as brand ambassador for AccessHer', source: 'ET BrandEquity', image: '/images/press-153.webp' },
  { title: 'D2C Ecommerce acquires natural personal care brand Luxura Sciences', source: 'Business Standard', image: '/images/press-156.webp' },
  { title: 'D2C Ecommerce acquires fashion jewellery brand AccessHer', source: 'ETRetail', image: '/images/press-159.webp' },
  { title: "D2C Mall unites with Shiv Naresh, Trenz and Indigifts to promote Made in India", source: 'News', image: '/images/news-d2c-mall.webp' },
]

export const celebrityGallery = [
  { image: '/images/rakul-accessher-bag.webp', caption: 'Rakul Preet Singh × AccessHer' },
  { image: '/images/rakul-bridal-full.webp', caption: 'AccessHer bridal campaign' },
  { image: '/images/celeb-male-chair.webp', caption: 'Celebrity campaign' },
  { image: '/images/ad-kasrat.webp', caption: 'Kasrat fitness campaign' },
  { image: '/images/hilife-shamshera-promo.webp', caption: 'HiLife film promotion' },
  { image: '/images/hilife-plan-a-plan-b.webp', caption: 'HiLife celebrity integration' },
  { image: '/images/hilife-celeb-gift.webp', caption: 'Celebrity gifting' },
  { image: '/images/celeb-events.webp', caption: 'Celebrity film promotions' },
]

export const posters = [
  { image: '/images/poster-brand-capital.webp', title: 'Brand Capital invests in D2C' },
  { image: '/images/poster-kasrat.webp', title: 'Kasrat Gym Franchise' },
  { image: '/images/poster-kasrat-why.webp', title: 'Why Kasrat' },
  { image: '/images/poster-leisure-cafe.webp', title: 'Leisure Cafe Franchise' },
  { image: '/images/poster-gaming-zone.webp', title: 'Gaming Zone Franchise' },
  { image: '/images/poster-d2c-mall-offer.webp', title: 'D2C Mall Business Support' },
  { image: '/images/poster-hilife-1.webp', title: 'D2C Ecommerce at a Glance' },
  { image: '/images/poster-hilife-2.webp', title: 'Hungama HiLife' },
  { image: '/images/poster-hilife-products.webp', title: 'HiLife Products' },
]

export const journey = [
  { step: 'Enquire', text: 'Fill the application form on this website.' },
  { step: 'Consultation Call', text: '1-on-1 consultation call with the sales team.' },
  { step: 'Store Visit', text: 'Meet at our Gurugram store, or join a video call if you are outstation.' },
  { step: 'Sign LOI', text: 'Letter of Intent with a token advance.' },
  { step: 'Store Setup', text: 'Help with property selection, then branding, fixtures, inventory and marketing support.' },
  { step: 'Growth Support', text: 'Dedicated franchise account manager and monthly business strategy calls.' },
]

export const faqs = [
  {
    q: 'What are the expected sales of a D2C Mall store?',
    a: 'D2C Mall offers affordable products with 2000+ SKUs. Expected sales will touch ₹6–8 Lakhs depending on your city population. D2C products are also available across all online platforms, with sales there of ₹40 Cr+.',
  },
  {
    q: 'What margins do I get on products?',
    a: 'Minimum 30% and up to 50% depending on the product. D2C owns the brands and supplies franchise partners directly — no middlemen — which keeps margins higher than typical hypermarkets.',
  },
  {
    q: 'Is there any royalty?',
    a: 'No. D2C Mall charges zero royalty and no additional recurring cost to its franchise partners.',
  },
  {
    q: 'What is the expected break-even time?',
    a: 'Expected break-even is 5–6 months from the date of store opening, as per company estimates.',
  },
  {
    q: 'What if I want to close my outlet later?',
    a: 'In the worst case, the company buys back inventory at 90% of its value, so partners are protected from heavy losses.',
  },
  {
    q: 'In the ₹21 Lakh model, what is covered?',
    a: '₹15 Lakhs of inventory of your choice, plus ₹5 Lakhs for store fixtures, fittings and lighting — shelves, stands, lights, woodwork, labour and fans — and the ₹1 Lakh franchise fee.',
  },
  {
    q: 'What does the ₹1 Lakh franchise fee include?',
    a: 'Barcode scanner, retail software training and subscription, street sign boards, glow sign boards, brand ambassador posters, newspaper pamphlets, and digital marketing of your store on our social media with ads run near your location.',
  },
  {
    q: 'How many stores are operational?',
    a: '3 operational stores in Patna, Gurugram and Ghaziabad, with Varanasi and Hyderabad in the pipeline.',
  },
]

export const formOptions = {
  models: [
    'D2C Mall – 500 sqft (~₹13 L)',
    'D2C Mall – 1000 sqft (~₹22 L)',
    'D2C Mall – 2000 sqft (~₹55 L)',
    'Kasrat Gym (₹51 L)',
    'Leisure Cafe (₹21 L)',
    'Gaming Zone (₹1 Cr)',
    'D2C Mall Mega (₹2.51 Cr)',
    'Not sure yet',
  ],
  operating: ['FOFO – I will run it', 'FOCO – Company runs it', 'Not sure'],
  budgets: ['₹10 – 15 Lakhs', '₹15 – 25 Lakhs', '₹25 – 60 Lakhs', '₹60 Lakhs – 1 Crore', 'Above ₹1 Crore'],
  timelines: ['Immediately', 'Within 1 month', '1 – 3 months', '3 – 6 months', 'Just exploring'],
  involvement: ['Full-time venture', 'Additional investment'],
  states: [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
    'Lakshadweep', 'Puducherry',
  ],
}

export const investmentSplit = [
  {
    id: '500',
    label: '500 sqft',
    total: 13,
    parts: [
      ['Inventory', 10],
      ['Franchise Fee', 1],
      ['Fixtures & Lighting', 1],
      ['Misc. CAPEX', 1],
    ],
  },
  {
    id: '1000',
    label: '1000 sqft',
    total: 22,
    parts: [
      ['Inventory', 15],
      ['Fixtures & Lighting', 5],
      ['Franchise Fee', 1],
      ['Misc. CAPEX', 1],
    ],
  },
  {
    id: '2000',
    label: '2000 sqft',
    total: 55,
    parts: [
      ['Inventory', 35],
      ['Fixtures & Lighting', 15],
      ['Misc. CAPEX', 4],
      ['Franchise Fee', 1],
    ],
  },
]