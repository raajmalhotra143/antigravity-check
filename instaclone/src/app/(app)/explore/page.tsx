const EXPLORE_IMAGES = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=80',
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=300&q=80',
  'https://images.unsplash.com/photo-1514565131-fce0801e6785?w=300&q=80',
  'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=300&q=80',
  'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300&q=80',
  'https://images.unsplash.com/photo-1540206395-68808572332f?w=300&q=80',
  'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=300&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&q=80',
]

const LIKES = [1847, 934, 2103, 3221, 4892, 723, 1238, 3044, 561, 2891, 417, 1093]
const COMMENTS = [42, 18, 67, 94, 127, 23, 55, 88, 12, 76, 9, 34]

export default function ExplorePage() {
  return (
    <div style={{ maxWidth: '935px', margin: '0 auto', padding: '20px 24px' }}>
      {/* Search */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            className="input-field"
            type="text"
            placeholder="Search"
            style={{ paddingLeft: '42px' }}
            id="explore-search"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="explore-grid">
        {EXPLORE_IMAGES.map((img, i) => (
          <div className={`explore-cell${i === 0 ? ' featured' : ''}`} key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={`explore ${i}`} loading="lazy" />
            <div className="explore-cell-overlay">
              <span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                {LIKES[i].toLocaleString()}
              </span>
              <span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                {COMMENTS[i]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
