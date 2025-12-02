import Logo from './Logo'
import { EmailCaptureForm } from './EmailCaptureForm'

export default function Hero() {
    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="flex items-center mb-6">
                    <Logo className="w-60 h-40 mb-6" />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">Hadar's Magic Documentation Tool</h2>
                        <p className="text-xl mb-8 text-gray-800">Stop writing tutorials manually. Turn your product videos into clear, professional how-to guides that your users will love.</p>
                        <EmailCaptureForm />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 600 400"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full min-w-[300px] max-w-[600px] h-auto mx-auto"
                        >
                            {/* Video player */}
                            <rect x="50" y="80" width="240" height="240" rx="12" fill="#1E293B" />

                            {/* Play button centered */}
                            <circle cx="170" cy="200" r="35" fill="#374151" opacity="0.9" />
                            <path d="M160 185L190 200L160 215V185Z" fill="white" />

                            {/* Progress bar */}
                            <rect x="70" y="280" width="200" height="4" rx="2" fill="#4B5563" />
                            <rect x="70" y="280" width="60" height="4" rx="2" fill="#2979FF" />

                            {/* Document card */}
                            <rect x="340" y="80" width="220" height="240" rx="12" fill="white" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />

                            {/* Content - All aligned to same x coordinate */}
                            <text x="360" y="115" fontFamily="Open Sans, sans-serif" fontSize="18" fontWeight="600">Your Tutorial is Ready</text>

                            <text x="360" y="145" fontFamily="Open Sans, sans-serif" fontSize="14" fill="#4B5563">
                                <tspan x="360" dy="0">Turn your videos into written</tspan>
                                <tspan x="360" dy="20">tutorials with DocIt</tspan>
                            </text>

                            {/* Bullet points aligned */}
                            <g transform="translate(360, 195)" fontFamily="Open Sans, sans-serif" fontSize="14" fill="#374151">
                                <circle cx="0" cy="0" r="3" fill="#2979FF" />
                                <text x="10" y="4">Clear step-by-step guide</text>

                                <circle cx="0" cy="30" r="3" fill="#2979FF" />
                                <text x="10" y="34">Key moments captured</text>

                                <circle cx="0" cy="60" r="3" fill="#2979FF" />
                                <text x="10" y="64">Ready to share</text>
                            </g>

                            {/* Button - Smaller and properly positioned */}
                            <rect x="360" y="270" width="85" height="30" rx="15" fill="#2979FF" />
                            <text x="372" y="290" fontFamily="Open Sans, sans-serif" fontSize="12" fill="white">Start Now →</text>

                            {/* Simple Arrow */}
                            <path
                                d="M290 200 L330 200"
                                stroke="#2979FF"
                                strokeWidth="2"
                            />
                            <path
                                d="M320 190 L330 200 L320 210"
                                stroke="#2979FF"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>
                </div>
                <div className="absolute top-4 right-4">
                    <span className="text-gray-400 cursor-not-allowed font-semibold">Log In</span>
                </div>
            </div>
            <div className="w-full h-px bg-gray-200 mt-16"></div>
        </section>
    )
}
