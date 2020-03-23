import face_recognition as fr
import cv2
import numpy as np
import requests as req
import sys, os
import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

#firestore
cred = credentials.Certificate('test-123-256509-4de57d8199de.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
doc_ref = db.collection(u'users').document(u'data')
#cv2 and fr
video_capture = cv2.VideoCapture(0)

hieu1_image = fr.load_image_file("./images/hieu1.jpg")
hieu1_face_encoding = fr.face_encodings(hieu1_image)[0]

known_face_encodings = [
    hieu1_face_encoding
]
known_face_names = [
    "Trung Hieu"
]

face_locations = []
face_encodings = []
face_names = []
process_this_frame = True
result = ""
while True:
    ret, frame = video_capture.read()

    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

    rgb_small_frame = small_frame[:, :, ::-1]

    if process_this_frame:
        face_locations = fr.face_locations(rgb_small_frame)
        face_encodings = fr.face_encodings(rgb_small_frame, face_locations)

        face_names = []
        for face_encoding in face_encodings:
            matches = fr.compare_faces(known_face_encodings, face_encoding)
            name = "Unknown"

            face_distances = fr.face_distance(known_face_encodings, face_encoding)
            best_match_index = np.argmin(face_distances)
            if matches[best_match_index]:
                name = known_face_names[best_match_index]
                result = name
                doc_ref.set({
                    u'object':result
                })
            face_names.append(name)

    process_this_frame = not process_this_frame


    # Display the results
    for (top, right, bottom, left), name in zip(face_locations, face_names):
        top *= 4
        right *= 5
        bottom *= 4
        left *= 4

        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

        cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

    # Display the resulting image
    cv2.imshow('Video',frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
#End part
video_capture.release()
cv2.destroyAllWindows()
