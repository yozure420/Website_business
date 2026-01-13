import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="text-2xl font-bold text-white mb-4">WebCreate</div>
            <p className="text-sm mb-4">
              人材育成を通じて、格安でWebサイトを制作・公開するサービスです。
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  サービス内容
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  料金プラン
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  制作の流れ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  制作実績
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">人材育成</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#talent" className="hover:text-white transition-colors">
                  育成プログラム
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  エンジニア募集
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  メンター制度
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  卒業生の声
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">企業情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2026 WebCreate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
