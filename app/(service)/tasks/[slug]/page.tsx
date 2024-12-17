type TaskDetailPageProps = {
  slug: string
}

export default function TaskDetailPage({ slug }: TaskDetailPageProps) {
  return (
    <div>
      <p>TaskDetailPage</p>
      <p>{slug}</p>
    </div>
  )
}
