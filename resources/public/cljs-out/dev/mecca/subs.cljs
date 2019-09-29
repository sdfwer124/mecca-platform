(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :scale
 (fn [db _]
   (:scale db)))

(rf/reg-sub
 :playing?
 (fn [db _]
   (:playing? db)))

(rf/reg-sub
 :tempo
 (fn [db _]
   (:tempo db)))

(rf/reg-sub
 :time
 (fn [db _]     ;; db is current app state. 2nd unused param is query vector
   (:time db)))

(rf/reg-sub
 :octave
 (fn [db _]
   (:octave db)))

(rf/reg-sub
 :key
 (fn [db _]
   (:key db)))

(rf/reg-sub
 :current-position
 (fn [db _]
   (:current-position db)))

(rf/reg-sub
 :editor-beat-start
 (fn [db _]
   (:editor-beat-start db)))

(rf/reg-sub
 :time-signature
 (fn [db _]
   (:time-signature db)))

(rf/reg-sub
 :instrument
 (fn [db _]
   (:instrument db)))

(rf/reg-sub
 :array-buffer
 (fn [db _]
   (:array-buffer db)))

(rf/reg-sub
 :focused-note-pos
 (fn [db _]
   (:focused-note-pos db)))

(rf/reg-sub
 :instruments
 (fn [db _]
   (:instruments db)))

(rf/reg-sub
 :mario-x
 (fn [db _]
   (:mario-x db)))

(rf/reg-sub
 :mario-y
 (fn [db _]
   (:mario-y db)))

(rf/reg-sub
 :mario-run
 (fn [db _]
   (:mario-run db)))

(rf/reg-sub
 :mario-jump
 (fn [db _]
   (:mario-jump db)))