type Row = {
  path: string
  count: number
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const request: Request = ctx.request

  let path = (await request.text()).trim()
  while (path.length > 2 && path.endsWith('/')) path = path.slice(0, -1)
  if (path === '') path = '/'
  if (!/^[0-9a-zA-Z-_/]{1,100}$/.test(path))
    return new Response('Bad Hacker', { status: 400 })

  const db = ctx.env.iancmd_dev_click_counter

  const stmt = db.prepare(
    'UPDATE click_counts SET count = count + 1 WHERE path = ? RETURNING *'
  )
  let result = await stmt.bind(path).run<Row>()

  if (result.results.length === 0) {
    const insertStmt = db.prepare(
      'INSERT INTO click_counts (path, count) VALUES (?, 1) RETURNING *'
    )
    result = await insertStmt.bind(path).run<Row>()
  }

  return new Response(result.results[0].count.toString())
}
