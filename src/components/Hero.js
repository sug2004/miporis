import React from 'react';
import {
  PieChart, Pie, Cell,
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis,
  ResponsiveContainer,
} from 'recharts';

const pieData = [
  { name: 'Revenue', value: 40 },
  { name: 'Expenses', value: 30 },
  { name: 'Profit', value: 30 },
];

const lineData = [
  { name: 'Q1', uv: 60 },
  { name: 'Q2', uv: 80 },
  { name: 'Q3', uv: 70 },
  { name: 'Q4', uv: 100 },
];

const barData = [
  { name: 'Assets', value: 90 },
  { name: 'Liabilities', value: 50 },
  { name: 'Equity', value: 40 },
];

const colors = ['#00FFC6', '#FFD700', '#FF6B6B', '#34A853', '#A259FF'];

const chartConfigs = [
  { type: 'pie', label: 'Revenue', top: '12%', left: '5%', scale: '1.3', rotate: '-8deg' },
  { type: 'bar', label: 'Equity', top: '20%', right: '6%', scale: '1.4', rotate: '10deg' },
  { type: 'line', label: 'Growth', bottom: '8%', left: '7%', scale: '1.2', rotate: '-4deg' },
  { type: 'pie', label: 'Capital', top: '65%', right: '10%', scale: '1.2', rotate: '6deg' },
  { type: 'bar', label: 'Assets', top: '50%', left: '22%', scale: '1.3', rotate: '-4deg' },
  { type: 'line', label: 'Forecast', top: '38%', left: '65%', scale: '1.1', rotate: '5deg' },
  { type: 'pie', label: 'Cost', bottom: '6%', right: '26%', scale: '1.1', rotate: '-10deg' },
  { type: 'bar', label: 'Margins', top: '28%', left: '40%', scale: '1.2', rotate: '3deg' },
  { type: 'line', label: 'Risk Index', top: '70%', left: '10%', scale: '1.1', rotate: '-7deg' },
  { type: 'pie', label: 'Liquidity', top: '15%', right: '30%', scale: '1.2', rotate: '8deg' },
];

const ChartWithLabel = ({ type, label, ...style }) => (
  <div
    className="absolute hover:scale-110 transition-all duration-300 text-white text-xs text-center"
    style={{
      ...style,
      transform: `rotate(${style.rotate}) scale(${style.scale})`,
      width: `${36 * parseFloat(style.scale)}px`,
      height: `${36 * parseFloat(style.scale)}px`,
    }}
  >
    <div className="opacity-80 mb-1">{label}</div>
    <ResponsiveContainer width="100%" height="100%">
      {type === 'pie' ? (
        <PieChart>
          <Pie
            data={pieData}
            innerRadius={10}
            outerRadius={18}
            dataKey="value"
            paddingAngle={2}
          >
            {pieData.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      ) : type === 'bar' ? (
        <BarChart data={barData}>
          <Bar dataKey="value" fill={colors[1]} radius={[4, 4, 0, 0]} />
          <XAxis hide />
          <YAxis hide />
        </BarChart>
      ) : (
        <LineChart data={lineData}>
          <Line
            type="monotone"
            dataKey="uv"
            stroke={colors[0]}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      )}
    </ResponsiveContainer>
  </div>
);

export default function Hero() {
  return (
    <div className="relative h-[80vh] bg-[#121826] text-white flex items-center justify-center overflow-hidden px-4">
      {/* Floating charts */}
      {chartConfigs.map((cfg, i) => (
        <ChartWithLabel key={i} {...cfg} />
      ))}

      {/* Hero Text Content */}
      <div className="relative z-10 max-w-2xl bg-white/10 backdrop-blur-md rounded-xl px-8 py-10 border border-white/10 shadow-lg text-center">
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-900 text-sm font-semibold tracking-wide">
            ✨ Trusted by 10,000+ companies worldwide
          </span>
        </div>
        <h1 className="mb-3 font-serif font-extrabold text-white tracking-wide text-[24px] leading-[32px] md:text-[34px] md:leading-[42px] lg:text-[40px] lg:leading-[48px] uppercase relative">
          Redefining Corporate Governance with <span className="text-[#00FFC6]">AI</span>
        </h1>
        <p className="font-sans mb-6 mt-3 font-light text-gray-300 text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]">
          In a dynamic regulatory environment, organizations must proactively ensure control, manage risks, and maintain operational transparency. MIPORIS provides a comprehensive, AI-powered solution to support these efforts, enhancing corporate governance, streamlining control, and empowering effective decision-making.
        </p>
        <div className="flex justify-center">
          <a href="/signup">
            <button className="text-white bg-gradient-to-r from-[#0070BC] to-[#00FFC6] hover:brightness-110 font-bold rounded-lg text-base px-7 py-3 shadow-lg transition-all">
              Start your free trial
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
