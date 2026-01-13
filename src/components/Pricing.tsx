import { Check } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    name: 'ライトプラン',
    price: '29,800',
    description: '個人事業主や小規模ビジネスに最適',
    features: [
      '5ページまで',
      'レスポンシブデザイン',
      'お問い合わせフォーム',
      'SEO基本設定',
      '1ヶ月間のサポート',
      'ドメイン・サーバー設定代行'
    ],
    popular: false
  },
  {
    name: 'スタンダードプラン',
    price: '59,800',
    description: '中小企業のコーポレートサイトに',
    features: [
      '10ページまで',
      'レスポンシブデザイン',
      'お問い合わせフォーム',
      'SEO最適化',
      'ブログ機能',
      'Google Analytics設定',
      '3ヶ月間のサポート',
      'ドメイン・サーバー設定代行'
    ],
    popular: true
  },
  {
    name: 'プレミアムプラン',
    price: '99,800',
    description: 'ECサイトや本格的なWebサイトに',
    features: [
      '20ページまで',
      'カスタムデザイン',
      'お問い合わせフォーム',
      'SEO最適化',
      'ブログ機能',
      'Google Analytics設定',
      'ECカート機能（オプション）',
      '会員機能（オプション）',
      '6ヶ月間のサポート',
      'ドメイン・サーバー設定代行'
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            シンプルで分かりやすい料金プラン
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            すべてのプランに品質保証とメンターレビューが含まれます
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular
                  ? 'border-blue-600 shadow-xl scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                  人気No.1
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl">¥{plan.price}</span>
                  <span className="text-gray-600">~</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Check className="text-blue-600 flex-shrink-0" size={20} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                プランを選択
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            ※ 料金はすべて税込価格です。追加ページは1ページあたり¥5,000〜で対応可能です。
          </p>
        </div>
      </div>
    </section>
  );
}
