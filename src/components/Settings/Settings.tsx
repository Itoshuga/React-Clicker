import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Trash2, Gift, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SettingsProps {
  onClose: () => void;
  onReset: () => void;
  onRedeemCode: (code: string) => void;
  isClosing: boolean;
  onCloseStart: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ 
  onClose, 
  onReset,
  onRedeemCode,
  isClosing,
  onCloseStart
}) => {
  const { t, i18n } = useTranslation();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleReset = () => {
    if (window.confirm(t('settings.reset.confirm'))) {
      onReset();
      onCloseStart();
    }
  };

  const handleRedeemCode = () => {
    setError('');
    setSuccess('');
    
    if (!code.trim()) {
      setError(t('settings.promoCode.error'));
      return;
    }

    onRedeemCode(code.trim().toUpperCase());
    setCode('');
    setSuccess(t('settings.promoCode.success'));
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Modal 
      title={t('settings.title')}
      onClose={onClose}
      isClosing={isClosing}
      onCloseStart={onCloseStart}
    >
      <div className="space-y-6">
        {/* Section Langue */}
        <div className="bg-blue-50 neo-border rounded-lg p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Languages className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-blue-600 uppercase">{t('settings.language.title')}</h3>
                <p className="text-sm text-blue-600">{t('settings.language.description')}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => changeLanguage('fr')}
                className={`flex-1 px-4 py-2 neo-border-sm rounded-lg transition-colors uppercase font-bold ${
                  i18n.language === 'fr' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white hover:bg-blue-100'
                }`}
              >
                Français
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`flex-1 px-4 py-2 neo-border-sm rounded-lg transition-colors uppercase font-bold ${
                  i18n.language === 'en' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white hover:bg-blue-100'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Section Code Promo */}
        <div className="bg-yellow-50 neo-border rounded-lg p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Gift className="text-yellow-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-yellow-600 uppercase">{t('settings.promoCode.title')}</h3>
                <p className="text-sm text-yellow-600">{t('settings.promoCode.description')}</p>
              </div>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={t('settings.promoCode.placeholder')}
                className="w-full px-4 py-2 neo-border-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <button
                onClick={handleRedeemCode}
                className="w-full px-4 py-2 bg-yellow-400 text-black neo-border-sm rounded-lg hover:bg-yellow-500 transition-colors uppercase font-bold"
              >
                {t('settings.promoCode.submit')}
              </button>
            </div>
          </div>
        </div>

        {/* Section Reset */}
        <div className="bg-red-50 neo-border rounded-lg p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <Trash2 className="text-red-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-red-600 uppercase">{t('settings.reset.title')}</h3>
                <p className="text-sm text-red-600">{t('settings.reset.description')}</p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="w-full px-4 py-2 bg-red-600 text-white neo-border-sm rounded-lg hover:bg-red-700 transition-colors uppercase font-bold"
            >
              {t('settings.reset.button')}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};