import React from 'react';
import {useRouter} from 'next/navigation';

type UpcomingWidgetProps = {
    events: {
        id: number;
        judul: string;
        waktu: string;
    }[];
};

const UpcomingWidget: React.FC<UpcomingWidgetProps> = ({events}) => {
    const router = useRouter();

    return (
        <div className="p-6 m-2 bg-white rounded-lg border-2" style={{ borderColor: '#2D517B' }}>
            <h2 className="py-2 text-xl text-center ">Agenda Terdekat</h2>
            <div className="divide-y ">
                {events && events.map((event, index) => (
                    <button
                        key={index}
                        onClick={() => router.push('/home/' + event.id)}
                        className="flex flex-col px-2 py-1 ">
                        <span className="font-bold">{event.judul}</span>{" "}
                        <span className="text-sm">{event.waktu}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UpcomingWidget;