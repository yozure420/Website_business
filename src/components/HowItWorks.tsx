import { MessageSquare, FileText, Code, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'ヒアリング',
    description: 'お客様のご要望を丁寧にヒアリング。どんな些細な質問でもお気軽にご相談ください。',
    duration: '1日'
  },
  {
    icon: FileText,
    title: '企画・設計',
    description: 'サイト構成やデザインを提案。修正は何度でも対応し、ご納得いただけるまで調整します。',
    duration: '2-3日'
  },
  {
    icon: Code,
    title: '制作・開発',
    description: '初心者エンジニアが実際に制作。メンターが常にレビューし、品質を担保します。',
    duration: '3-5日'
  },
  {
    icon: CheckCircle,
    title: '公開・納品',
    description: 'サーバー設定から公開まで完全代行。アフターフォローも万全です。',
    duration: '1日'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            制作の流れ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            シンプルで分かりやすいプロセスで、スムーズにサイトを公開
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <span className="text-sm text-blue-600 font-semibold">{step.duration}</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 -translate-y-1/2 z-10"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            <span className="text-blue-600 font-semibold">最短1週間</span>でWebサイトが完成！
          </p>
        </div>
      </div>
    </section>
  );
}
