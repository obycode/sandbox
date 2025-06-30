(define-public (foo
    (x uint)
    (y uint)
  )
  (begin
    (try! (contract-call? .sandbox do-something x))
    (contract-call? .sandbox do-something y)
  )
)
