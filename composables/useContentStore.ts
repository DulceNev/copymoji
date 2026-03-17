export interface ContentItem {
  content: string
  tags: string[]
  category: 'Kaomojis' | 'Separadores' | 'Simbolos'
}

const defaultItems: ContentItem[] = [
  // === KAOMOJIS ===
  // Positivo
  { content: '(≧◡≦) ♡', tags: ['positivo', 'amor'], category: 'Kaomojis' },
  { content: '(๑˃ᴗ˂)ﻭ', tags: ['positivo'], category: 'Kaomojis' },
  { content: '(≧ω≦)ゞ', tags: ['positivo', 'baile'], category: 'Kaomojis' },
  { content: '(˶ᵔ ᵕ ᵔ˶)', tags: ['positivo', 'amor'], category: 'Kaomojis' },
  { content: '(ﾉ´ヮ`)ﾉ*:・゚✧', tags: ['positivo', 'baile'], category: 'Kaomojis' },
  { content: '(｡˃ ᵕ ˂ )ﾉ', tags: ['positivo'], category: 'Kaomojis' },
  { content: '(*≧▽≦)', tags: ['positivo'], category: 'Kaomojis' },
  { content: '(๑>ᴗ<๑)', tags: ['positivo'], category: 'Kaomojis' },
  { content: '(☆▽☆)', tags: ['positivo'], category: 'Kaomojis' },
  { content: '(✧ω✧)', tags: ['positivo'], category: 'Kaomojis' },

  // Negativo
  { content: '(╥_╥)', tags: ['negativo'], category: 'Kaomojis' },
  { content: '(;´༎ຶД༎ຶ`)', tags: ['negativo'], category: 'Kaomojis' },
  { content: '(´;ω;`)', tags: ['negativo'], category: 'Kaomojis' },
  { content: '(｡•́︿•̀｡)', tags: ['negativo'], category: 'Kaomojis' },
  { content: '(っ˘̩╭╮˘̩)っ', tags: ['negativo', 'amor'], category: 'Kaomojis' },
  { content: '(╬▔皿▔)╯', tags: ['negativo'], category: 'Kaomojis' },
  { content: '(ノಠ益ಠ)ノ彡┻━┻', tags: ['negativo'], category: 'Kaomojis' },
  { content: '(≖_≖ )', tags: ['negativo'], category: 'Kaomojis' },
  { content: '(；⌣̀_⌣́)', tags: ['negativo'], category: 'Kaomojis' },

  // Amor
  { content: '(づ｡◕‿‿◕｡)づ', tags: ['amor'], category: 'Kaomojis' },
  { content: '(❁´◡`❁)', tags: ['amor'], category: 'Kaomojis' },
  { content: '(♡˙︶˙♡)', tags: ['amor'], category: 'Kaomojis' },
  { content: '(´,,•ω•,,)♡', tags: ['amor'], category: 'Kaomojis' },
  { content: '(〃ω〃)', tags: ['amor'], category: 'Kaomojis' },
  { content: '(⺣◡⺣)♡*', tags: ['amor'], category: 'Kaomojis' },
  { content: '♡(>ᴗ•)', tags: ['amor'], category: 'Kaomojis' },

  // Baile
  { content: '♪(┌・。・)┌', tags: ['baile', 'positivo'], category: 'Kaomojis' },
  { content: '┌(★ｏ☆)┘', tags: ['baile'], category: 'Kaomojis' },
  { content: '♪♪ ヽ(ˇ∀ˇ )ゞ', tags: ['baile'], category: 'Kaomojis' },
  { content: '(ノ˚Д˚)ノ', tags: ['baile'], category: 'Kaomojis' },
  { content: '〜(꒪꒳꒪)〜', tags: ['baile'], category: 'Kaomojis' },

  // Animales
  { content: '(=^・ω・^=)', tags: ['animales'], category: 'Kaomojis' },
  { content: 'ʕ•ᴥ•ʔ', tags: ['animales'], category: 'Kaomojis' },
  { content: '(・⊝・)', tags: ['animales'], category: 'Kaomojis' },
  { content: '(◕ᴗ◕✿)', tags: ['animales'], category: 'Kaomojis' },
  { content: '(=①ω①=)', tags: ['animales'], category: 'Kaomojis' },
  { content: 'ʕ·ᴥ·ʔ', tags: ['animales'], category: 'Kaomojis' },

  // === SEPARADORES ===
  { content: '⋆｡˚ ✦ ⋆｡˚ ✦ ⋆｡˚', tags: ['estrellas'], category: 'Separadores' },
  { content: '─ ✦ ─ ✦ ─ ✦ ─', tags: ['estrellas'], category: 'Separadores' },
  { content: '✧・゚: *✧・゚:*', tags: ['estrellas'], category: 'Separadores' },
  { content: '☆═══════════════☆', tags: ['estrellas'], category: 'Separadores' },
  { content: '⋆⁺₊⋆ ☀︎ ⋆⁺₊⋆', tags: ['estrellas'], category: 'Separadores' },
  { content: '♡˖⁺‧₊˚✧˚₊‧⁺˖♡', tags: ['corazones'], category: 'Separadores' },
  { content: '♡─────────────♡', tags: ['corazones'], category: 'Separadores' },
  { content: '♥━━━━━━━━━━━━♥', tags: ['corazones'], category: 'Separadores' },
  { content: '❤︎∙∙·▫▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫▫·∙∙❤︎', tags: ['corazones'], category: 'Separadores' },
  { content: '❀ ══ ❀ ══ ❀', tags: ['primavera'], category: 'Separadores' },
  { content: '✿═══════════════✿', tags: ['primavera'], category: 'Separadores' },
  { content: '❁ ════════════ ❁', tags: ['primavera'], category: 'Separadores' },
  { content: '୨୧‿‿‿‿‿‿‿‿‿‿‿‿‿୨❀୧‿‿‿‿‿‿‿‿‿‿‿‿‿୨୧', tags: ['lazos'], category: 'Separadores' },
  { content: '⋅˚₊‧ ୨୧ ‧₊˚ ⋅', tags: ['lazos'], category: 'Separadores' },
  { content: '═══ ୨୧ ═══', tags: ['lazos'], category: 'Separadores' },
  { content: '🐾┈┈┈┈┈┈┈┈┈┈🐾', tags: ['animales'], category: 'Separadores' },
  { content: '🦋⋆⁺₊⋆🦋⋆⁺₊⋆🦋', tags: ['animales'], category: 'Separadores' },

  // === SIMBOLOS ===
  { content: '♥', tags: ['rojo'], category: 'Simbolos' },
  { content: '❤', tags: ['rojo'], category: 'Simbolos' },
  { content: '❣', tags: ['rojo'], category: 'Simbolos' },
  { content: '♦', tags: ['rojo'], category: 'Simbolos' },
  { content: '💙', tags: ['azul'], category: 'Simbolos' },
  { content: '💎', tags: ['azul', 'oceano'], category: 'Simbolos' },
  { content: '🫧', tags: ['azul', 'oceano'], category: 'Simbolos' },
  { content: '🍓', tags: ['fruta', 'rojo'], category: 'Simbolos' },
  { content: '🍒', tags: ['fruta', 'rojo'], category: 'Simbolos' },
  { content: '🍑', tags: ['fruta', 'rosa'], category: 'Simbolos' },
  { content: '🍇', tags: ['fruta'], category: 'Simbolos' },
  { content: '🍉', tags: ['fruta'], category: 'Simbolos' },
  { content: '🍋', tags: ['fruta'], category: 'Simbolos' },
  { content: '🐚', tags: ['oceano'], category: 'Simbolos' },
  { content: '🌊', tags: ['oceano', 'azul'], category: 'Simbolos' },
  { content: '🐠', tags: ['oceano', 'animales'], category: 'Simbolos' },
  { content: '🦈', tags: ['oceano', 'animales'], category: 'Simbolos' },
  { content: '⚓', tags: ['oceano'], category: 'Simbolos' },
  { content: '♡', tags: ['rosa'], category: 'Simbolos' },
  { content: '🌸', tags: ['rosa'], category: 'Simbolos' },
  { content: '🎀', tags: ['rosa'], category: 'Simbolos' },
  { content: '💗', tags: ['rosa'], category: 'Simbolos' },
  { content: '🩰', tags: ['rosa'], category: 'Simbolos' },
  { content: '🐾', tags: ['animales'], category: 'Simbolos' },
  { content: '🦋', tags: ['animales'], category: 'Simbolos' },
  { content: '🐱', tags: ['animales'], category: 'Simbolos' },
  { content: '🐰', tags: ['animales'], category: 'Simbolos' },
  { content: '🦊', tags: ['animales'], category: 'Simbolos' },
  { content: '✦', tags: ['b&n'], category: 'Simbolos' },
  { content: '✧', tags: ['b&n'], category: 'Simbolos' },
  { content: '☆', tags: ['b&n'], category: 'Simbolos' },
  { content: '❀', tags: ['b&n'], category: 'Simbolos' },
  { content: '◈', tags: ['b&n'], category: 'Simbolos' },
  { content: '▪', tags: ['b&n'], category: 'Simbolos' },
]

const STORAGE_KEY = 'copymoji_content'

export function useContentStore() {
  const items = useState<ContentItem[]>('contentItems', () => [])
  const activeFilter = useState<string>('activeFilter', () => '')
  const searchQuery = useState<string>('searchQuery', () => '')

  function load() {
    if (import.meta.server) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        items.value = JSON.parse(raw) as ContentItem[]
      } else {
        items.value = [...defaultItems]
        save()
      }
    } catch {
      items.value = [...defaultItems]
    }
  }

  function save() {
    if (import.meta.server) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value))
  }

  function addItem(item: ContentItem) {
    items.value.push(item)
    save()
  }

  function getFiltered(category: ContentItem['category']) {
    return computed(() => {
      let filtered = items.value.filter(i => i.category === category)
      if (activeFilter.value) {
        filtered = filtered.filter(i => i.tags.includes(activeFilter.value.toLowerCase()))
      }
      if (searchQuery.value) {
        const q = searchQuery.value.toLowerCase()
        filtered = filtered.filter(i =>
          i.content.toLowerCase().includes(q) ||
          i.tags.some(t => t.includes(q))
        )
      }
      return filtered
    })
  }

  function setFilter(tag: string) {
    activeFilter.value = activeFilter.value === tag ? '' : tag
    searchQuery.value = ''
  }

  function clearFilters() {
    activeFilter.value = ''
    searchQuery.value = ''
  }

  return { items, activeFilter, searchQuery, load, addItem, getFiltered, setFilter, clearFilters }
}
