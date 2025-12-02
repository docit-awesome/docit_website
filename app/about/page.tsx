import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 p-8">
            <div className="max-w-4xl mx-auto pt-12">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
                >
                    <span className="mr-2">←</span> Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-6 tracking-tight">About DocIt</h1>

                <div className="prose prose-lg text-gray-700">
                    <p className="text-xl leading-relaxed">
                        DocIt is on a mission to revolutionize technical documentation. We believe that
                        turning product videos into clear, professional written guides should be instant
                        and effortless.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        By leveraging advanced AI, we help product teams, developers, and support agents
                        save hours of manual writing time. Our goal is to ensure your documentation is
                        always as fresh and engaging as your latest video demo.
                    </p>
                </div>
            </div>
        </main>
    );
}
