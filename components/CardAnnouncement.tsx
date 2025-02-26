"use client";
import React, { useState } from "react";

import {FaEdit, FaTrash, FaCommentAlt, FaFile} from "react-icons/fa";
import { useRouter } from "next/navigation";

type EditPengumuman = {
  id: number;
  room: { id: number; name: string };
  title: string;
  date: string;
  time: string;
  created_by: string;
  room_id: number;
  content: string;
  penerima: { penerima_id: number; name: string; is_single_user: boolean; }[];
  files:{file:string; original_name:string}[];
  editForm: (id: number) => void;
  is_private: number;
  can_reply: boolean;
  can_edit: boolean;
  can_delete: boolean;
  created_at: string;
  deletePengumuman: (id: number) => void;
  openDetailModal: (id:number) => void;
};

export default function CardAnnouncement({
  id,
  room,
  title,
  date,
  time,
  created_by,
  content,
  penerima,
  files,
    is_private,
  editForm,
  can_reply,
  can_edit,
  can_delete,
  deletePengumuman,
  openDetailModal,
  created_at
}: EditPengumuman) {
  const router = useRouter();

  const dateTimeToIso = (date: string) => {
    const dateTime = new Date(date);
    return dateTime.toISOString().split("T")[0]
        .split("-").reverse().join("-") + " "
        + dateTime.toTimeString().split(" ")[0]
  }

  return (
    <>
      <div className="p-2 bg-white rounded-lg border-4" style={{ borderColor: '#2D517B' }} onClick={() => openDetailModal(id)}>
        <div className="flex flex-col gap-2 p-2 rounded-lg ">
          <div className="flex flex-row items-center gap-2 text-sm justify-between">
            <div>
              <div className="me-2">Pengirim: <strong>{created_by}</strong></div>
              <div className="me-2">Dibuat: <strong>{dateTimeToIso(created_at)}</strong></div>
              <div>Tenggat Waktu: <strong>{dateTimeToIso(date)}</strong></div>
            </div>
            <div className="float-right">
              <span className="bg-orange text-white rounded-2xl p-2 mr-2">{room.name}</span>
              <span className="text-gray-400">{is_private === 0 ? "Publik" : "Private"}</span>
            </div>
          </div>
          {/*if publik dont show the div*/}
            {is_private === 1 && (
                <div>
                  Penerima: {penerima.length > 0 ? penerima.map((penerima) => penerima.name.concat(penerima.is_single_user ? '' : '(Group)')).join(", ") : '-'}
                </div>
            )}

          <h1 className="text-2xl font-bold">{title}</h1>

          <p className="py-2 my-editor" dangerouslySetInnerHTML={{ __html: content }} />

          <div>
            {/* if files exists print count of files */}
            {files.length > 0 && (
              <div className="flex flex-row items-center">
                <FaFile /> <span>{files.length} File Rujukan</span>
              </div>
            )}
          </div>

          <div className="flex flex-row gap-4 text-sm">
            {can_reply && (
              <button
                className="flex flex-row items-center gap-2 px-4 py-1 border rounded-lg hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/home/${id}`)
                }}
              >
                <FaCommentAlt /> Komentar
              </button>
            )}
            {can_edit && (
              <button
                className="flex flex-row items-center gap-2 px-4 py-1 border rounded-lg hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  editForm(id);
                }}
              >
                <FaEdit /> Ubah
              </button>
            )}
            {can_delete && (
              <button
                className="flex flex-row items-center gap-2 px-4 py-1 border rounded-lg hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  deletePengumuman(id);
                }}
              >
                <FaTrash /> Hapus
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
