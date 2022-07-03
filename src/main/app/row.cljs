(ns app.row
  (:require
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :as dom]
   [app.cell :as cell :refer [Cell ui-cell]]))

#_(comp/get-query Cell)
#_(comp/get-initial-state Cell {:id 0 :status "empty"})

(defsc Row [this {:row/keys [id cells] :as props}]

  {:query [:row/id {:row/cells (comp/get-query Cell)}]
   :ident (fn [_] [:row/id (:row/id props)])
   :initial-state (fn [{:keys [id cells]}] {:row/id id

                                            :row/cells (cond
                                                         (= id 0) [(comp/get-initial-state Cell {:id 0 :status "empty"})
                                                                   (comp/get-initial-state Cell {:id 1 :status "empty"})
                                                                   (comp/get-initial-state Cell {:id 2 :status "empty"})]
                                                         (= id 1) [(comp/get-initial-state Cell {:id 3 :status "empty"})
                                                                   (comp/get-initial-state Cell {:id 4 :status "empty"})
                                                                   (comp/get-initial-state Cell {:id 5 :status "empty"})]
                                                         (= id 2) [(comp/get-initial-state Cell {:id 6 :status "empty"})
                                                                   (comp/get-initial-state Cell {:id 7 :status "empty"})
                                                                   (comp/get-initial-state Cell {:id 8 :status "empty"})])})}

  (println "Row " props)
  (dom/div (map ui-cell cells)))

(def ui-row (comp/factory Row {:keyfn :row/id}))