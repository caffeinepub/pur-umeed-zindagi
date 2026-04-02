import { Link } from "@tanstack/react-router";
import { useState } from "react";

type Language = "english" | "roman_urdu" | "urdu" | "sindhi";
type Answer = 0 | 1 | 2 | 3;

const phq4Data = {
  english: {
    title: "PHQ-4 Self Screening",
    subtitle: "Mental Health Self-Assessment",
    instruction:
      "Over the last 2 weeks, how often have you been bothered by the following problems?",
    questions: [
      "Over the last 2 weeks, how often have you been feeling nervous, anxious, or on edge?",
      "Over the last 2 weeks, how often have you not been able to stop or control worrying?",
      "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
      "Over the last 2 weeks, how often have you been feeling down, depressed, or hopeless?",
    ],
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
    submit: "Get My Result",
    restart: "Take Again",
    back: "Back to Home",
    checkboxLabel:
      "I understand that this is a screening tool and not a diagnosis.",
    disclaimer: {
      title: "Disclaimer",
      lines: [
        "This self-assessment tool (PHQ-4) is intended for informational and screening purposes only. It is not a diagnostic tool and does not replace professional medical or psychological advice, diagnosis, or treatment.",
        "If you are experiencing emotional distress, anxiety, or depression, please consult a qualified mental health professional.",
        "If you are in crisis or having thoughts of self-harm, seek immediate help from a local emergency service or helpline.",
      ],
    },
    results: {
      title: "Your Result",
      anxiety: "Anxiety Score",
      depression: "Depression Score",
      total: "Total Score",
      levels: {
        minimal: {
          label: "Minimal",
          color: "text-green-600",
          bg: "bg-green-50 border-green-200",
        },
        mild: {
          label: "Mild",
          color: "text-yellow-600",
          bg: "bg-yellow-50 border-yellow-200",
        },
        moderate: {
          label: "Moderate",
          color: "text-orange-600",
          bg: "bg-orange-50 border-orange-200",
        },
        severe: {
          label: "Severe",
          color: "text-red-600",
          bg: "bg-red-50 border-red-200",
        },
      },
      advice: {
        minimal:
          "Your scores suggest minimal symptoms. Continue maintaining good mental health practices.",
        mild: "Your scores suggest mild symptoms. Consider speaking with a healthcare provider for guidance.",
        moderate:
          "Your scores suggest moderate symptoms. We recommend consulting a mental health professional.",
        severe:
          "Your scores suggest severe symptoms. Please seek immediate support from a mental health professional.",
      },
      contact: "For support, contact Pur Umeed Zindagi:",
      email: "Purumeedzindagi@outlook.com",
      disclaimer:
        "Note: This is a screening tool only and does not constitute a clinical diagnosis. Please consult a qualified healthcare professional for proper evaluation and treatment.",
    },
  },
  roman_urdu: {
    title: "PHQ-4 Khud Jaanchi",
    subtitle: "Zehni Sehat Ka Khud Andaza",
    instruction:
      "Pichlay 2 hafton mein, aap neeche diye gaye masail se kitni baar pareshan rahe?",
    questions: [
      "Pichlay 2 hafton mein aap kitni dafa nervous, anxious ya bechain mehsoos karte rahe?",
      "Pichlay 2 hafton mein aap kitni dafa apni fikar ko rok nahi paaye ya control nahi kar paaye?",
      "Pichlay 2 hafton mein aap kitni dafa cheezon mein dilchaspi ya khushi kam mehsoos karte rahe?",
      "Pichlay 2 hafton mein aap kitni dafa udaasi, depression ya mayoosi mehsoos karte rahe?",
    ],
    options: ["Bilkul nahi", "Kuch din", "Adhe se zyada din", "Lagbhag roz"],
    submit: "Nateeja Dekho",
    restart: "Dobara Karo",
    back: "Home Par Wapas",
    checkboxLabel:
      "Main samajhta hoon ke yeh sirf screening tool hai, diagnosis nahi.",
    disclaimer: {
      title: "Disclaimer",
      lines: [
        "Yeh self-assessment tool (PHQ-4) sirf maloomat aur screening ke liye hai. Yeh kisi bhi qisam ki tashkhees (diagnosis) ya professional medical ya psychological mashwaray ka badal nahi hai.",
        "Agar aap anxiety, depression ya kisi emotional pareshani ka samna kar rahe hain to barah-e-karam kisi qualified mental health professional se rabta karein.",
        "Agar aap crisis mein hain ya khud nuqsan pohanchane ke khayalat aa rahe hain to foran kisi emergency service ya helpline se rabta karein.",
      ],
    },
    results: {
      title: "Aapka Nateeja",
      anxiety: "Anxiety Score",
      depression: "Depression Score",
      total: "Kul Score",
      levels: {
        minimal: {
          label: "Bahut Kam",
          color: "text-green-600",
          bg: "bg-green-50 border-green-200",
        },
        mild: {
          label: "Halka",
          color: "text-yellow-600",
          bg: "bg-yellow-50 border-yellow-200",
        },
        moderate: {
          label: "Darmiyani",
          color: "text-orange-600",
          bg: "bg-orange-50 border-orange-200",
        },
        severe: {
          label: "Shadeed",
          color: "text-red-600",
          bg: "bg-red-50 border-red-200",
        },
      },
      advice: {
        minimal:
          "Aapke scores se pata chalta hai ke symptoms bahut kam hain. Acha khayal rakho.",
        mild: "Aapke scores se halke symptoms nazar aate hain. Kisi doctor se baat karein.",
        moderate:
          "Aapke scores se darmiyani symptoms nazar aate hain. Kisi mental health professional se milein.",
        severe:
          "Aapke scores se shadeed symptoms nazar aate hain. Fauran kisi mental health professional se rabta karein.",
      },
      contact: "Madad ke liye Pur Umeed Zindagi se rabta karein:",
      email: "Purumeedzindagi@outlook.com",
      disclaimer:
        "Yaad rahe: Yeh sirf ek screening tool hai, clinical diagnosis nahi. Sahi andaza aur ilaaj ke liye kisi qualified doctor se zaroor milein.",
    },
  },
  urdu: {
    title: "PHQ-4 خود جانچ",
    subtitle: "ذہنی صحت کا خود اندازہ",
    instruction: "گزشتہ 2 ہفتوں میں، آپ درج ذیل مسائل سے کتنی بار پریشان رہے؟",
    questions: [
      "گزشتہ 2 ہفتوں میں آپ نے کتنی بار گھبراہٹ، بے چینی یا بے قراری محسوس کی؟",
      "گزشتہ 2 ہفتوں میں آپ کتنی بار اپنی فکر کو روکنے یا کنٹرول کرنے میں ناکام رہے؟",
      "گزشتہ 2 ہفتوں میں آپ نے کتنی بار کاموں میں دلچسپی یا خوشی کم محسوس کی؟",
      "گزشتہ 2 ہفتوں میں آپ نے کتنی بار اداسی، ڈپریشن یا مایوسی محسوس کی؟",
    ],
    options: ["بالکل نہیں", "کچھ دن", "آدھے سے زیادہ دن", "تقریباً روز"],
    submit: "نتیجہ دیکھیں",
    restart: "دوبارہ کریں",
    back: "ہوم پر واپس",
    checkboxLabel: "میں سمجھتا ہوں کہ یہ صرف اسکریننگ ٹول ہے، تشخیص نہیں۔",
    disclaimer: {
      title: "ڈسکلیمر",
      lines: [
        "یہ سیلف اسیسمنٹ ٹول (PHQ-4) صرف معلومات اور ابتدائی جانچ (اسکریننگ) کے لیے ہے۔ یہ کسی بھی قسم کی تشخیص یا پیشہ ورانہ طبی یا نفسیاتی مشورے کا متبادل نہیں ہے۔",
        "اگر آپ بے چینی، ڈپریشن یا کسی جذباتی پریشانی کا سامنا کر رہے ہیں تو براہِ کرم کسی مستند ماہرِ نفسیات یا ڈاکٹر سے رجوع کریں۔",
        "اگر آپ کسی ہنگامی کیفیت میں ہیں یا خود کو نقصان پہنچانے کے خیالات آ رہے ہیں تو فوری طور پر قریبی ایمرجنسی سروس یا ہیلپ لائن سے رابطہ کریں۔",
      ],
    },
    results: {
      title: "آپ کا نتیجہ",
      anxiety: "اضطراب کا اسکور",
      depression: "ڈپریشن کا اسکور",
      total: "کل اسکور",
      levels: {
        minimal: {
          label: "بہت کم",
          color: "text-green-600",
          bg: "bg-green-50 border-green-200",
        },
        mild: {
          label: "ہلکا",
          color: "text-yellow-600",
          bg: "bg-yellow-50 border-yellow-200",
        },
        moderate: {
          label: "درمیانہ",
          color: "text-orange-600",
          bg: "bg-orange-50 border-orange-200",
        },
        severe: {
          label: "شدید",
          color: "text-red-600",
          bg: "bg-red-50 border-red-200",
        },
      },
      advice: {
        minimal:
          "آپ کے اسکور سے پتا چلتا ہے کہ علامات بہت کم ہیں۔ ذہنی صحت کا خیال رکھیں۔",
        mild: "آپ کے اسکور سے ہلکی علامات نظر آتی ہیں۔ کسی ڈاکٹر سے مشورہ کریں۔",
        moderate:
          "آپ کے اسکور سے درمیانی علامات نظر آتی ہیں۔ کسی ذہنی صحت کے پیشہ ور سے ملیں۔",
        severe:
          "آپ کے اسکور سے شدید علامات نظر آتی ہیں۔ فوری طور پر کسی ذہنی صحت کے پیشہ ور سے رابطہ کریں۔",
      },
      contact: "مدد کے لیے پُر امید زندگی سے رابطہ کریں:",
      email: "Purumeedzindagi@outlook.com",
      disclaimer:
        "یاد رہے: یہ صرف ایک اسکریننگ ٹول ہے، کلینیکل تشخیص نہیں۔ صحیح اندازہ اور علاج کے لیے کسی qualified ڈاکٹر سے ضرور ملیں۔",
    },
  },
  sindhi: {
    title: "PHQ-4 پاڻ جانچ",
    subtitle: "ذهني صحت جو پاڻ اندازو",
    instruction:
      "گذريل 2 هفتن ۾، توهان هيٺ ڏنل مسئلن سان ڪيترا ڀيرا پريشان رهيا؟",
    questions: [
      "گذريل 2 هفتن ۾ توهان ڪيترا ڀيرا nervous، anxious يا بيچين محسوس ڪيو؟",
      "گذريل 2 هفتن ۾ توهان ڪيترا ڀيرا پنهنجي فڪر کي روڪڻ يا ڪنٽرول ڪرڻ ۾ ناڪام رهيا؟",
      "گذريل 2 هفتن ۾ توهان ڪيترا ڀيرا ڪمن ۾ دلچسپي يا خوشي گهٽ محسوس ڪئي؟",
      "گذريل 2 هفتن ۾ توهان ڪيترا ڀيرا اداسي، ڊپريشن يا مايوسي محسوس ڪئي؟",
    ],
    options: ["بلڪل نه", "ڪجهه ڏينهن", "اڌ کان وڌيڪ ڏينهن", "لڳ ڀڳ روز"],
    submit: "نتيجو ڏسو",
    restart: "ٻيهر ڪريو",
    back: "هوم تي واپس",
    checkboxLabel: "مان سمجهان ٿو ته هي صرف اسڪريننگ ٽول آهي، تشخيص ناهي۔",
    disclaimer: {
      title: "ڊسڪليمر",
      lines: [
        "هي self-assessment tool (PHQ-4) رڳو ڄاڻ ۽ ابتدائي اسڪريننگ لاءِ آهي. هي ڪنهن به قسم جي تشخيص (Diagnosis) يا پيشاور طبي يا نفسياتي صلاح جو متبادل ناهي.",
        "جيڪڏهن توهان پريشاني، ڊپريشن يا ڪنهن به جذباتي مسئلي کي محسوس ڪري رهيا آهيو، مهرباني ڪري ڪنهن ماهر نفسيات يا ڊاڪٽر سان رابطو ڪريو.",
        "جيڪڏهن توهان ڪنهن هنگامي حالت ۾ آهيو يا پاڻ کي نقصان پهچائڻ جا خيال اچي رهيا آهن، ته فوراً ويجهي ايمرجنسي سروس يا هيلپ لائين سان رابطو ڪريو.",
      ],
    },
    results: {
      title: "توهان جو نتيجو",
      anxiety: "Anxiety Score",
      depression: "Depression Score",
      total: "ڪل اسڪور",
      levels: {
        minimal: {
          label: "تمام گهٽ",
          color: "text-green-600",
          bg: "bg-green-50 border-green-200",
        },
        mild: {
          label: "هلڪو",
          color: "text-yellow-600",
          bg: "bg-yellow-50 border-yellow-200",
        },
        moderate: {
          label: "وچولو",
          color: "text-orange-600",
          bg: "bg-orange-50 border-orange-200",
        },
        severe: {
          label: "شديد",
          color: "text-red-600",
          bg: "bg-red-50 border-red-200",
        },
      },
      advice: {
        minimal:
          "توهان جي اسڪورن مان ظاهر ٿئي ٿو ته علامتون تمام گهٽ آهن. ذهني صحت جو خيال رکو.",
        mild: "توهان جي اسڪورن مان هلڪي علامتون نظر اچن ٿيون. ڪنهن ڊاڪٽر سان صلاح ڪريو.",
        moderate:
          "توهان جي اسڪورن مان وچولي علامتون نظر اچن ٿيون. ڪنهن ذهني صحت جي ماهر سان ملو.",
        severe:
          "توهان جي اسڪورن مان شديد علامتون نظر اچن ٿيون. فوري طور ڪنهن ذهني صحت جي ماهر سان رابطو ڪريو.",
      },
      contact: "مدد لاءِ پر اميد زندگي سان رابطو ڪريو:",
      email: "Purumeedzindagi@outlook.com",
      disclaimer:
        "ياد رهي: هي صرف هڪ اسڪريننگ ٽول آهي، ڪلينيڪل تشخيص نه. صحيح اندازو ۽ علاج لاءِ ڪنهن qualified ڊاڪٽر سان ضرور ملو.",
    },
  },
};

function getLevel(score: number): "minimal" | "mild" | "moderate" | "severe" {
  if (score <= 2) return "minimal";
  if (score <= 5) return "mild";
  if (score <= 8) return "moderate";
  return "severe";
}

const QUESTION_KEYS = ["q1", "q2", "q3", "q4"];
const OPTION_KEYS = ["opt0", "opt1", "opt2", "opt3"];

export default function SelfScreening() {
  const [language, setLanguage] = useState<Language>("english");
  const [answers, setAnswers] = useState<(Answer | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);

  const data = phq4Data[language];
  const isRtl = language === "urdu" || language === "sindhi";

  const allAnswered = answers.every((a) => a !== null);

  const handleAnswer = (qIndex: number, value: Answer) => {
    const updated = [...answers];
    updated[qIndex] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    if (allAnswered && disclaimerChecked) setSubmitted(true);
  };

  const handleRestart = () => {
    setAnswers([null, null, null, null]);
    setSubmitted(false);
    setDisclaimerChecked(false);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setAnswers([null, null, null, null]);
    setSubmitted(false);
    setDisclaimerChecked(false);
  };

  const anxietyScore = (answers[0] ?? 0) + (answers[1] ?? 0);
  const depressionScore = (answers[2] ?? 0) + (answers[3] ?? 0);
  const totalScore = anxietyScore + depressionScore;
  const totalLevel = getLevel(totalScore);
  const anxietyLevel = getLevel(anxietyScore);
  const depressionLevel = getLevel(depressionScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-medium text-green-700 transition-colors hover:text-green-800"
          >
            <svg
              role="img"
              aria-label="Back arrow"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {data.back}
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-green-800">
              Pur Umeed Zindagi
            </h1>
            <p className="text-xs text-gray-500">
              Indus Hospital &amp; Health Network
            </p>
          </div>
          <div className="w-24" />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* Language Selector */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(["english", "roman_urdu", "urdu", "sindhi"] as Language[]).map(
            (lang) => (
              <button
                type="button"
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  language === lang
                    ? "border-green-700 bg-green-700 text-white shadow"
                    : "border-green-300 bg-white text-green-700 hover:bg-green-50"
                }`}
              >
                {lang === "english"
                  ? "English"
                  : lang === "roman_urdu"
                    ? "Roman Urdu"
                    : lang === "urdu"
                      ? "اردو"
                      : "سنڌي"}
              </button>
            ),
          )}
        </div>

        {!submitted ? (
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            {/* Title */}
            <div className="bg-gradient-to-r from-green-700 to-teal-600 px-6 py-6 text-center text-white">
              <div className="mb-3 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <svg
                    role="img"
                    aria-label="Screening form icon"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold" dir={isRtl ? "rtl" : "ltr"}>
                {data.title}
              </h2>
              <p className="mt-1 text-green-100" dir={isRtl ? "rtl" : "ltr"}>
                {data.subtitle}
              </p>
            </div>

            <div className="p-6">
              {/* Disclaimer Box */}
              <div
                className="mb-6 rounded-xl border-2 border-amber-300 bg-amber-50 p-5"
                dir={isRtl ? "rtl" : "ltr"}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-lg">⚠️</span>
                  <h3 className="font-bold text-amber-800 text-sm uppercase tracking-wide">
                    {data.disclaimer.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {data.disclaimer.lines.map((line) => (
                    <li
                      key={line.substring(0, 20)}
                      className="flex gap-2 text-sm text-amber-900"
                    >
                      <span className="mt-0.5 shrink-0 text-amber-600">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p
                className="mb-6 text-center text-sm italic text-gray-600"
                dir={isRtl ? "rtl" : "ltr"}
              >
                {data.instruction}
              </p>

              {/* Questions */}
              <div className="space-y-6">
                {data.questions.map((question, qIndex) => (
                  <div
                    key={QUESTION_KEYS[qIndex]}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-5"
                  >
                    <p
                      className={`mb-4 font-medium text-gray-800 ${isRtl ? "text-right" : "text-left"}`}
                      dir={isRtl ? "rtl" : "ltr"}
                    >
                      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                        {qIndex + 1}
                      </span>
                      {question}
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {data.options.map((option, oIndex) => (
                        <button
                          type="button"
                          key={OPTION_KEYS[oIndex]}
                          onClick={() => handleAnswer(qIndex, oIndex as Answer)}
                          className={`rounded-lg border-2 p-3 text-sm font-medium transition-all ${
                            answers[qIndex] === oIndex
                              ? "scale-105 border-green-700 bg-green-700 text-white shadow-md"
                              : "border-gray-200 bg-white text-gray-600 hover:border-green-400 hover:bg-green-50"
                          }`}
                          dir={isRtl ? "rtl" : "ltr"}
                        >
                          <div className="mb-1 text-center text-xs opacity-70">
                            ({oIndex})
                          </div>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Checkbox Acknowledgement */}
              <div
                className="mt-6 rounded-xl border-2 border-green-200 bg-green-50 p-4"
                dir={isRtl ? "rtl" : "ltr"}
              >
                <label
                  className={`flex cursor-pointer items-start gap-3 ${isRtl ? "flex-row-reverse" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={disclaimerChecked}
                    onChange={(e) => setDisclaimerChecked(e.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-green-700"
                  />
                  <span className="text-sm font-medium text-green-800">
                    {data.checkboxLabel}
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!allAnswered || !disclaimerChecked}
                  className={`rounded-full px-8 py-3 text-lg font-bold text-white transition-all ${
                    allAnswered && disclaimerChecked
                      ? "bg-green-700 shadow-lg hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl"
                      : "cursor-not-allowed bg-gray-300"
                  }`}
                >
                  {data.submit}
                </button>
                {(!allAnswered || !disclaimerChecked) && (
                  <p className="mt-2 text-sm text-gray-400">
                    {!allAnswered
                      ? "Please answer all 4 questions"
                      : "Please check the acknowledgement box"}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Results */
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="bg-gradient-to-r from-green-700 to-teal-600 px-6 py-6 text-center text-white">
              <div className="mb-3 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <svg
                    role="img"
                    aria-label="Checkmark result icon"
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold" dir={isRtl ? "rtl" : "ltr"}>
                {data.results.title}
              </h2>
            </div>

            <div className="p-6">
              {/* Score Cards */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                <div
                  className={`rounded-xl border p-4 text-center ${data.results.levels[anxietyLevel].bg}`}
                >
                  <div
                    className="mb-1 text-xs text-gray-500"
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    {data.results.anxiety}
                  </div>
                  <div className="text-3xl font-black text-gray-800">
                    {anxietyScore}
                  </div>
                  <div
                    className={`mt-1 text-xs font-semibold ${data.results.levels[anxietyLevel].color}`}
                  >
                    {data.results.levels[anxietyLevel].label}
                  </div>
                </div>
                <div
                  className={`rounded-xl border p-4 text-center ${data.results.levels[depressionLevel].bg}`}
                >
                  <div
                    className="mb-1 text-xs text-gray-500"
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    {data.results.depression}
                  </div>
                  <div className="text-3xl font-black text-gray-800">
                    {depressionScore}
                  </div>
                  <div
                    className={`mt-1 text-xs font-semibold ${data.results.levels[depressionLevel].color}`}
                  >
                    {data.results.levels[depressionLevel].label}
                  </div>
                </div>
                <div
                  className={`rounded-xl border p-4 text-center ${data.results.levels[totalLevel].bg}`}
                >
                  <div
                    className="mb-1 text-xs text-gray-500"
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    {data.results.total}
                  </div>
                  <div className="text-3xl font-black text-gray-800">
                    {totalScore}
                  </div>
                  <div
                    className={`mt-1 text-xs font-semibold ${data.results.levels[totalLevel].color}`}
                  >
                    {data.results.levels[totalLevel].label}
                  </div>
                </div>
              </div>

              {/* Score Scale */}
              <div className="mb-5">
                <div className="mb-1 flex h-4 overflow-hidden rounded-full">
                  <div className="flex-1 bg-green-400" />
                  <div className="flex-1 bg-yellow-400" />
                  <div className="flex-1 bg-orange-400" />
                  <div className="flex-1 bg-red-400" />
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>0</span>
                  <span>3</span>
                  <span>6</span>
                  <span>9</span>
                  <span>12</span>
                </div>
              </div>

              {/* Advice */}
              <div
                className={`mb-5 rounded-xl border-2 p-5 ${data.results.levels[totalLevel].bg}`}
              >
                <p
                  className={`font-medium ${data.results.levels[totalLevel].color}`}
                  dir={isRtl ? "rtl" : "ltr"}
                >
                  {data.results.advice[totalLevel]}
                </p>
              </div>

              {/* Contact */}
              <div className="mb-5 rounded-xl border border-green-200 bg-green-50 p-4 text-center">
                <p
                  className="text-sm text-gray-600"
                  dir={isRtl ? "rtl" : "ltr"}
                >
                  {data.results.contact}
                </p>
                <a
                  href="mailto:Purumeedzindagi@outlook.com"
                  className="font-semibold text-green-700 hover:underline"
                >
                  {data.results.email}
                </a>
              </div>

              {/* Disclaimer */}
              <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p
                  className="text-center text-xs italic text-amber-700"
                  dir={isRtl ? "rtl" : "ltr"}
                >
                  ⚠️ {data.results.disclaimer}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="rounded-full border-2 border-green-700 px-6 py-2.5 font-semibold text-green-700 transition-all hover:bg-green-50"
                >
                  {data.restart}
                </button>
                <Link
                  to="/"
                  className="rounded-full bg-green-700 px-6 py-2.5 font-semibold text-white transition-all hover:bg-green-800"
                >
                  {data.back}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
