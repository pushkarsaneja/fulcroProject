(ns app.board
  (:require
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :as dom]
   [app.row :as row :refer [Row ui-row]]))

#_(comp/get-query Row)
#_(comp/get-initial-state Row {:id 0})
(defsc Board [this {:board/keys [id rows] :as props}]

  {:query [:board/id {:board/rows (comp/get-query Row)}]
   :ident (fn [_] [:board/id (:board/id props)])
   :initital-state (fn [{:keys [id]}]
                     {:board/id id
                      :board/rows [(comp/get-initial-state Row {:id 0})
                                   (comp/get-initial-state Row {:id 1})
                                   (comp/get-initial-state Row {:id 2})]})}

  (println props)

  (dom/div (map ui-row rows)))

(def ui-board (comp/factory Board {:keyfn :board/id}))