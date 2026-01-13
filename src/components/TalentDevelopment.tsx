import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Award, Target, Heart } from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    value: '200+',
    label: '育成したエンジニア'
  },
  {
    icon: Award,
    value: '85%',
    label: '就職成功率'
  },
  {
    icon: Target,
    value: '500+',
    label: '実案件での経験'
  },
  {
    icon: Heart,
    value: '95%',
    label: '顧客満足度'
  }
];

export function TalentDevelopment() {
  return (
    <section id="talent" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm mb-6">
              Social Impact
            </div>
            <h2 className="text-3xl lg:text-4xl mb-6">
              あなたのプロジェクトが<br />
              <span className="text-blue-600">未来のエンジニアを育てる</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              WebCreateでは、初心者や無名のエンジニアに実案件での経験を積む機会を提供しています。経験豊富なメンターの指導のもと、実際のビジネスニーズに応えながらスキルを磨きます。
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">実案件での成長機会</h4>
                  <p className="text-gray-600">学習だけでは得られない実践経験を通じて、プロのスキルを習得します。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">メンターによる徹底指導</h4>
                  <p className="text-gray-600">全ての制作物は経験豊富なメンターがレビュー。品質を保証します。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">キャリア支援</h4>
                  <p className="text-gray-600">実績を積んだエンジニアの就職・フリーランス独立をサポートします。</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div className="text-2xl text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjgyMzkwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="チームでの協力"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 italic">
                「実案件を経験することで、自信がつきました。メンターのサポートも手厚く、安心してスキルアップできています。」
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">TK</span>
                </div>
                <div>
                  <div className="font-semibold">田中 健太</div>
                  <div className="text-sm text-gray-600">研修中エンジニア</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
