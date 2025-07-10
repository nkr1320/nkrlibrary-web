import { useTranslation } from "react-i18next";

export default function Donate() {
  const { t } = useTranslation();
  return (
    <>
      <a href="#donate-main" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-100 text-blue-900 px-2 py-1 rounded z-50">{t('skipToDonate')}</a>
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 dark:bg-gray-900 p-2 sm:p-4">
        <div
          id="donate-main"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6"
          role="region"
          aria-label={t('donateTitle')}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">{t('donateTitle')}</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base">
            {t('donateDesc')}
          </p>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 sm:p-4 flex flex-col items-center" role="region" aria-label={t('upiQr')}>
              <h3 className="font-semibold mb-2">{t('upiQr')}</h3>
              {/* Replace src with your real QR code image */}
              <img src="/placeholder.svg" alt="UPI QR Code" className="w-24 h-24 sm:w-32 sm:h-32 mb-2" loading="lazy" />
              <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 mb-1">{t('scanToDonate')}</div>
              <div className="text-xs text-gray-500">{t('upiId')}: <span className="font-mono">your-upi@bank</span></div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 sm:p-4 flex flex-col items-center" role="region" aria-label="PayPal">
              <h3 className="font-semibold mb-2">PayPal</h3>
              <a
                href="https://www.paypal.com/donate?hosted_button_id=YOUR_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded text-xs sm:text-sm"
                aria-label={t('donateWithPaypal')}
              >
                {t('donateWithPaypal')}
              </a>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 sm:p-4 flex flex-col items-center" role="region" aria-label={t('bankTransfer')}>
              <h3 className="font-semibold mb-2">{t('bankTransfer')}</h3>
              <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 mb-1">{t('contactForBank')}</div>
              <a href="mailto:contact@nkrlibrary.com" className="text-blue-500 hover:underline text-xs sm:text-sm" aria-label={t('contactForBank')}>contact@nkrlibrary.com</a>
            </div>
          </div>
          <div className="mt-6 text-xs sm:text-sm text-gray-400 text-center" role="contentinfo" aria-label={t('donateTransparency')}>
            {t('donateTransparency')} <br />
            <span className="italic">{t('donateThanks')}</span>
          </div>
        </div>
      </div>
    </>
  );
} 