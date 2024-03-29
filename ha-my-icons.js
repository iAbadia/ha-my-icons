var ICONS_MAP = {
    "salt-lamp": {
        path: "M19.7 7.5C19.4 7.2 19.4 7 19.5 6.7 19.7 6.1 19.6 5.4 19.2 4.9 18.5 3.7 17.7 2.7 16.9 1.5Q16.3.3 15.1.3C13.5.1 12 .1 10.4 0 9.4 0 8.5.4 7.5.9 6.2 2 5.1 3 3.8 4.1 3.5 4.2 3.4 4.7 3.4 5 3.5 6 3.6 6.9 3.9 8.1 3 8.4 3 8.9 3 9.8 2.8 11 2.7 12.1 2.7 13.3 2.7 14.1 2.8 14.8 3.1 15.5 3.8 17.2 4.9 18.7 6.1 20.1 6.3 20.4 6.3 20.5 6.2 20.9 5.7 22 6.4 23 7.4 23.4 10.4 24.2 13.3 24.3 16.2 23.4 17.4 23.1 17.9 21.9 17.4 20.9 17.2 20.5 17.2 20.4 17.5 20.1 18.3 19.1 19.2 18.1 20 17.1 20.3 16.7 20.6 16.2 20.7 15.7 20.8 14.2 20.9 12.7 21.2 11.1 21.6 9.4 20.8 8.4 19.7 7.5M16.4 2.9C16.5 3.2 16.8 3.6 16.9 3.9 16.8 3.9 16.8 4 16.6 4 16.3 3.6 16.2 3.3 16.1 3 16.2 2.9 16.3 2.9 16.4 2.9M16 5.9C16.3 5.4 16.4 4.9 16.7 4.5 16.7 4.4 17 4.2 17.1 4.2 17.1 4.3 17.2 4.5 17.2 4.6 17.2 5 16.4 6.1 15.9 6.4 16 6.1 16 6 16 5.9M13.7 6.3C13.9 6.5 14.1 6.7 14.3 6.8 14.1 6.9 13.9 7 13.8 7S13.5 6.9 13.4 6.7C13.5 6.6 13.5 6.3 13.7 6.3M11.7 3.7C12 4.1 12.2 4.4 12.4 4.7L12.2 4.8C11.8 4.5 11.3 4.3 11.4 3.8 11.5 3.8 11.5 3.7 11.7 3.7M11.7 11.4C12 12.4 12.1 13.3 11.9 14.4 12.6 14.5 13.1 15.1 13.3 15.7 12.6 15.6 12 15 11.9 14.4 11.8 14.3 11.6 14.3 11.6 14.1 11.3 13.7 11.3 11.9 11.7 11.4M11.1 20.3C11.2 20.4 11.2 20.6 11.4 20.7 10.5 20.8 9.8 20.4 9.8 19.5 9.8 19 9.9 18.5 10.2 17.8 10.2 17.7 10.3 17.5 10.5 17.4H10.7C10.7 18.1 10.6 18.6 10.4 19.1 10.4 19.6 10.3 20.1 11.1 20.3M10.9 8.1C9.9 7.8 9.1 7.3 8.3 6.7 9.2 6.5 10.4 7.3 10.9 8.1M9 1.4C8.7 2 8.5 2.3 8.2 2.7 7.9 2.1 8.3 1.6 9 1.4M7.1 4.5C7.2 4 7.5 3.5 7.8 3H7.9C7.9 3.1 8.1 3.3 8.1 3.4S8 3.7 8 3.8C7.7 4.3 7.3 4.8 7.5 5.4 7.3 6.3 8.1 6.1 8.5 6.5 7.1 6.5 6.5 5.7 7.1 4.5M7 10.5Q6.85 13.05 8.8 14.4C9.5 14.8 10.1 15.3 10.8 15.8 10.9 15.9 11.2 16.1 11.3 16.2 11.3 16.3 11.2 16.3 11.2 16.5 10.9 16.4 10.7 16.4 10.5 16.2 9.3 15.4 8.2 14.5 7.1 13.6 6.8 13.2 6.7 12.6 6.6 12 6.5 11.6 6.5 11.3 6.5 11 6.5 9.7 6.5 9.7 5.3 9.3 5.2 9.2 4.9 9 4.7 8.9 5.9 8.6 7 9.4 7 10.5M9.1 17.5 9 17.8C8.7 17.8 8.5 17.7 8.2 17.5L8.3 17.1C8.6 17.2 8.8 17.4 9.1 17.5M3.7 13.6C4.7 13.1 5.7 13.2 6.6 13.2 6.3 13.7 4.5 14.1 3.7 13.6M5.4 15.3C5.7 15.6 5.8 15.6 5.9 15.7 6 16.4 6.6 16.6 7.2 16.7 7.5 16.7 7.7 16.9 7.9 17 6.3 17.5 5.6 16.9 5.4 15.3M16.9 22.1C16.7 22.4 16.3 22.7 16 22.8 13 23.6 10.5 23.5 7.5 22.8 7.3 22.7 7.1 22.3 7 22 6.9 21.6 6.8 21.3 6.8 20.8 10.3 22.2 13.5 22.4 16.9 21 17 21.4 17 21.7 16.9 22.1M15.9 19.3C15.8 18.8 16.4 17.5 17.1 16.7 17 17.7 16.4 18.9 15.9 19.3M17.9 15.8C16.5 14.5 15.2 13.3 13.7 12 13.3 11.7 13.2 11.6 13.4 11.2 13.8 10.3 14.3 9.4 14.7 8.5 14.8 8.4 14.8 8.2 15 8.1 15.3 8.9 15 9.7 14 11.5 15.2 13.1 17.3 14 18.4 16.1 18.1 16 18 16 17.9 15.8M17 9.2C17.7 9 18.9 10.1 19 11 18.2 10.6 17.6 10 17 9.2M10.7 22.5H14.5C14.1 23 11.6 23.1 10.7 22.5M7.4 22.1C7.3 21.8 7.4 21.7 7.8 21.8 7.8 21.8 8.1 21.9 8.5 22.1 7.9 22.6 7.4 22.2 7.4 22.1",
        viewBox: "0 0 24 24",
        keywords: ["light", "lamp", "salt"],
    },
    "salt-lamp-2": {
        path: "M19.6 7.5C19.3 7.2 19.3 7 19.4 6.7 19.6 6.1 19.5 5.4 19.1 4.9 18.4 3.7 17.6 2.7 16.8 1.5Q16.2.3 15 .3C13.4.1 11.9.1 10.3 0 9.3 0 8.4.4 7.4.9 6.2 2 5.1 3 3.8 4.1 3.5 4.2 3.4 4.7 3.4 5 3.5 6 3.6 6.9 3.9 8.1 3 8.4 3 9 2.9 9.8 2.7 11 2.6 12.1 2.6 13.3 2.6 14.1 2.7 14.8 3 15.5 3.7 17.2 4.8 18.7 6 20.1 6.2 20.4 6.2 20.5 6.1 20.9 5.7 22 6.4 23 7.4 23.4 10.4 24.2 13.3 24.3 16.2 23.4 17.4 23.1 17.9 21.9 17.4 20.9 17.2 20.5 17.2 20.4 17.5 20.1 18.3 19.1 19.2 18.1 20 17.1 20.3 16.7 20.6 16.2 20.7 15.7 20.8 14.2 20.9 12.7 21.2 11.1 21.6 9.4 20.8 8.4 19.6 7.5M16.4 2.8C16.5 3.1 16.8 3.6 16.9 3.9 16.8 3.9 16.6 4.1 16.4 4.1 16.1 3.7 16 3.3 15.9 3 16 2.9 16.3 2.8 16.4 2.8M15.7 5.8C16 5.3 16.9 4.2 17 4.2 17 4.3 17.2 4.5 17.2 4.6 17.3 5.1 16.3 6.3 15.8 6.6 15.9 6.3 15.6 6 15.7 5.8M13.8 6.1C14 6.3 14.3 6.7 14.5 6.8 14.3 6.9 13.9 7.3 13.8 7.3S13.1 6.8 13 6.6C13.1 6.5 13.6 6.1 13.8 6.1M11.8 3.3C12.1 3.7 12.8 4.7 13 5L11.9 5.2C11.5 4.9 11 4 11.1 3.6 11.2 3.6 11.6 3.3 11.8 3.3M11.6 11.4C11.9 12.4 12 13.3 11.8 14.4 12.5 14.5 13 15.1 13.2 15.7 12.5 15.6 11.9 15 11.8 14.4 11.7 14.3 11.5 14.3 11.5 14.1 11.2 13.7 11.2 11.9 11.6 11.4M11.3 20.2C11.4 20.3 11.2 20.6 11.4 20.7 10.5 20.8 9.8 20.4 9.8 19.5 9.8 19 9.9 18.5 10.2 17.8 10.2 17.7 10.3 17.5 10.5 17.4L11 17.2C11 17.9 10.8 18.6 10.6 19.1 10.5 19.6 10.5 20 11.3 20.2M11.2 8.5C9.6 8.6 9.5 8.1 8.7 7 9.5 6.8 10.7 7.7 11.2 8.5M9.3 1C9.3 1.6 8.6 2.6 8.3 3 8 2.5 8.3 1.4 9.3 1M6.7 4.4C6.8 3.9 7.2 3.3 7.5 2.8L7.9 2.9C7.9 3 8.1 3.3 8.1 3.4S8 3.7 8 3.8C7.7 4.3 7.6 4.8 7.8 5.4 7.6 6.2 7.9 6.4 8.3 6.8 6.9 6.8 6.1 5.6 6.7 4.4M7 10.5C6.9 12.2 7.9 13.3 9.2 14.2 9.9 14.6 10.4 15.1 11.1 15.6 11.2 15.7 11.3 16.6 11.3 16.8 11 16.7 10.7 16.2 10.5 16 9.3 15.2 8.2 14.5 7.1 13.6 6.8 13.2 6.4 12.7 6.3 12.1 6.2 11.7 6.2 11.4 6.2 11.1 6.2 9.8 6.4 9.8 5.2 9.4 5.1 9.4 4.9 9.1 4.7 9 5.9 8.6 7 9.4 7 10.5M9.3 17.5 9.1 18.2C8.8 18.2 8.4 17.7 8.1 17.5L8.3 16.8C8.6 16.9 9 17.4 9.3 17.5M3.7 13.6C4.7 13.1 5.4 13.3 6.3 13.3 6 13.8 4.7 14.6 3.7 13.6M5 14.8C5.3 15.1 6 15.3 6.1 15.4 6.2 16.1 6.5 16.6 7.1 16.7 7.4 16.7 7.6 16.9 7.8 17 6.3 17.5 5.2 16.4 5 14.8M16.8 22.1C16.6 22.4 16.2 22.7 15.9 22.8 12.9 23.6 10.4 23.5 7.4 22.8 7.3 22.7 7.1 22.3 7 22 6.9 21.6 6.8 21.3 6.8 20.8 10.3 22.2 13.5 22.4 16.9 21 16.9 21.4 16.9 21.7 16.8 22.1M15.8 19.3C15.4 18.5 16.1 17.4 17.2 16.4 17.3 17.8 16.4 18.3 15.8 19.3M17.4 15.9C16 14.6 14.8 13.5 13.3 12.2 12.9 11.9 12.8 11.6 13 11.2 13.4 10.3 14 8.5 15.2 7.8 15.5 8.6 15.3 9.7 14.3 11.5 15.5 13.1 17.2 14.1 18.3 16.1 18 16 17.5 16.1 17.4 15.9M16.6 8.9C17.7 8.6 19.2 10.6 19.3 11.5 18.4 11.5 16.3 10.2 16.6 8.9M27.3 31.4 31.3 31.2C30.7 31.9 28.2 32 27.3 31.4M24 31C23.9 30.7 24 30.4 24.4 30.5 24.4 30.5 25.2 30.8 25.6 31 25 31.5 24.2 31.2 24 31",
        viewBox: "0 0 24 24",
        keywords: ["light", "lamp", "salt"],
    },
    "ikea-lamp-knixhult": {
        path: "M18.7 23C18.7 22.4 18.6 21.8 18.6 21.2 18.6 20.7 18.5 20.3 18.5 19.8 18.4 19 18.4 18.2 18.3 17.5 18.3 16.9 18.2 16.4 18.2 15.8 18.1 15.1 18.1 14.5 18.1 13.8V12.8L17.8 9.5C17.7 8.4 17.7 7.2 17.6 6.1 17.6 5.8 17.6 5.5 17.5 5.2 17.4 4.3 17.2 3.4 17.1 2.5 17 2 16.9 1.5 16.5 1.1 15.9.5 15.1.2 14.2.4 13.7.5 13.2.6 12.8.7H12.4C12.1.6 11.9.6 11.7.8 11.6.9 11.6.9 11.5.9 11.2.8 10.8.7 10.4.6 9.7.4 9.1.4 8.4.8 7.6 1.1 7.2 1.8 7 2.6 6.9 3.3 6.9 3.9 6.8 4.6S6.7 6 6.7 6.7C6.7 7.3 6.6 7.8 6.6 8.4 6.5 9 6.5 9.6 6.4 10.2 6.3 10.7 6.3 11.2 6.3 11.6S6.2 12.3 6.2 12.7C6 13.5 6 14.3 5.9 15S5.8 16.5 5.7 17.2C5.6 17.8 5.6 18.3 5.6 18.9 5.5 19.6 5.5 20.4 5.4 21.1 5.4 21.7 5.3 22.2 5.3 22.8V23.5C5.3 23.6 5.4 23.7 5.5 23.7S5.7 23.6 5.8 23.5 5.9 23.3 5.9 23.2C5.9 22.9 5.9 22.6 6 22.3 6 21.6 6 20.8 6.1 20 6.2 19.3 6.2 18.7 6.3 18S6.4 16.5 6.5 15.8V15.5C6.6 15.7 6.7 15.8 6.9 15.9 7.1 16.1 7.1 16.2 7.1 16.5 7 17.6 7 18.6 6.9 19.7 6.8 19.9 7 20 7.2 20S7.5 19.8 7.5 19.6C7.6 18.9 7.6 18.2 7.7 17.5 7.7 17.2 7.8 16.9 7.8 16.7 7.8 16.6 7.8 16.5 8 16.5 8.3 16.5 8.7 16.6 9 16.6 9.6 16.5 10.1 16.7 10.6 16.7 11.1 16.8 11.5 16.8 12 16.8 12.3 16.8 12.6 16.7 13 16.7 13.4 16.6 13.8 16.7 14.2 16.7 14.6 16.8 15.1 16.8 15.5 16.8 15.7 16.8 15.9 16.7 16.1 16.7V16.8C16.1 17.3 16.2 17.8 16.2 18.3 16.2 18.7 16.2 19.2 16.3 19.6 16.3 19.8 16.5 20 16.7 20S16.9 19.9 16.9 19.6C16.9 18.5 16.8 17.5 16.8 16.4V16.2C17 15.9 17.2 15.6 17.5 15.3V15.4C17.5 15.9 17.6 16.4 17.6 16.9 17.7 17.7 17.7 18.5 17.8 19.3 17.9 20.3 17.9 21.2 18 22.2 18 22.5 18 22.9 18.1 23.2 18.1 23.3 18.2 23.5 18.3 23.5S18.6 23.5 18.6 23.3C18.7 23.3 18.7 23.1 18.7 23M13.4 3.6C13.3 3.6 13.2 3.6 13.1 3.5 13.3 3.5 13.4 3.5 13.4 3.6M13.3 4.2C13.3 4.1 13.4 4.1 13.4 4 13.4 3.8 13.4 3.8 13.6 3.8 13.5 3.7 13.4 3.5 13.5 3.3V3.1L13.8 3.4V3.6C13.7 3.7 13.7 3.8 13.7 3.9 13.6 3.9 13.6 4.1 13.5 4.2 13.4 4.1 13.4 4.2 13.3 4.2 13.3 4.4 13.3 4.5 13.2 4.5 13.1 4.6 13 4.4 12.9 4.4 13 4.6 12.8 4.6 12.8 4.8 12.8 4.7 12.9 4.6 12.9 4.4 13 4.2 13.2 4 13.1 3.8 13.3 3.9 13.3 4 13.3 4.2M14.7 5.4Q14.7 5.55 14.7 5.4C14.5 5.3 14.5 5 14.7 4.9 14.8 4.9 14.9 5 14.9 5.1 14.8 5.3 14.8 5.4 14.7 5.4M15 8.9C14.9 9 14.9 9.2 14.8 9.2S14.7 9 14.6 8.9C14.6 8.8 14.7 8.7 14.7 8.6 14.8 8.6 15 8.8 15 8.9M14.7 3.7C14.6 3.7 14.6 3.6 14.6 3.6 14.6 3.5 14.5 3.5 14.6 3.4 14.5 3.2 14.4 3.1 14.2 2.9 14.2 2.9 14.1 2.9 14.1 2.8 14.1 2.8 14 2.7 14.1 2.7S14.2 2.7 14.2 2.8C14.4 3 14.6 3.2 14.7 3.4 14.7 3.4 14.7 3.5 14.8 3.5 14.8 3.6 14.7 3.7 14.7 3.7M14.2 7.6C14.3 7.5 14.3 7.6 14.3 7.7 14.4 8 14.4 8.1 14.1 8.5 14.2 8.3 14.2 8.2 14.1 8S14.2 7.7 14.2 7.6M14.3 5.8C14.4 5.8 14.5 5.9 14.5 6S14.4 6.1 14.4 6.2H14.3C14.1 6.2 14.1 5.9 14.3 5.8M14.2 9.5S14.3 9.4 14.4 9.5 14.5 9.7 14.5 9.8 14.4 10 14.4 10.1C14.3 10 14.3 9.9 14.2 9.8Q14.05 9.65 14.2 9.5M14.2 2.5C14.3 2.4 14.3 2.2 14.5 2.1 14.5 2.4 14.3 2.5 14.2 2.5M14 1.8C14.2 1.8 14.3 1.9 14.4 2 14.2 2 14 2 14 1.8M14.1 4.3C14.1 4.2 14.2 4.1 14.2 4 14.5 4.3 14.5 4.4 14.3 4.7 14.1 4.8 14 5 13.9 5.2 13.8 5.3 13.8 5.4 13.7 5.3Q13.55 5.15 13.7 5C13.8 4.8 14 4.5 14.1 4.3M13.1 9.8C13.3 9.7 13.1 9.5 13.2 9.5 13.3 9.7 13.5 9.9 13.3 10.1 13.5 10.1 13.6 10.1 13.6 10.3 13.6 10.4 13.7 10.5 13.8 10.6S13.9 10.9 13.9 11.1C13.9 11.1 13.9 11.2 13.8 11.2S13.7 11.2 13.7 11.1C13.6 10.8 13.4 10.6 13.3 10.3V10.1C13.2 10 13 9.8 13.1 9.8M13.4 7.8C13.5 7.9 13.3 8 13.3 8.1H13.2C13.1 8 13 8 13.1 7.9 13.2 7.7 13.1 7.5 13 7.3 13.2 7.4 13.3 7.6 13.4 7.8M13.2 5.8C13.3 5.7 13.3 5.7 13.3 5.8S13.4 6 13.4 6.1C13.2 6.1 13.2 6.2 13.2 6.3 13 6.1 13 6 13.2 5.8M13.6 6.6C13.6 6.5 13.5 6.4 13.5 6.2 13.6 6.4 13.7 6.6 13.9 6.8 14 6.9 14 7.1 13.8 7.2 13.7 7.3 13.7 7.2 13.7 7.2 13.6 7.1 13.6 6.9 13.5 6.7 13.6 6.7 13.6 6.7 13.6 6.6M13.9 8.9C13.8 8.9 13.8 8.7 13.7 8.8 13.6 8.7 13.7 8.6 13.8 8.6 13.8 8.6 13.8 8.5 13.9 8.5 13.9 8.6 14 8.8 13.9 8.9M13.7 11.6H13.9C14 11.8 13.8 11.9 13.8 12 13.7 11.9 13.5 11.8 13.7 11.6M12.8 8.8C12.7 8.9 12.8 9 12.6 9 12.5 9 12.4 8.7 12.4 8.6 12.5 8.5 12.5 8.4 12.6 8.3 12.6 8.4 12.6 8.5 12.7 8.6S12.8 8.8 12.8 8.8M12.7 11.2C12.6 11 12.4 10.9 12.6 10.7H12.8C12.9 10.9 12.7 11 12.7 11.2M12.6 7.1 12.5 7C12.5 6.9 12.6 6.8 12.7 6.7 12.8 6.8 12.8 6.8 12.8 6.9S12.7 7 12.6 7.1M12.8 5.3C12.7 5.4 12.7 5.5 12.6 5.3 12.5 5.2 12.5 5.3 12.4 5.3 12.4 5.4 12.3 5.4 12.3 5.5 12.2 5.6 12.1 5.8 12.3 5.9 12.3 6 12.2 6.3 12.2 6.3 12.1 6.3 12.1 6.2 12.1 6.1 12.1 5.8 12.3 5.5 12.5 5.3 12.5 5.2 12.6 5.1 12.7 5S12.8 4.9 12.9 5C12.9 5.1 12.9 5.2 12.8 5.3M12.3 10C12.2 9.8 12 9.7 12.2 9.5H12.4C12.5 9.8 12.3 9.9 12.3 10M12.5 3.1 12.8 3.4S12.9 3.5 12.8 3.5C12.8 3.6 12.7 3.7 12.7 3.7 12.6 3.7 12.6 3.6 12.6 3.5 12.6 3.3 12.5 3.2 12.5 3.1M12.8 1.8H12.3C12.5 1.6 12.5 1.6 12.8 1.8M12 2.7C12.3 2.4 12.5 2.1 12.9 1.9H13C12.9 2.1 12.7 2.1 12.7 2.3 12.5 2.3 12.4 2.4 12.3 2.5S12.2 2.6 12.3 2.7C12.3 2.8 12.4 2.8 12.3 2.9H12.2C12.1 2.8 12 2.8 12 2.7M11.6 2.2C11.7 2.1 11.8 2 12 1.9 11.9 2.1 11.7 2.1 11.6 2.3H11.5C11.5 2.2 11.5 2.2 11.6 2.2M11.6 3.3C11.7 3.3 11.7 3.4 11.8 3.5 11.8 3.6 11.7 3.7 11.7 3.7 11.6 3.7 11.6 3.6 11.5 3.5 11.5 3.4 11.5 3.3 11.6 3.3M11.5 5.2C11.7 5 11.8 4.7 12 4.5 12 4.4 12.1 4.4 12.1 4.3 12.1 4.3 12.1 4.2 12.2 4.2S12.3 4.3 12.3 4.4 12.3 4.6 12.1 4.6C12.1 4.6 12 4.6 12 4.7 11.9 4.9 11.7 5 11.8 5.3 11.8 5.4 11.7 5.6 11.6 5.6S11.4 5.2 11.5 5.2M11.6 6.9C11.7 6.9 11.7 7 11.7 7.1S11.6 7.3 11.5 7.3 11.3 7.1 11.3 7C11.4 6.8 11.6 6.9 11.6 6.9M11.3 10.5C11.4 10.4 11.4 10.3 11.5 10.3S11.7 10.6 11.7 10.7 11.6 10.9 11.6 10.9C11.4 10.9 11.3 10.6 11.3 10.5M11.1 2.7C11.2 2.7 11.2 2.8 11.2 2.8S11.2 2.9 11.1 2.9 11 2.8 11.1 2.7Q10.95 2.7 11.1 2.7M11.1 4.1C11.2 4.2 11.3 4.3 11.1 4.4 11.1 4.4 11 4.5 11 4.4 10.9 4.3 10.8 4.4 10.8 4.4 10.7 4.6 10.6 4.7 10.6 4.8Q10.45 4.95 10.6 5.1C10.7 5.2 10.7 5.2 10.6 5.3 10.6 5.4 10.5 5.4 10.5 5.3 10.4 5.1 10.4 5.2 10.3 5.3 10.3 5.3 10.3 5.4 10.2 5.4 10.4 5 10.6 4.7 10.9 4.4 10.9 4.3 11 4.2 11 4.2 11 4.1 11 4 11.1 4.1M11.1 5.9V6.2C11 6.2 11 6.1 11 6.1 10.9 6 10.9 6 11 5.9 11 6 11 5.9 11.1 5.9M10.6 7C10.6 7.1 10.6 7.2 10.4 7.1H10.3C10.2 7.1 10.2 7.1 10.3 7 10.3 6.9 10.4 6.9 10.4 6.8 10.4 6.8 10.5 6.6 10.5 6.7 10.6 6.8 10.7 6.9 10.6 7M9.9 6.1C9.8 6 9.9 5.9 10 5.8 10.3 6 10 6.3 9.9 6.5 9.8 6.4 9.7 6.3 9.8 6.2ZM9.9 7.8C9.9 7.9 9.8 8 9.9 8 9.9 8.1 10 8.1 9.9 8.2H9.8C9.8 8.1 9.7 8.1 9.7 8 9.8 7.9 9.8 7.8 9.9 7.8M10 9.5C10.2 9.8 10.2 9.8 10 10.1 9.7 9.8 9.7 9.8 10 9.5M10 11.4C10 11.5 9.9 11.5 9.9 11.6 9.8 11.5 9.9 11.4 10 11.4 10 11.3 10 11.4 10 11.4M10.1 3C10 3 10 2.9 10 2.9 10 2.8 10.1 2.8 10.1 2.7 10.2 2.7 10.2 2.7 10.2 2.8S10.1 2.9 10.1 3M9.8 2.4S9.7 2.5 9.7 2.4C9.6 2.3 9.7 2.3 9.7 2.3 9.8 2.2 9.9 2.2 10 2.1 9.9 2.2 9.9 2.3 9.8 2.4M10.5 3.3C10.6 3.2 10.6 3.2 10.6 3.3 10.8 3.5 10.6 3.6 10.5 3.7 10.3 3.5 10.3 3.5 10.5 3.3M10.3 2.5C10.4 2.3 10.6 2.2 10.9 2.1 10.8 2.4 10.5 2.4 10.3 2.5M7.7 2.5V2.3C7.8 2 8 1.6 8.1 1.3 8.3 1 8.6.8 9 .8 9.5.8 10 1 10.5 1.2 9.5 1.4 8.5 1.8 7.7 2.5M8.5 9.1C8.3 8.8 8.3 8.8 8.5 8.5 8.4 8.6 8.5 8.7 8.6 8.8 8.6 8.9 8.6 9 8.5 9.1M8.7 10.6C8.7 10.7 8.6 10.8 8.6 10.8 8.5 10.8 8.5 10.7 8.5 10.6S8.6 10.4 8.6 10.4 8.6 10.5 8.7 10.6M8.5 7.3C8.2 7.2 8.4 7 8.5 6.8 8.6 7 8.6 7.2 8.5 7.3M8.5 2.9Q8.65 3.05 8.5 2.9C8.5 3.1 8.5 3.2 8.4 3.2 8.3 3.1 8.4 3 8.5 2.9M8.7 3.5C8.8 3.6 8.8 3.7 8.6 3.9 8.5 3.7 8.5 3.7 8.7 3.5M8.6 2.8C8.8 2.6 8.9 2.4 9.2 2.3 9 2.5 8.8 2.6 8.6 2.8M8.1 10Q7.95 9.7 8.1 9.4 8.4 9.7 8.1 10M8.1 11.6C8 11.5 7.9 11.3 8.1 11.2 8.2 11.3 8.3 11.4 8.1 11.6M8.1 7.8S8.1 7.9 8.1 7.8C8.2 8 8.2 8.1 8.1 8.2 8.1 8.1 8 8 8 7.9 8 7.9 8 7.8 8.1 7.8M8.1 6C8.3 6.2 8.1 6.4 8.1 6.6 7.9 6.4 8.1 6.2 8.1 6M8 13C8.1 13 8.2 13 8.2 13.1S8.3 13.3 8.2 13.5C8.2 13.6 8.1 13.6 8.1 13.7 8.1 13.5 8 13.3 8 13.2 7.9 13.1 8 13 8 13M7.9 16.2S7.9 16.1 7.8 16H7.9C8.1 16.1 8.2 16.1 8.4 16.2 8.3 16.3 8 16.3 7.9 16.2M8.4 14.3C8.3 14.2 8.4 14.2 8.3 14.1 8.3 14.1 8.3 13.9 8.4 14 8.5 14 8.5 14.1 8.5 14.1 8.6 14.2 8.5 14.3 8.4 14.3M8.6 12.7C8.4 12.5 8.4 12.2 8.6 12 8.7 12.4 8.7 12.4 8.6 12.7M8.6 5.4S8.6 5.5 8.5 5.5C8.5 5.6 8.5 5.6 8.4 5.5 8.3 5.5 8.3 5.4 8.4 5.4 8.4 5.3 8.5 5.2 8.5 5.1 8.7 4.9 8.8 4.6 9 4.4 9 4.3 9 4.3 9.1 4.3 9.1 4.5 9 4.6 8.9 4.7 8.8 4.9 8.6 5.1 8.6 5.4M8.9 5.9C9 6.1 9.1 6.2 8.9 6.4 8.7 6.2 8.7 6.2 8.9 5.9M8.9 7.7C9 7.8 9.1 7.8 9.1 7.9S9 8.1 9 8.1H8.9L8.8 8C8.8 7.9 8.9 7.8 8.9 7.7M9 10C8.9 9.9 8.8 9.7 9 9.5 8.8 9.7 9 9.8 9 10M9 13.5C8.9 13.6 8.9 13.6 8.9 13.5Q8.75 13.35 8.9 13.2C8.9 13.1 8.9 13 9 13 9.1 13.1 9.1 13.3 9 13.5M9 11.8C8.9 11.8 8.9 11.6 8.8 11.5 8.8 11.4 8.8 11.3 8.9 11.3S9 11.5 9.1 11.6C9.1 11.6 9.1 11.8 9 11.8M9.4 14.4H9.2C9.1 14.4 9.1 14.3 9.1 14.2S9.2 14 9.3 13.9C9.4 14 9.4 14.1 9.5 14.2S9.5 14.4 9.4 14.4M9.4 12.6C9.2 12.4 9.2 12.4 9.5 12 9.5 12.2 9.7 12.4 9.4 12.6M9.4 7.3C9.3 7.3 9.3 7.2 9.3 7.1S9.4 6.9 9.4 6.9C9.5 6.9 9.5 7 9.5 7.1S9.5 7.3 9.4 7.3M9.4 9.1C9.2 8.8 9.2 8.8 9.4 8.5Q9.7 8.8 9.4 9.1M9.5 10.9C9.4 11 9.4 11 9.4 10.9 9.3 10.7 9.3 10.6 9.5 10.5 9.6 10.6 9.6 10.7 9.5 10.9M9.6 5C9.7 5.1 9.7 5.2 9.5 5.2 9.4 5.2 9.4 5.3 9.4 5.5 9.3 5.4 9.2 5.3 9.3 5.1 9.5 4.8 9.7 4.5 9.8 4.3 9.8 4.3 9.9 4.1 9.9 4.2 10 4.2 10 4.3 10 4.4 10 4.4 10 4.5 9.9 4.5 9.8 4.3 9.8 4.3 9.6 4.5 9.6 4.6 9.5 4.7 9.5 4.7 9.5 4.8 9.5 4.9 9.6 5M9.9 13C10.1 13.4 10.1 13.4 10 13.7 9.7 13.4 9.7 13.2 9.9 13M10.4 15.3 10.2 15.5S10.1 15.5 10.1 15.4C10 15.3 10 15.2 9.9 15.1 10 15.1 10.2 15 10.3 15 10.3 15 10.4 15 10.5 15.1ZM10.7 14.4C10.7 14.5 10.5 14.4 10.5 14.5 10.4 14.4 10.4 14.3 10.4 14.2S10.5 14 10.5 14 10.7 14.3 10.7 14.4M10.6 11.8C10.5 12 10.4 12.2 10.6 12.4 10.7 12.5 10.5 12.6 10.5 12.8 10.4 12.7 10.3 12.6 10.3 12.5V12.4C10.5 12.2 10.4 11.8 10.7 11.6 10.7 11.7 10.7 11.8 10.6 11.8M10.3 10.6C10.3 10.5 10.4 10.4 10.5 10.4S10.6 10.5 10.6 10.5C10.6 10.6 10.5 10.7 10.5 10.7 10.4 10.8 10.3 10.7 10.3 10.6M10.6 8.5C10.5 8.6 10.5 8.7 10.6 8.7 10.7 8.9 10.6 9 10.5 9.2 10.4 9.1 10.4 9 10.3 8.9 10.3 8.8 10.3 8.8 10.4 8.7 10.5 8.7 10.5 8.6 10.5 8.5 10.5 8.3 10.7 8.2 10.8 8 10.9 7.9 10.9 7.9 11 7.7 11 7.6 11.1 7.5 11.1 7.6 11.2 7.7 11.3 7.8 11.2 7.9 11.1 8.1 11 8.2 10.9 8.4 10.9 8.4 10.8 8.5 10.8 8.4 10.7 8.5 10.7 8.4 10.6 8.5M11.1 9.8C11 9.8 11 9.9 11 10 10.9 9.9 10.8 9.8 10.9 9.7 10.9 9.7 11 9.6 11 9.7 11.1 9.7 11.1 9.7 11.1 9.8M11 11.2 11.2 11.5C11.2 11.6 11.1 11.7 11 11.7 10.9 11.6 10.8 11.5 10.8 11.4ZM11.5 15.5C11.4 15.4 11.4 15.4 11.4 15.3L11.5 15.2C11.6 15.3 11.6 15.3 11.7 15.3ZM11.6 14.5V14.3C11.7 14.3 11.7 14.4 11.7 14.4 11.8 14.5 11.7 14.5 11.6 14.5M11.7 12.9C11.6 12.8 11.6 12.7 11.5 12.7 11.4 12.6 11.4 12.6 11.3 12.7S11.1 13 11 13.1C11 13.2 11 13.3 11.1 13.3Q11.4 13.6 11.1 13.9C11 13.7 10.9 13.6 10.8 13.5V13.4C11.1 12.9 11.4 12.4 11.7 12 11.8 12.1 11.7 12.1 11.7 12.1 11.6 12.2 11.6 12.4 11.7 12.5 11.9 12.6 11.8 12.7 11.7 12.9M12.1 8.1C11.9 8.1 11.9 8.2 11.8 8.3 11.8 8.4 11.7 8.4 11.6 8.4 11.8 8.2 11.9 8 12 7.7 12 7.7 12 7.6 12.1 7.6S12.2 7.7 12.1 7.7V7.9C12.2 8 12.1 8.1 12.1 8.1M12.3 14.1C12.2 13.8 12 13.5 12.3 13.2L12.4 13.1C12.4 13.2 12.3 13.3 12.3 13.4S12.4 13.6 12.4 13.7V13.8C12.2 14 12.4 14.2 12.5 14.4 12.4 14.3 12.3 14.2 12.3 14.1M12.6 11.9C12.6 11.8 12.6 11.8 12.7 11.8 12.7 11.8 12.8 11.8 12.8 11.7V11.8C12.7 11.9 12.7 11.9 12.6 11.9 12.6 12 12.6 11.9 12.6 11.9M12.8 15.4C12.8 15.3 12.7 15.3 12.7 15.3H12.8S12.9 15.3 13 15.4ZM12.9 12.6V12.3S13 12.2 13.1 12.3 13.2 12.5 13.2 12.6 13.1 12.8 13.1 12.9C13 12.9 13 12.7 12.9 12.6M13.4 16.1S13.3 16 13.3 15.9C13.4 15.9 13.4 15.8 13.5 15.8S13.6 15.9 13.7 15.9C13.5 16 13.4 16.1 13.4 16.1M13.8 15.2C13.9 15.2 14.1 15.3 14.2 15.3 14 15.4 13.9 15.4 13.8 15.2M14.3 13.2C14.2 13.1 14.2 13 14.1 13 14 12.9 14 12.9 13.9 13S13.7 13.3 13.6 13.4C13.6 13.5 13.6 13.6 13.7 13.6Q14 13.9 13.7 14.2C13.6 14 13.5 13.9 13.4 13.8V13.7C13.7 13.2 14 12.7 14.3 12.3 14.4 12.4 14.3 12.4 14.3 12.4 14.2 12.5 14.2 12.7 14.3 12.8 14.5 12.9 14.4 13.1 14.3 13.2M14.7 15.9C14.6 15.9 14.6 15.9 14.5 16 14.5 15.9 14.6 15.8 14.6 15.7 14.7 15.8 14.8 15.9 14.7 15.9M15 11.2C15 11.4 14.9 11.6 14.8 11.7H14.7ZM15 12.9S15 13 14.9 13C14.9 13 14.8 13 14.8 12.9 14.7 12.8 14.6 12.6 14.7 12.4 14.8 12.3 14.8 12.3 14.9 12.4 14.9 12.5 15 12.5 15 12.6ZM15.1 7.6 14.8 7C15 7.1 15 7.3 15.1 7.6 15.2 7.6 15.2 7.7 15.2 7.8 15.4 8.1 15.3 8.3 15.1 8.5 15.1 8.4 15.2 8.3 15.1 8.2S15 7.9 15.1 7.8 15.2 7.6 15.1 7.6M15.7 13.7C15.8 13.8 15.9 14 16 14.1V14.2H15.9C15.9 14 15.7 13.9 15.7 13.7 15.5 13.6 15.6 13.8 15.5 13.9 15.4 13.8 15.3 13.6 15.5 13.4 15.5 13.3 15.6 13.4 15.6 13.4 15.6 13.5 15.7 13.6 15.7 13.7M16 12.6C16 12.7 16 12.8 15.9 12.8S15.8 12.7 15.8 12.6 15.8 12.4 15.9 12.4C15.9 12.5 16 12.5 16 12.6M15.9 10.7C15.9 10.8 15.8 10.9 15.8 11 15.7 10.9 15.7 10.8 15.6 10.7V10.4S15.7 10.3 15.8 10.4 15.9 10.6 15.9 10.7M15.6 8.7S15.7 8.7 15.6 8.7C15.7 8.7 15.8 8.8 15.8 8.9S15.8 9 15.7 9.1C15.6 9.1 15.7 9 15.6 9 15.5 8.9 15.6 8.8 15.6 8.7M15.9 4.9C16 4.7 15.7 4.5 15.9 4.3 16.1 4.6 16.1 4.6 15.9 4.9M15.8 7V7.2C15.7 7.3 15.7 7.4 15.7 7.5 15.6 7.3 15.5 7.1 15.6 6.9 15.6 6.8 15.4 6.3 15.4 6.3 15.2 6.4 15.2 6.2 15.1 6.2S15 6.1 15.1 6.1C15.1 6 15.2 5.9 15.2 5.9L15.3 6C15.5 6.3 15.7 6.7 15.8 7M15.6 5.1C15.7 5.2 15.7 5.3 15.7 5.4S15.7 5.6 15.6 5.6 15.5 5.5 15.5 5.4C15.5 5.2 15.5 5.1 15.6 5.1M15 3.1C15.3 3.3 15.5 3.7 15.7 4 15.4 3.8 15.3 3.4 15 3.1M15 4.1C15.3 4.5 15.3 4.4 15 4.9 15.1 4.6 15 4.3 15 4.1M15.3 9.6C15.3 9.7 15.3 9.8 15.4 9.9V10.1C15.3 10.1 15.3 10 15.3 10 15.1 9.8 15.2 9.7 15.3 9.6M16 16.4C15.8 16.4 15.5 16.5 15.3 16.5V16.4C15.5 16.3 15.8 16.2 16 16.2H16.2ZM16 8.4C15.9 8.2 15.9 7.9 16 7.7 16 7.6 16 7.5 15.9 7.4 16.2 7.8 16.2 8.1 16 8.4M13.3 1.2C14 1 14.6.7 15.3.8Q15.6.8 15.9 1.1C16.2 1.5 16.4 1.9 16.4 2.4 15.4 1.6 14.4 1.3 13.3 1.2",
        viewBox: "0 0 24 24",
        keywords: ["light", "lamp", "ikea"],
    },
}


async function getIcon(name) {
    let new_name;

    if (!(name in ICONS_MAP)) {
        // try swapping the '_' for a '-'
        new_name = name.replace(/_/gm, `-`);
        if (!(new_name in ICONS_MAP)) {
            console.log(`Icon "${name}" is not available`);
            return '';
        } else {
            console.log(`Aliased "${name}" with "${new_name}"`);
            return {
                path: ICONS_MAP[new_name].path,
                viewBox: ICONS_MAP[new_name].viewBox,
            };
        }
    }
    return { path: ICONS_MAP[name].path };
}
async function getIconList() {
    return Object.entries(ICONS_MAP).map(([icon, content]) => ({
        name: icon,
        keywords: content.keywords
    }));
}
window.customIcons = window.customIcons || {};
window.customIcons["iao"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["iao"] = getIcon;


console.info(
    `%c Iñaki's Icons %c Version 0.0.1 `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray"
);
