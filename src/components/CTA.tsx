import { Button } from './ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            まずは無料相談から
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            あなたのビジネスに最適なWebサイトをご提案します。<br />
            お気軽にお問い合わせください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="secondary" className="text-lg">
            <Mail className="mr-2" size={20} />
            無料相談フォーム
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-blue-600">
            <Phone className="mr-2" size={20} />
            電話で相談
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">📧</div>
            <div className="text-sm text-blue-100 mb-1">メールでのお問い合わせ</div>
            <div className="font-semibold">24時間受付</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📞</div>
            <div className="text-sm text-blue-100 mb-1">お電話でのお問い合わせ</div>
            <div className="font-semibold">平日 10:00-18:00</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-sm text-blue-100 mb-1">初回相談</div>
            <div className="font-semibold">完全無料</div>
          </div>
        </div>
      </div>
    </section>
  );
}
