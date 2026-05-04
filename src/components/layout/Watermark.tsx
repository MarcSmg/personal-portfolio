import WatermarkLogo from '@/assets/icons/watermark.svg';
import WatermarkLogFull from '@/assets/icons/watermark-full.svg';
import { isLargeScreen } from '@/hooks/isLargeScreen';

export const Watermark = () => {
    const isLarge = isLargeScreen(1024);
    return (
        <div className='fixed top-0 left-0 flex justify-center items-center -z-1 w-full h-full opacity-15'>
            {isLarge ?
                <img src={WatermarkLogFull} alt="Watermark" className='w-[50%]' /> :
                <img src={WatermarkLogo} alt="Watermark" className='w-[50%]' />
            }
        </div>
    )
}
