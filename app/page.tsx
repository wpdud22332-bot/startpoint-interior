"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Hammer, Paintbrush, Home, Building2,
  ArrowRight, CheckCircle2, Star, Facebook, Instagram, Youtube,
  MessageSquare, Sparkles, Send,
} from "lucide-react";

/* =========================
 * SETTINGS
 * ========================= */
const COMPANY = {
  name: "스타트포인트 인테리어",
  tagline: "공간의 가치를 설계하는 파트너",
  phone: "010-0000-0000",
  email: "contact@startpoint.kr",
  address: "서울시 강남구 ○○로 00",
  kakao: "https://pf.kakao.com/_YOUR_ID_",
} as const;

const NAV = [
  { name: "서비스", href: "#services" },
  { name: "포트폴리오", href: "#portfolio" },
  { name: "프로세스", href: "#process" },
  { name: "후기", href: "#reviews" },
  { name: "문의", href: "#contact" },
] as const;

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Service = { title: string; desc: string; icon: IconType; bullets: string[] };

const SERVICES: Service[] = [
  { title: "주거 인테리어", desc: "아파트, 빌라, 단독주택 리모델링 및 부분 시공", icon: Home, bullets: ["3D 컨셉 제안", "가성비 자재 큐레이션", "철저한 하자 A/S"] },
  { title: "상업 공간", desc: "카페·식당·오피스·매장 브랜드 공간 설계", icon: Building2, bullets: ["BI·컬러 시스템 연동", "동선 최적화", "오픈일 역산 스케줄"] },
  { title: "부분 시공", desc: "도장·조명·바닥·몰딩·가벽·도어 교체 등", icon: Paintbrush, bullets: ["소규모도 친절 시공", "당일 견적", "먼지·소음 관리"] },
];

const PORTFOLIO = [
  { title: "한남동 카페 리뉴얼", tag: "상업/카페", cover: "#c2e9fb,#a1c4fd" },
  { title: "분당 아파트 전체 리모델링", tag: "주거/아파트", cover: "#fbc2eb,#a6c1ee" },
  { title: "송도 오피스 라운지", tag: "상업/오피스", cover: "#fdfbfb,#ebedee" },
  { title: "부산 브랜딩 매장", tag: "상업/리테일", cover: "#d4fc79,#96e6a1" },
  { title: "용산 단독주택 키친", tag: "주거/주택", cover: "#84fab0,#8fd3f4" },
  { title: "판교 코워킹 스페이스", tag: "상업/오피스", cover: "#a1c4fd,#c2e9fb" },
] as const;

const PROCESS = [
  { step: 1, title: "상담/현장 방문", desc: "요구사항 확인, 예산·일정·스타일 진단" },
  { step: 2, title: "컨셉/견적 제안", desc: "무드보드·3D 컨셉·자재 샘플, 투명 견적" },
  { step: 3, title: "시공/관리", desc: "일일 공정 공유, 안전·품질 관리, 변경 즉시 반영" },
  { step: 4, title: "검수/인도", desc: "체크리스트 기반 검수, 하자 접수 채널 운영" },
] as const;

const REVIEWS = [
  { name: "김민서", text: "동선이 완전히 달라졌어요. 공정 공유가 매일 와서 믿음이 갔습니다.", rating: 5 },
  { name: "박재현", text: "브랜드 컬러에 맞춘 소재 제안이 탁월했습니다. 재오픈 일정도 정확히 맞췄습니다.", rating: 5 },
  { name: "이서윤", text: "부분시공인데도 꼼꼼하게 해주셔서 감동. 다음엔 전체 리모델링도 맡기고 싶어요.", rating: 5 },
] as const;

/* =========================
 * UI BASICS (타입 명시)
 * ========================= */
type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
const Button = ({ className = "", children, href, ...props }: ButtonProps) => {
  const Comp: any = href ? "a" : "button";
  return (
    <Comp
      {...props}
      href={href}
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium shadow-sm hover:shadow transition border border-black/5 bg-white/80 backdrop-blur ${className}`}
    >
      {children}
    </Comp>
  );
};

const Card = ({ className = "", children }: { className?: string; children?: React.ReactNode }) => (
  <div className={`rounded-2xl border border-black/5 bg-white/70 backdrop-blur shadow-sm ${className}`}>{children}</div>
);

const Badge = ({ children }: { children?: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs">{children}</span>
);

/* =========================
 * HELPERS
 * ========================= */
const GradientThumb = ({ colors }: { colors: string }) => (
  <div className="h-56 w-full rounded-2xl" style={{ background: `linear-gradient(135deg, ${colors})` }} />
);

/* =========================
 * PAGE
 * ========================= */
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 text-zinc-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5" /> {COMPANY.name}
          </a>
          <nav className="hidden gap-6 md:flex">
            {NAV.map((n) => (
              <a key={n.name} href={n.href} className="text-sm text-zinc-600 hover:text-zinc-900">
                {n.name}
              </a>
            ))}
          </nav>
          <Button href={`tel:${COMPANY.phone}`} className="bg-zinc-900 text-white hover:bg-zinc-800">
            <Phone className="h-4 w-4" /> 상담하기
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden>
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gradient-to-tr from-zinc-200 to-white blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-gradient-to-tr from-white to-zinc-200 blur-2xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
            <Badge>
              <span className="inline-flex items-center gap-1">
                <Hammer className="h-4 w-4" /> 리모델링 · 상업공간 · 부분시공
              </span>
            </Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              브랜드와 일상을 바꾸는 <span className="underline decoration-zinc-300">디자인·시공</span>
            </h1>
            <p className="mt-4 max-w-xl text-zinc-600">
              {COMPANY.tagline}. 예산·일정을 지키는 체계적인 공정관리로 결과로 증명합니다.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={`tel:${COMPANY.phone}`} className="bg-zinc-900 text-white hover:bg-zinc-800">
                <Phone className="h-4 w-4" /> {COMPANY.phone}
              </Button>
              <Button href={`mailto:${COMPANY.email}`} className="hover:bg-zinc-100">
                <Mail className="h-4 w-4" /> 이메일 문의
              </Button>
              <Button href={COMPANY.kakao} className="hover:bg-yellow-100">
                <MessageSquare className="h-4 w-4" /> 카카오톡
              </Button>
            </div>
            <ul className="mt-6 grid max-w-xl grid-cols-2 gap-2 text-sm text-zinc-600">
              {["일일 공정 공유", "자재 투명 견적", "하자보증 1년", "A/S 접수 24시간"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-black/5 bg-white/60 shadow">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.04),transparent_60%),linear-gradient(135deg,#f2f2f2,#ffffff)]" />
                <div className="absolute bottom-4 right-4 rounded-xl border border-black/5 bg-white/80 px-3 py-2 text-xs shadow">
                  시공 현장 일일 리포트 미리보기
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 className="text-2xl font-bold md:text-3xl" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          무엇을 도와드릴까요?
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
              <Card className="h-full p-6">
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" /> {b}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 className="text-2xl font-bold md:text-3xl" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          포트폴리오
        </motion.h2>
        <p className="mt-2 text-zinc-600">실제 사진으로 교체하세요. 각 카드 클릭 시 상세 소개 페이지로 연결하도록 라우팅을 붙일 수 있습니다.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <motion.a key={p.title} href="#" className="group" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
              <Card className="overflow-hidden">
                <GradientThumb colors={p.cover} />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.title}</h3>
                    <Badge>{p.tag}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-zinc-600">공사기간 3주 · 25평 · 북유럽 내추럴</p>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 className="text-2xl font-bold md:text-3xl" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          진행 프로세스
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          {PROCESS.map((p) => (
            <motion.div key={p.step} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
              <Card className="h-full p-6 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">{p.step}</div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{p.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 className="text-2xl font-bold md:text-3xl" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          고객 후기
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
              <Card className="h-full p-6">
                <div className="flex items-center gap-2">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-zinc-700">“{r.text}”</p>
                <p className="mt-3 text-xs text-zinc-500">— {r.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 className="text-2xl font-bold md:text-3xl" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          무료 상담 신청
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div className="md:col-span-2" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
            <Card className="p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = Object.fromEntries(new FormData(form).entries());
                  alert(`상담 요청이 접수되었습니다.\n이름: ${data.name}\n연락처: ${data.phone}\n유형: ${data.type}\n내용: ${data.message}`);
                  form.reset();
                }}
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <div>
                  <label className="text-sm">이름</label>
                  <input name="name" required className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-200" />
                </div>
                <div>
                  <label className="text-sm">연락처</label>
                  <input name="phone" required className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-200" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm">공간 유형</label>
                  <select name="type" className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-200">
                    <option>주거</option>
                    <option>상업</option>
                    <option>부분시공</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm">요청 내용</label>
                  <textarea name="message" rows={5} className="mt-1 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-200" />
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800">
                    <Send className="h-4 w-4" /> 상담 요청 보내기
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
            <Card className="h-full p-6">
              <h3 className="font-semibold">연락처</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {COMPANY.phone}</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {COMPANY.email}</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {COMPANY.address}</p>
              </div>
              <div className="mt-6 h-48 w-full overflow-hidden rounded-xl border border-black/10 bg-[linear-gradient(135deg,#f6f6f6,#ffffff)]">
                <div className="flex h-full items-center justify-center text-xs text-zinc-500">여기에 지도를 삽입하세요</div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Button href={COMPANY.kakao} className="hover:bg-yellow-100"><MessageSquare className="h-4 w-4" /> 카카오톡 채널</Button>
                <Button className="hover:bg-zinc-100"><Instagram className="h-4 w-4" /> 인스타그램</Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA STRIP + FOOTER */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <Card className="flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
          <div>
            <h3 className="text-lg font-semibold">지금 무료 방문견적 받아보세요</h3>
            <p className="text-sm text-zinc-600">원하시는 날짜에 맞춰 현장 방문드리고, 자재/공정/예산을 투명하게 설명드립니다.</p>
          </div>
          <div className="flex gap-2">
            <Button href={`tel:${COMPANY.phone}`} className="bg-zinc-900 text-white hover:bg-zinc-800"><Phone className="h-4 w-4" /> 전화상담</Button>
            <Button href={`mailto:${COMPANY.email}`} className="hover:bg-zinc-100"><Mail className="h-4 w-4" /> 이메일</Button>
          </div>
        </Card>
      </section>

      <footer className="border-t border-black/5 bg-white/60 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold"><Sparkles className="h-5 w-5" />{COMPANY.name}</div>
            <p className="mt-3 text-sm text-zinc-600">{COMPANY.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold">바로가기</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV.map((n) => (<li key={n.name}><a href={n.href} className="text-zinc-600 hover:text-zinc-900">{n.name}</a></li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">연락처</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {COMPANY.phone}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {COMPANY.email}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {COMPANY.address}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">소셜</h4>
            <div className="mt-3 flex items-center gap-2">
              <Button className="hover:bg-zinc-100"><Instagram className="h-4 w-4" /> Instagram</Button>
              <Button className="hover:bg-zinc-100"><Youtube className="h-4 w-4" /> YouTube</Button>
              <Button className="hover:bg-zinc-100"><Facebook className="h-4 w-4" /> Facebook</Button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl px-4 text-xs text-zinc-500">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
      </footer>
    </div>
  );
}
