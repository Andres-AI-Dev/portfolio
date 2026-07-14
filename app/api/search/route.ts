import { searchPosts } from "@/actions/search";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query")?.trim();

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 400 },
      );
    }

    // Cap query length: the fuzzy matcher's cost grows with query size, so an
    // unbounded query lets a single request pin the CPU.
    const results = await searchPosts(query.slice(0, 100));
    return NextResponse.json(results);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "An error occurred while searching" },
      { status: 500 },
    );
  }
}
