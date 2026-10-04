import { Share2 } from 'lucide-react'

export default function ShareButton({ title, text, className = 'btn-outline' }) {
  const share = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url })
        return
      } catch {
        return
      }
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`, '_blank', 'noopener')
  }

  return (
    <button type="button" onClick={share} className={className}>
      <Share2 size={18} /> Share
    </button>
  )
}