import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm mb-6">
              初心者エンジニアを育てながら、格安で制作
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
              <span className="block">Webサイト制作を</span>
              <span className="block text-blue-600">圧倒的な低価格で</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              人材育成という社会貢献をしながら、あなたのビジネスに必要なWebサイトを格安で制作・公開まで代行します。初心者エンジニアの成長の場を提供し、高品質なサイトをお届けします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                無料で相談する
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                料金を見る
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-3xl text-blue-600">¥29,800~</div>
                <div className="text-sm text-gray-600">最安プラン</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl text-blue-600">1週間~</div>
                <div className="text-sm text-gray-600">最短納期</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1732210038512-bf24e8d750e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGRldmVsb3BlcnMlMjBjb2Rpbmd8ZW58MXx8fHwxNzY4MjgyMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="開発中のエンジニア"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold">500+</div>
                  <div className="text-sm text-gray-600">制作実績</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
