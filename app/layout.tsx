import "./globals.css";
import { ReactNode } from "react";


export const metadata = {
title: "스타트포인트 인테리어",
description: "공간의 가치를 설계하는 파트너",
};


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="ko">
<body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
{/* Header */}
<header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
<a href="#hero" className="flex items-center gap-2">
<span className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600" />
<span className="text-xl font-extrabold tracking-tight text-emerald-700">StartPoint</span>
</a>
<nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
<a href="#services" className="hover:text-emerald-600">서비스</a>
<a href="#portfolio" className="hover:text-emerald-600">포트폴리오</a>
<a href="#process" className="hover:text-emerald-600">프로세스</a>
<a href="#reviews" className="hover:text-emerald-600">후기</a>
<a href="#faq" className="hover:text-emerald-600">FAQ</a>
<a href="#contact" className="rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">문의하기</a>
</nav>
</div>
</header>


{children}


{/* Footer */}
<footer className="mt-20 border-t bg-white">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 md:grid-cols-3">
<div>
<div className="mb-3 flex items-center gap-2">
<span className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600" />
<span className="text-lg font-bold text-emerald-700">StartPoint Interior</span>
</div>
<p className="text-sm text-gray-600">공간의 가치를 설계하는 파트너. 주거/상업 리모델링, 브랜딩 인테리어 전문.</p>
</div>
<div className="text-sm text-gray-600">
<p className="font-semibold text-gray-800">Contact</p>
<p className="mt-2">📞 010-0000-0000</p>
<p>✉️ contact@startpoint.kr</p>
<p>📍 대구 · 경북</p>
</div>
<div className="text-sm text-gray-600">
<p className="font-semibold text-gray-800">Links</p>
<p className="mt-2"><a href="#portfolio" className="hover:text-emerald-600">포트폴리오</a></p>
<p><a href="#process" className="hover:text-emerald-600">진행 프로세스</a></p>
<p><a href="#contact" className="hover:text-emerald-600">문의하기</a></p>
</div>
</div>
<div className="border-t bg-gray-50">
<div className="mx-auto max-w-7xl px-5 py-4 text-center text-xs text-gray-500">© 2025 스타트포인트 인테리어. All rights reserved.</div>
</div>
</footer>
</body>
</html>
);
}
