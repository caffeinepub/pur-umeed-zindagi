import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const PageHeader = ({
  title,
  subtitle,
}: { title: string; subtitle?: string }) => (
  <div className="py-16" style={{ background: "oklch(25% 0.15 145)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-3"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </div>
);

const regions = [
  {
    id: "karachi",
    name: "Karachi",
    color: "oklch(35% 0.18 200)",
    lightBg: "oklch(94% 0.04 200)",
    sites: [
      {
        name: "KC (Korangi Campus)",
        address: "Indus Hospital, Korangi Campus, Karachi",
        label: "PCP",
      },
      {
        name: "Baba Island",
        address: "Baba Island Health Facility, Karachi",
        label: "PCP",
      },
    ],
  },
  {
    id: "sindh",
    name: "Sindh",
    color: "oklch(35% 0.2 145)",
    lightBg: "oklch(94% 0.04 145)",
    sites: [
      {
        name: "CHB (Civil Hospital Badin)",
        address: "Civil Hospital Badin, Badin, Sindh",
        label: "PCP",
      },
      {
        name: "Makli",
        address: "Makli Health Facility, Thatta, Sindh",
        label: "PCP",
      },
      {
        name: "Matli",
        address: "Matli District Hospital, Badin, Sindh",
        label: "PCP",
      },
      {
        name: "Khorwah",
        address: "Khorwah Health Center, Sindh",
        label: "PCP",
      },
      {
        name: "Shadi Large",
        address: "Shadi Large, Sindh",
        label: "PCP",
      },
      {
        name: "Sehwan",
        address: "Sehwan Health Facility, Jamshoro, Sindh",
        label: "PCP",
      },
      {
        name: "MMB (Medical Mobile Bus)",
        address: "Mobile Health Unit — Sindh Region",
        label: "Mobile",
      },
    ],
  },
  {
    id: "balochistan",
    name: "Balochistan",
    color: "oklch(40% 0.15 60)",
    lightBg: "oklch(94% 0.04 60)",
    sites: [
      {
        name: "Saranan",
        address: "Saranan Primary Care Program, Balochistan",
        label: "PCP",
      },
      {
        name: "Nokundi",
        address: "Nokundi Primary Care Program, Balochistan",
        label: "PCP",
      },
    ],
  },
  {
    id: "punjab",
    name: "Punjab",
    color: "oklch(40% 0.15 300)",
    lightBg: "oklch(94% 0.04 300)",
    sites: [
      {
        name: "Gurmani",
        address: "Gurmani Health Facility, Punjab",
        label: "PCP",
      },
      {
        name: "Recep Tayyip Erdogan Hospital (RTEH)",
        address: "Recep Tayyip Erdogan Hospital, Punjab",
        label: "PCP",
      },
      {
        name: "Rajanpur",
        address: "Rajanpur District Hospital, Punjab",
        label: "PCP",
      },
      {
        name: "Samundri",
        address: "Samundri Health Center, Faisalabad, Punjab",
        label: "PCP",
      },
      {
        name: "Kot Addu",
        address: "Kot Addu Hospital, Muzaffargarh, Punjab",
        label: "PCP",
      },
    ],
  },
];

export default function Regions() {
  const [active, setActive] = useState("karachi");
  const activeRegion = regions.find((r) => r.id === active)!;

  return (
    <div className="bg-white">
      <PageHeader
        title="Regions & Sites"
        subtitle="17+ active sites across 4 regions of Pakistan"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-3 mb-10" data-ocid="regions.tab">
            {regions.map((r) => (
              <button
                type="button"
                key={r.id}
                onClick={() => setActive(r.id)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all"
                style={{
                  background: active === r.id ? r.color : "white",
                  borderColor:
                    active === r.id ? r.color : "oklch(88% 0.03 145)",
                  color: active === r.id ? "white" : "oklch(30% 0.06 145)",
                  boxShadow:
                    active === r.id
                      ? `0 4px 14px ${r.color}40`
                      : "0 1px 3px oklch(60% 0.02 145 / 0.1)",
                }}
                data-ocid="regions.tab"
              >
                {r.name} ({r.sites.length} sites)
              </button>
            ))}
          </div>

          {/* Sites Grid */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: activeRegion.color }}
              />
              <h2
                className="text-2xl font-bold"
                style={{ color: "oklch(20% 0.06 145)" }}
              >
                {activeRegion.name} Region
              </h2>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: activeRegion.lightBg,
                  color: activeRegion.color,
                }}
              >
                {activeRegion.sites.length} sites
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeRegion.sites.map((site, i) => (
                <motion.div
                  key={site.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="rounded-2xl p-6 border card-hover bg-white"
                  style={{
                    borderColor: "oklch(88% 0.03 145)",
                    boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                  }}
                  data-ocid={`regions.item.${i + 1}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: activeRegion.lightBg }}
                    >
                      <MapPin
                        className="w-5 h-5"
                        style={{ color: activeRegion.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="font-bold text-base"
                          style={{ color: "oklch(20% 0.06 145)" }}
                        >
                          {site.name}
                        </h3>
                        {site.label && (
                          <span
                            className="px-2 py-0.5 rounded text-xs font-semibold"
                            style={{
                              background: activeRegion.lightBg,
                              color: activeRegion.color,
                            }}
                          >
                            {site.label}
                          </span>
                        )}
                      </div>
                      <p
                        className="text-sm"
                        style={{ color: "oklch(50% 0.04 145)" }}
                      >
                        {site.address}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary bar */}
      <section className="py-12" style={{ background: "oklch(25% 0.15 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {regions.map((r) => (
              <div key={r.id}>
                <div className="text-3xl font-bold text-white">
                  {r.sites.length}
                </div>
                <div className="text-white/70 text-sm">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
