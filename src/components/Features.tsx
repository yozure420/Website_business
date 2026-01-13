import { DollarSign, Zap, Users, Shield, Rocket, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: '圧倒的な低価格',
    description: '初心者エンジニアの育成を兼ねることで、従来の半額以下の価格を実現しました。'
  },
  {
    icon: Zap,
    title: 'スピード納品',
    description: '最短1週間でWebサイトを公開。シンプルなサイトなら驚きの速さでお届けします。'
  },
  {
    icon: Users,
    title: '人材育成への貢献',
    description: 'あなたのプロジェクトが若手エンジニアの成長の場になります。社会貢献にも繋がります。'
  },
  {
    icon: Shield,
    title: '品質保証',
    description: '経験豊富なメンターが全案件をレビュー。初心者制作でも安心の品質をお約束します。'
  },
  {
    icon: Rocket,
    title: '公開まで完全代行',
    description: 'ドメイン取得からサーバー設定、公開まですべて対応。専門知識不要です。'
  },
  {
    icon: TrendingUp,
    title: '柔軟な対応',
    description: 'コーポレートサイト、LP、ECサイトなど幅広く対応。ご要望に合わせて制作します。'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            WebCreateが選ばれる理由
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            人材育成という新しいアプローチで、低価格と高品質を両立
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
