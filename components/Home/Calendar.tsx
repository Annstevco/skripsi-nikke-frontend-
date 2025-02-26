import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React from "react";
import "@/app/calendar.css";
import Cookies from "js-cookie";

const API_URL = '/api/my-pengumuman/';
const HEADERS = {
    headers: {
        Authorization: "Bearer " + Cookies.get("accessToken"),
    }
};

type CalendarProps = {
    myCalendarData: any;
    openMyPengumuman: (date: string) => void;
};


export default function Calendar({myCalendarData, openMyPengumuman}: CalendarProps) {
    const eventDates = myCalendarData ? myCalendarData.map((event: any) => {
        let date = new Date(event.start.split(' ')[0]);

        return date.toISOString().split('T')[0];
    }) : [];

    const handleDateClick = async (arg: any) => {
        if (eventDates.includes(arg.dateStr)) {
            openMyPengumuman(arg.dateStr)
        }
    };

    return (
        <>
            <div id="myCalendar" className="bg-white m-2 p-2 gap-4 rounded-lg border-2" style={{ borderColor: '#2D517B' }}>
                <FullCalendar
                    timeZone="Asia/Jakarta"
                    height="400px"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    eventTimeFormat={{
                        hour: "numeric",
                        minute: "2-digit",
                        meridiem: true,
                    }}
                    initialView="dayGridMonth"
                    events={myCalendarData}
                    dateClick={handleDateClick}
                    dayCellClassNames={(args) => {
                        let date = args.date.toISOString().split('T')[0];

                        if (eventDates.includes(date)) {
                            return ["bg-green-200"];
                        } else {
                            return [];
                        }
                    }}
                />
            </div>
        </>
    )
}
