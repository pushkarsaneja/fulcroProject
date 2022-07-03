(ns app.cell
  (:require
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :as dom]))


(defsc Cell [this {:cell/keys [id status] :as props}]
  {:query [:cell/id :cell/status]
   :ident (fn [] [:cell/id (:cell/id props)])
   :initial-state (fn [{:keys [id status]}] {:cell/id id
                                             :cell/status status})}

  (println props)
  (dom/div status))

(def ui-cell (comp/factory Cell))