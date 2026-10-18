// Generated from sites/biltong-on-wheels/site.json by make-site.mjs.
import { SiteConfig } from './site.model';

export const SITE: SiteConfig = {
  "name": "Biltong on Wheels",
  "tagline": "Pretoria North",
  "logo": "logo",
  "meta": {
    "title": "Biltong on Wheels | Biltong & droëwors, Pretoria North",
    "description": "Quality biltong, yellow-fat and kudu biltong, droëwors, chilli and BBQ bites, salami, biltong wheels and hampers at a great price, from Pretoria North."
  },
  "hero": {
    "eyebrow": "Pretoria North",
    "title": "Quality biltong at a great price.",
    "lead": "Biltong, droëwors, bites, salami and biltong wheels, priced per kilogram. Order online and we’ll get it to you.",
    "image": "hero",
    "imageAlt": "A wooden board with sliced biltong, olives and nuts",
    "cta": "See our prices"
  },
  "highlights": [
    {
      "icon": "award",
      "title": "Great prices",
      "text": "Biltong from R300/kg."
    },
    {
      "icon": "star",
      "title": "Kudu too",
      "text": "Game biltong and droëwors."
    },
    {
      "icon": "gift",
      "title": "Hampers",
      "text": "Biltong hampers from R150."
    },
    {
      "icon": "truck",
      "title": "On wheels",
      "text": "We come to you in Pretoria North."
    }
  ],
  "products": {
    "eyebrow": "Price list",
    "title": "Priced per kilogram",
    "lead": "Prices are per kg: add 1 for each kilogram, or tell us a smaller amount in the message. We weigh, confirm the total and send payment details.",
    "items": [
      {
        "id": "biltong",
        "name": "Biltong",
        "description": "Beef biltong, yellow-fat biltong or kudu biltong.",
        "image": "biltong",
        "imageAlt": "Sliced beef biltong on a board",
        "options": [
          {
            "label": "Biltong, 1 kg",
            "price": 300
          },
          {
            "label": "Yellow fat, 1 kg",
            "price": 320
          },
          {
            "label": "Kudu, 1 kg",
            "price": 340
          },
          {
            "label": "Plain (raw), no spice, 1 kg",
            "price": 120
          }
        ],
        "badge": "Bestseller"
      },
      {
        "id": "droewors",
        "name": "Droëwors",
        "description": "BBQ, fruit chutney or kudu droëwors.",
        "image": "droewors",
        "imageAlt": "Droëwors hanging to dry",
        "options": [
          {
            "label": "BBQ, 1 kg",
            "price": 300
          },
          {
            "label": "Fruit chutney, 1 kg",
            "price": 300
          },
          {
            "label": "Kudu, 1 kg",
            "price": 340
          }
        ]
      },
      {
        "id": "bites",
        "name": "Biltong bites & sticks",
        "description": "Chilli or BBQ bites, perfect for snacking.",
        "image": "bites",
        "imageAlt": "Biltong being sliced on a board",
        "options": [
          {
            "label": "Chilli, 1 kg",
            "price": 360
          },
          {
            "label": "BBQ, 1 kg",
            "price": 360
          }
        ]
      },
      {
        "id": "salami",
        "name": "Salami & cabanossi",
        "description": "Plain or cherry chilli.",
        "image": "salami",
        "imageAlt": "Sliced salami",
        "options": [
          {
            "label": "Plain, 1 kg",
            "price": 300
          },
          {
            "label": "Cherry chilli, 1 kg",
            "price": 300
          }
        ]
      },
      {
        "id": "wheels",
        "name": "Biltong wheels",
        "description": "Fruit chutney, BBQ or chilli.",
        "image": "wheels",
        "imageAlt": "Dark dried biltong",
        "options": [
          {
            "label": "Fruit chutney, 1 kg",
            "price": 300
          },
          {
            "label": "BBQ, 1 kg",
            "price": 300
          },
          {
            "label": "Chilli, 1 kg",
            "price": 300
          }
        ]
      },
      {
        "id": "hamper",
        "name": "Biltong hampers",
        "description": "Made up for gifts, braais and birthdays. Tell us your budget.",
        "image": "hamper",
        "imageAlt": "A board of biltong and snacks",
        "options": [
          {
            "label": "",
            "price": 150
          }
        ],
        "fromPrice": true
      }
    ]
  },
  "story": {
    "eyebrow": "About us",
    "title": "Good biltong shouldn’t cost a fortune",
    "paragraphs": [
      "Biltong on Wheels sells quality biltong and droëwors products for a great price, from Pretoria North.",
      "Choose from beef, yellow-fat and kudu biltong, droëwors, chilli and BBQ bites, salami and cabanossi, and biltong wheels, or let us put together a hamper for a gift or a braai.",
      "You’ll also find us at local markets and events around Pretoria North."
    ],
    "image": "collage",
    "imageAlt": "Biltong on Wheels products"
  },
  "gallery": [
    {
      "image": "droewors",
      "alt": "Droëwors"
    },
    {
      "image": "bites",
      "alt": "Biltong bites"
    },
    {
      "image": "wheels",
      "alt": "Biltong"
    },
    {
      "image": "biltong",
      "alt": "Sliced biltong"
    }
  ],
  "order": {
    "title": "Place your order",
    "lead": "Add your biltong above, fill in your details and the order opens in your email app, ready to send.",
    "steps": [
      "Choose your products (per kg).",
      "Tell us smaller amounts in the message.",
      "We weigh, confirm and send payment details.",
      "Collect, or we deliver in Pretoria North."
    ],
    "deliveryOptions": [
      {
        "id": "deliver",
        "label": "Deliver to me",
        "note": "Pretoria North; we confirm the cost",
        "needsAddress": true
      },
      {
        "id": "collect",
        "label": "I’ll collect",
        "note": "Pretoria North",
        "needsAddress": false
      }
    ],
    "notes": [
      "All prices are per kg.",
      "Hampers from R150; tell us your budget."
    ]
  },
  "faq": [
    {
      "q": "Can I order less than a kilogram?",
      "a": "Yes. Add the product and tell us the amount you want (for example 250g) in the message; we’ll work out the price."
    },
    {
      "q": "Do you make hampers?",
      "a": "Yes, from R150. Let us know your budget and the occasion."
    }
  ],
  "contact": {
    "email": "biltongatpretorianorth@gmail.com",
    "phoneDisplay": "072 737 8203",
    "whatsapp": null,
    "address": [
      "Pretoria North",
      "Gauteng"
    ],
    "hours": [],
    "socials": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/Biltongonwheels/"
      }
    ]
  },
  "slug": "biltong-on-wheels"
};
