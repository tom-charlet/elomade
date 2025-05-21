import dynamic from 'next/dynamic'

const Motion = dynamic(() => import('../../components/Motion'));

export default async function MotionPage() {

    return <div className='h-svh w-full mt-[112px] responsive-container pt-16'>
        <Motion />
    </div>
}

export async function generateMetadata() {

    return {
        title: "motion"
    }
}
