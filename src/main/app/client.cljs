(ns app.client
  (:require
   [com.fulcrologic.fulcro.application :as app]
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :as dom]
   [app.board :as board :refer [Board ui-board]]))

(defonce app1 (app/fulcro-app))


#_(comp/get-query Board)
#_(comp/get-initial-state Board {:id 0})

(defsc Root [this {:keys [tictactoe] :as props}]
  {:query [{:tictactoe (comp/get-query Board)}]
   :initial-state (fn [params] {:tictactoe (comp/get-initial-state Board {:id :tictactoe})})}

  (println tictactoe)
  (dom/div (ui-board tictactoe)))


(defn ^:export init
  "Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build."
  []
  (app/mount! app1 Root "app")
  (js/console.log "Loaded"))

(defn ^:export refresh
  "During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn"
  []
  ;; re-mounting will cause forced UI refresh, update internals, etc.
  (app/mount! app1 Root "app")
  ;; As of Fulcro 3.3.0, this addition will help with stale queries when using dynamic routing:
  (comp/refresh-dynamic-queries! app1)
  (js/console.log "Hot reload"))