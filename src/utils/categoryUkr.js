
export const categoryUkr = (b) => {
  switch (b) {
    case "man":
      return "чоловiкам"
    case "women":
      return "жiнкам"
    case "kids":
      return "дiтям"
    case "home":
      return "дiм"
    case "clothes":
      return "одяг"
    case "accessories":
      return "аксесуари"
    case "cosmetics":
      return "косметика"
    case "lounge":
      return "вітальня"
    case "bathroom":
      return "ванна кімната"
    case "bedroom":
      return "спальня"
    case "kitchen":
      return "кухня"
    default:
      return b
  }
}