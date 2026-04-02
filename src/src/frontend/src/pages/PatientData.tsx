import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  CheckCircle2,
  ClipboardList,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type Region = "All" | "Karachi" | "Sindh" | "Balochistan" | "Punjab";

const screeningData = [
  {
    region: "Karachi",
    site: "KC",
    mho: "Sana Bibi",
    screened: 248,
    phq2: 89,
    gad2: 72,
    referred: 61,
  },
  {
    region: "Karachi",
    site: "Baba Island",
    mho: "Hina Kausar",
    screened: 134,
    phq2: 44,
    gad2: 38,
    referred: 31,
  },
  {
    region: "Sindh",
    site: "CHB",
    mho: "Asma Naz",
    screened: 187,
    phq2: 65,
    gad2: 54,
    referred: 44,
  },
  {
    region: "Sindh",
    site: "Makli",
    mho: "Zainab Khatri",
    screened: 156,
    phq2: 58,
    gad2: 47,
    referred: 39,
  },
  {
    region: "Sindh",
    site: "Matli",
    mho: "Fareeha Sial",
    screened: 143,
    phq2: 52,
    gad2: 41,
    referred: 34,
  },
  {
    region: "Sindh",
    site: "Khorwah",
    mho: "Nadia Bhutto",
    screened: 119,
    phq2: 43,
    gad2: 35,
    referred: 28,
  },
  {
    region: "Sindh",
    site: "Shadi Large",
    mho: "Saima Rajput",
    screened: 98,
    phq2: 34,
    gad2: 28,
    referred: 22,
  },
  {
    region: "Sindh",
    site: "Sehwan",
    mho: "Gulnaz Abbasi",
    screened: 112,
    phq2: 40,
    gad2: 32,
    referred: 26,
  },
  {
    region: "Balochistan",
    site: "Saranana",
    mho: "Rashid Ali",
    screened: 88,
    phq2: 32,
    gad2: 25,
    referred: 19,
  },
  {
    region: "Balochistan",
    site: "Nokundi",
    mho: "Muhammad Arif",
    screened: 74,
    phq2: 26,
    gad2: 20,
    referred: 15,
  },
  {
    region: "Punjab",
    site: "Gurmani",
    mho: "Rabia Manzoor",
    screened: 162,
    phq2: 57,
    gad2: 48,
    referred: 40,
  },
  {
    region: "Punjab",
    site: "Recep Tayyip Erdogan Hosp",
    mho: "Tahira Gilani",
    screened: 201,
    phq2: 70,
    gad2: 59,
    referred: 50,
  },
  {
    region: "Punjab",
    site: "Rajanpur",
    mho: "Sumbal Raza",
    screened: 138,
    phq2: 49,
    gad2: 40,
    referred: 33,
  },
  {
    region: "Punjab",
    site: "Samundari",
    mho: "Amna Butt",
    screened: 145,
    phq2: 52,
    gad2: 43,
    referred: 35,
  },
  {
    region: "Punjab",
    site: "Kot Addu",
    mho: "Shaista Nawaz",
    screened: 123,
    phq2: 44,
    gad2: 36,
    referred: 29,
  },
];

const enrollmentData = [
  {
    region: "Karachi",
    site: "KC",
    mho: "Sana Bibi",
    enrolled: 58,
    male: 22,
    female: 36,
    depression: 28,
    anxiety: 18,
    both: 12,
  },
  {
    region: "Karachi",
    site: "Baba Island",
    mho: "Hina Kausar",
    enrolled: 29,
    male: 10,
    female: 19,
    depression: 13,
    anxiety: 9,
    both: 7,
  },
  {
    region: "Sindh",
    site: "CHB",
    mho: "Asma Naz",
    enrolled: 42,
    male: 15,
    female: 27,
    depression: 19,
    anxiety: 13,
    both: 10,
  },
  {
    region: "Sindh",
    site: "Makli",
    mho: "Zainab Khatri",
    enrolled: 37,
    male: 13,
    female: 24,
    depression: 17,
    anxiety: 11,
    both: 9,
  },
  {
    region: "Sindh",
    site: "Matli",
    mho: "Fareeha Sial",
    enrolled: 32,
    male: 11,
    female: 21,
    depression: 15,
    anxiety: 10,
    both: 7,
  },
  {
    region: "Sindh",
    site: "Khorwah",
    mho: "Nadia Bhutto",
    enrolled: 26,
    male: 9,
    female: 17,
    depression: 12,
    anxiety: 8,
    both: 6,
  },
  {
    region: "Sindh",
    site: "Shadi Large",
    mho: "Saima Rajput",
    enrolled: 20,
    male: 7,
    female: 13,
    depression: 9,
    anxiety: 6,
    both: 5,
  },
  {
    region: "Sindh",
    site: "Sehwan",
    mho: "Gulnaz Abbasi",
    enrolled: 24,
    male: 8,
    female: 16,
    depression: 11,
    anxiety: 7,
    both: 6,
  },
  {
    region: "Balochistan",
    site: "Saranana",
    mho: "Rashid Ali",
    enrolled: 18,
    male: 7,
    female: 11,
    depression: 8,
    anxiety: 6,
    both: 4,
  },
  {
    region: "Balochistan",
    site: "Nokundi",
    mho: "Muhammad Arif",
    enrolled: 14,
    male: 5,
    female: 9,
    depression: 6,
    anxiety: 5,
    both: 3,
  },
  {
    region: "Punjab",
    site: "Gurmani",
    mho: "Rabia Manzoor",
    enrolled: 38,
    male: 14,
    female: 24,
    depression: 17,
    anxiety: 12,
    both: 9,
  },
  {
    region: "Punjab",
    site: "Recep Tayyip Erdogan Hosp",
    mho: "Tahira Gilani",
    enrolled: 47,
    male: 17,
    female: 30,
    depression: 21,
    anxiety: 15,
    both: 11,
  },
  {
    region: "Punjab",
    site: "Rajanpur",
    mho: "Sumbal Raza",
    enrolled: 31,
    male: 11,
    female: 20,
    depression: 14,
    anxiety: 10,
    both: 7,
  },
  {
    region: "Punjab",
    site: "Samundari",
    mho: "Amna Butt",
    enrolled: 33,
    male: 12,
    female: 21,
    depression: 15,
    anxiety: 11,
    both: 7,
  },
  {
    region: "Punjab",
    site: "Kot Addu",
    mho: "Shaista Nawaz",
    enrolled: 27,
    male: 10,
    female: 17,
    depression: 12,
    anxiety: 9,
    both: 6,
  },
];

const eotData = [
  {
    region: "Karachi",
    site: "KC",
    mho: "Sana Bibi",
    completed: 44,
    improved: 36,
    referred: 5,
    lost: 3,
  },
  {
    region: "Karachi",
    site: "Baba Island",
    mho: "Hina Kausar",
    completed: 22,
    improved: 18,
    referred: 2,
    lost: 2,
  },
  {
    region: "Sindh",
    site: "CHB",
    mho: "Asma Naz",
    completed: 34,
    improved: 27,
    referred: 4,
    lost: 3,
  },
  {
    region: "Sindh",
    site: "Makli",
    mho: "Zainab Khatri",
    completed: 29,
    improved: 23,
    referred: 3,
    lost: 3,
  },
  {
    region: "Sindh",
    site: "Matli",
    mho: "Fareeha Sial",
    completed: 25,
    improved: 20,
    referred: 3,
    lost: 2,
  },
  {
    region: "Sindh",
    site: "Khorwah",
    mho: "Nadia Bhutto",
    completed: 20,
    improved: 16,
    referred: 2,
    lost: 2,
  },
  {
    region: "Sindh",
    site: "Shadi Large",
    mho: "Saima Rajput",
    completed: 16,
    improved: 13,
    referred: 2,
    lost: 1,
  },
  {
    region: "Sindh",
    site: "Sehwan",
    mho: "Gulnaz Abbasi",
    completed: 18,
    improved: 15,
    referred: 2,
    lost: 1,
  },
  {
    region: "Balochistan",
    site: "Saranana",
    mho: "Rashid Ali",
    completed: 14,
    improved: 11,
    referred: 2,
    lost: 1,
  },
  {
    region: "Balochistan",
    site: "Nokundi",
    mho: "Muhammad Arif",
    completed: 11,
    improved: 9,
    referred: 1,
    lost: 1,
  },
  {
    region: "Punjab",
    site: "Gurmani",
    mho: "Rabia Manzoor",
    completed: 30,
    improved: 24,
    referred: 4,
    lost: 2,
  },
  {
    region: "Punjab",
    site: "Recep Tayyip Erdogan Hosp",
    mho: "Tahira Gilani",
    completed: 38,
    improved: 31,
    referred: 4,
    lost: 3,
  },
  {
    region: "Punjab",
    site: "Rajanpur",
    mho: "Sumbal Raza",
    completed: 24,
    improved: 19,
    referred: 3,
    lost: 2,
  },
  {
    region: "Punjab",
    site: "Samundari",
    mho: "Amna Butt",
    completed: 26,
    improved: 21,
    referred: 3,
    lost: 2,
  },
  {
    region: "Punjab",
    site: "Kot Addu",
    mho: "Shaista Nawaz",
    completed: 21,
    improved: 17,
    referred: 2,
    lost: 2,
  },
];

// Vivid region badge styles
const regionBadgeColors: Record<string, string> = {
  Karachi: "bg-blue-600 text-white",
  Sindh: "bg-emerald-600 text-white",
  Balochistan: "bg-amber-500 text-white",
  Punjab: "bg-purple-600 text-white",
};

// Colored left-border per summary card
const summaryCardBorders = [
  "border-l-4 border-l-[oklch(52%_0.18_195)]", // teal
  "border-l-4 border-l-[oklch(72%_0.18_68)]", // amber
  "border-l-4 border-l-emerald-500",
  "border-l-4 border-l-purple-500",
];

export default function PatientData() {
  const [region, setRegion] = useState<Region>("All");

  const filterByRegion = <T extends { region: string }>(data: T[]) =>
    region === "All" ? data : data.filter((d) => d.region === region);

  const filteredScreening = filterByRegion(screeningData);
  const filteredEnrollment = filterByRegion(enrollmentData);
  const filteredEOT = filterByRegion(eotData);

  const totalScreened = screeningData.reduce((s, d) => s + d.screened, 0);
  const totalEnrolled = enrollmentData.reduce((s, d) => s + d.enrolled, 0);
  const totalCompleted = eotData.reduce((s, d) => s + d.completed, 0);
  const totalImproved = eotData.reduce((s, d) => s + d.improved, 0);

  const summaryCards = [
    {
      icon: ClipboardList,
      label: "Total Screened",
      value: totalScreened,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Users,
      label: "Total Enrolled",
      value: totalEnrolled,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: CheckCircle2,
      label: "Completed Treatment",
      value: totalCompleted,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: TrendingUp,
      label: "Improved Outcomes",
      value: totalImproved,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <div className="teal-gradient py-14">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-6 h-6 text-primary-foreground/80" />
              <span className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-wider">
                MHO Program Records
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-3">
              Patient Data Dashboard
            </h1>
            <p className="text-primary-foreground/75 max-w-2xl text-base">
              Screening, Enrollment, and End of Treatment data recorded by
              Mental Health Officers (MHOs) across all PUZ sites and regions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-10">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {summaryCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              data-ocid={`patient.summary.card.${i + 1}`}
            >
              <Card className={`border-0 shadow-card ${summaryCardBorders[i]}`}>
                <CardContent className="p-6">
                  <div
                    className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-3`}
                  >
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <div
                    className={`font-display text-3xl font-bold ${card.color}`}
                  >
                    {card.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {card.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Region Filter */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-semibold text-foreground">
            Filter by Region:
          </span>
          <Select value={region} onValueChange={(v) => setRegion(v as Region)}>
            <SelectTrigger
              className="w-48 border-primary/30 focus:ring-primary"
              data-ocid="patient.region.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(
                ["All", "Karachi", "Sindh", "Balochistan", "Punjab"] as Region[]
              ).map((r) => (
                <SelectItem key={r} value={r}>
                  {r === "All" ? "All Regions" : r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="screening">
          <TabsList
            className="mb-6 h-auto p-1 gap-1 bg-secondary border border-border"
            data-ocid="patient.tabs"
          >
            <TabsTrigger
              value="screening"
              className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm font-medium"
              data-ocid="patient.screening.tab"
            >
              <ClipboardList className="w-4 h-4" /> Screening
            </TabsTrigger>
            <TabsTrigger
              value="enrollment"
              className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm font-medium"
              data-ocid="patient.enrollment.tab"
            >
              <Users className="w-4 h-4" /> Enrollments
            </TabsTrigger>
            <TabsTrigger
              value="eot"
              className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm font-medium"
              data-ocid="patient.eot.tab"
            >
              <CheckCircle2 className="w-4 h-4" /> End of Treatment
            </TabsTrigger>
          </TabsList>

          {/* Screening Tab */}
          <TabsContent value="screening">
            <Card className="border border-border shadow-card">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-lg text-foreground">
                  Screening Records
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary hover:bg-secondary">
                      <TableHead className="font-semibold text-foreground">
                        Region
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Site
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        MHO Name
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Total Screened
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        PHQ-2 Positive
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        GAD-2 Positive
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Referred for Assessment
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredScreening.map((row, i) => (
                      <TableRow
                        key={`${row.site}-${row.mho}`}
                        data-ocid={`screening.row.${i + 1}`}
                        className="hover:bg-secondary/40"
                      >
                        <TableCell>
                          <Badge
                            className={`${regionBadgeColors[row.region]} border-0 font-semibold text-xs`}
                          >
                            {row.region}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold text-foreground">
                          {row.site}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {row.mho}
                        </TableCell>
                        <TableCell className="text-right font-bold text-foreground">
                          {row.screened}
                        </TableCell>
                        <TableCell className="text-right font-medium text-blue-700">
                          {row.phq2}
                        </TableCell>
                        <TableCell className="text-right font-medium text-amber-700">
                          {row.gad2}
                        </TableCell>
                        <TableCell className="text-right font-bold text-primary">
                          {row.referred}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-secondary font-bold hover:bg-secondary">
                      <TableCell
                        colSpan={3}
                        className="font-bold text-foreground"
                      >
                        Total
                      </TableCell>
                      <TableCell className="text-right font-bold text-foreground">
                        {filteredScreening.reduce((s, d) => s + d.screened, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-blue-700">
                        {filteredScreening.reduce((s, d) => s + d.phq2, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-amber-700">
                        {filteredScreening.reduce((s, d) => s + d.gad2, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-primary">
                        {filteredScreening.reduce((s, d) => s + d.referred, 0)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enrollment Tab */}
          <TabsContent value="enrollment">
            <Card className="border border-border shadow-card">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-lg text-foreground">
                  Enrollment Records
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary hover:bg-secondary">
                      <TableHead className="font-semibold text-foreground">
                        Region
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Site
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        MHO Name
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Total Enrolled
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Male
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Female
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Depression
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Anxiety
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Both
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEnrollment.map((row, i) => (
                      <TableRow
                        key={`${row.site}-${row.mho}`}
                        data-ocid={`enrollment.row.${i + 1}`}
                        className="hover:bg-secondary/40"
                      >
                        <TableCell>
                          <Badge
                            className={`${regionBadgeColors[row.region]} border-0 font-semibold text-xs`}
                          >
                            {row.region}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold text-foreground">
                          {row.site}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {row.mho}
                        </TableCell>
                        <TableCell className="text-right font-bold text-foreground">
                          {row.enrolled}
                        </TableCell>
                        <TableCell className="text-right font-medium text-blue-700">
                          {row.male}
                        </TableCell>
                        <TableCell className="text-right font-medium text-pink-700">
                          {row.female}
                        </TableCell>
                        <TableCell className="text-right font-medium text-orange-700">
                          {row.depression}
                        </TableCell>
                        <TableCell className="text-right font-medium text-violet-700">
                          {row.anxiety}
                        </TableCell>
                        <TableCell className="text-right font-bold text-primary">
                          {row.both}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-secondary hover:bg-secondary">
                      <TableCell
                        colSpan={3}
                        className="font-bold text-foreground"
                      >
                        Total
                      </TableCell>
                      <TableCell className="text-right font-bold text-foreground">
                        {filteredEnrollment.reduce((s, d) => s + d.enrolled, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-blue-700">
                        {filteredEnrollment.reduce((s, d) => s + d.male, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-pink-700">
                        {filteredEnrollment.reduce((s, d) => s + d.female, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-orange-700">
                        {filteredEnrollment.reduce(
                          (s, d) => s + d.depression,
                          0,
                        )}
                      </TableCell>
                      <TableCell className="text-right font-bold text-violet-700">
                        {filteredEnrollment.reduce((s, d) => s + d.anxiety, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-primary">
                        {filteredEnrollment.reduce((s, d) => s + d.both, 0)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* EOT Tab */}
          <TabsContent value="eot">
            <Card className="border border-border shadow-card">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-lg text-foreground">
                  End of Treatment Records
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary hover:bg-secondary">
                      <TableHead className="font-semibold text-foreground">
                        Region
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Site
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        MHO Name
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Completed Treatment
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Improved
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Referred to Psychiatry
                      </TableHead>
                      <TableHead className="text-right font-semibold text-foreground">
                        Lost to Follow-up
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEOT.map((row, i) => (
                      <TableRow
                        key={`${row.site}-${row.mho}`}
                        data-ocid={`eot.row.${i + 1}`}
                        className="hover:bg-secondary/40"
                      >
                        <TableCell>
                          <Badge
                            className={`${regionBadgeColors[row.region]} border-0 font-semibold text-xs`}
                          >
                            {row.region}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold text-foreground">
                          {row.site}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {row.mho}
                        </TableCell>
                        <TableCell className="text-right font-bold text-foreground">
                          {row.completed}
                        </TableCell>
                        <TableCell className="text-right font-bold text-emerald-700">
                          {row.improved}
                        </TableCell>
                        <TableCell className="text-right font-medium text-amber-700">
                          {row.referred}
                        </TableCell>
                        <TableCell className="text-right font-medium text-red-600">
                          {row.lost}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-secondary hover:bg-secondary">
                      <TableCell
                        colSpan={3}
                        className="font-bold text-foreground"
                      >
                        Total
                      </TableCell>
                      <TableCell className="text-right font-bold text-foreground">
                        {filteredEOT.reduce((s, d) => s + d.completed, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-emerald-700">
                        {filteredEOT.reduce((s, d) => s + d.improved, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-amber-700">
                        {filteredEOT.reduce((s, d) => s + d.referred, 0)}
                      </TableCell>
                      <TableCell className="text-right font-bold text-red-600">
                        {filteredEOT.reduce((s, d) => s + d.lost, 0)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
