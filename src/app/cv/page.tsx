'use client';

export default function CVPage() {
  return (
    <div className="space-y-8">
      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <h1 className="text-2xl font-bold">Curriculum Vitae 📄</h1>
        <p className="text-lg text-muted-foreground">
          My academic and professional experience in computer science, robotics, and engineering.
        </p>
      </section>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <object
          data="/cv.pdf"
          type="application/pdf"
          className="w-full h-[calc(100vh-18rem)] lg:h-[calc(100vh-15rem)]"
        >
          <div className="flex flex-col items-center justify-center p-8">
            <p className="text-lg text-muted-foreground">
              Your browser doesn't support PDF preview.
            </p>
            <a 
              href="/cv.pdf" 
              download
              className="mt-4 inline-flex items-center justify-center px-4 pt-2 pb-0 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Download PDF
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
