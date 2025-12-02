import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Night Owl - The city sleeps. We don\'t.';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0D0D0D',
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(244, 114, 182, 0.1) 0%, transparent 40%)',
        }}
      >
        {/* Stars */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
          }}
        >
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                backgroundColor: 'white',
                borderRadius: '50%',
                opacity: 0.3 + (i % 5) * 0.1,
                left: `${(i * 37) % 100}%`,
                top: `${(i * 23) % 100}%`,
              }}
            />
          ))}
        </div>

        {/* Moon */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '100px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
            boxShadow: '0 0 60px rgba(252, 211, 77, 0.4)',
            display: 'flex',
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          {/* Logo Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              marginBottom: '30px',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)',
            }}
          >
            {/* Moon Icon */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: 'white',
              marginBottom: '16px',
              display: 'flex',
            }}
          >
            Night Owl
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 500,
              background: 'linear-gradient(90deg, #8B5CF6, #F472B6, #8B5CF6)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            The city sleeps. We don&apos;t.
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '24px',
              color: '#A1A1AA',
              textAlign: 'center',
              maxWidth: '700px',
              lineHeight: 1.5,
              display: 'flex',
            }}
          >
            A safe, anonymous social space for night owls. Connect through mood-based matching, share thoughts, and join live audio lounges.
          </div>

          {/* Feature Pills */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '40px',
            }}
          >
            {['Mood Matching', 'Anonymous', 'Audio Lounges', 'Privacy First'].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: '12px 24px',
                  borderRadius: '100px',
                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: '#C4B5FD',
                  fontSize: '18px',
                  fontWeight: 500,
                  display: 'flex',
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to top, rgba(139, 92, 246, 0.1), transparent)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
